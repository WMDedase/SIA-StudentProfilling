<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Image extends Model
{
    use HasFactory;

    protected $table = 'image';

    protected $fillable = [
        'student_id',
        'image'
    ];

    public function student() {
        return $this->hasOne(StudentProfiling::class, 'student_id', 'id');
    }
    public function faculty() {
        return $this->hasOne(Faculty::class, 'adviser_id', 'id');
    }
}
