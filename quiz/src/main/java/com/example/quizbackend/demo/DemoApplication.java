package com.example.quizbackend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaRepositories(value = {"com.wia.jwt.repositories","com.example.quizbackend.demo.repository"})
@EntityScan({"com.wia.jwt.entities","com.example.quizbackend.demo.domain"})
@Import({com.wia.jwt.configuration.beans.beansConfig.class})
@SpringBootApplication(scanBasePackages={"com.wia.jwt","com.example.quizbackend.demo"})
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
