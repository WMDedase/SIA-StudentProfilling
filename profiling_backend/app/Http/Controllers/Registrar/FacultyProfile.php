<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\registrar\Faculty;

class FacultyProfile extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $faculty = Faculty::all();
        $data = [
            'status'=>200,
            'faculty'=>$faculty
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
        //
        $faculty = new Faculty;
        $faculty->fill($request->all());
        $faculty->save();
        $data = [
            'status'=>200,
            'message'=>'Faculty has been successfully added.'
        ];
        return response()->json($data, 200);
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
