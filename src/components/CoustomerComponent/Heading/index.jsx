import React from "react";

const sizes = {
  s: "text-sm font-bold leading-[17px]",
  md: "text-[22px] font-bold",
  xs: "text-xs font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700/90 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
