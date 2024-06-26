import { Button, Drawer, Form, Input, Typography } from "antd";
import React, { useState } from "react";

const Pract = () => {
  const { Paragraph } = Typography;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={showDrawer}>Login</Button>
      <Drawer
        headerStyle={{ borderBottom: "none", marginLeft: "450px" }}
        placement="right"
        open={open}
        onClose={onClose}
        contentWrapperStyle={{ width: "515px", height: "1281px" }}
        className="overflow-auto"
      >
        <div className="w-[436px] flex flex-col gap-10 mr-[9px] float-right h-[998px] border-blue-400 border-2">
          <div className=" flex flex-col w-full h-[198px] gap-2">
            <Paragraph className="h-[30px] font-semibold text-xl text-zinc-800 !mb-0">
              Personal Information
            </Paragraph>
            <div className="border-solid border-2 w-full h-[148px] gap-4">
              <Form layout="vertical">
                <div className="border-solid border-2">
                  <div className="border-solid flex gap-2 h-[66px] border-2">
                    <Form.Item
                      label={
                        <p className="w-full h-[21px] text-sm font-medium text-gray-900">
                          First Name
                        </p>
                      }
                      className="h-[66px]"
                    >
                      <Input
                        placeholder="Shewta"
                        className="w-[208px] h-[37px] text-sm font-normal"
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <p className="w-full h-[21px] text-sm font-medium text-gray-900">
                          Last Name
                        </p>
                      }
                      className="h-[66px]"
                    >
                      <Input
                        placeholder="Kumari"
                        className="w-[208px] h-[37px]  text-sm font-normal text-gray-900"
                      />
                    </Form.Item>
                  </div>
                  <div className="">
                  <Form.Item
                      label={
                        <p className="w-full h-[21px] text-sm font-medium text-gray-900">
                          First Name
                        </p>
                      }
                      className="h-[66px]"
                    >
                      <Input
                        placeholder="Shewta"
                        className="w-full h-[37px] text-sm font-normal"
                      />
                    </Form.Item>
                   
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="border-solid border-2 w-full h-[690px]"></div>
        </div>
      </Drawer>
    </div>
  );
};

export default Pract;
