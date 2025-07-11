package com.notesmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.notesmanager.model.Note;
import com.notesmanager.repository.NoteRepository;

import java.util.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/notes")
public class NoteController {
    
    @Autowired
    private NoteRepository noteRepo;

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepo.findAll();
    }

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return noteRepo.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteRepo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note updateNote) {
        return noteRepo.findById(id)
            .map(note -> {
                note.setTitle(updateNote.getTitle());
                note.setDesc(updateNote.getDesc());
                note.setDueDate(updateNote.getDueDate());
                note.setCreatedAt(updateNote.getCreatedAt()); // Optional
                return noteRepo.save(note);
            })
            .orElseThrow(() -> new RuntimeException("Note not found with id " + id));
    }
}
