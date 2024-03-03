import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Img, Input, List, Slider, Text } from "components";
import LandingPageCard from "components/HomeComponent/LandingPageCard";
import LandingPageFooter from "components/HomeComponent/LandingPageFooter";
import LandingPageHeader from "components/HomeComponent/LandingPageHeader";

const LandingPagePage = () => {
  const navigate = useNavigate();

  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-[#144444] flex flex-col font-markoone items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="landingFirst flex flex-col items-start sm:gap-10 md:gap-10 gap-[100px] justify-start w-full">
          <LandingPageHeader className="bg-[#F5EFDC] flex fixed z-[99999] gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="bg-[#F5EFDC] flex flex-col font-manrope items-start justify-start md:px-0 sm:p-5 px-[50px] py-[100px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full py-20 pb-0">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full md:p-10 px-20 py-10 pt-0">
                  <Text
                    className="leading-[4.5rem] sm:text-4xl md:text-[42px] text-6xl text-[#3D3C3A] tracking-[-0.92px]"
                    size="txtArchivoBlackBold"
                  >
                    Seamlessly Linking Farms to Factories, Elevating
                    Agricultural Prosperity.
                  </Text>
                  <Text className="leading-[180.00%] font-Chivo max-w-[610px] md:max-w-full text-gray-700 text-xl">
                    Revolutionizing Agriculture: Seamlessly Connecting Farmers
                    to Industries, Streamlining Transport for Prosperous
                    Harvests!
                  </Text>
                </div>
                <div className="w-full items-start px-20 md:px-10">
                  <Button onClick={()=>{navigate('/signup')}} className="bg-[#3B4443] cursor-pointer font-manrope font-semibold px-10 py-3 whitespace-nowrap rounded-full text-base text-center text-white-A700 w-auto">
                    Sign up
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start overflow-hidden w-auto md:w-full md:p-10">
                <Img
                  className="h-[503px] md:h-auto object-cover w-full object-center rounded-3xl"
                  src="images/img_home.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="landingSecond w-full h-[50vh] p-10 flex items-center justify-center">
          <div className="h-full w-1/2 bg-none relative flex items-start justify-center">
            <div className="HeadText absolute">
              {" "}
              <Text
                className="leading-none sm:text-2xl md:text-[42px] text-xl text-[#fff] tracking-[0.92px]"
                size="txtManropeSemiBold16Gray700"
              >
                Explore Steps
              </Text>
            </div>
            <div className="banners w-full h-full flex">
              <div className="FirstBanner relative w-1/2 h-full">
                <div className="h-24 w-24 rounded-full absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 z-[99] overflow-hidden bg-[#fff] border-black border flex items-center justify-center">
                  <h1 className="text-5xl font-protest text-black-A700">1</h1>
                </div>
                <div className="HeadText absolute top-3/4 w-full left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
                  <h1 className="text-xl text-[#F6DB86] capitalize text-center font-Chivo">
                    Create account
                  </h1>
                  <p className="text-base text-[#fff] capitalize text-center">
                    Create your account in seconds to unlock exclusive benefits
                    and start selling hassle-freely
                  </p>
                </div>
              </div>
              <div className="SecondBanner relative w-1/2 h-full">
                <div className="h-24 w-24 rounded-full absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] overflow-hidden bg-[#fff] border-black border flex items-center justify-center">
                  <h1 className="text-5xl font-protest text-black-A700">2</h1>
                </div>
                <div className="HeadText absolute top-3/4 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
                  <h1 className="text-xl text-[#F6DB86] capitalize text-center font-Chivo">
                    Setup account
                  </h1>
                  <p className="text-base text-[#fff] capitalize text-center">
                    Customize your account with farm details or industry needs
                    to begin selling or buying seamlessly.
                  </p>
                </div>
              </div>
              <div className="LastBanner relative w-1/2 h-full">
                <div className="h-24 w-24 rounded-full absolute top-1/3 left-full -translate-x-1/2 -translate-y-1/2 z-[99] overflow-hidden bg-[#fff] border-black border flex items-center justify-center">
                  <h1 className="text-5xl font-protest text-black-A700">3</h1>
                </div>
                <div className="HeadText absolute w-full top-3/4 left-full -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10">
                  <h1 className="text-xl text-[#F6DB86] capitalize text-center font-Chivo">
                    Start Buying / Selling
                  </h1>
                  <p className="text-base text-[#fff] capitalize text-center">
                    Discover what you need or sell your goods easily with our
                    user-friendly platform.
                  </p>
                </div>
              </div>
              <div className="h-[2px] w-full bg-[#EEB55B] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="landingThird bg-gray-50 flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] w-[60px]">
                  <Img className="h-8" src="images/img_clock.svg" alt="clock" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    &#8377;15.4L
                  </Text>
                  <Text
                    className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Shared from
                      <br />
                      Industrial transactions
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] w-[60px]">
                  <Img
                    className="h-8"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    25+
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    Locations Ready for Hassle-Free Delivery.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] w-[60px]">
                  <Img className="h-8" src="images/img_reply.svg" alt="reply" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    500
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Daily completed <br />
                      transactions.
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  100+
                </Text>
                <Text
                  className="text-bluegray-600 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20"
                >
                  Reagular Farmers.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[70vw] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[557px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 capitalize tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Simple & easy way to find your best product from best
                    farmers in your list
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[557px] md:max-w-full text-[#dfdfdf] font-medium text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    Embark on a seamless journey of discovery as you explore our
                    platform, connecting with over 100 dedicated farmers from
                    diverse regions across India. Uncover top-quality products
                    meticulously curated to meet your needs, ensuring
                    satisfaction with every purchase.
                  </Text>
                </div>
                <Button className="text-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center bg-white-A700">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[327px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/farm_img.avif"
                    alt="rectangleEighteen"
                  />
                  <Img
                    className="h-[218px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/farm_img1.jpg"
                    alt="rectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[218px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/farm_img2.jpg"
                    alt="rectangleNineteen"
                  />
                  <Img
                    className="h-[327px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/farm_img3.jpg"
                    alt="rectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
              <Img
                className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/expensive_food.jpg"
                alt="rectangleTwenty_One"
              />
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px]"
                      size="txtManropeExtraBold36"
                    >
                      Worlds most expensive vegetable growing in India
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[521px] md:max-w-full text-[#dfdfdf] text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      The world's most expensive vegetable, the Hop Shoots
                      (Humulus lupulus), known for their use in brewing beer,
                      are also cultivated in parts of India, fetching high
                      prices due to their rarity and unique flavor profile.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <CheckBox
                      className="font-semibold sm:pr-5 text-white-A700 text-left text-lg"
                      inputClassName="mr-[5px] mb-1"
                      name="findexcellentde_One"
                      id="findexcellentde_One"
                      label="Find excellent deals"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold sm:pr-5 text-white-A700 text-left text-lg"
                      inputClassName="mr-[5px] mb-1"
                      name="friendlyhost"
                      id="friendlyhost"
                      label="Friendly host & Fast support"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold sm:pr-5 text-white-A700 text-left text-lg"
                      inputClassName="mr-[5px] mb-1"
                      name="securepaymentsy_One"
                      id="securepaymentsy_One"
                      label="Secure payment system"
                    ></CheckBox>
                  </div>
                </div>
                <Button className="text-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center bg-white-A700">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <section className="relative w-full z-20 overflow-hidden bg-white-A700 pb-12 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                      FAQ
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                      Any Questions? Look Here
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                  <AccordionItem
                    header="How long we deliver your first blog post?"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-transparent flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                  size="txtManropeExtraBold36WhiteA700"
                >
                  News & Consult
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  onClick={() => navigate("")}
                  rightIcon={
                    <Img
                      className="h-6 mb-[3px] ml-2"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-orange-A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/news1.avif"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Farmers' Protest Today, In Delhi-Noida causes Massive Jams
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/news2.jpg"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Scientists welcome refining of gene reg
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/news3.avif"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Centre Proposes 5-Year Plan to Buy Pulses, Maize At MSP
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-[#D7C9A8] flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-20 rounded-[10px] w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtManropeRegular18"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Input
                    name="input"
                    placeholder="Enter your Email"
                    className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full"
                    wrapClassName="bg-gray-52 flex-1 sm:flex-1 pb-3 pl-4 pr-3 pt-[15px] rounded-[10px] w-[78%] sm:w-full"
                    type="email"
                  ></Input>
                  <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[126px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-[#F5EFDC] flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
