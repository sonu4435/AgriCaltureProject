import React from "react";

const sizeClasses = {
    txtManropeSemiBold16Gray700: "font-manrope font-semibold",
    txtManropeExtraBold46: "font-extrabold font-manrope",
    txtManropeRegular18Gray700: "font-manrope font-normal",
    txtManropeBold18Gray900: "font-bold font-manrope",
    txtManropeExtraBold36: "font-extrabold font-manrope",
    txtManropeBold18Gray600: "font-bold font-manrope",
    txtManropeExtraBold28: "font-extrabold font-manrope",
    txtManropeSemiBold20: "font-manrope font-semibold",
    txtManropeBold18OrangeA700: "font-bold font-manrope",
    txtManropeRegular20: "font-manrope font-normal",
    txtManropeSemiBold16: "font-manrope font-semibold",
    txtManropeSemiBold18: "font-manrope font-semibold",
    txtManropeExtraBold36WhiteA700: "font-extrabold font-manrope",
    txtManropeBold24: "font-bold font-manrope",
    txtManropeSemiBold12: "font-manrope font-semibold",
    txtManropeSemiBold24: "font-manrope font-semibold",
    txtManropeRegular18: "font-manrope font-normal",
    txtMarkoOneRegular20: "font-markoone font-normal",
    txtManropeBold18Deeporange400: "font-bold font-manrope",
    txtManropeBold24Gray900: "font-bold font-manrope",
    txtManropeBold18: "font-bold font-manrope",
    txtArchivoBlackBold: "font-bold font-ArchivoBlack"
};

const Text2 = ({ children, className = "", size, as, ...restProps }) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-left ${className} ${size && sizeClasses[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text2 };
