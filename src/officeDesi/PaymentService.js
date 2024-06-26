import { Card, Checkbox, ConfigProvider, Divider, Typography } from "antd";
import React from "react";
import { FaUbuntu } from "react-icons/fa";
import { useState } from "react";
import { RiWindowsFill } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { indexes } from "d3";
const CheckboxGroup = Checkbox.Group;
const CardDetails = [
  {
    icon: <FaUbuntu className="text-red-600 w-[20px] h-[20px]" />,
    name: "mnmv-r170-acumen-algo-test-srv-01",
    check: (
      <Checkbox className="text-sm font-normal text-gray-900">Select</Checkbox>
    ),
  },
  {
    icon: <RiWindowsFill className="text-blue-600  w-[20px] h-[20px]" />,
    name: "mnmv-r170-acumen-algo-test-srv-01",
    check: (
      <Checkbox className="text-sm font-normal text-gray-900">Select</Checkbox>
    ),
  },
  {
    icon: <FaUbuntu className="text-red-600  w-[20px] h-[20px]" />,
    name: "mnmv-r170-acumen-algo-test-srv-01",
    check: (
      <Checkbox className="text-sm font-normal text-gray-900">Select</Checkbox>
    ),
  },
  {
    icon: <RiWindowsFill className="text-blue-600  w-[20px] h-[20px]" />,
    name: "mnmv-r170-acumen-algo-test-srv-01",
    check: (
      <Checkbox className="text-sm font-normal text-gray-900">Select</Checkbox>
    ),
  },
  {
    icon: <FaUbuntu className="text-red-600  w-[20px] h-[20px]" />,
    name: "mnmv-r170-acumen-algo-test-srv-01",
    check: (
      <Checkbox className="text-sm font-normal text-gray-900">Select</Checkbox>
    ),
  },
];
const PaymentService = () => {
  const plainOptions = [
    "Service1",
    "Service2",
    "Service3",
    "Service4",
    "Service5",
    "Service6",
    "Service7",
    "Service8",
    "Service9",
    "Service10",
  ];
  const data = [
    {
      icon: <FiCheckSquare size={20} className="text-[#6E299F]" />,
      name: "Dashboard Monitoring",
      title: "Free",
    },
    {
      icon: <FiCheckSquare size={20} className="text-[#6E299F]" />,
      name: "INFRA Monitoring",
      title: "Free",
    },
    {
      icon: <FiCheckSquare size={20} className="text-[#6E299F]" />,
      name: "Database Monitoring",
      title: "Rs.2k/mo",
    },
  ];
  const datasss = [
    {
      name: "Monthly",
      amt: "Rs.3K/month",
    },
    {
      name: "Yearly",
      amt: "Rs.30K/month",
    },
    {
      name: "3 Year",
      amt: "Rs.90K/month",
    },
  ];
  const [collapse, setCollapse] = useState(false);
  const [state, setState] = useState({});
  const [checklist, setCheckList] = useState();
  const [focus, setFocus] = useState(false);
  const [Index, setIndex] = useState();
  const checkAll = plainOptions?.length === checklist?.length;
  const indeterminate =
    checklist?.length > 0 && checklist?.length < plainOptions?.length;
  function handleSelect(e) {
    if (e.target.checked) {
      setState(() => ({
        Log_montoring: {
          value: "view",
        },
      }));
    } else {
      setState(() => ({}));
    }
  }
  function handleSelectAll(e) {
    if (e.target.checked) {
      setCheckList(plainOptions);
      setState((prev) => ({
        ...prev,
        database: {
          value: plainOptions,
        },
      }));
    } else {
      setCheckList([]);
      setState((prev) => ({
        ...prev,
        database: {},
      }));
    }
  }
  const onChange = (list) => {
    setCheckList(list);
    setState((prev) => ({
      ...prev,
      database: {
        value: list,
      },
    }));
  };
  function handleFocus(indi, itemq) {
    if (indi === datasss.indexOf(itemq)) {
      setIndex(indi);
      setFocus(true);
    } else {
      setFocus(false);
    }
  }
  return (
    <div className="w-full  flex h-[630px] items-center">
      <div className=" w-[20%] h-full"></div>
      <div className="w-[50%] h-[70%] p-3 flex flex-col gap-2 rounded   bg-white">
        <Typography className="font-semibold text-base text-gray-800">
          {" "}
          Select service
        </Typography>
        <Card
          bodyStyle={{ padding: "6px", width: "100%" }}
          className=" flex justify-between border-l-[#6E299F] shadow-sm"
        >
          <div className="flex justify-between ">
            <div className="flex gap-3">
              <MdKeyboardArrowRight className="flex items-center justify-center mt-1" />
              <Typography className="font-normal text-sm">
                Log Monitoring
              </Typography>
            </div>
            <div className="flex">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "rgba(110, 41, 159, 1)",
                    colorPrimaryBorder: " rgba(110, 41, 159, 1)",
                  },
                }}
              >
                <Checkbox onChange={(e) => handleSelect(e)}>
                  Select All
                </Checkbox>
              </ConfigProvider>
            </div>
          </div>
        </Card>
        <Card
          bodyStyle={{ padding: "6px", width: "100%" }}
          className="border-solid border-2 flex justify-between shadow-sm  border-l-[#6E299F]"
        >
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex gap-3">
                {collapse ? (
                  <MdKeyboardArrowDown
                    onClick={() => setCollapse(!collapse)}
                    className="flex items-center justify-center mt-1"
                  />
                ) : (
                  <MdKeyboardArrowRight
                    onClick={() => setCollapse(!collapse)}
                    className="flex items-center justify-center mt-1"
                  />
                )}
                <Typography className="font-normal text-sm">
                  Database
                </Typography>
              </div>
              <div className="flex">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "rgba(110, 41, 159, 1)",
                      colorPrimaryBorder: " rgba(110, 41, 159, 1)",
                    },
                  }}
                >
                  <Checkbox
                    checked={checkAll}
                    indeterminate={indeterminate}
                    onChange={(e) => handleSelectAll(e)}
                  >
                    Select All
                  </Checkbox>
                </ConfigProvider>
              </div>
            </div>
            {collapse ? (
              <div className="flex flex-col">
                <Divider className="m-[10px]" />
                <div className="flex">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#22C55E",
                        colorPrimaryBorder: "#22C55E",
                      },
                    }}
                  >
                    <CheckboxGroup
                      options={plainOptions}
                      value={checklist}
                      onChange={onChange}
                    />
                  </ConfigProvider>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Card>
        <Typography className="font-semibold text-base text-gray-800">
          Select Instance
        </Typography>
        <Card
          bodyStyle={{ padding: "6px", width: "100%" }}
          className="flex flex-col border-2 border-solid  shadow-sm border-l-[#6E299F]"
        >
          {CardDetails.map((item) => {
            return (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="">{item.icon}</div>
                    <div className="font-normal text-sm text-gray-800">
                      {item.name}
                    </div>
                  </div>
                  <div className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: "rgba(110, 41, 159, 1)",
                          colorPrimaryBorder: " rgba(110, 41, 159, 1)",
                        },
                      }}
                    >
                      <div className="">{item.check}</div>
                    </ConfigProvider>
                  </div>
                </div>

                <Divider className="m-[10px]" />
              </div>
            );
          })}
        </Card>
      </div>
      <Divider
        type="vertical"
        className="border-1 border-solid border-gray-100 h-[70%]"
      />
      <div className="w-[30%]  flex flex-col gap-3 ">
        <Card
          className="border-solid border-2  flex flex-col "
          bodyStyle={{ padding: "12px", width: "100%" }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Typography className="text-base font-bold text-gray-800">
                Billing cycle
              </Typography>
              <Typography className="text-[#6E299F] text-base font-normal">
                Customize plan
              </Typography>
            </div>
            <div className="border-solid border-2 border-[#171A1F] border-opacity-[7%] h-[104px] p-3 rounded flex gap-1">
              {datasss.map((item, index) => (
                <div
                  className={`flex flex-col gap-2 items-center relative justify-center w-[120px] h-[80px] border-solid border-2 ${
                    focus && Index === index ? "border-[#6E299F]" : ""
                  }   rounded `}
                  onClick={() => handleFocus(index, item)}
                >
                  {focus && Index === index ? (
                    <BsCheckCircle className="absolute text-[#6E299F] top-1 right-1 w-[16px] h-[16px]" />
                  ) : (
                    ""
                  )}

                  <Typography className="font-bold text-sm text-gray-800">
                    {item.name}
                  </Typography>
                  <Typography className="font-normal text-[#424856] text-sm">
                    {item.amt}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="border-solid border-2 rounded-full flex bg-[#E1FFDF] justify-between px-3 py-1">
              <Typography className="text-sm font-bold text-gray-800">
                Demo plan
              </Typography>
              <Typography className="text-sm font-normal text-gray-500">
                Free
              </Typography>
            </div>
            <div className="flex flex-col">
              {data.map((item) => (
                <div className="flex justify-between p-2">
                  <div className="flex gap-1 justify-center items-center">
                    <span>{item.icon}</span>
                    <Typography className="text-gray-600 text-sm font-semibold">
                      {item.name}
                    </Typography>
                  </div>
                  <div className="">
                    <Typography className="text-gray-500 text-sm font-normal">
                      {item.title}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Typography className="text-base font-bold text-gray-800">
                Your savings
              </Typography>
              <Typography className="text-gray-500 text-sm font-normal">
                Rs.2499.00
              </Typography>
            </div>
            <div className="w-full flex justify-end items-end">
              <Typography className="text-[#424856] text-sm font-normal">
                Renews automatically
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentService;
