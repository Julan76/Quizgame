package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Table(uniqueConstraints={@UniqueConstraint(columnNames ={"label","theme"})})
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Question {
    @Id
    @SequenceGenerator(name = "question", sequenceName = "question_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question")
    private Long id;
    private String label;
    private String theme;
    @OneToMany
    @NotEmpty
    private List<Answer> answerList;
    @OneToOne
    private Answer rightAnswer;

}
