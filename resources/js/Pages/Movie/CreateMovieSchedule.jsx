import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, InertiaLink, usePage } from "@inertiajs/inertia-react";

const Create = (props) => {
    const { data, setData, errors, post } = useForm({
        movie_id: "",
        studio_id: "",
        start_time: "",
        end_time: "",
        price: "",
        date: "",
    });

    const { movie, studio } = usePage().props;

    function handleSubmit(e) {
        e.preventDefault();
        post(route("movieSchedule.store"));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Movie Schedule</h2>}
        >
            <Head title="Create Movie Schedule"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <InertiaLink
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("movieSchedule") }
                                >
                                    Back
                                </InertiaLink>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label>Movie ID</label>
                                        <select className="w-full px-4 py-2" name="movie_id" onChange={(e) => setData("movie_id", e.target.value)}>
                                            {movie.map((movie) => (
                                                <option key={movie.id} value={movie.id}>{movie.id} : {movie.title}</option>
                                            ))}
                                        </select>
                                        <span className="text-red-600">
                                            {errors.movie_id}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>Studio ID</label>
                                        <select className="w-full px-4 py-2" name="studio_id" onChange={(e) => setData("studio_id", e.target.value)}>
                                            {studio.map((studio) => (
                                                <option key={studio.id} value={studio.id}>Studio Number : {studio.studio_number}, Seat Capacity : {studio.seat_capacity}</option>
                                            ))}
                                        </select>
                                        <span className="text-red-600">
                                            {errors.studio_id}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>Price</label>
                                        <input 
                                            type="text"
                                            className="w-full px-4 py-2" 
                                            label="Price" 
                                            name="price"
                                            value={data.price}
                                            onChange={(e) =>
                                                setData("price", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.price}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>Date</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="Date" 
                                            name="date"
                                            placeholder="yyyy-mm-dd"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.date}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>Start Time</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="Start Time" 
                                            name="start_time"
                                            value={data.start_time}
                                            onChange={(e) =>
                                                setData("start_time", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.start_time}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label>End Time</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="End Time" 
                                            name="end_time"
                                            value={data.end_time}
                                            onChange={(e) =>
                                                setData("end_time", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.end_time}
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="mt-4">
                                    <button 
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    )

}

export default Create;