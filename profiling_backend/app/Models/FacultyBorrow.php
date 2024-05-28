<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FacultyBorrow extends Model
{
    protected $table = 'faculty_borrow';
    protected $primaryKey = 'borrow_id';
    public $timestamps = false; 
    protected $fillable = [
        'book_id', 'id', 'borrowed_date', 'return_duedate', 'borrow_status', 'access_no', 'return_date'
    ];
    public function book()
    {
        return $this->belongsTo(Book::class, 'book_id', 'book_id');
    }
    public function faculty()
    {
        return $this->belongsTo(Faculty::class, 'id', 'id');
    }
}
