import React, { useState } from 'react';
import { Typography, Button, Input, Form } from 'antd';

const { Text } = Typography;

const FirstPart = ({ totalCost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBudget, setEditedBudget] = useState(2000);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };
  // flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 min-[300px]:flex flex-col space-y-3 max-[600px]:flex
  return (
    <div className=" md:flex-row md:space-y-0 md:space-x-2 min-[300px]:flex flex-col space-y-3 max-[600px]:flex ">
      <div className="flex space-x-20 border-solid border-2 bg-gray-200 w-80 px-3 py-2">
        {isEditing ? (
          <Form layout="inline">
            <Form.Item label="Budget:">
              <Input
                type="number"
                value={editedBudget}
                onChange={(e) => setEditedBudget(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button className="bg-blue-600 text-white" onClick={handleSaveEdit}>
                Save
              </Button>
              <Button type="default" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <>
            <Text className="text-md font-bold my-3">Budget: Rs.{editedBudget}</Text>
            <Button className="my-2 bg-blue-500 text-white border-0" onClick={handleEditClick}>
              Edit
            </Button>
          </>
        )}
      </div>
      <div className="border-solid bg-green-100  border-2 w-80 px-3 py-2">
        <Text className="text-md font-bold  ">Remaining: Rs. {editedBudget - totalCost}</Text>
      </div>
      <div className="border-solid  bg-blue-200 border-2 w-80 p-3 py-2">
        <Text className="text-md font-bold mt-2">Spent so far: Rs. {totalCost}</Text>
      </div>
    </div>
  );
};

export default FirstPart;
