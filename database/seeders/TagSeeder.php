<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response = Http::get('https://api.themoviedb.org/3/genre/movie/list?api_key='.env('API_KEY_MOVIE'));
        $response = json_decode($response, true);
        if ($response) {
            Tag::insertOrIgnore($response['genres']);
        }
    }
}
