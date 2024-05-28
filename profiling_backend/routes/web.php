<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// CONTROLLERS FOR PROFILING
use App\Http\Controllers\StudentFamilyInfoController;
use App\Http\Controllers\StudentLoginController;
use App\Http\Controllers\StudentProfilingController;
use App\Http\Controllers\ImageController;

// REGISTRAR CONTROLLERS
use App\Http\Controllers\Registrar\EnrollmentInfo;
use App\Http\Controllers\Registrar\FacultyProfile;
use App\Http\Controllers\Registrar\AlumniProfile;
use App\Http\Controllers\Registrar\StudentRecords;

//LIBRARY CONTROLLERS
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\BorrowedBookController;
use App\Http\Controllers\LibrarianController;
use App\Http\Controllers\FacultyBorrowController;
use App\Http\Controllers\LibraryStatusController;

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
    return $request->user();
});
//STUDENT PROFILE HANDLING
Route::post('/login', [StudentLoginController::class, 'authenticate']);
Route::get('student',[StudentProfilingController::class,'index']);
Route::get('student/{id}',[StudentProfilingController::class,'indexId']);
Route::post('student',[StudentProfilingController::class,'upload']);
Route::put('student/edit/{id}',[StudentProfilingController::class,'edit']);
Route::delete('student/edit/{id}',[StudentProfilingController::class,'delete']);

//STUDENT FAMILYINFO
Route::get('studentfamily',[StudentFamilyInfoController::class,'getFamilyInfo']);
Route::post('studentfamily',[StudentFamilyInfoController::class,'storeFamilyInfo']);


// STUDENT ENROLLMENT INFO
Route::get('faculty',[FacultyProfile::class,'index']);
Route::get('count',[StudentRecords::class,'getCounts']);
Route::get('countGrade',[StudentRecords::class,'getGradeCounts']);



// DATA ENTRIES
Route::get('jhs',[StudentRecords::class, 'getJHS']);
Route::get('shs',[StudentRecords::class, 'getSHS']);
Route::get('alumni',[AlumniProfile::class,'index']);


// ################## POST METHODS ##################
// FACULTY PROFILE INFO
Route::post('faculty',[FacultyProfile::class,'store']);
// ALUMNI PROFILE INFO
Route::post('alumni',[AlumniProfile::class,'store']);




Route::get('image', [ImageController::class, 'index']);
Route::get('image/{id}', [ImageController::class, 'show']);
Route::post('imageStud', [ImageController::class, 'storeStudIMG']);
Route::post('imageFaculty', [ImageController::class, 'storeFacultyIMG']);
Route::put('image/{id}', [ImageController::class, 'update']);

Route::prefix('api')->group(function () {
    // Borrowed Books
    Route::get('/borrowstatus/new', [BorrowedBookController::class, 'showNewestStatusId']); //check
    Route::get('/borrowstatus', [BorrowedBookController::class, 'allBorrows']); //check
    Route::post('/borrowstatus', [BorrowedBookController::class, 'createBorrowStatus']); //check
    Route::get('/borrowstatus/user/{id}', [BorrowedBookController::class, 'getAllBorrowByStudent']); //check
    Route::get('/borrowstatus/borrow/{id}', [BorrowedBookController::class, 'getAllBorrowByBorrow']); //check
    Route::put('/borrowstatus/{id}', [BorrowedBookController::class, 'updateBorrowStatus']); //check
    Route::put('/borrowstatus/cancel/{id}', [BorrowedBookController::class, 'cancelBorrowStatus']); //not needed

    // Books
    Route::get('/books', [BookController::class, 'allBooks']); //check
    Route::get('/books/{id}', [BookController::class, 'showABook']); //check
    Route::post('/books', [BookController::class, 'createBook']); //check
    Route::delete('/books/{id}', [BookController::class, 'deleteBookP']); //check
    Route::put('/books/{id}', [BookController::class, 'updateBookP']); //check
    Route::put('/books/archive/{id}', [BookController::class, 'archiveBook']);
    Route::put('/books/unarchive/{id}', [BookController::class, 'unarchiveBook']);

    // Categories
    Route::get('/category', [BookCategoryController::class, 'allCategory']); //check
    Route::get('/category/{id}', [BookCategoryController::class, 'showACategory']); //check
    Route::post('/category', [BookCategoryController::class, 'createCategory']); //check
    Route::delete('/category/{id}', [BookCategoryController::class, 'deleteCategory']); //check
    Route::put('/category/{id}', [BookCategoryController::class, 'updateCategory']); //check
    Route::put('/category/archive/{id}', [BookCategoryController::class, 'archiveCategory']);
    Route::put('/category/unarchive/{id}', [BookCategoryController::class, 'unarchiveCategory']);

    // Faculty Borrows
    Route::get('/faculty/borrows', [FacultyBorrowController::class, 'allFacultyBorrows']);
    Route::post('/faculty/borrows', [FacultyBorrowController::class, 'createFacultyBorrow']);
    Route::get('/faculty/borrows/{id}', [FacultyBorrowController::class, 'getFacultyBorrow']);
    Route::put('/faculty/borrows/update/{id}', [FacultyBorrowController::class, 'updateFacultyBorrowStatus']);
    Route::put('/faculty/damaged/{id}', [FacultyBorrowController::class, 'damagedFacultyBorrowStatus']);
    Route::put('/faculty/borrows/cancel/{id}', [FacultyBorrowController::class, 'cancelFacultyBorrowStatus']);

    //Librarian
    Route::get('/librarian', [LibrarianController::class, 'allLibrarian']);

    //Library Status
    Route::get('/librarystatus', [LibraryStatusController::class, 'allLibStat']);
    Route::get('/librarystatus/{id}', [LibraryStatusController::class, 'showALibStat']);
});

