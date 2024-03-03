import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox } from "../../../components/CCindex";
import Header from "../../../components/CategoryPage/Header";
import Sidebar4 from "components/CategoryPage/Sidebar4";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function CategoriesPage({ userProps }) {

    const objOfImg = [{
        imgSrc: "https://imgs.search.brave.com/CLjvWn603U52_iGglYftqESncd_w8pUWiab8SWhr2Pc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzEyLzE0LzIw/LzM2MF9GXzExMjE0/MjA4M19aMDNmQ0dF/aERIWUpnaUVKVVlv/c0tsN2JBSVZpUHpr/cC5qcGc",
        CategoryName: "Cereals",
    }, {
        imgSrc: "https://imgs.search.brave.com/FE2H6ARE6xA0uRJcCIjKdLADmN5h8t-FKb7Y5DWkOxY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yNDQ1Njk1/LzI4NjEvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yODYxMjIzOS1z/dG9jay1waG90by1k/aWZmZXJlbnQtdHlw/ZS1vZi1wdWxzZXMu/anBn",
        CategoryName: "Pulses",
    }, {
        imgSrc: "https://imgs.search.brave.com/pHZUkHga3dNhPgFJW0W7MNzYQu4CRkRpwUYRgnscHXw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTYwNDAwMzMyMjkt/YTk4MjFlYmQwNThk/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGMz/QnBZMlZ6ZkdWdWZE/QjhmREI4Zkh3dw",
        CategoryName: "Spices",
    }, {
        imgSrc: "https://imgs.search.brave.com/ANYJsA12JTB5JOT3bQOD1s9PGiHFwmjiXKKsCw9lKGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTk1NjY2MzY4NTgt/YWRmM2VmNDY0MDBi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/WnlkV2wwZkdWdWZE/QjhmREI4Zkh3dw",
        CategoryName: "Fruits",
    }, {
        imgSrc: "https://imgs.search.brave.com/FEwl8pxWuwnSQLaG0fVc9VVr8vAnrezQFiZEsB2fM48/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NTg2ODIwMi9waG90/by9mcmVzaC12ZWdl/dGFibGVzLXN0aWxs/LWxpZmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXBCZDFR/QTNDOFdJUGJQVk1W/YU45S0xLUENQTk1H/UUdYRlNfWVMyX2V3/Qmc9",
        CategoryName: "Vegitables",
    }, {
        imgSrc: "https://imgs.search.brave.com/Tlmmpdbdp8Njw_8Bspe3B_5tdY2PK6KaFph3G3qOBj8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MTQ4OTc1Mi9waG90/by9oaWdoLWFuZ2xl/LXZpZXctb2YtdmFy/aW91cy1mcmVzaC1m/aXNoLWFuZC1zZWFm/b29kLndlYnA_Yj0x/JnM9MTcwNjY3YSZ3/PTAmaz0yMCZjPTlI/VTN3TlVWbkZFVmRV/UGE0M3lweVRiSXlq/U29VV1ZhcG5fbkRI/NXNRXzA9",
        CategoryName: "Fish",
    }, {
        imgSrc: "https://imgs.search.brave.com/wzBkr_KWp7CYRvIrKIIi-JvJQTc-NlVnwxhyF5QCBu0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cmVzaC1kYWlyeS1w/cm9kdWN0c18xMTQ1/NzktODU1NjcuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
        CategoryName: "Dairy",
    }, {
        imgSrc: "https://imgs.search.brave.com/B7i-m0dKTdzZKNU1gLXR6vyBwe-KOGmLUqo02tf1xdE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM4LmRlcG9zaXRw/aG90b3MuY29tLzEy/MDUzNzUvOTUwL2kv/NDUwL2RlcG9zaXRw/aG90b3NfOTUwOTg5/Ni1zdG9jay1waG90/by1udXRzLmpwZw",
        CategoryName: "Nuts",
    },]


    return (
        <>
            <Helmet>
                <title>Caregory</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex flex-row justify-center w-full bg-white-A700">
                <div className="flex flex-row justify-center items-start w-full">
                    <Sidebar4 userProps={userProps} className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" />
                    <div className="flex flex-col items-center justify-start w-[83%] gap-[38px]">
                        <Header userdetails={userProps} className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs " />
                        <div className="flex flex-row justify-center w-[94%]">
                            <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                                <div className="justify-center w-full gap-[30px] grid-cols-4 grid min-h-[auto]">
                                    {objOfImg.map((item,index)=>(
                                    <div key={index} className="group flex relative cursor-pointer flex-col items-center justify-start w-full h-[25vh] gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
                                        <Img
                                            src={item.imgSrc}
                                            alt="pizza_for_kids"
                                            className="w-full h-full group-hover:blur-0 object-cover duration-150 ease-in-out rounded-[10px] blur-[1px] brightness-75"
                                        />
                                        <div className="h-full absolute w-full flex items-center justify-center font-extrabold text-white-A700 text-3xl uppercase">
                                            {item.CategoryName}
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
