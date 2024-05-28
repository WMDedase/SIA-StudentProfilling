<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\StudentProfiling;

class BorrowedBook extends Model
{
    protected $table = 'borrowed_books';
    protected $primaryKey = 'borrow_id';
    public $timestamps = false;
    protected $fillable = [
        'book_id', 'student_id', 'borrowed_date', 'return_duedate', 'borrow_status', 'access_no', 'return_date'
    ];
    public function book()
{
    return $this->belongsTo(Book::class, 'book_id', 'book_id');


}

}
