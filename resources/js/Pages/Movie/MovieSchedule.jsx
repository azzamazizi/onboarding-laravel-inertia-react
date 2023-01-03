import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, useForm, usePage, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const MovieSchedule = (props) => {

    const { movieSchedule } = usePage().props;

    const destroy = async (id) => {
        if (confirm("Are you sure you want to delete this schedule?")) {
            Inertia.delete(route("movieSchedule.destroy", id));
        }
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
                                <InertiaLink
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("movieSchedule.create")}
                                >
                                    Create
                                </InertiaLink>
                            </div>

                            <form name="searchForm">
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label>Search Title</label> :
                                        <input className="w-100 px-4 py-2" label="Title" name="keyword" type="input" placeholder="Title Here" />
                                    </div>
                                    <div className="mb-4">
                                        <label>Search Date</label> :
                                        <input className="w-100 px-4 py-2" label="Title" name="date" type="input" placeholder="Date Here (yyyy-mm-dd)" />
                                    </div>
                                    <div className="mb-4">
                                        <button type="submit" className="px-6 py-2 text-white bg-yellow-500 rounded-md focus:outline-none">Search</button>&nbsp;
                                        <InertiaLink href={route("movieSchedule")} className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none">Reset</InertiaLink>
                                    </div>
                                </div>
                            </form><br/>

                            <div className="overflow-x-auto bg-white rounded shadow">
                                {movieSchedule.map(({ id,title,overview, tags, schedules }) => (
                                <ul key={id}>
                                    <li><b>Movie ID</b> : {id}</li>
                                    <li><b>Title</b> : {title}</li>
                                    <li><b>Overview</b> : {overview}</li>
                                    <li><b>Tags</b> : {tags.map((tags) => ( tags.name + ', '))}</li>
                                    <li><b>Schedule</b> :
                                        <table className="w-full whitespace-nowrap">
                                            <thead className="text-white bg-gray-600">
                                                <tr className="font-bold text-left">
                                                    <th className="" style={{ width:"auto" }}>Price</th>
                                                    <th className="" style={{ width:"15%" }}>Start Time</th>
                                                    <th className="" style={{ width:"15%" }}>End Time</th>
                                                    <th className="" style={{ width:"auto" }}>Date</th>
                                                    <th className="" style={{ width:"auto" }}>Studio Number</th>
                                                    <th className="" style={{ width:"auto" }}>Seat Remaining</th>
                                                    <th className="" style={{ width:"auto" }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {schedules.map((schedules) => (
                                                <tr key={schedules.id}>
                                                    <td className="">{schedules.price}</td>
                                                    <td className="">{schedules.start_time}</td>
                                                    <td className="">{schedules.end_time}</td>
                                                    <td className="">{schedules.date}</td>
                                                    <td className="">{schedules.studio_number}</td>
                                                    <td className="">{schedules.seat_remaining}</td>
                                                    <td>
                                                        <button type="button" className="px-2 font-bold text-white bg-red-500 sm rounded" onClick={() => destroy(schedules.id)}>Delete</button>&nbsp;
                                                        <InertiaLink href={route("order.preview", schedules.id)} target="_blank" className="px-2 font-bold text-white bg-blue-500 sm rounded" >Pick id:{schedules.id}</InertiaLink>

                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table> 
                                    </li>
                                    <br/>
                                    
                                </ul>    
                                ))}
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
};

export default MovieSchedule;