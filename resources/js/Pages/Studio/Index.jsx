import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const { studios } = usePage().props;
    
    const destroy = async (id) => {
        if (confirm("Are you sure you want to delete this data?")) {
            Inertia.delete(route("studio.destroy", id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List Studio</h2>}
        >
            <Head title="List Studio"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <InertiaLink
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("studio.create")}
                                >
                                    Create
                                </InertiaLink>
                            </div>

                            <div className="overflow-x-auto bg-white rounded shadow">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="text-white bg-gray-600">
                                        <tr className="font-bold text-left">
                                            <th className="px-6 pt-5 pb-4">#</th>
                                            <th className="px-6 pt-5 pb-4">Studio Number</th>
                                            <th className="px-6 pt-5 pb-4">Seat Capacity</th>
                                            <th className="px-6 pt-5 pb-4">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studios.map(({ id, studio_number, seat_capacity }) => (
                                            <tr key={id} className="">
                                                <td className="border-t flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{id}</td>
                                                <td className="border-t items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{studio_number}</td>
                                                <td className="border-t items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{seat_capacity}</td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route("studio.edit", id)}
                                                    >
                                                        Edit
                                                    </InertiaLink>&nbsp;
                                                    <button
                                                        onClick={() => destroy(id)}
                                                        className="px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                        tabIndex="-1"
                                                        type="button"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {studios.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    No contacts found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
        </Authenticated>
    );
};

export default Index;