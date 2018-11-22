package com.example.quizbackend.demo.controller;

import com.example.quizbackend.demo.domain.Question;
import com.example.quizbackend.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepository questionRepository;

    @PostMapping("/questions")
    public Question saveQuestion(@RequestBody Question question){
    return questionRepository.save(question);
    }
}
