import React from "react";

const SelectInput = ({ className, children, ...promps }) => {
    return (
        <select
            {...promps}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
        >
           {children}
        </select>
    );
};

export default SelectInput;
