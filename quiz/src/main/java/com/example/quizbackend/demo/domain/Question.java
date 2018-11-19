package com.example.quizbackend.demo.domain;

import javax.persistence.*;
import java.util.List;

@Table
@Entity
public class Question {
    @Id
    @SequenceGenerator(name = "question", sequenceName = "question_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question")
    private Long id;
    private String name;
    @OneToMany
    private List<Answer> answerList;
    @OneToOne
    private Answer rightAnswer;

}
