<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Inertia\Inertia;

class MovieScheduleController extends Controller
{

    public function listMovies(Request $request)
    {
        
        return Inertia::render('Movie/MovieSchedule');

        // try {
        //     $keyword = $request->keyword;
        //     $date = $request->date;

        //     $list_movie = Movie::with('tags:id,name','schedules:id,studio_id,movie_id,start_time,end_time,price')->whereHas('schedules', function($query) use ($date){
        //         $query->where('date', 'like', '%'.$date.'%')
        //         ->whereNotNull('id');
        //     })->where('title', 'like', '%'.$keyword.'%')->paginate(10);

        //     $paging_item = $list_movie->items();
        //     $paging_item_filter = [];

        //     foreach ($paging_item as $key => $value) {
        //         $schedule = $value['schedules'];
        //         foreach ($schedule as $key_schedule => $value_schedule) {
        //             $schedule[$key_schedule]['studio_number'] = studioNumber($value_schedule->studio_id);
        //             $schedule[$key_schedule]['seat_remaining'] = seatReady($value_schedule->id);
        //         }
        //         $paging_item_filter[] = $paging_item[$key];
        //     }

        //     return response()->json([
        //         'status' => true,
        //         'data' => [
        //             'items' => $paging_item_filter,
        //             'pagination' => [
        //                 'page' => $list_movie->currentPage(),
        //                 'per_page' => $list_movie->perPage(),
        //                 'total_items' => $list_movie->count(),
        //                 'total_pages' => $list_movie->lastPage(),
        //                 'prev_page_link' => $list_movie->previousPageUrl(),
        //                 'next_page_link' => $list_movie->nextPageUrl()
        //             ]
        //         ],
        //         'message' => 'Data berhasil ditampilkan'
        //     ], 200);

        // } catch (\Throwable $th) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => $th->getMessage()
        //     ], 500);
        // }
    }
}
