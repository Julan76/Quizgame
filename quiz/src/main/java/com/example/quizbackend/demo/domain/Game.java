package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
@Table
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Game {
    @Id
    @SequenceGenerator(name = "game", sequenceName = "game_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "game")
    private Long id;
    @OneToMany
    @NotEmpty
    private List<Player> playerList;
    @OneToOne
    private Quizz quizz;
}
