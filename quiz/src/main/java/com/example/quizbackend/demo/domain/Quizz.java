package com.example.quizbackend.demo.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.Period;
import java.util.List;

@Data
@Table
@Entity
public class Quizz {
    @Id
    @SequenceGenerator(name = "quizz", sequenceName = "quizz_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "quizz")
    private Long id;
    private Period duration;
    private String name;
    private String description;
    @ManyToMany
    private List<Question> questionList;



}
