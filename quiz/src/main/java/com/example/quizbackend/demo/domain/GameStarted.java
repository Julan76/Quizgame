package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class GameStarted {
    @Id
    @SequenceGenerator(name = "game_started", sequenceName = "game_started_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "game_started")
    private Long id;
    @OneToOne
    private Quizz quizz;
    private String launchDate;
    @OneToMany(fetch = FetchType.EAGER)
    private List<Player> players;


}
