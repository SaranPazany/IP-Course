<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // --- Get /api/categories
    public function getAllCategories() {
        $categories = Category::all();
        return response()->json([
            'message' => 'success',
            'data' => $categories
        ]);
    }

    // --- Post /api/categories
    public function createCategory(Request $request) {
        $category = Category::create($request->all());
        return response()->json([
            'message' => 'success',
            'data' => $category
        ], 201);
    }

    // --- Get /api/categories/{categoryId}
    public function getCategory($categoryId) {
        $category = Category::findOrFail($categoryId);
        return response()->json([
            'message' => 'success',
            'data' => $category
        ]);
    }

    // --- Patch /api/categories/{categoryId}
    public function updateCategory(Request $request, $categoryId) {
        $category = Category::findOrFail($categoryId);
        $category->update($request->all());
        return response()->json([
            'message' => 'success',
            'data' => $category
        ]);
    }

    // --- Delete /api/categories/{categoryId}
    public function deleteCategory($categoryId) {
        $category = Category::findOrFail($categoryId);
        $category->delete();
        return response()->json([
            'message' => 'success',
            'data' => ["message" => "Category deleted successfully"]
        ]);
    }

    // --- Get /api/categories/{categoryId}/products (New Method)
    public function getProductsByCategory($categoryId) {
        $category = Category::findOrFail($categoryId);
        $products = $category->products; // Assuming a relationship is defined
        return response()->json([
            'message' => 'success',
            'data' => $products
        ]);
    }
}
