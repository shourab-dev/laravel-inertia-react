import DataTable from "@/Components/DataTable";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const AllTasks = ({ auth }) => {
    return (
        <Authenticated
            user={auth.user}
            button={{
                title: "Add Task",
                url: route("task.add"),
            }}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Tasks
                </h2>
            }
        >
            <Head title="All Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <DataTable>
                                <thead>
                                    <tr>
                                        <th className="border border-slate-200 py-4">
                                            #
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            Task
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            User
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th
                                            colSpan={3}
                                            className="border border-slate-200 py-4"
                                        >
                                            search heree.....
                                        </th>
                                        <th
                                            colSpan={1}
                                            className="border border-slate-200 py-4"
                                        >
                                            priority here
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-200 py-4"></td>
                                        <td className="border border-slate-200 py-4"></td>
                                        <td className="border border-slate-200 py-4"></td>
                                        <td className="border border-slate-200 py-4"></td>
                                    </tr>
                                </tbody>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default AllTasks;
