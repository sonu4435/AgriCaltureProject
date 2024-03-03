import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input } from "../../components/Findex";
import Header from "../../components/FarmerRegistration/Header";
import Sidebar4 from "../../components/FarmerRegistration/Sidebar4";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function AddMenuPage({ userProps }) {
    return (
        <>
            <Helmet>
                <title>Acter's Application1</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex flex-row justify-center items-start w-full bg-white-A700">
                <Sidebar4 userProps={userProps} className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" />
                <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
                    <Header userdetails={userProps} className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs " />
                    <div className="flex flex-col items-center justify-start w-[94%] gap-[35px]">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-col items-start justify-start gap-[7px]">
                                <Text size="xl" as="p" className="!text-gray-700_01">
                                    Add Menu
                                </Text>
                                <Text as="p">Add Menu / Menu List / Categories</Text>
                            </div>
                            <SelectBox
                                indicator={<Img src="/public/Fimages/img_frame_11_white_a700.svg" alt="Frame 11" />}
                                name="today"
                                placeholder="Today"
                                options={dropDownOptions}
                                className="w-[9%] gap-px border-blue-A200 border border-solid"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[26px] p-5 bg-white-A700 shadow-md rounded-[15px]">
                            <Text as="p" className="mt-1.5 !text-gray-700_01 !font-medium">
                                Choose Better Menu Type
                            </Text>
                            <div className="flex flex-col items-start justify-start w-full mb-1 gap-[25px]">
                                <div className="flex flex-row justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                                        <div className="flex flex-row justify-start w-full gap-[30px]">
                                            <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                                                <Text as="p" className="!text-gray-700_01">
                                                    Food Name
                                                </Text>
                                                <Input
                                                    color="gray_50_01"
                                                    size="sm"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Name "
                                                    className="w-full border-gray-200 rounded-[5px]"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                                                <Text as="p" className="!text-gray-700_01">
                                                    Food Price
                                                </Text>
                                                <Input
                                                    color="gray_50_01"
                                                    size="sm"
                                                    name="price"
                                                    placeholder="Enter Price"
                                                    className="w-full border-gray-200 rounded-[5px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                                            <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
                                                <Text as="p" className="!text-gray-700_01">
                                                    Upload
                                                </Text>
                                                <div className="flex flex-row justify-start w-full">
                                                    <div className="flex flex-row justify-center w-full p-[37px] border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px]">
                                                        <div className="flex flex-col relative items-center justify-start w-[46%] gap-2.5 mx-[120px]">
                                                            <Img src="/public/Fimages/img_frame_15.svg" alt="image_five" className="h-8 w-8" />
                                                            <Text size="md" as="p">
                                                                <span className="text-gray-700_01 font-medium">Drop your imges here</span>
                                                                <span className="text-gray-700_01 font-medium">,</span>
                                                                <span className="text-blue_gray-400"></span>
                                                                <span className="text-blue-A200">or browes</span>
                                                            </Text>
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-blue-500 text-white-A700 py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 transition duration-300">
                                                                <span>Choose a file</span>
                                                                <input id="file-upload" type="file" className="absolute inset-0 opacity-0 cursor-pointer h-full w-full" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
                                                <Text as="p">Categories</Text>
                                                <SelectBox
                                                    color="gray_50_01"
                                                    size="sm"
                                                    indicator={<Img src="/public/Fimages/img_arrowdown.svg" alt="arrow_down" />}
                                                    name="select"
                                                    placeholder="Select"
                                                    options={dropDownOptions}
                                                    className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
                                                />
                                                <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                                                    <Text as="p" className="!text-gray-700_01">
                                                        Location
                                                    </Text>
                                                    <Input
                                                        color="gray_50_01"
                                                        size="sm"
                                                        name="price"
                                                        placeholder="Enter Location"
                                                        className="w-full border-gray-200 rounded-[5px]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start gap-[21px]">
                                    <Button size="md" className="font-medium min-w-[112px] bg-black">
                                        Submit
                                    </Button>
                                    <Button size="md" variant="outline" className="font-medium min-w-[112px]">
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
