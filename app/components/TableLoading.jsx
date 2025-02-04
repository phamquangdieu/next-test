import { Skeleton, Table } from 'antd';
import React from 'react'

const TableLoading = ({ columns, ...restProps }) => {
    console.log([...Array(10)].map((_, index) => ({ key: index })));
    
    return (
        <Table
            dataSource={[...Array(10)].map((_, index) => ({ key: index }))}
            columns={columns.map(col => ({
                ...col,
                render: () => <Skeleton key={col.dataIndex} active  paragraph={false} />
            }))}
            pagination={false}
            {...restProps}
        />
    );
}
 
export default TableLoading;