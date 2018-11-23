package com.example.quizbackend.demo.repository;

import com.example.quizbackend.demo.domain.Question;
import com.example.quizbackend.demo.domain.Quizz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends JpaRepository<Quizz,Long> {
}
