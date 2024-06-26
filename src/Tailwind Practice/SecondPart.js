import React, { useState } from "react";
import { Typography, Button, Badge, Space, Input } from "antd";

const { Text } = Typography;

const SecondPart = ({ expenses, setExpenses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (index) => {
    const updatedExpenses = expenses.filter((item, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="container mx-w-70">
      <Text className="text-2xl font-bold my-3">Expenses</Text>
      <Input
        placeholder="Type to search..."
        className="font-bold my-2 w-50"
        onChange={handleSearchChange}
        value={searchTerm}
      />
      <div className=" grid grid-cols-1 gap-2">
        {filteredExpenses.map((expense, i) => (
          <div key={i} className="flex justify-between items-center bg-gray-100 p-3">
            <Text className="text-lg">{expense.item}</Text>
            <Space>
              <Badge className="bg-blue-500 px-2 py-0 rounded-md">{expense.cost}</Badge>
              <Button
                className="w-3 bg-black text-white rounded-full text-md"
                onClick={() => handleClick(i)}
              >
                x
              </Button>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPart;
