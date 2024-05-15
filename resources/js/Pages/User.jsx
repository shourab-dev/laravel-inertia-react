import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React from "react";

const User = ({ auth, users, queryParams = null }) => {
    const { data, links, meta } = users;
    queryParams = queryParams || {};

    const searchResult = (name, value) => {
        if (value.length >= 3 || value.length == 0) {
            if (value) {
                queryParams[name] = value;
            } else {
                delete queryParams[name];
            }
            console.log(queryParams, name, value);
            setTimeout(() => {
                return router.get(route("user.all"), queryParams);
            }, 150);
        }
    };

    const sortUsers = (column, direction) => {
        if (column && direction) {
            queryParams["sort"] = column;
            queryParams["direction"] = direction;
            router.get(route('user.all'), queryParams);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            button={{
                title: "Add User",
                url: route("user.add"),
            }}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-auto w-[100%] text-center border-collapse border border-slate-200">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-200 py-4">
                                            #
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            <button
                                                onClick={(e) =>
                                                    sortUsers(
                                                        "name",
                                                        queryParams?.sort ==
                                                            "name" &&
                                                            queryParams?.direction ==
                                                                "asc"
                                                            ? "desc"
                                                            : "asc"
                                                    )
                                                }
                                            >
                                                Name
                                            </button>
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            <button
                                                onClick={(e) =>
                                                    sortUsers(
                                                        "email",
                                                        queryParams?.sort ==
                                                            "email" &&
                                                            queryParams?.direction ==
                                                                "asc"
                                                            ? "desc"
                                                            : "asc"
                                                    )
                                                }
                                            >
                                                Email
                                            </button>
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            <button
                                                onClick={(e) =>
                                                    sortUsers(
                                                        "created_at",
                                                        queryParams?.sort ==
                                                            "created_at" &&
                                                            queryParams?.direction ==
                                                                "asc"
                                                            ? "desc"
                                                            : "asc"
                                                    )
                                                }
                                            >
                                                Created At
                                            </button>
                                        </th>
                                        <th className="border border-slate-200 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th
                                            colSpan={2}
                                            className="border border-slate-200 py-4"
                                        >
                                            <SelectInput
                                                defaultValue={
                                                    queryParams.status
                                                }
                                                className="w-[90%]"
                                                onChange={(e) =>
                                                    searchResult(
                                                        "status",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select</option>
                                                <option value={true}>
                                                    Active
                                                </option>
                                                <option value={false}>
                                                    De-active
                                                </option>
                                            </SelectInput>
                                        </th>
                                        <th
                                            className="border border-slate-200 py-4"
                                            colSpan={3}
                                        >
                                            <TextInput
                                                isFocused={
                                                    queryParams.searchable
                                                        ?.length > 0
                                                        ? true
                                                        : false
                                                }
                                                onKeyUp={(e) =>
                                                    searchResult(
                                                        "searchable",
                                                        e.target.value
                                                    )
                                                }
                                                defaultValue={
                                                    queryParams.searchable
                                                }
                                                className="w-[90%]"
                                                placeholder="Search here..."
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user, key) => (
                                        <tr key={user.id}>
                                            <td className="border border-slate-200 py-4">
                                                {users.meta.from + key}
                                            </td>
                                            <td className="border border-slate-200 py-4">
                                                {user.name}
                                            </td>
                                            <td className="border border-slate-200 py-4">
                                                {user.email}
                                            </td>
                                            <td className="border border-slate-200 py-4">
                                                {user.created_at}
                                            </td>
                                            <td className="border border-slate-200 py-4">
                                                ads
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination links={meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default User;
