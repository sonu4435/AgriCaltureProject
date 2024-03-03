import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-normal",
  xl: "text-[25px] font-medium",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={` text-gray-600 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
