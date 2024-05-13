<?php

use App\Http\Controllers\StudentFamilyInfoController;
use App\Http\Controllers\StudentLoginController;
use App\Http\Controllers\Registrar\EnrollmentInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentProfilingController;
use App\Http\Controllers\Registrar\FacultyProfile;
use App\Http\Controllers\Registrar\AlumniProfile;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    // Eager load the student profile relationship
    $user = $request->user();
    $user->load('studentProfile');

    return $user;
});
//STUDENT PROFILE HANDLING
Route::post('/login', [StudentLoginController::class, 'authenticate']);
Route::get('/logout', [StudentLoginController::class, 'logout'])->middleware('auth:sanctum');
Route::get('student',[StudentProfilingController::class,'index']);
Route::get('student/{id}',[StudentProfilingController::class,'indexId']);
Route::get('/student/{id}', [StudentProfilingController::class, 'show']);
Route::post('student',[StudentProfilingController::class,'upload']);
Route::put('student/edit/{id}',[StudentProfilingController::class,'edit']);
Route::delete('student/edit/{id}',[StudentProfilingController::class,'delete']);

//STUDENT FAMILYINFO
Route::get('studentfamily',[StudentFamilyInfoController::class,'getFamilyInfo']);
Route::post('studentfamily',[StudentFamilyInfoController::class,'storeFamilyInfo']);


// STUDENT ENROLLMENT INFO
Route::get('enrollmentinfo',[EnrollmentInfo::class,'index']);
Route::get('faculty',[FacultyProfile::class,'index']);



// DATA ENTRIES
Route::get('alumni',[AlumniProfile::class,'index']);


// ################## POST METHODS ##################

// STUDENT ENROLMMENT INFO
Route::post('enrollmentinfo',[EnrollmentInfo::class,'store']);
// FACULTY PROFILE INFO
Route::post('faculty',[FacultyProfile::class,'store']);
// ALUMNI PROFILE INFO
Route::post('alumni',[AlumniProfile::class,'store']);

