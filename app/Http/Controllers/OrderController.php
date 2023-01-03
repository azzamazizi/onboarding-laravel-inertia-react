<?php

namespace App\Http\Controllers;
use App\Helpers\StudioHelper;

use Illuminate\Http\Request;
use App\Helpers\Helpers;
use Illuminate\Support\Facades\Validator;
use App\Models\{ Order,OrderItem,MovieSchedule,Movie,MovieTag,Tag,Studio };
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function orderList(Order $order){
        // $order = Order::all();
        // return Inertia::render('Order/OrderList', [
        //     'order' => $order,
        // ]);

        return "orderList";

    }

    public function orderPreview(Request $request)
    {
        $schedule = MovieSchedule::findOrFail($request->id);
        $movie = Movie::find($schedule['movie_id']);
        $studio = Studio::find($schedule['studio_id']);
        $seat_capacity = StudioHelper::seatReady($schedule['id']);
        
        return Inertia::render('Order/OrderPreview', [
            'movie_schedule' => $schedule,
            'movie' => $movie,
            'studio' => $studio,
            'seat_capacity' => $seat_capacity,
        ]);
    }

    public function orderCheckout(Request $request)
    {
        
        $movie_schedule = MovieSchedule::find($request['movie_schedule_id']);
        $total_price = $movie_schedule['price'] * $request->qty;
        
        $checkout = Order::create([
            'user_id' => $request->user_id,
            'payment_method' => 'cash',
            'total_item_price' => $total_price
        ]);

        $checkout_item = OrderItem::create([
            'order_id' => $checkout->id,
            'movie_schedule_id' => $request->movie_schedule_id,
            'qty' => $request->qty,
            'price' => $movie_schedule['price'],
            'sub_total_price' => $total_price,
        ]);

        return redirect()->route('movieSchedule')->with('success', 'Data berhasil ditambahkan');

    }

}
