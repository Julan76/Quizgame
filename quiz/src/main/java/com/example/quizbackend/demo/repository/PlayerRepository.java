package com.example.quizbackend.demo.repository;

import com.example.quizbackend.demo.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {
}
