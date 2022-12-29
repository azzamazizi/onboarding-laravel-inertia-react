<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieSchedule extends Model
{
    use HasFactory;

    protected $table = 'movie_schedules';
    protected $primaryKey = 'id';
    protected $fillable = [
        'movie_id','studio_id','start_time','end_time','price','date'
    ];
    protected $hidden = [
        'created_at','updated_at','deleted_at'
    ];

    public function movie()
    {
        return $this->hasMany(MovieSchedule::class, 'id', 'movie_id');
    }
    
}
