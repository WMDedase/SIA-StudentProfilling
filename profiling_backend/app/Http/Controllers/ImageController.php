<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Auth;
    
class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $image = Image::all();
        $data = [
            'status' => 200,
            'image' => $image
        ];
        return response()->json($data, 200);
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeStudIMG(Request $request)
    {
        //
        
        $image = new Image();
        $image->student_id = Auth::id();
        $image->student_id = $request->student_id;
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time(). '.' . $extension;
            $file->move('uploads/profile', $filename);
            $image->image = $filename;
        } else {
            return $request;
            $image->image ='';
        }

        $image->save();
        $data = [
            'status' => 200,
            'image' => $image
        ];
        return response()->json($image, 200);
    }
    public function storeFacultyIMG(Request $request)
    {
        //
        
        $image = new Image();
        $image->student_id = $request->student_id;
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time(). '.' . $extension;
            $file->move('uploads/profile', $filename);
            $image->image = $filename;
        } else {
            return $request;
            $image->image ='';
        }

        $image->save();
        $data = [
            'status' => 200,
            'image' => $image
        ];
        return response()->json($image, 200);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Image::where('student_id', $id)->pluck('image')->first();
        return  'http://127.0.0.1:8000/uploads/profile/'.$image;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Find the image record by student_id
        $image = Image::where('student_id', $id)->first();

        // Check if the image record exists
        if (!$image) {
            $image = new Image();
            $image->student_id = $id;
        }

        // Update the image if a new file is provided
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/profile', $filename);
            $image->image = $filename;
            $image->save();
        }

        // Return the updated image data
        return response()->json($image, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
