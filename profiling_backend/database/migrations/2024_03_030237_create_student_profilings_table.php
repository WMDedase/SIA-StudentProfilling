<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_profilings', function (Blueprint $table) {
            $table->string('student_id', 11)->primary();


            //############### FILLABLES ##########################
            $table->string('student_lrn');
            $table->string('email')->unique('email');
            // STUDENT FULLNAME
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->string('extension')->nullable();
            
            /*Gender*/ $table->enum('sex_at_birth', ['male', 'female', 'others', 'prefer not to say'])->default('prefer not to say');

            //Birth details
            $table->date('birth_date');
            // $table->string('birth_place');

            //Address
            $table->string('region', 5)->nullable();
            $table->string('province', 50)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('barangay', 50)->nullable();
            $table->string('street', 50)->nullable();
            $table->string('zip_code', 50)->nullable();
            
            // CONTACT DETAILS
            $table->string('contact_no',11)->nullable();

            // RELIGION
            $table->string('religion', 50);
            
            // GUARDIAN DETAILS
            $table->string('guardian',50)->nullable();
            $table->string('guardian_mobileno',11)->nullable();

            // ACADEMIC DETAILS
             // school year column
             $table->string('year');
             $table->string('strand');
             $table->integer('grade_level');
             $table->string('section');
             // adviser column
             $table->unsignedBigInteger('adviser_id');
             $table->foreign('adviser_id')->references('id')->on('faculty_profile');
             // enrollment status
             $table->string('enrollment_status');
             $table->timestamp('enrollment_date')->userCurret();

            //  STUDENT IMAGE
            $table->mediumText('image')->nullable();
            // Status and other details
            $table->boolean('is_student')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_profilings');
    }
};
