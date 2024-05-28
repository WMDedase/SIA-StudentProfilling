<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\registrar\Faculty;
use App\Models\Image;
use Validator;

class FacultyProfile extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    // Retrieve faculty data
    $faculty = Faculty::all();

    // Iterate over each faculty member
    foreach ($faculty as $facultyMember) {
        // Retrieve the image for the current faculty member based on student_id
        $image = Image::where('student_id', $facultyMember->id)->first();

        // Attach the image to the faculty member
        $facultyMember->image = $image;
    }

    // Prepare the response data
    $data = [
        'status' => 200,
        'faculty' => $faculty
    ];

    // Return the JSON response
    return response()->json($data, 200);
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'fname' => 'required',
            'mname' => 'required',
            'lname' => 'required',
            'contact_no' => 'required',
            'position' => 'required',
            'department' => 'required',
            'region' => 'required',
            'province' => 'required',
            'city' => 'required',
            'barangay' => 'required',
            'street' => 'required',
            'zip_code' => 'required',
             
        ]);

        if($validator->fails()) {

            $data = [
                "status"=>422,
                "message"=>$validator->messages()
            ];

            return response()->json($data,422);
        } else {
            $faculty = new Faculty;
            $faculty->fill($request->all());
            $faculty->email = $request->lname.'sna@edu.ph';
            $faculty->save();
            $data = [
                'status'=>200,
                'message'=>'Faculty has been successfully added.'
            ];
            return response()->json($data, 200);
        }

    }

    /**
     * Display the specified resource.
     */
    // public function show(string $id)
    // {
    //     $faculty = new o
    // }

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
