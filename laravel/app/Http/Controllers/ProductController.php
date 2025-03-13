<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // Get all products
    public function getAllProducts() {
        $products = Product::all();
        return response()->json($products);
    }

    // Create a new product
    public function createProduct(Request $request) {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    // Get a product by ID
    public function getProduct($productId) {
        $product = Product::findOrFail($productId);
        return response()->json($product);
    }

    // Update a product
    public function updateProduct(Request $request, $productId) {
        $product = Product::findOrFail($productId);
        $product->update($request->all());
        return response()->json($product);
    }

    // Delete a product
    public function deleteProduct($productId) {
        $product = Product::findOrFail($productId);
        $product->delete();
        return response()->json(["message" => "Product deleted successfully"]);
    }
}
