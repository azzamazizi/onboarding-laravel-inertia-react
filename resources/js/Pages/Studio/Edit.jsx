import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

const Edit = (props) => {

    const { studio } = usePage().props;
    const { data, setData, put, errors } = useForm({
        studio_number: studio.studio_number || "",
        seat_capacity: studio.seat_capacity || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("studio.update", studio.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this data?")) {
            // alert(studio.id);
            Inertia.delete(route("studio.destroy", studio.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Studio</h2>}
        >
            <Head title="Edit Studio"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <InertiaLink
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("studio.index") }
                                >
                                    Back
                                </InertiaLink>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label>Studio Number</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="Studio Number" 
                                            name="studio_number"
                                            value={data.studio_number}
                                            onChange={ (e) =>
                                                setData("studio_number", e.target.value) 
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.studio_number}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>Seat Capacity</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="Seat Capacity" 
                                            name="seat_capacity"
                                            value={data.seat_capacity}
                                            onChange={ (e) =>
                                                setData("seat_capacity", e.target.value) 
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.seat_capacity}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button 
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                    &nbsp;
                                    <button 
                                        onClick={destroy}
                                        tabIndex="-1"
                                        type="button"
                                        className="px-6 py-2 font-bold text-white bg-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );

}

export default Edit;