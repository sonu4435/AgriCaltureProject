import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-medium leading-[15px]",
  xl: "text-[25px] font-medium",
  md: "text-sm font-medium leading-[17px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
