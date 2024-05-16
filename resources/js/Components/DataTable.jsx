import React from "react";

const DataTable = ({ children }) => {
    return (
        <table className="table-auto w-[100%] text-center border-collapse border border-slate-200">
            {children}
        </table>
    );
};

export default DataTable;
