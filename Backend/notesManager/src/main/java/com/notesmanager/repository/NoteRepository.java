package com.notesmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.notesmanager.model.Note;
public interface NoteRepository extends JpaRepository<Note, Long> {
}
