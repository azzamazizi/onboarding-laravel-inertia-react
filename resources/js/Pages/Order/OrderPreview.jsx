import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, useForm, usePage } from "@inertiajs/inertia-react";
import { useParams } from "react-router-dom";

const OrderPreview = (props) => {

    const { movie_schedule, movie, studio, seat_capacity, auth } = usePage().props;
    const { data, setData, errors, post } = useForm({
        movie_schedule_id: movie_schedule.id,
        qty: "",
        user_id: auth.user.id,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("order.checkout"));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Movie Schedule</h2>}
        >
            <Head title="Movie Schedule"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <InertiaLink className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none" href={route("movieSchedule")}>Back to Schedule</InertiaLink>
                            </div>

                            <div className="overflow-x-auto bg-white rounded shadow">
                                <ul>
                                    <li><b>Movie ID</b> : {movie.id}</li>
                                    <li><b>Title</b> : {movie.title}</li>
                                    <li><b>Overview</b> : {movie.overview}</li>
                                    <li><b>Schedules</b> :
                                        <table className="w-full whitespace-nowrap">
                                            <thead className="text-white bg-gray-600">
                                                <tr className="font-bold text-left">
                                                    <th className="" style={{ width:"auto" }}>Price</th>
                                                    <th className="" style={{ width:"15%" }}>Start Time</th>
                                                    <th className="" style={{ width:"15%" }}>End Time</th>
                                                    <th className="" style={{ width:"auto" }}>Date</th>
                                                    <th className="" style={{ width:"auto" }}>Studio Number</th>
                                                    <th className="" style={{ width:"auto" }}>Seat Remaining</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{movie_schedule.price}</td>
                                                    <td>{movie_schedule.start_time}</td>
                                                    <td>{movie_schedule.end_time}</td>
                                                    <td>{movie_schedule.date}</td>
                                                    <td>{studio.studio_number}</td>
                                                    <td>{seat_capacity}</td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                    </li>
                                </ul>

                                
                            </div><br/>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    {/* <input type="text" label="movie_id" name="movie_schedule_id" value={movie_schedule.id} onChange={(e) => setData("movie_schedule_id", e.target.value)} /> */}
                                    <div className="mb-4">
                                        <label>Qty</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2" 
                                            label="Qty" 
                                            name="qty"
                                            placeholder="Number"
                                            value={data.qty}
                                            onChange={(e) =>
                                                setData("qty", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.qty}
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                    <button 
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    )
}

export default OrderPreview;