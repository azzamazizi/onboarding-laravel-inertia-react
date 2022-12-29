<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id','payment_method','total_item_price'
    ];
    protected $hidden = [
        'created_at','updated_at','deleted_at'
    ];
}
