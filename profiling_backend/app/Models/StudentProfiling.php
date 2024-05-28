<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Registrar\Faculty;

class StudentProfiling extends Model
{
    use HasFactory;
    protected $primaryKey = 'student_id'; // Set the primary key

    public $incrementing = false; // Ensure Laravel doesn't assume ID is auto-incrementing

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Generate custom primary key
            $year = date('Y');
            $randomDigits = str_pad(mt_rand(0, 99999), 5, '0', STR_PAD_LEFT); // Random 4 digits
            $studentID = $year . $randomDigits;

            $model->student_id = $studentID;
            $model->email = $studentID . '@sna.edu.ph';
    

            // Generate random password
            // $model->password = static::generatePassword();
        });
    }

    protected $fillable = [
        'student_id',
        'email',
        
        'student_lrn',
        'first_name',
        'last_name',
        'middle_name',
        'extension',
        'sex_at_birth',
        'birth_date',
        
        'region',
        'province',
        'city',
        'barangay',
        'street',
        'zip_code',

        'year',
        
        'religion',
        'contact_no',
        'guardian',
        'guardian_mobileno',
        'strand',
        'grade_level',
        'section',
        'adviser_id',
        'enrollment_status',
        'enrollment_date',
        'image'
        
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function adviser()
    {
        return $this->belongsTo(Faculty::class, 'adviser_id', 'id');
    }

    public function image(){
        return $this->belongsTo(Image::class, 'student_id', 'student_id');
    }
}
