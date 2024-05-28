<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';
    protected $primaryKey = 'book_id';
    public $timestamps = false;
    protected $fillable = [
        'book_title', 'book_auth', 'book_sub', 'book_qty', 'is_archived', 'reason',
    ];

    public function category()
    {
        return $this->belongsTo(BookCategory::class, 'book_sub', 'book_sub');
    }
}

