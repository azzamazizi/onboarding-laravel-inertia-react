import React from "react";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {

    const { tag } = usePage().props;
    console.log(tag);
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List Movie Tag</h2>}
        >
            <Head title="List Movie Tag"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="overflow-x-auto bg-white rounded shadow">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="text-white bg-gray-600">
                                        <tr className="font-bold text-left">
                                            <th className="px-6 pt-5 pb-4" style={{ "width" : "15px" }}>#</th>
                                            <th className="px-6 pt-5 pb-4">Tag Name</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tag.map(({ id, name, movie }) => (
                                            <tr key={id} className="">
                                                <td className="border-t flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{id}</td>
                                                <td className="border-t items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    <b>{name} :</b> {movie.map((movie) => (
                                                        movie.title + ', '
                                                    ))}
                                                </td>
                                                
                                            </tr>
                                        ))}
                                        {tag.length === 0 && (
                                            <tr>
                                                <td
                                                    className="px-6 py-4 border-t"
                                                    colSpan="4"
                                                >
                                                    Empty Data.
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