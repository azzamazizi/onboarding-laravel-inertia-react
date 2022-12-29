<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $table = 'movies';
    protected $primaryKey = 'id';
    protected $fillable = [
        'title','overview','poster','play_until'
    ];
    protected $hidden = [
        'created_at','updated_at','deleted_at'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'movie_tags');
    }

    public function schedules()
    {
        return $this->hasMany(movieSchedule::class);
    }
}
