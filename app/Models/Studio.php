<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studio extends Model
{
    use HasFactory;

    protected $table = 'studios';
    protected $primaryKey = 'id';
    protected $fillable = [
        'studio_number','seat_capacity'
    ];
    protected $hidden = [
        'created_at','updated_at','deleted_at'
    ];
}
