package com.example.quizbackend.demo.controller;

import com.example.quizbackend.demo.domain.GameStarted;
import com.example.quizbackend.demo.domain.Player;
import com.example.quizbackend.demo.domain.Question;
import com.example.quizbackend.demo.domain.Quizz;
import com.example.quizbackend.demo.repository.GameStartedRepository;
import com.example.quizbackend.demo.repository.QuizRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class QuizController {

    private QuizRepository quizRepository;
    private GameStartedRepository gameStartedRepository;


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

    @GetMapping("/quiz/players/{id}/{date}")
    public List<Player> retrieveGamePlayers(@PathVariable("id") Long id, @PathVariable("date") String date){
        Optional<GameStarted> gameStarted = gameStartedRepository.findByQuizzIdAndLaunchDate(id,date);
       return  gameStarted.map(gameStarted1 -> {
            return gameStarted1.getPlayers();
        }).orElseGet(ArrayList::new);
    }
    @PostMapping("/quiz/compute")
    public String computeResult(@RequestBody Quizz quizz){
        Quizz quizdb = quizRepository.findById(quizz.getId()).get();
        int index = 0;
        int score=0;
        for (Question question : quizz.getQuestionList()) {
            if(question.getProposition()!=null){
                if( question.getProposition().equals(quizdb.getQuestionList().get(index).getRightAnswer().getLabel())) {
                    score++;
                };
            }

            index++;
        }
        return score+"/"+quizz.getQuestionList().size();
    }
}
