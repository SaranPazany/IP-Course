<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Category Routes
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'getAllCategories'); // Get all categories
    Route::post('/', 'createCategory'); // Create a category
    Route::get('/{categoryId}', 'getCategory'); // Get a category by ID
    Route::patch('/{categoryId}', 'updateCategory'); // Update a category
    Route::delete('/{categoryId}', 'deleteCategory'); // Delete a category
    Route::get('/{categoryId}/products', 'getProductsByCategory'); // Get all products for a category
});

// Product Routes
Route::controller(ProductController::class)->prefix('products')->group(function () {
    Route::get('/', 'getAllProducts'); // Get all products
    Route::post('/', 'createProduct'); // Create a product
    Route::get('/{productId}', 'getProduct'); // Get a product by ID
    Route::patch('/{productId}', 'updateProduct'); // Update a product
    Route::delete('/{productId}', 'deleteProduct'); // Delete a product
});
