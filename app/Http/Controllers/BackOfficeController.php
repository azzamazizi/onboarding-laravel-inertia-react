<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Helpers\StudioHelper;

use Illuminate\Http\Request;
use App\Models\MovieTag;
use App\Models\Studio;
use App\Models\MovieSchedule;
use App\Models\Movie;
use App\Models\Tag;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Validator;

class BackOfficeController extends Controller
{
    public function listTags()
    {
        $tag = Tag::orderBy('name', 'asc')->with('movie:title')->get();
        return Inertia::render('Tag/Index', [
            'tag' => $tag,
        ]);
    }

    public function listMovies()
    {
        $movie = Movie::orderBy('title', 'asc')->with('tags:id,name')->get();
        return Inertia::render('Movie/MovieList', [
            'movie' => $movie,
        ]);
    }

    public function storeMovieSchedule(Request $request)
    {
        Validator::make($request->all(), [
            'movie_id' => 'required|numeric',
            'studio_id' => 'required|numeric',
            'start_time' => 'required',
            'end_time' => 'required',
            'price' => 'required|numeric',
            'date' => 'required',
        ])->validate();

        try {
            MovieSchedule::create($request->all());
            return redirect()->route('movieSchedule');
            
        } catch (\Throwable $th) {
            return redirect()->route('movieSchedule')->with('failed', $th->getMessage());
        }
    }

    public function createMovieSchedule()
    {
        $movie = Movie::orderBy('title', 'asc')->with('schedules')->get();
        $studio = Studio::all();
        return Inertia::render('Movie/CreateMovieSchedule', [
            'movie' => $movie,
            'studio' => $studio,
        ]);
    }

    public function listMovieSchedule(Request $request)
    {
        $date = $request->date;
        $keyword = $request->keyword;

        $movieSchedule = Movie::with('tags:id,name','schedules:id,studio_id,movie_id,start_time,end_time,price,date')->whereHas('schedules', function($query) use ($date){
            $query->where('date', 'like', '%'.$date.'%')
            ->whereNotNull('id');
        })->where('title', 'like', '%'.$keyword.'%');

        $paging_item = $movieSchedule->get();
        $paging_item_filter = [];

        foreach ($paging_item as $key => $value) {
            $schedule = $value['schedules'];
            foreach ($schedule as $key_schedule => $value_schedule) {
                $schedule[$key_schedule]['studio_number'] = StudioHelper::studioNumber($value_schedule->studio_id);
                $schedule[$key_schedule]['seat_remaining'] = StudioHelper::seatReady($value_schedule->id);
            }
            $paging_item_filter[] = $paging_item[$key];
        }

        // return $paging_item_filter;
        
        return Inertia::render('Movie/MovieSchedule', [
            'movieSchedule' => $paging_item_filter,
        ]);
    }

    public function destroyMovieSchedule(MovieSchedule $movieSchedule)
    {
        // try {
            $movieSchedule->delete();
            return redirect()->route('movieSchedule')->with('success', 'Data berhasil dihapus');
        // } catch (\Throwable $th) {
            // return redirect()->route('movieSchedule')->with('failed', $th->getMessage());
        // }   
    }
}
