package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Player {
    @Id
    @SequenceGenerator(name = "player", sequenceName = "player_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player")
    private String id;
    private String pseudo;
}
