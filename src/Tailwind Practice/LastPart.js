import React from "react";
import { Typography } from "antd";
import { Button, Form, Input, message, Space } from "antd";

const { Text } = Typography;

const LastPart = ({ expenses, setExpenses }) => {
  const [form] = Form.useForm();

  function handleChange(ide, val) {
  
    form.setFieldsValue({ [ide]: val });
  }

  function handleSave() {
    const newItem = form.getFieldsValue();
    setExpenses([...expenses, newItem]);
    }


  return (
    <div>
      <Text className="text-2xl font-bold my-2"> Add Expense</Text>
      <Form form={form} className="flex flex-row my-3">
        <Form.Item label="Name" className="text-4xl font-black" name="item">
          <Input className="w-90" onChange={(e) => handleChange("item", e.target.value)} />
        </Form.Item>
        <Form.Item label="Cost" className="text-4xl font-black mx-3" name="cost">
          <Input className="w-90" onChange={(e) => handleChange("cost", e.target.value)} />
        </Form.Item>
      </Form>
      <Button className="my-2 bg-blue-500 text-white border-0" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default LastPart;
