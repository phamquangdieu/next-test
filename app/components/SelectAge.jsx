import { Select } from 'antd';
import React from 'react'
// 1. Cho Form Item vô đây
// 2. Thêm onChange (prop của Select)
const SelectAge = ({ onChange }) => {
    return (
        <Select onChange={onChange}>
            <Select.Option value={13}>13</Select.Option>
            <Select.Option value={18}>18</Select.Option>
            <Select.Option value={25}>25</Select.Option>
        </Select>
    );
}
 
export default SelectAge;