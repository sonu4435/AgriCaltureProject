import React, { useState } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Img, Text, Text2 } from '../../Cindex';
import { Link } from 'react-router-dom';

export default function Sidebar4({ userProps }) {
  return (
    <>
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
              className='text-[#6b57ff] text-lg capitalize font-semibold'
              icon={
                <Img
                  src="/public/CCimages/img_frame_20.svg"
                  alt="image_one"
                  className="h-5 w-5"
                />
              }
            >
              category
            </MenuItem>
          </Link>
          <Link to={`/${userProps.uid}/addproduct`} className='scale-110 capitalize'>

            <MenuItem
              className='text-sm'
              icon={
                <Img
                  src="/public/Himages/img_frame_21.svg"
                  alt="image_one"
                  className="h-5 w-5 p-[.8px]"
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
      <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-sm">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form class="mt-4 border-t border-gray-200">
          <h3 class="sr-only">Categories</h3>
          <ul role="list" class="px-2 py-3 font-medium text-gray-900">
            <li>
              <a href="#" class="block px-2 py-3">Totes</a>
            </li>
            <li>
              <a href="#" class="block px-2 py-3">Backpacks</a>
            </li>
            <li>
              <a href="#" class="block px-2 py-3">Travel Bags</a>
            </li>
            <li>
              <a href="#" class="block px-2 py-3">Hip Bags</a>
            </li>
            <li>
              <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
            </li>
          </ul>
        </form >
        <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                <span class="font-medium text-gray-900">Category</span>
                <span class="ml-6 flex items-center">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
            </div>
            <div class="pt-6" id="filter-section-mobile-1">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                </div>
                <div class="flex items-center">
                  <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                </div>
                <div class="flex items-center">
                  <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                </div>
                <div class="flex items-center">
                  <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                </div>
                <div class="flex items-center">
                  <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </Sidebar>
</>
  );
}
