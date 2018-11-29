package com.example.quizbackend.demo.repository;

import com.example.quizbackend.demo.domain.GameStarted;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameStartedRepository extends JpaRepository <GameStarted,Long> {
    Optional<GameStarted> findByQuizzIdAndLaunchDate(Long quizzId, String LaunchDate);
}
