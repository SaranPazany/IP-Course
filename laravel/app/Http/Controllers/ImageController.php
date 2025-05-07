<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'image' => 'required|image|max:2048' // 2MB max
    ]);

    $image = $request->file('image');
    $fileName = uniqid() . '.' . $image->getClientOriginalExtension();

    // Upload the original image to MinIO
    $originalPath = Storage::disk('minio')->putFileAs('uploads', $image, $fileName);

    // Create thumbnail and save locally (or to MinIO if desired)
    $thumbnailPath = 'thumbnails/' . $fileName;

    $thumbnail = Image::make($image->getRealPath())
        ->fit(200, 200, function ($constraint) {
            $constraint->aspectRatio();
        });

    // Save thumbnail locally
    $thumbnail->save(storage_path('app/' . $thumbnailPath));

    return response()->json([
        'original' => $originalPath,
        'thumbnail' => $thumbnailPath
    ]);
    }
}
