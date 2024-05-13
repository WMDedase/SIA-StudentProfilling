<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
    /**
     * Run the migrations.
     */
    {
        public function up(): void
        {
            Schema::create('student_profilings', function (Blueprint $table) {
                // STUDENT ID
                $table->string('student_id', 11)->primary();
                
                //############### FILLABLES ##########################
                $table->string('student_lrn');
                // STUDENT FULLNAMEW
                $table->string('first_name');
                $table->string('last_name');
                $table->string('middle_name')->nullable(true);
                $table->string('extension')->nullable(true);

                // CONTACT DETAILS
                $table->string('contact_no',11)->nullable(true);
                //Birth details
                $table->date('birth_date');
                $table->string('birth_place');
                //Personal details
                $table->string('civil_status');
                $table->enum('sex_at_birth', ['male', 'female', 'others', 'prefer not to say'])->default('prefer not to say');
                $table->string('citizenship', 50);
                $table->string('religion', 50);
                //Address
                $table->string('region', 5)->nullable(true);
                $table->string('province', 50)->nullable(true);
                $table->string('city', 50)->nullable(true);
                $table->string('barangay', 50)->nullable(true);
                $table->string('street', 50)->nullable(true);
                $table->string('zip_code', 50)->nullable(true);
                // Status and other details
                $table->boolean('is_student')->default(true);
                $table->foreignId('user_id')->nullable(true)->constrained('users')->onDelete('cascade');
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
