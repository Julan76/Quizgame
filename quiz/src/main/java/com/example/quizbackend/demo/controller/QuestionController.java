package com.example.quizbackend.demo.controller;

import com.example.quizbackend.demo.domain.Answer;
import com.example.quizbackend.demo.domain.Question;
import com.example.quizbackend.demo.repository.AnswerRepository;
import com.example.quizbackend.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    AnswerRepository answerRepository;

    @PostMapping("/questions")
    public Question saveQuestion(@RequestBody Question question){

        question.getAnswerList().forEach(answer ->
            answerRepository.findByLabel(answer.getLabel())
                    .map(answer1 -> {
                        answer.setId(answer1.getId());
                        answer.setLabel(answer1.getLabel());
                        return answer;
                    })
                    .orElseGet(()-> {
                        Answer ans = answerRepository.saveAndFlush(answer);
                        answer.setId(ans.getId());
                        if(ans.getLabel().equals(question.getRightAnswer().getLabel())){
                            question.setRightAnswer(ans);
                        }
                        return ans;
                    })
        );
    return questionRepository.save(question);
    }

    @GetMapping("/questions")
    public List<Question> retrieveQuestions(){
        return questionRepository.findAll();
    }
}
