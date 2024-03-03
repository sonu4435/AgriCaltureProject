import React from "react";

const List = ({ children, classname, ...restProps }) => {
  return (
    <div className={classname} {...restProps}>
      {children}
    </div>
  );
};

export { List };
