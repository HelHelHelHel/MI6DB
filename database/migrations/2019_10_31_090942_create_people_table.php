<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('alias_id');
            $table->unique('id','alias_id');
            $table->unsignedBigInteger('img_id');
            $table->unsignedBigInteger('status_id');

            $table->string('name');
            $table->string('title');
            $table->integer('age');
            $table->string('year_of_birth');
            $table->string('year_of_death');
            $table->string('special_features');
            $table->string('hair_color');
            $table->string('eye_color');
            $table->string('height');
            $table->string('weight');
            $table->string('nationality');
            $table->string('occupation');
            $table->string('status_text');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
