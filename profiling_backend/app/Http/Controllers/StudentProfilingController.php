<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\StudentProfiling;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


use Validator;

class StudentProfilingController extends Controller
{
    public function index() {
        $student = StudentProfiling::all();
        $data = [
            'status'=>200,
            'student'=>$student
        ];
        return response()->json($data, 200);

    }

    public function indexId($id) {
        $student = StudentProfiling::find($id);
        $data = [
            'status'=>200,
            'student'=>$student
        ];
        return response()->json($data, 200);

    }

    public function show($id)
    {
        // Fetch student profile with associated user data
        $studentProfile = StudentProfiling::with('user')->find($id);

        // Return response with student profile and associated user data
        return response()->json($studentProfile);
    }


    public function upload(Request $request)
{
    $validator = Validator::make($request->all(), [
        'password' => 'required|string|min:6',
        'student_lrn' => 'required',
        'first_name' => 'required',
        'last_name' => 'required',
        'middle_name' => 'required',
        'extension' => '',
        'contact_no' => 'required',
        'birth_date' => 'required|date',
        'birth_place' => 'required',
        'civil_status' => 'required',
        'sex_at_birth' => 'required',
        'citizenship' => 'required',
        'religion' => 'required',
        'region' => 'required',
        'province' => 'required',
        'city' => 'required',
        'barangay' => 'required',
        'street' => 'required',
        'zip_code' => 'required'
    ]);

    if ($validator->fails()) {
        $data = [
            "status" => 422,
            "message" => $validator->messages()
        ];
        return response()->json($data, 422);
    }

    // Hash the password
    $hashedPassword = Hash::make($request->password);

    // Create the user first
    $user = User::create([
        'name' => $request->first_name,
        'email' => $request->student_lrn . '@sna.edu.ph',
        'password' => $hashedPassword,
    ]);

    // Then create the student profile associated with the user
    $student = new StudentProfiling();
    $student->user_id = $user->id; // Assign the user ID to the student profile
    $student->student_lrn = $request->student_lrn;
    $student->first_name = $request->first_name;
    $student->last_name = $request->last_name;
    $student->middle_name = $request->middle_name;
    $student->extension = $request->extension;
    $student->contact_no = $request->contact_no;
    $student->birth_date = $request->birth_date;
    $student->birth_place = $request->birth_place;
    $student->civil_status = $request->civil_status;
    $student->sex_at_birth = $request->sex_at_birth;
    $student->citizenship = $request->citizenship;
    $student->religion = $request->religion;
    $student->region = $request->region;
    $student->province = $request->province;
    $student->city = $request->city;
    $student->barangay = $request->barangay;
    $student->street = $request->street;
    $student->zip_code = $request->zip_code;

    $student->save();

    $data = [
        "status" => 200,
        "message" => "Student Profile Uploaded Successfully"
    ];

    return response()->json($data, 200);
}

    public function edit(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'student_lrn'=>'required',
            'first_name'=>'required',
            'last_name'=>'required',
            'middle_name'=>'required',
            'extension'=>'',
            'contact_no'=>'required',
            //'email'=>'required|email',
            'birth_date'=>'required|date',
            'birth_place'=>'required',
            'civil_status'=>'required',
            'sex_at_birth'=>'required',
            'citizenship'=>'required',
            'religion'=>'required',
            'region'=>'required',
            'province'=>'required',
            'city'=>'required',
            'barangay'=>'required',
            'street'=>'required',
            'zip_code'=>'required'
        ]);

        if($validator->fails()) {

            $data = [
                "status"=>422,
                "message"=>$validator->messages()
            ];

            return response()->json($data,422);
        }

        else {
            $student = StudentProfiling::find($id);
            $student->student_lrn=$request->student_lrn;
            $student->first_name=$request->first_name;
            $student->last_name=$request->last_name;
            $student->middle_name=$request->middle_name;
            $student->extension=$request->extension;
            $student->contact_no=$request->contact_no;
            //$student->email=$request->email;
            $student->birth_date=$request->birth_date;
            $student->birth_place=$request->birth_place;
            $student->civil_status=$request->civil_status;
            $student->sex_at_birth=$request->sex_at_birth;
            $student->citizenship=$request->citizenship;
            $student->religion=$request->sreligion;
            $student->region=$request->region;
            $student->province=$request->province;
            $student->city=$request->city;
            $student->barangay=$request->barangay;
            $student->street=$request->street;
            $student->zip_code=$request->zip_code;

            $student->save();

            $data = [
                "status"=>"200",
                "message"=>"Student Profile Updated Successfully"
            ];

            return response()->json($data,200);

        }
    }

    public function delete($id) {
        $student = StudentProfiling::find($id);
        $student->delete();

        $data = [
            "status" => "200",
            "message" => "Student Profile Deleted Successfully"
        ];

        return response()->json($data,200);
    }

}
