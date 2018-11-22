package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Ranking {
    @Id
    @SequenceGenerator(name = "ranking", sequenceName = "ranking_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ranking")
    private Long id;
    @OneToOne
    private Game game;
    @OneToOne
    private Player player;

}
