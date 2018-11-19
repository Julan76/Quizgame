package com.example.quizbackend.demo.domain;

import javax.persistence.*;

@Table
@Entity
public class Answer {
    @Id
    @SequenceGenerator(name = "answer", sequenceName = "answer_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer")
    private Long id;
    private String name;
}
