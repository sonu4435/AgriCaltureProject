import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-sm",
};
const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    blue_A200: "bg-blue-A200 text-white-A700",
    green_50: "bg-green-50 text-green-500",
    blue_50: "bg-blue-50 text-blue-A200",
    gray_50: "bg-gray-50",
  },
  outline: {
    blue_A200: "border-blue-A200 border border-solid text-blue-A200",
  },
};
const sizes = {
  xl: "h-10 px-2.5",
  "3xl": "h-[60px] pl-[21px] pr-[35px] text-base",
  "2xl": "h-[60px] px-[15px]",
  "4xl": "h-[70px] px-5",
  md: "h-[35px] px-8 text-[15px]",
  xs: "h-[30px] px-1.5",
  lg: "h-[35px] px-1.5",
  sm: "h-[31px] px-[19px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "blue_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "3xl", "2xl", "4xl", "md", "xs", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["green_500", "blue_A200", "green_50", "blue_50", "gray_50"]),
};

export { Button };
