<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Guz',
            'email' => 'guz@mail.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => time()
        ]);

        Project::factory()
            ->count(21)
            ->hasTasks(30)
            ->create();
    }
}