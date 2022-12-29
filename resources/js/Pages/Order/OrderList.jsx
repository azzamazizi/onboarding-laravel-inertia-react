import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

const OrderList = (props) => {

    const { order } = usePage().props;



    return(
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List Order</h2>}
        >
            <Head title="List Order"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

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
                                        {order.map(({ id, studio_number, seat_capacity }) => (
                                            <tr key={id} className="">
                                                <td className="border-t flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{id}</td>
                                                <td className="border-t items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{studio_number}</td>
                                                <td className="border-t items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{seat_capacity}</td>
                                                <td className="border-t">
                                                    
                                                </td>
                                            </tr>
                                        ))}
                                        {order.length === 0 && (
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
    )

}

export default OrderList;