import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Text2,
  Heading,
  Img,
  Button,
  SelectBox,
  GoogleMap,
} from "../../../components/Cindex";
import Header from "../../../components/CoustomerComponent/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import ComponentSidebar from "components/CoustomerComponent/SlidebarComp/ComponentSidebar";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardPage({userProps}) {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full pb-[68px] bg-[#F8F8F8]">
        <ComponentSidebar userProps={userProps} />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[37px]">
        <Header userdetails={userProps} className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
          <div className="flex flex-col items-start justify-start w-[94%] gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <Text size="xl" as="p" className="!text-gray-700_01">
                Dashboard
              </Text>
              <Text size="lg" as="p">
                Wellcome to Lojusa Admin
              </Text>
            </div>
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-full gap-6 p-[30px] bg-white-A700 shadow-sm rounded-[10px]">
                <Button
                  color="blue_50"
                  size="4xl"
                  shape="circle"
                  className="w-[70px]"
                >
                  <Img src="../../../../public/Cimages/img_group_18300.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-2/5 mr-[23px] gap-[7px]">
                  <Heading size="md" as="h1">
                    2560
                  </Heading>
                  <Text size="md" as="p" className="!font-normal">
                    Total Menus
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-6 p-[30px] bg-white-A700 shadow-sm rounded-[10px]">
                <Button
                  color="blue_50"
                  size="4xl"
                  shape="circle"
                  className="w-[70px]"
                >
                  <Img src="../../../../public/Cimages/img_group_18276.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[47%] mr-2.5 gap-1.5">
                  <Heading size="md" as="h2">
                    $87,256
                  </Heading>
                  <Text size="md" as="p" className="!font-normal">
                    Total Revenew
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-6 p-[30px] bg-white-A700 shadow-sm rounded-[10px]">
                <Button
                  color="blue_50"
                  size="4xl"
                  shape="circle"
                  className="w-[70px]"
                >
                  <Img src="../../../../public/Cimages/img_group_18277.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-1/2 mr-[5px] gap-[7px]">
                  <Heading size="md" as="h3">
                    2560k
                  </Heading>
                  <Text size="md" as="p" className="!font-normal">
                    Total Customer
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-6 p-[30px] bg-white-A700 shadow-sm rounded-[10px]">
                <Button
                  color="blue_50"
                  size="4xl"
                  shape="circle"
                  className="w-[70px]"
                >
                  <Img src="../../../../public/Cimages/img_group_18278.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[37%] gap-[7px]">
                  <Heading size="md" as="h4">
                    2560
                  </Heading>
                  <Text size="md" as="p" className="!font-normal">
                    Total Oders
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full gap-[30px]">
              <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
                <div className="flex flex-col items-center justify-center w-full gap-5 p-4 bg-white-A700 shadow-sm rounded-[15px]">
                  <div className="flex flex-row justify-between items-start w-[99%] mt-[9px]">
                    <Text
                      size="lg"
                      as="p"
                      className="mt-1 !text-gray-700_01 !font-medium"
                    >
                      Revenue
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      indicator={
                        <Img
                          src="../../../../public/Cimages/img_frame_11.svg"
                          alt="Frame 11"
                        />
                      }
                      name="monthly"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-[99%]">
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <Heading size="xs" as="h5" className="!text-blue-A200">
                        Income
                      </Heading>
                      <Text as="p" className="!text-gray-700/10 !font-medium">
                        $1236598
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[38%] p-1 border-blue-50 border border-solid rounded-[14px]">
                      <div className="flex flex-row justify-center ml-[5px]">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-[35px] h-5 px-2.5 py-0.5 !text-white-A700 bg-blue-500 rounded-[10px]"
                        >
                          All
                        </Text>
                      </div>
                      <Text as="p" className="!text-gray-700_01 text-center">
                        Food
                      </Text>
                      <Text
                        as="p"
                        className="mr-[5px] !text-gray-700_01 text-right"
                      >
                        Beverages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-start w-full mb-1.5">
                    <div className="flex flex-col items-end justify-start w-[6%] gap-[25px]">
                      <Text as="p" className="tracking-[0.40px] text-right">
                        $40k
                      </Text>
                      <Text as="p" className="tracking-[0.40px] text-right">
                        $30k
                      </Text>
                      <Text as="p" className="tracking-[0.40px] text-right">
                        $20k
                      </Text>
                      <Text as="p" className="tracking-[0.40px] text-right">
                        $10k
                      </Text>
                      <Text
                        as="p"
                        className="!text-gray-500 tracking-[0.40px] !font-montserrat text-right"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center w-[95%] mt-[7px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-[3px]">
                            <div className="flex flex-row justify-center items-center w-[95%]">
                              <div className="h-[163px] w-px z-[1] bg-blue-50" />
                              <div className="h-[162px] w-full relative">
                                <div className="flex flex-row justify-between w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                  <div className="h-[163px] w-px bg-blue-50" />
                                </div>
                                <Img
                                  src="../../../../public/Cimages/img_chart.png"
                                  alt="chart_one"
                                  className="h-[88px] w-full bottom-[14%] right-0 left-0 m-auto object-cover absolute"
                                />
                              </div>
                              <div className="h-[163px] w-px ml-px bg-blue-50" />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full gap-[3px]">
                              <div className="h-px w-full bg-gray-300" />
                              <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-row justify-between w-auto gap-[53px]">
                                  <Text as="p" className="text-center">
                                    Mon
                                  </Text>
                                  <Text as="p" className="text-center">
                                    Tue
                                  </Text>
                                  <Text as="p" className="text-center">
                                    Wed
                                  </Text>
                                  <Text as="p" className="text-center">
                                    Thu
                                  </Text>
                                </div>
                                <Text as="p" className="text-center">
                                  Fri
                                </Text>
                                <div className="flex flex-row justify-between w-auto gap-[55px]">
                                  <Text as="p" className="text-center">
                                    Sat
                                  </Text>
                                  <Text as="p" className="text-center">
                                    Sun
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs
                  className="flex flex-col items-center justify-center w-full gap-6 p-[18px] bg-white-A700 shadow-sm rounded-[15px]"
                  selectedTabClassName="!text-white-A700 bg-blue-A200 rounded-[10px]"
                  selectedTabPanelClassName="mb-[7px] relative tab-panel--selected"
                >
                  <div className="flex flex-row justify-between items-center w-full mt-[7px]">
                    <Text
                      size="lg"
                      as="p"
                      className="!text-gray-700_01 !font-medium"
                    >
                      Customer Map
                    </Text>
                    <TabList className="flex flex-row justify-center gap-7 p-[5px] border-blue-50 border border-solid rounded-[15px]">
                      <Tab className="ml-1 text-gray-700_01 text-xs font-normal">
                        Today
                      </Tab>
                      <Tab className="text-white-A700 text-xs font-normal">
                        Month
                      </Tab>
                      <Tab className="mr-1 text-gray-700_01 text-xs font-normal">
                        Weekly
                      </Tab>
                    </TabList>
                  </div>
                  {[...Array(3)].map((_, index) => (
                    <TabPanel
                      key={`tab-panel${index}`}
                      className="justify-center w-full absolute"
                    >
                      <div className="flex flex-row justify-center w-full mb-[7px]">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-start items-start w-full gap-3">
                              <div className="flex flex-col items-start justify-start w-[5%] mt-1.5 gap-[7px]">
                                <Text as="p" className="text-center">
                                  500
                                </Text>
                                <Text as="p" className="text-center">
                                  400
                                </Text>
                                <Text as="p" className="text-center">
                                  300
                                </Text>
                                <Text as="p" className="text-center">
                                  200
                                </Text>
                                <Text as="p" className="text-center">
                                  100
                                </Text>
                                <Text as="p" className="h-[15px] text-center">
                                  90
                                </Text>
                                <Text as="p" className="h-[15px] text-center">
                                  70
                                </Text>
                                <Text as="p" className="h-[15px] text-center">
                                  60
                                </Text>
                                <Text as="p" className="h-[15px] text-center">
                                  50
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start w-[94%]">
                                <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                  <div className="h-[202px] w-[99%] relative">
                                    <div className="flex flex-col items-end justify-start w-[99%] top-0 right-0 left-0 m-auto absolute">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="h-[117px] w-[3%] ml-11 rounded-tr-[50%] rounded-tl-[50%] z-[1] bg-blue-A200" />
                                          <div className="flex flex-row justify-start items-center mt-[-74px]">
                                            <Img
                                              src="../../../../public/Cimages/img_group_36.svg"
                                              alt="image_eight"
                                              className="h-[122px] z-[1]"
                                            />
                                            <div className="h-px w-full ml-[-10px] bg-blue-50" />
                                          </div>
                                        </div>
                                        <Img
                                          src="../../../../public/Cimages/img_group_36.svg"
                                          alt="image_nine"
                                          className="h-[100px] mt-[-90px] ml-[133px]"
                                        />
                                      </div>
                                      <Img
                                        src="../../../../public/Cimages/img_group_36.svg"
                                        alt="image_ten"
                                        className="h-[100px] mt-[-99px] mr-[43px]"
                                      />
                                    </div>
                                    <div className="flex flex-row justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                      <div className="h-px w-[99%] bg-blue-50" />
                                      <Img
                                        src="../../../../public/Cimages/img_group_36.svg"
                                        alt="image_eleven"
                                        className="h-[189px] ml-[-6px]"
                                      />
                                    </div>
                                    <div className="h-px w-[99%] bottom-[13%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] bottom-[24%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="flex flex-col items-start justify-start w-[99%] bottom-[24%] right-0 left-0 m-auto absolute">
                                      <div className="h-px w-full z-[1] bg-blue-50" />
                                      <div className="h-6 w-[3%] ml-[46px] rounded-tr-[50%] rounded-tl-[50%] bg-orange-300_01" />
                                    </div>
                                    <div className="flex flex-col items-end justify-start w-[99%] top-[10%] right-0 left-0 m-auto absolute">
                                      <Img
                                        src="../../../../public/Cimages/img_group_36.svg"
                                        alt="image_twelve"
                                        className="h-[140px] mr-[178px] z-[1]"
                                      />
                                      <div className="flex flex-col items-end justify-start w-full mt-[-77px]">
                                        <div className="h-px w-full bg-blue-50" />
                                        <Img
                                          src="../../../../public/Cimages/img_group_43.svg"
                                          alt="image_thirteen"
                                          className="h-[89px] mr-[132px]"
                                        />
                                      </div>
                                    </div>
                                    <div className="h-px w-[99%] top-[19%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] top-[30%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <div className="h-px w-[99%] top-[7%] right-0 left-0 m-auto bg-blue-50 absolute" />
                                    <Img
                                      src="../../../../public/Cimages/img_group_36.svg"
                                      alt="image_fourteen"
                                      className="h-[189px] bottom-0 left-[20%] m-auto absolute"
                                    />
                                    <Img
                                      src="../../../../public/Cimages/img_group_43.svg"
                                      alt="image_fifteen"
                                      className="h-[61px] bottom-[24%] left-[39%] m-auto absolute"
                                    />
                                    <Img
                                      src="../../../../public/Cimages/img_group_36.svg"
                                      alt="image_sixteen"
                                      className="justify-center h-[123px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Img
                                      src="../../../../public/Cimages/img_group_36.svg"
                                      alt="image_seventeen"
                                      className="h-[140px] right-[19%] top-[12%] m-auto absolute"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-between w-full">
                                    <Text as="p" className="text-center">
                                      Jan
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Feb
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Mar
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Apr
                                    </Text>
                                    <Text as="p" className="text-center">
                                      May
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Jun
                                    </Text>
                                    <Text as="p" className="text-center">
                                      July
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Aug
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Sep
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Oct
                                    </Text>
                                    <Text as="p" className="text-center">
                                      Nov
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
                <div className="flex flex-col items-center justify-center w-full gap-[21px] p-5 bg-white-A700 shadow-sm rounded-[15px]">
                  <div className="flex flex-row justify-between items-start w-full mt-1.5">
                    <Text
                      size="lg"
                      as="p"
                      className="mt-1 !text-gray-700_01 !font-medium"
                    >
                      Order Summary
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      indicator={
                        <Img
                          src="../../../../public/Cimages/img_frame_11.svg"
                          alt="Frame 11"
                        />
                      }
                      name="monthly_one"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-start items-center w-full border-blue-50 border border-solid rounded-[5px]">
                      <div className="flex flex-col items-start justify-start w-[15%] ml-[19px] gap-1">
                        <Text
                          size="lg"
                          as="p"
                          className="!text-gray-700_01 !font-medium"
                        >
                          1256K
                        </Text>
                        <Text size="md" as="p" className="!font-normal">
                          On Delivery{" "}
                        </Text>
                      </div>
                      <div className="h-[59px] w-px ml-[35px] bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[19%] ml-5 gap-[3px]">
                        <Text
                          size="lg"
                          as="p"
                          className="!text-gray-700_01 !font-medium"
                        >
                          452K
                        </Text>
                        <Text size="md" as="p" className="!font-normal">
                          Total Delivered
                        </Text>
                      </div>
                      <div className="h-[59px] w-px ml-[11px] bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[12%] ml-[19px] gap-[3px]">
                        <Text
                          size="lg"
                          as="p"
                          className="!text-gray-700_01 !font-medium"
                        >
                          25K
                        </Text>
                        <Text size="md" as="p" className="!font-normal">
                          Canceled
                        </Text>
                      </div>
                      <div className="h-[59px] w-px ml-[47px] bg-blue-50" />
                      <div className="flex flex-col items-start justify-start w-[16%] ml-[19px] gap-[3px]">
                        <Text
                          size="lg"
                          as="p"
                          className="!text-gray-700_01 !font-medium"
                        >
                          2256K
                        </Text>
                        <Text size="md" as="p" className="!font-normal">
                          Total Proses
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mb-1.5">
                    <div className="flex flex-row justify-center w-full p-2.5 bg-gray-100 rounded-[5px]">
                      <div className="flex flex-row justify-between items-center w-[98%] mx-[5px]">
                        <Text size="md" as="p" className="!text-gray-700_01">
                          New Order
                        </Text>
                        <div className="flex flex-row justify-center">
                          <Button
                            color="green_500"
                            className="w-full font-medium"
                          >
                            2512k
                          </Button>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-1">
                          <Link to={'#'}>
                            <Text size="md" as="p" className="!text-blue-A200">
                              View All
                            </Text>
                          </Link>
                          <Img
                            src="../../../../public/Cimages/img_frame_24.svg"
                            alt="image_eighteen"
                            className="h-3 w-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-6 py-5 bg-white-A700 shadow-sm rounded-[15px]">
                  <div className="flex flex-row justify-between items-center w-[93%]">
                    <Text
                      size="lg"
                      as="p"
                      className="!text-gray-700 !font-medium"
                    >
                      Deliyvery Map
                    </Text>
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      indicator={
                        <Img
                          src="../../../../public/Cimages/img_caretdown.svg"
                          alt="caret-down"
                        />
                      }
                      name="monthly_two"
                      placeholder="Monthly"
                      options={dropDownOptions}
                      className="w-[21%] gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                    <div className="h-[189px] w-full relative">
                      <GoogleMap
                        showMarker={false}
                        className="justify-center h-[189px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <Img
                        src="../../../../public/Cimages/img_group_18769.png"
                        alt="image_nineteen"
                        className="h-[137px] w-[76%] left-[9%] bottom-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[93%] gap-[22px]">
                      <Text
                        size="lg"
                        as="p"
                        className="ml-0.5 !text-gray-700_01 !font-medium"
                      >
                        Upcomming Sehedule
                      </Text>
                      <div className="flex flex-col w-full gap-[11px]">
                        <div className="flex flex-col items-center justify-start w-full pb-[11px]">
                          <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-start items-center w-2/5 gap-1.5">
                              <Img
                                src="../../../../public/Cimages/img_rectangle_4099.png"
                                alt="image"
                                className="w-[30px] object-cover rounded-sm"
                              />
                              <div className="flex flex-col items-center justify-start w-[82%] gap-px">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-gray-700_01 !font-normal"
                                >
                                  <span className="text-gray-700_01">
                                    Mohan Cudhidi
                                  </span>
                                  <span className="text-blue-A200 font-medium">
                                    (4 Iteam )
                                  </span>
                                </Text>
                                <Text as="p">
                                  Will be shipping on 11 : 24 Am
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-[41%] gap-1">
                              <div className="flex flex-col items-end justify-start w-[84%] gap-px">
                                <Text as="p" className="!text-gray-700_01">
                                  1111 Hex Parker Rd. Allentown,
                                </Text>
                                <Text
                                  as="p"
                                  className="!text-gray-700_01 text-right"
                                >
                                  South Africa
                                </Text>
                              </div>
                              <Button
                                size="xs"
                                shape="circle"
                                className="w-[30px]"
                              >
                                <Img src="../../../../public/Cimages/img_heroicons_outli.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="w-px h-px bg-blue-50" />
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-row justify-start items-center w-2/5 mb-[3px] gap-1.5">
                            <Img
                              src="../../../../public/Cimages/img_rectangle_4099_30x30.png"
                              alt="image"
                              className="w-[30px] object-cover rounded-sm"
                            />
                            <div className="flex flex-col items-center justify-start w-[82%] gap-px">
                              <Text
                                size="md"
                                as="p"
                                className="!text-gray-700_01 !font-normal"
                              >
                                <span className="text-gray-700_01">
                                  Nohan Cudhidi
                                </span>
                                <span className="text-blue-A200"></span>
                                <span className="text-blue-A200 font-medium">
                                  (2 Iteam )
                                </span>
                              </Text>
                              <Text as="p">Will be shipping on 12 : 24 Am</Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[42%] mt-[5px] gap-1.5">
                            <div className="flex flex-col items-end justify-start w-[83%]">
                              <Text as="p" className="!text-gray-700_01">
                                1111 Parker Rd. Allentown, New{" "}
                              </Text>
                              <Text
                                as="p"
                                className="!text-gray-700_01 text-right"
                              >
                                United states
                              </Text>
                            </div>
                            <Button
                              size="xs"
                              shape="circle"
                              className="w-[30px]"
                            >
                              <Img src="../../../../public/Cimages/img_heroicons_outli.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
              <div className="flex flex-col items-center justify-center w-[66%] gap-6 p-5 bg-white-A700 shadow-sm rounded-[15px]">
                <div className="flex flex-row justify-between items-center w-full mt-2">
                  <Text
                    size="lg"
                    as="p"
                    className="!text-gray-700_01 !font-medium"
                  >
                    Recent Oder Request
                  </Text>
                  <SelectBox
                    color="blue_50"
                    variant="outline"
                    indicator={
                      <Img
                        src="../../../../public/Cimages/img_caretdown.svg"
                        alt="caret-down"
                      />
                    }
                    name="monthly_three"
                    placeholder="Monthly"
                    options={dropDownOptions}
                    className="w-[16%] gap-px"
                  />
                </div>
                <div className="flex flex-col w-full mb-2 gap-3">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center w-[78%]">
                      <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                        <Img
                          src="../../../../public/Cimages/img_rectangle_4144.png"
                          alt="image"
                          className="w-[21%] object-cover rounded"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text
                            size="md"
                            as="p"
                            className="w-[99%] ml-0.5 !text-gray-700_01"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Text as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-0.5">
                        <Text size="md" as="p" className="!text-gray-700_01">
                          Marvin McKinney
                        </Text>
                        <Text as="p" className="leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text size="md" as="p" className="ml-7 !text-gray-700_01">
                        $12.5
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="h-[17px] ml-[30px] !text-gray-700_01"
                      >
                        X2
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center">
                      <Button color="blue_50" className="w-full font-medium">
                        Pending
                      </Button>
                    </div>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                      <div className="flex flex-row justify-center items-center w-[78%]">
                        <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                          <Img
                            src="../../../../public/Cimages/img_rectangle_4144_48x50.png"
                            alt="image"
                            className="w-[21%] object-cover rounded"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text
                              size="md"
                              as="p"
                              className="w-[99%] ml-0.5 !text-gray-700_01"
                            >
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text
                              as="p"
                              className="!text-blue-A200 !font-medium"
                            >
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-1">
                          <Text size="md" as="p" className="!text-gray-700_01">
                            Jacob Jones
                          </Text>
                          <Text as="p" className="leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text
                          size="md"
                          as="p"
                          className="ml-7 !text-gray-700_01"
                        >
                          $11.5
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="h-[17px] ml-[30px] !text-gray-700_01"
                        >
                          X2
                        </Text>
                      </div>
                      <Button
                        color="green_50"
                        className="!text-green-400 font-medium min-w-[100px]"
                      >
                        Delivered
                      </Button>
                    </div>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center w-[78%]">
                      <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                        <Img
                          src="../../../../public/Cimages/img_rectangle_4144_1.png"
                          alt="image"
                          className="w-[21%] object-cover rounded"
                        />
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                          <Text
                            size="md"
                            as="p"
                            className="w-[99%] ml-0.5 !text-gray-700_01"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Text as="p" className="!text-blue-A200 !font-medium">
                            #012365
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-[3px]">
                        <Text size="md" as="p" className="!text-gray-700_01">
                          Cody Fisher
                        </Text>
                        <Text as="p" className="leading-4">
                          3891 Ranchview Dr. California 62639
                        </Text>
                      </div>
                      <Text size="md" as="p" className="ml-7 !text-gray-700_01">
                        $42.5
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="h-[17px] ml-[30px] !text-gray-700_01"
                      >
                        X2
                      </Text>
                    </div>
                    <Button
                      color="blue_50"
                      className="font-medium min-w-[100px]"
                    >
                      Pending
                    </Button>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-col items-center justify-start w-full pt-[3px] pl-[3px]">
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                      <div className="flex flex-row justify-center items-center w-[78%]">
                        <div className="flex flex-row justify-start items-center w-[46%] gap-[9px]">
                          <span className="text-gray-700_01">
                            Mohan Cudhidi
                          </span>
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[3px]">
                            <Text
                              size="md"
                              as="p"
                              className="w-[99%] ml-0.5 !text-gray-700_01"
                            >
                              Sweet cheezy pizza for kids <br />
                              Meal (smail )
                            </Text>
                            <Text
                              as="p"
                              className="!text-blue-A200 !font-medium"
                            >
                              #012365
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[27%] ml-[41px] gap-1">
                          <Text size="md" as="p" className="!text-gray-700_01">
                            Esther Howard
                          </Text>
                          <Text as="p" className="leading-4">
                            3891 Ranchview Dr. California 62639
                          </Text>
                        </div>
                        <Text
                          size="md"
                          as="p"
                          className="ml-7 !text-gray-700_01"
                        >
                          $92.5
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="h-[17px] ml-[30px] !text-gray-700_01"
                        >
                          X2
                        </Text>
                      </div>
                      <Button
                        color="green_50"
                        className="!text-green-400 font-medium min-w-[100px]"
                      >
                        Delivered
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-[32%] gap-[22px] p-5 bg-white-A700 shadow-sm rounded-[15px]">
                <Text
                  size="lg"
                  as="p"
                  className="mt-[5px] !text-gray-700_01 !font-medium"
                >
                  Daily Trending Menus
                </Text>
                <div className="flex flex-col w-[97%] mb-2 gap-[11px]">
                  <div className="flex flex-row justify-start items-center w-[99%] gap-3.5">
                    <Img
                      src="../../../../public/Cimages/img_rectangle_4144_3.png"
                      alt="image"
                      className="w-[17%] object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[77%] gap-[5px]">
                          <Text
                            size="md"
                            as="p"
                            className="!text-gray-700_01 leading-4"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Heading as="h6">$5.6</Heading>
                        </div>
                        <div className="flex flex-col items-end justify-start h-[55px] w-[54px] gap-[23px]">
                          <Text size="md" as="p" className="!text-blue-A200">
                            #1
                          </Text>
                          <Text as="p" className="!font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="../../../../public/Cimages/img_rectangle_4144_4.png"
                      alt="image"
                      className="w-[17%] object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text
                            size="md"
                            as="p"
                            className="!text-gray-700_01 leading-4"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Heading as="p">$5.6</Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-1/4 gap-[23px]">
                          <Text
                            size="md"
                            as="p"
                            className="h-[17px] ml-10 !text-blue-A200"
                          >
                            #2
                          </Text>
                          <Text as="p" className="!font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="../../../../public/Cimages/img_rectangle_4144_5.png"
                      alt="image"
                      className="w-[17%] object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text
                            size="md"
                            as="p"
                            className="!text-gray-700_01 leading-4"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Heading as="p">$5.6</Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-1/4 gap-[23px]">
                          <Text
                            size="md"
                            as="p"
                            className="h-[17px] ml-10 !text-blue-A200"
                          >
                            #3
                          </Text>
                          <Text as="p" className="!font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-px bg-blue-50" />
                  <div className="flex flex-row justify-start items-center w-full gap-3.5">
                    <Img
                      src="../../../../public/Cimages/img_rectangle_4144_6.png"
                      alt="image"
                      className="w-[17%] object-cover rounded"
                    />
                    <div className="flex flex-row justify-start w-[79%]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                          <Text
                            size="md"
                            as="p"
                            className="!text-gray-700_01 leading-4"
                          >
                            Sweet cheezy pizza for kids <br />
                            Meal (smail )
                          </Text>
                          <Heading as="p">$5.6</Heading>
                        </div>
                        <div className="flex flex-col items-start justify-start w-1/4 gap-[23px]">
                          <Text
                            size="md"
                            as="p"
                            className="h-[17px] ml-10 !text-blue-A200"
                          >
                            #4
                          </Text>
                          <Text as="p" className="!font-medium">
                            Order 56x{" "}
                          </Text>
                        </div>
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
