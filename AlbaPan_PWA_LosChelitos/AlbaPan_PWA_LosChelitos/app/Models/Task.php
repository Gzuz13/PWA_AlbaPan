<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $fillable =["image_path", 'name', 'description', 'status', 'priority','due_date', 'created_by', 'updated_by', 'project_id', 'assigned_user_id'];
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;


    public function project(){
        return $this->hasMany(Task::class);
    }

    public function createdBy(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class, 'update_by');
    }

    public function assignedUser(){
        return $this->belongsTo(User::class, 'assigned_user_id');
    }



}
