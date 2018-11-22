package com.example.quizbackend.demo.repository;

import com.example.quizbackend.demo.domain.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends CrudRepository<Question,Long> {
}
