package com.example.quizbackend.demo.controller;

import com.example.quizbackend.demo.domain.Quizz;
import com.example.quizbackend.demo.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @PostMapping("/quiz")
    public ResponseEntity<Quizz>saveQuiz(@RequestBody Quizz quizz){
    return ResponseEntity.ok(quizRepository.save(quizz));
    }
    @GetMapping("/quiz")
    public List<Quizz> retrieveQuiz(){
        return quizRepository.findAll();
    }

    @GetMapping("/quiz/{id}")
    public Quizz retrieveQuiz(@PathVariable("id") Long id){
        return quizRepository.findById(id)
       .orElseThrow(IllegalArgumentException::new);
    }
}
