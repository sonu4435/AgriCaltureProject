import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox } from "../../../components/RHindex";
import Header from "../../../components/CoustomerHomeComponent/Header";
import Sidebar4 from "components/CoustomerRealHomePage/Sidebar4";
import { Link, useNavigate } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CustomerRealHome({ userProps }) {
  const [show,setShow] = useState(false);

  const [reciveData,setReciveData] = useState({
    imgSrc: "",
    prodName: "",
    quantity: "",
    garde: "",
    price: 35,
    desc: "",
  });

  const ArrayOfProducts = [{
    imgSrc: "https://media.istockphoto.com/id/1398317661/photo/ripe-cherry-tomatoes-isolated-on-white-background-macro-shot-popular-worldwide-product-as.webp?b=1&s=170667a&w=0&k=20&c=qYFN6nXKdojDgDtnWycndhtuSYthoS7Skq_W3nOPJxA=",
    prodName: "Tomato",
    ratings: 4.2,
    quantity: 30,
    price: 40,
    grade: "Top",
    desc: "Imagine tomatoes like edible gems – plump, juicy, and bursting with rich flavor. Grown with care on my farm, these top-quality gems are a taste of sun and soil in every bite."
  }, {
    imgSrc: "https://www.tastingtable.com/img/gallery/why-you-should-always-buy-small-eggplants/intro-1658245418.jpg",
    prodName: "Brinjan",
    ratings: 4.5,
    quantity: 30,
    price: 40,
    grade: "Medium",
    desc: "Behold, our exquisite brinjals – glossy, firm, and packed with earthy goodness. Cultivated with precision on my farm, each bite offers a delightful blend of freshness and natural richness."
  }, {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cwE3hOfjrVi8qzFzdMiUa-lGzTB0sJugMw&usqp=CAU",
    prodName: "Potato",
    ratings: 4.5,
    quantity: 30,
    price: 25,
    desc: "Introducing my farm's finest potatoes – hearty, earthy, and versatile. Grown with dedication, these spuds promise a delicious canvas for your culinary creations.",
    grade: "Medium"
  }, {
    imgSrc: "https://rukminim2.flixcart.com/image/850/1000/kxgfzbk0/wall-decoration/6/g/8/orange-fruit-white-background-leaf-wallpaper-paper-poster-1-vp-original-imag9wjqn2ppjxy4.jpeg?q=90&crop=false",
    prodName: "Orange",
    ratings: 4.5,
    quantity: 30,
    price: 60,
    desc: "Meet the stars of my orchard – vibrant oranges, bursting with citrus brilliance. Grown under the sun's embrace, each juicy slice delivers a burst of refreshing sweetness that captures the essence of pure, sun-kissed indulgence.",
    grade: "Top"
  }, {
    imgSrc: "https://5.imimg.com/data5/SELLER/Default/2022/9/GE/AS/XR/38120380/rohu-fish.jpg",
    prodName: "Rohu Fish",
    ratings: 4.5,
    quantity: 30,
    price: 150,
    desc: "Dive into the excellence of Rohu fish from my waters – firm, flavorful, and a culinary delight. Harvested with care, these fish embody the freshness of pristine aquatic habitats, delivering a taste that's a testament to the quality of my fisheries.",
    grade: "Top"
  }, {
    imgSrc: "https://www.collinsdictionary.com/images/full/pomegranate_121524892.jpg",
    prodName: "pomegranate",
    ratings: 4.5,
    quantity: 30,
    price: 40,
    desc: "Indulge in the exquisite taste of my orchard's pomegranates – ruby-red jewels bursting with a perfect balance of sweetness and tartness. Grown with meticulous care, each aril is a testament to the richness of the soil and the sun's nurturing embrace.",
    grade: "Top"
  }, {
    imgSrc: "https://4.imimg.com/data4/EX/IX/MY-26971534/alphonso-mango1.jpg",
    prodName: "Mango",
    ratings: 4.5,
    quantity: 30,
    price: 300,
    desc: "Savor the essence of summer with my farm's mangoes – juicy, golden orbs of sweetness. Grown under the warm sun, each bite is a tropical symphony that captures the pure delight of nature's bounty.",
    grade: "Medium"
  }, {
    imgSrc: "https://i.pinimg.com/originals/30/51/00/305100fa869f0cf4a7a66d8c6494ade3.jpg",
    prodName: "Apple",
    ratings: 4.5,
    quantity: 30,
    price: 180,
    desc: "Crisp, juicy, and straight from my orchard – these apples are a testament to nature's perfection. Grown with care, they offer a delightful blend of sweetness and a refreshing crunch, making every bite a wholesome experience.",
    grade: "Medium"
  }, {
    imgSrc: "https://gabbarfarms.com/cdn/shop/products/raw-banana-720x720_2048x.jpg?v=1641376551",
    prodName: "Raw Banana",
    ratings: 4.5,
    quantity: 12,
    price: 25,
    desc: "Experience the simplicity of nature with my raw bananas – firm, versatile, and ready for your culinary creativity. Straight from the harvest, these bananas are a canvas for both savory and sweet delights, embodying the essence of natural goodness.",
    grade: "Medium"
  }, {
    imgSrc: "https://gourmetgarden.in/cdn/shop/products/capsicumcolours_850edb46-f592-4b5e-b9aa-b0382df3644f_grande.jpg?v=1651345866",
    prodName: "capsicum",
    ratings: 4.5,
    quantity: 30,
    price: 160,
    desc: "Behold the vibrant bounty of my garden – crisp and colorful capsicums. Grown with precision, these peppers are a medley of freshness and flavor, perfect for adding a wholesome crunch and a burst of taste to your culinary creations.",
    grade: "Top"
  }, {
    imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2021/07/cucumber-slices-QT-1200x800-GettyImages-497064006.jpg?fit=700,467",
    prodName: "cucumber",
    ratings: 4.5,
    quantity: 30,
    price: 20,
    desc: "Straight from my garden, these cucumbers are the epitome of crisp freshness. With a satisfying crunch and a cool, hydrating taste, they're a testament to the simple, pure joy of farm-to-table goodness.",
    grade: "Medium"
  }, {
    imgSrc: "https://static.wixstatic.com/media/4238e8_03d7db52d5a245eaad5f2414073090d3~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4238e8_03d7db52d5a245eaad5f2414073090d3~mv2.jpg",
    prodName: "Green Chilli",
    ratings: 4.5,
    quantity: 30,
    price: 20,
    desc: "Spice up your dishes with my homegrown green chillies – fiery, fresh, and packed with flavor. Grown with care, these vibrant chillies add a kick to your culinary creations, embodying the bold essence of my garden.",
    grade: "Medium"
  },]

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row justify-center items-start w-full">
          <Sidebar4 userProps={userProps} className="w-[252px] h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto" />
          <div className="flex flex-col items-center justify-start w-[83%] gap-[38px]">
            <Header userdetails={userProps} className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs " />
            <div style={show ? { display: "none" } : { display: "flex" }}  className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-center justify-start w-full gap-[34px]">
                <div className="justify-center w-full gap-[30px] grid-cols-4 grid min-h-[auto]">
                  {ArrayOfProducts.map((item, index) => (
                    <>
                      <div onClick={()=> {setShow(true); setReciveData({
                        imgSrc: item.imgSrc,
                        prodName: item.prodName,
                        quantity: item.quantity,
                        garde: item.grade,
                        price: item.price,
                        desc: item.desc
                      }) }}  key={index} className="group cursor-pointer flex hover:scale-105 duration-300 ease-in-out flex-col justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md shadow-[#dfdfdf] rounded-[15px] relative overflow-hidden">
                        <Img
                          src={item.imgSrc}
                          alt="pizza_for_kids"
                          className="w-full h-[20vh] object-cover object-center rounded-[10px] group-hover:scale-105 duration-150 ease-linear cursor-pointer"
                        />
                        <div className="flex flex-col items-start justify-start w-full gap-[13px] pt-2">
                          <div className="flex flex-row justify-between items-center w-full">
                            <Text as="p" className="!text-gray-700_01 !font-medium text-lg capitalize">
                              {item.prodName}
                            </Text>
                            <Text as="p" className="!text-gray-700_01 !font-medium capitalize">
                              Qty - {item.quantity}kg
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between items-center gap-2.5 w-full">
                            <div className="flex items-center gap-2">
                              <Img src="/RHimages/img_group_18196.svg" alt="review_45_one" className="h-2.5" />
                              <Text size="md" as="p" className="!text-gray-700_01 !font-poppins text-center">
                                {item.ratings}
                              </Text>
                            </div>
                            <Text as="p" className="!text-gray-700_01 !font-medium capitalize">
                              &#8377;{item.price}/kg
                            </Text>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text size="md" as="p" className="!text-gray-700_01 !font-poppins text-center">
                    Dispalying 10 Out of 250
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
                    <Text size="md" as="p" className="!text-gray-700_01 text-center">
                      10-250
                    </Text>
                    <div className="flex flex-row justify-start w-[49%]">
                      <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px] z-[1]">
                        <Img src="/RHimages/img_arrow_right_white_a700.svg" />
                      </Button>
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                        <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="/RHimages/img_arrow_right_blue_a200.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={show ? "flex flex-col items-center justify-start w-[94%] gap-9 absolute px-[125px] py-[100px]" : "hidden flex-col items-center justify-start w-[94%] gap-9"}>
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
                    <Link to={`/${userProps.uid}/home`} onClick={() => setShow(false)}>Go Back</Link>
                  </button>
                </div>
              </div>
              <div className="pb-14 pl-12 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex flex-row gap-[11rem] xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full gap-10">
                      <div className="mt-4 md:mt-6 flex flex-row items-center md:flex-row justify-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div className="pb-4 md:pb-8 w-full md:w-40 m-8 pr-10">
                          <img className="w-full md:hidden h-[25vh]" src={reciveData.imgSrc} alt="dress" />
                        </div>
                        <div className="md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-2xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{reciveData.prodName}</h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                              <p className="text-xl dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Quantity: </span> {reciveData.quantity} Kg</p>
                              <p className="text-xl dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Grade: </span> {reciveData.garde}</p>
                              <p className="text-xl dark:text-white leading-none text-gray-900"><span className="dark:text-gray-400 text-gray-500">Price: </span> &#8377;{reciveData.price}/Kg</p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-lg dark:text-white xl:text-lg leading-6">Total Price :- <span className="font-bold">&#8377;{reciveData.price * reciveData.quantity} </span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center flex-row gap-4 md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                     <div className="w-full flex flex-col gap-5 items-center justify-center mt-14">
                        <button className="px-24 py-5 bg-black text-white-A700 w-full capitalize rounded-tl-3xl rounded-br-3xl hover:bg-[#3c3c3c] font-medium">Add to cart</button>
                        <button className="px-24 py-5 bg-black text-white-A700 w-full capitaliz hover:bg-[#3c3c3c] font-medium">Buy Now</button>
                     </div>
                      <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Description</h3>
                        <div className="flex justify-between items-start w-full">
                          <div className="flex justify-center items-center space-x-4">
                            <div className="flex flex-col justify-start items-center w-full">
                              <h2 className="text-xl capitalize text-start">{reciveData.desc}</h2>
                            </div>
                          </div>
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
      </div>
    </>
  );
}
