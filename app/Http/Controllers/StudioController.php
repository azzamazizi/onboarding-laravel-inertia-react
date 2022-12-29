<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Studio;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class StudioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $studios = Studio::all();
        // dd($studios);
        return Inertia::render('Studio/Index', [
            'studios' => $studios
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Studio/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // try {
        //     $validator = Validator::make($request->all(), [
        //         'studio_number' => 'required',
        //         'seat_capacity' => 'required'
        //     ]);
            
        //     if ($validator->fails()) {
        //         return redirect()->route('studio.index')->with('failed', [ $validator->errors() ]);
        //     }

        //     Studio::create([
        //         'studio_number' => $request->studio_number,
        //         'seat_capacity' => $request->seat_capacity
        //     ]);

        //     return redirect()->route('studio.index')->with('success', 'Data berhasil disimpan');
        // } catch (\Throwable $th) {
        //     return redirect()->route('studio.index')->with('failed', $th->getMessage());
        // }
        // try {
            Validator::make($request->all(), [
                'studio_number' => 'required|numeric',
                'seat_capacity' => 'required|numeric',
            ])->validate();
    
            Studio::create($request->all());
            return redirect()->route('studio.index')->with('success', 'Data berhasil ditambahkan');

        // } catch (\Throwable $th) {
            // return redirect()->route('studio.index')->with('failed', $th->getMessage());
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Studio $studio)
    {
        return Inertia::render('Studio/Edit', [
            'studio' => $studio
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Studio $studio)
    {
        // try {
            Validator::make($request->all(), [
                'studio_number' => 'required|numeric',
                'seat_capacity' => 'required|numeric',
            ])->validate();

            $studio->update([
                'studio_number' => $request->studio_number,
                'seat_capacity' => $request->seat_capacity,
            ]);

            return redirect()->route('studio.index')->with('success', 'Data berhasil diperbarui');
        // } catch (\Throwable $th) {
            // return redirect()->route('studio.index')->with('failed', $th->getMessage());
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Studio $studio)
    {
        try {
            $studio->delete();
            return redirect()->route('studio.index')->with('success', 'Data berhasil dihapus');
        } catch (\Throwable $th) {
            return redirect()->route('studio.index')->with('failed', $th->getMessage());
        }
    }
}
