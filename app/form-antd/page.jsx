'use client';
import { Button, Form, Input, Select } from 'antd';
import React from 'react'
import SelectAge from '../components/SelectAge';

const FormAntd = () => {
    const [form] = Form.useForm();
    return (
        <div>
            <Form form={form} layout='vertical' onFinish={(values) => console.log(values)}>
                <Form.Item name="name" label="Tên">
                    <Input />
                </Form.Item>
                 <Form.Item name="age" label="Age">
                    <SelectAge />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type='primary'>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
 
export default FormAntd;