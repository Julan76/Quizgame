package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Answer {
    @Id
    @SequenceGenerator(name = "answer", sequenceName = "answer_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer")
    private Long id;
    private String label;

}
