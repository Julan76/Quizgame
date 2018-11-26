package com.example.quizbackend.demo.repository;

import com.example.quizbackend.demo.domain.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswerRepository  extends JpaRepository<Answer,Long> {
    Optional<Answer> findByLabel(String label);
}
