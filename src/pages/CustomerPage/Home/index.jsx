import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../../components/Hindex";
import Header from "../../../components/CoustomerHomeComponent/Header";
import { ReactTable } from "../../../components/CoustomerHomeComponent/ReactTable";
import Sidebar4 from "../../../components/CoustomerHomeComponent/Sidebar4";
import { createColumnHelper } from "@tanstack/react-table";
import ComponentSidebar from "components/CoustomerComponent/SlidebarComp/ComponentSidebar";
import { Text2 } from "components/Cindex";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const tableData = [
  {
    orderidone: "#01236556",
    date: "21 June 2020, 12:42 AM",
    customerone: "Kathryn Murphy",
    location: "35 Station Road London",
    amount: "$83.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236557",
    date: "21 June 2020, 12:42 AM",
    customerone: "Kathryn Murphy",
    location: "35 Station Road London",
    amount: "$83.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236558",
    date: "24 June 2020, 12:42 AM",
    customerone: "Kristin Watson",
    location: "35 Station Road London",
    amount: "$82.46\t",
    satusorder: "On Delivery",
  },
  {
    orderidone: "#01236559",
    date: "21 June 2020, 12:42 AM",
    customerone: "Darrell Steward",
    location: "35 Station Road London",
    amount: "$87.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236560",
    date: "24 June 2020, 12:42 AM",
    customerone: "Jenny Wilson",
    location: "35 Station Road London",
    amount: "$82.46",
    satusorder: "On Delivery",
  },
  {
    orderidone: "#01236561",
    date: "24 June 2020, 12:42 AM",
    customerone: "Courtney Henry",
    location: "35 Station Road London",
    amount: "$90.46",
    satusorder: "On Delivery",
  },
  {
    orderidone: "#01236562",
    date: "21 June 2020, 12:42 AM",
    customerone: "Annette Black",
    location: "35 Station Road London",
    amount: "$12.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236563",
    date: "21 June 2020, 12:42 AM",
    customerone: "Eleanor Pena",
    location: "35 Station Road London",
    amount: "$92.46",
    satusorder: "On Delivery",
  },
  {
    orderidone: "#01236564",
    date: "23 June 2020, 12:42 AM",
    customerone: "Wade Warren",
    location: "35 Station Road London",
    amount: "$32.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236565",
    date: "218 June 2020, 12:42 AM",
    customerone: "Brooklyn Simmons",
    location: "35 Station Road London",
    amount: "$82.46",
    satusorder: "\tNew Order",
  },
  {
    orderidone: "#01236567",
    date: "218 June 2020, 12:42 AM",
    customerone: "Brooklyn Simmons",
    location: "35 Station Road London",
    amount: "$82.46",
    satusorder: "\tNew Order",
  },
];


