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
        Schema::create('request_document', function (Blueprint $table) {
            $table->id();
            $table->string('student_id', 11);
            $table->foreign('student_id')->references('student_id')->on('student_profilings')->onDelete('cascade');
            $table->string('document_name');
            $table->string('document_type');
            $table->string('document_status');
            $table->string('document_path');
            $table->string('document_remarks')->nullable(true);
            $table->string('document_request_date');
            $table->string('document_release_date')->nullable(true);
            $table->string('document_request_purpose');
            $table->string('document_request_purpose_others')->nullable(true);
            $table->string('document_request_purpose_details')->nullable(true);
            $table->string('document_request_purpose_details_others')->nullable(true);
            $table->string('document_request_purpose_details_others_specify')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_document');
    }
};
