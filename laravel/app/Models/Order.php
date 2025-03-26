<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Import SoftDeletes
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;

class Order extends Model
{
    use HasFactory, SoftDeletes; // Enable SoftDeletes

    protected $fillable = ['order_date', 'total_price', 'customer_id'];

    // Ensure 'deleted_at' is treated as a date
    protected $dates = ['deleted_at'];

    // Mutator and Accessor for 'order_date'
    protected function orderDate(): Attribute
    {
        return Attribute::make(
            // Mutator: Convert input format (DD/MM/YYYY HH:MM:SS) to MySQL format (Y-m-d H:i:s) before saving
            set: fn($value) => Carbon::createFromFormat('d/m/Y H:i:s', $value)->format('Y-m-d H:i:s'),

            // Accessor: Convert stored format (Y-m-d H:i:s) back to (DD/MM/YYYY HH:MM:SS) when retrieving
            get: fn($value) => Carbon::parse($value)->format('d/m/Y H:i:s')
        );
    }

    // Relationship with Customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    // Relationship with Payments
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    // Relationship with Products (via order_product pivot table)
    public function product()
    {
        return $this->belongsToMany(Product::class, 'order_product')
            ->withPivot('price', 'quantity')
            ->withTimestamps();
    }
}
