package com.example.quizbackend.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(uniqueConstraints={@UniqueConstraint(columnNames={"mail","id"})})
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@NoArgsConstructor
public class Player {
    @Id
    @SequenceGenerator(name = "player", sequenceName = "player_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player")
    private Long id;
    @Column(name = "mail")
    private String mail;
    private String firstname;
    private String lastname;

    public Player(String mail, String firstname, String lastname) {
        this.mail = mail;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
