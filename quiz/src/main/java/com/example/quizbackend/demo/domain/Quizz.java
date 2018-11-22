package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.time.Period;
import java.util.List;

@Data
@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Quizz {
    @Id
    @SequenceGenerator(name = "quizz", sequenceName = "quizz_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "quizz")
    private Long id;
    private Period duration;
    private String name;
    private String description;
    @ManyToMany
    @NotEmpty
    private List<Question> questionList;



}