export default function Home({ userProps }) {

  const [hide, setHide] = useState(false);

  const [data, setData] = useState(null);

  const handleDataSet = (info) => {
    setHide(true);
    setData(info.row.original.orderidone);
  }

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("orderidone", {
        cell: (info) => <Text as="p">{info?.getValue()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Order ID{" "}
          </Text>
        ),
        meta: { width: "150px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Date
          </Text>
        ),
        meta: { width: "170px" },
      }),
      tableColumnHelper.accessor("customerone", {
        cell: (info) => <Text as="p">{info?.getValue()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px pl-10">
            Customer
          </Text>
        ),
        meta: { width: "124px" },
      }),
      tableColumnHelper.accessor("location", {
        cell: (info) => <Text as="p">{info?.getValue()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px">
            Location
          </Text>
        ),
        meta: { width: "180px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue()}</Text>,
        header: (info) => (
          <Text as="p" className="p-px pl-5">
            Amount
          </Text>
        ),
        meta: { width: "10px" },
      }),
      tableColumnHelper.accessor("satusorder", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-end">
            <Button color="blue_50" className="mt-[11px] font-medium min-w-[100px]">
              {info?.getValue()}
            </Button>
            <Img src="../../../../public/Himages/img_frame_13.svg" alt="image_five" className="h-5 w-5 mb-1.5 cursor-pointer" onClick={() => handleDataSet(info)} />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px pr-5">
            Satus Order
          </Text>
        ),
        meta: { width: "180px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Order History</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full bg-[#F8F8F8]">
        <Sidebar4 userProps={userProps} className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[35px] ">
          <Header userdetails={userProps} className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs " />
          <div className={hide ? "hidden flex-col items-center justify-start w-[94%] gap-9 " : "flex flex-col items-center justify-start w-[94%] gap-9 "}>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <Text size="xl" as="p">
                  Order List
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  See your previous Orders
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[22%] gap-[22px]">
                <SelectBox
                  indicator={<Img src="../../../../public/Himages/img_frame_11_white_a700.svg" alt="Frame 11" />}
                  name="allstatus"
                  placeholder="All Status"
                  options={dropDownOptions}
                  className="w-[49%] gap-px border-blue-A200 border border-solid"
                />
                <SelectBox
                  color="blue_50"
                  variant="outline"
                  indicator={<Img src="../../../../public/Himages/img_frame_11.svg" alt="Frame 11" />}
                  name="today"
                  placeholder="Today"
                  options={dropDownOptions}
                  className="w-[42%] gap-px"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[26px]">
              <div className="flex flex-row justify-center w-full p-[23px] bg-white-A700 shadow-md rounded-[15px]">
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="!font-poppins text-center">
                  Dispalying 10 Out of 250
                </Text>
                <div className="flex flex-row justify-start items-center w-[12%] gap-[18px]">
                  <Text as="p" className="text-center">
                    10-250
                  </Text>
                  <div className="flex flex-row justify-start w-[49%]">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px] z-[1]">
                      <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                        <Img src="../../../../public/Himages/img_arrow_right_white_a700.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                      <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                        <Img src="../../../../public/Himages/img_arrow_right_blue_a200.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={hide ? "flex flex-col items-center justify-start w-[94%] gap-9 absolute px-[125px] py-[100px]" : "hidden flex-col items-center justify-start w-[94%] gap-9"}>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <button className="flex items-center justify-center text-gray-800 font-bold bg-transparent border-none focus:outline-none p-5 pl-0">
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M29 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <Link to={`/${userProps.uid}/orderhistory`} onClick={() => setHide(false)}>Go Back</Link>
                </button>
                <Text size="xl" as="p">
                  OrderId {data}
                </Text>
                <Text size="lg" as="p" className="!text-blue_gray-400">
                  See your previous Orders
                </Text>
              </div>
            </div>
            <div className="pb-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
              <div className="flex flex-row gap-[11rem] xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full gap-10">
                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                    <div className="mt-4 md:mt-6 flex flex-row items-center md:flex-row justify-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                      <div className="pb-4 md:pb-8 w-full md:w-40 m-8 pr-10">
                        <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                        <img className="w-full md:hidden h-[25vh]" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                      </div>
                      <div className="border-b border-gray-500 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Style: </span> Italic Minimal Design</p>
                            <p className="text-sm dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Size: </span> Small</p>
                            <p className="text-sm dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Color: </span> Light Blue</p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base dark:text-white xl:text-lg leading-6">$36.00 <span className="text-red-300 line-through"> $45.00</span></p>
                          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-row gap-20 md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                      <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div className="flex justify-between w-full">
                          <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                      <div className="flex justify-between items-start w-full">
                        <div className="flex justify-center items-center space-x-4">
                          <div className="w-8 h-8">
                            <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                          </div>
                          <div className="flex flex-col justify-start items-center">
                            <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                          </div>
                        </div>
                        <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white-A700">View Carrier Details</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 w-1/2 xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                  <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                  <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                      <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                        <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David Kent</p>
                          <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
                        </div>
                      </div>

                      <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                      <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                          <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                          <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                        </div>
                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                          <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                          <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                        </div>
                      </div>
                      <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                        <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Edit Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
