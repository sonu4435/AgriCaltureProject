import React, { useState } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Img, Text, Text2 } from '../../Cindex';
import { Link } from 'react-router-dom';

export default function Sidebar4({ userProps }) {
  return (
    <Sidebar
      width="252px !important"
      className="h-screen top-0 bg-white-A700 shadow-sm !sticky overflow-auto"
    >
      <Text2
        className="text-orange-A700 capitalize text-2xl w-auto self-center py-5"
        size="txtMarkoOneRegular20"
      >
        Krishi setu
      </Text2>
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 10px 10px 28px",
            textTransform: "capitalize",
            width: "100%",
            gap: "12px",
            [`&:hover, &.ps-active`]: {
              color: "#438ffe",
              fontWeight: "500 !important",
              backgroundColor: "#edf5ff !important",
            },
          },
        }}
        renderExpandIcon={() => (
          <Img
            src="../../public/Cimages/img_arrow_right.svg"
            alt="arrowright_one"
            className="h-6 w-6 cursor-pointer"
          />
        )}
        className="flex flex-col items-center justify-start w-full mt-[65px]"
      >
        <Link to={`/${userProps.uid}/home`} className='scale-110 capitalize'>

          <MenuItem
            className='text-sm'
            icon={
              <Img
                src="/public/Cimages/img_frame_18.svg"
                alt="image_one"
                className="h-5 w-5 p-[.8px]"
              />
            }
          >
            Home
          </MenuItem>
        </Link>
        <Link to={`/${userProps.uid}/orderhistory`} className='scale-110 capitalize'>

          <MenuItem
            className='text-sm'
            icon={
              <Img
                src="/public/Cimages/img_group_257.svg"
                alt="image_one"
                className="h-5 w-5 p-[.8px]"
              />
            }
          >
            Orders
          </MenuItem>
        </Link>
        <Link to={`/${userProps.uid}/category`} className='scale-110 capitalize'>

          <MenuItem
            className='text-sm'
            icon={
              <Img
                src="/public/CCimages/img_frame_20.svg"
                alt="image_one"
                className="h-5 w-5 p-[.8px]"
              />
            }
          >
            Category
          </MenuItem>
        </Link>
        <Link to={`/${userProps.uid}/addproduct`} className='scale-110 capitalize'>

          <MenuItem
            className='text-[#6b57ff] text-lg capitalize font-semibold'
            icon={
              <Img
                src="/public/Himages/img_frame_21.svg"
                alt="image_one"
                className="h-5 w-5"
              />
            }
          >
            Add Products
          </MenuItem>
        </Link>
        <Link to={`/${userProps.uid}/dashboard`} className='scale-110 capitalize'>

          <MenuItem
            className='text-sm'
            icon={
              <Img
                src="/Cimages/img_frame_17.svg"
                alt="image_one"
                className="h-5 w-5 p-[.8px]"
              />
            }
          >
            Dashboard
          </MenuItem>
        </Link>
        {/* Repeat similar logic for other MenuItems and SubMenus */}
      </Menu>
    </Sidebar>
  );
}
