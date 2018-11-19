package com.example.quizbackend.demo.domain;

import javax.persistence.*;

@Table
@Entity
public class Player {
    @Id
    @SequenceGenerator(name = "player", sequenceName = "player_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player")
    private String id;
    private String pseudo;
}
