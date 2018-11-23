package com.example.quizbackend.demo.controller;

import com.example.quizbackend.demo.domain.Quizz;
import com.example.quizbackend.demo.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @PostMapping("/quiz")
    public ResponseEntity<Quizz>saveQuiz(@RequestBody Quizz quizz){
    return ResponseEntity.ok(quizRepository.save(quizz));
    }
}
