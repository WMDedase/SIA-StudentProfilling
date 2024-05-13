<?php

namespace App\Models\Registrar;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;
    protected $table = 'faculty_profile';
    public $timestamps = true;


    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'extension',
        'email',
        'contact_no',
        'position',
        'department',
        'region',
        'province',
        'city',
        'barangay',
        'street',
        'zip_code',
        'is_active',
    ];
}
