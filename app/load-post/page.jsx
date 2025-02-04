'use client';
import { Button, Form, Input, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import TableLoading from '../components/TableLoading';
import { useQuery } from '@tanstack/react-query';
import { testApi } from '../api/api';
import { debounce, get } from 'lodash';
import { useLoadmore } from '../hooks/useLoadmore';
const SIZE = 20
const LoadmorePost = () => {
    const [params, setParams] = useState();
    const {
        dataSource,
        isLoading,
        totalElement,
        page,
        onLoadmore,
        onChangeParams
    } = useLoadmore(
        params,
        'getMovieData',
        testApi.getMovieData,
        data => get(data, ['data', 'info', 'count']),
        data => get(data, ['data', 'results'])
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
            dataIndex: 'name',
            key: 'name'
        },
    ]
    
    const onSubmitForm = (values) => {
        onChangeParams();
        setParams(prev => ({...prev, ...values}))
    }
    
    return (
        <div className='p-4'>
            <Form onFinish={onSubmitForm}>
                <Form.Item label="Gender" name="gender">
                    <Select allowClear>
                        <Select.Option value="male">Nam</Select.Option>
                        <Select.Option value="female">Nữ</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Select allowClear>
                        <Select.Option value="alive">Alive</Select.Option>
                        <Select.Option value="dead">Dead</Select.Option>
                        <Select.Option value="unknown">Unknown</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Filter</Button>
                </Form.Item>
            </Form>
            {isLoading && dataSource.length === 0
                ? <TableLoading columns={columns} />
                : <Table dataSource={dataSource} columns={columns} size='small' pagination={false} />
            }
            
            <div className='my-4 flex items-center justify-center'>
                
                <Button type='link' onClick={onLoadmore} loading={isLoading}>
                    Load more
                </Button>
                <div>Hiển thị ({page * SIZE}/{totalElement})</div>
            </div>
            
        </div>
    );
}
 
export default LoadmorePost;