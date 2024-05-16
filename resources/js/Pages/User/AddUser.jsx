import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const AddUser = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const storeUser = (e) => {
        e.preventDefault();
        post(route("user.store"), {
            onSuccess: () => reset('name','email')
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            button={{
                title: "All Users",
                url: route("user.all"),
            }}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add User
                </h2>
            }
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={storeUser}>
                                <TextInput
                                    defaultValue={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-[100%]"
                                    placeholder="Enter User Name"
                                />
                                {errors.name && (
                                    <div className="text-red-500">
                                        {errors.name}
                                    </div>
                                )}
                                <TextInput
                                type="email"
                                    defaultValue={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-[100%] my-3"
                                    placeholder="User Email"
                                />

                                {errors.email && (
                                    <div className="text-red-500">
                                        {errors.email}
                                    </div>
                                )}

                                <TextInput
                                type="password"
                                    defaultValue={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-[100%] my-3"
                                    placeholder="User Password"
                                />
                                {errors.password && (
                                    <div className="text-red-500">
                                        {errors.password}
                                    </div>
                                )}
                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    Save User
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddUser;
