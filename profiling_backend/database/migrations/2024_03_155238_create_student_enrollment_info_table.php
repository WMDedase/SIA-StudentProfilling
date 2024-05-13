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
        Schema::create('student_enrollment_info', function (Blueprint $table) {
            $table->id();
            // student_id column
            $table->string('student_id', 11);
            $table->foreign('student_id')->references('student_id')->on('student_profilings')->onDelete('cascade');
            // school year column
            $table->integer('year');
            $table->string('strand');
            $table->integer('grade_level');
            $table->string('section');
            // adviser column
            $table->unsignedBigInteger('adviser_id');
            $table->foreign('adviser_id')->references('id')->on('faculty_profile');
            // enrollment status
            $table->string('enrollment_status');
            $table->date('enrollment_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_enrollment_info');
    }
};
