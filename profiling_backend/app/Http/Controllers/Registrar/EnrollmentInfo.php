<?php

namespace App\Http\Controllers\Registrar;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

// MODELS IMPORT
use App\Models\Registrar\Enrollment;

class EnrollmentInfo extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $enrollments = Enrollment::with([
            'student', 
            'adviser' => function($query) {
                $query->select('id', \DB::raw("CONCAT(fname, ' ', COALESCE(mname, ''), ' ', lname) AS full_name"), 'department');
            }
        ])->get();
        $data = [
            'status'=>200,
            'enrollments'=>$enrollments
        ];
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
        $request->merge(['enrollment_status' => 'ENROLLED']);
        //
        $enroll = new Enrollment;
        $enroll->fill($request->all());
        $enroll->student_id = Auth::id();
        $enroll->student_id = $request->student_id;
        $enroll->adviser_id = Auth::id();
        $enroll->adviser_id = $request->adviser_id;
        $enroll->save();

        $data = [
            'status'=>200,
            'message'=>'Enrollment has been successfully added.'
        ];


        return  response()->json($data, 200);
        echo('inside store');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
