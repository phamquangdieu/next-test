'use client';

import { Button, Input, Table } from 'antd';
import { debounce, get } from 'lodash';
import { useState } from 'react';
import { testApi } from '../api/api';
import TableLoading from '../components/TableLoading';
import { useLoadmore } from '../hooks/useLoadmore';

const LoadmoreHook = () => {
    
    const [params, setParams] = useState({ per_page: 100, q: 'dieu'});
    const {
        dataSource,
        isLoading,
        totalElement,
        page,
        onLoadmore,
        onChangeParams
    } = useLoadmore(
        params,
        'getUsers',
        testApi.searchUser,
        data => get(data, ['data', 'total_count']),
        data => get(data, ['data', 'items'])
    );

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'key',
            key: 'key',
            render: (value, record, index) => index + 1
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'name',
            dataIndex: 'login',
            key: 'name'
        },
    ];
    
    const onChangeQuery = debounce(e => {
        onChangeParams();
        setParams(prev => ({ ...prev, q: e.target.value}))
    }, 500);

    return (
        <div className='p-4'>
            <Input onChange={onChangeQuery} />
            {isLoading && dataSource.length === 0
                ? <TableLoading columns={columns} />
                : <Table dataSource={dataSource} columns={columns} size='small' pagination={false} />
            }
            
            <div className='my-4 flex items-center justify-center'>
                
                <Button type='link' onClick={onLoadmore} loading={isLoading}>
                    Load more
                </Button>
                <div>Hiển thị ({page * params.per_page}/{totalElement})</div>
            </div>
            
        </div>
    );
}
 
export default LoadmoreHook;