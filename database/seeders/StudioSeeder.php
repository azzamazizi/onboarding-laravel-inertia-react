<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('studios')->insert([
            'studio_number' => '5',
            'seat_capacity' => '100',
            'created_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('studios')->insert([
            'studio_number' => '6',
            'seat_capacity' => '100',
            'created_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('studios')->insert([
            'studio_number' => '7',
            'seat_capacity' => '100',
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }
}
