import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const AllTasks = ({ auth }) => {
    return (
        <Authenticated
            user={auth.user}
            button={{
                title: "Add User",
                url: route("user.add"),
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default AllTasks;
