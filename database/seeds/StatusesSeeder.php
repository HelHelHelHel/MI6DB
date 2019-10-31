<?php

use Illuminate\Database\Seeder;
use App\Status;
class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Status::insert([
            ['status' =>  'Active'],
            ['status'=> 'Alive'],
            ['status'=> 'Arrested'],
            ['status'=> 'Deceased'],
            ['status'=> 'In Custody'],
            ['status'=> 'Incarcerated'],
            ['status'=> 'Retired'],
            ['status'=> 'Unknown']
        ]);
    }
}
