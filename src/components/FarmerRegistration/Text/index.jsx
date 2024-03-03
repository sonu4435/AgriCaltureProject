import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-medium",
  xl: "text-[25px] font-medium",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
