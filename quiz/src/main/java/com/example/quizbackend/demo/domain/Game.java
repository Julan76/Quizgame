package com.example.quizbackend.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Table
@Entity
public class Game {
    @Id
    @SequenceGenerator(name = "game", sequenceName = "game_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "game")
    private Long id;
    @OneToMany
    private List<Player> playerList;
    @OneToOne
    private Quizz quizz;
}
