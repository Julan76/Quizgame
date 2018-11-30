package com.example.quizbackend.demo.controller;


import com.example.quizbackend.demo.domain.GameStarted;
import com.example.quizbackend.demo.domain.Player;
import com.example.quizbackend.demo.domain.Quizz;
import com.example.quizbackend.demo.repository.AppUserRepository;
import com.example.quizbackend.demo.repository.GameStartedRepository;
import com.example.quizbackend.demo.repository.PlayerRepository;
import com.example.quizbackend.demo.repository.QuizRepository;
import com.wia.jwt.entities.AppUser;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class WebSocketController {

    private SimpMessagingTemplate template;
    private GameStartedRepository gameStartedRepository;
    private QuizRepository quizRepository;
    private AppUserRepository appUserRepository;
    private PlayerRepository playerRepository;


    @MessageMapping("send/register")
    public void onReceivedMessageRegister( String userQuizIdNameAndDate) {

        String [] message = userQuizIdNameAndDate.split("¤¤");
        Quizz quizz = quizRepository.findById(Long.valueOf(message[1])).orElseThrow(()-> new IllegalArgumentException());
        AppUser appUser =appUserRepository.findByUsername(message[4]);
        Player player= playerRepository.saveAndFlush(new Player(appUser.getUsername(),appUser.getFirstname(),appUser.getLastname()));

        GameStarted gameStarted = new GameStarted();
        gameStarted.setQuizz(quizz);
        gameStarted.setPlayers(Arrays.asList(player));
        gameStarted.setLaunchDate(message[3]);
        gameStartedRepository.save(gameStarted);

        this.template.convertAndSend("/register-play", userQuizIdNameAndDate);


    }
    @MessageMapping("send/join/{roomId}")
    public void onReceivedMessagePlay( String message, @DestinationVariable String roomId) {
        String [] roomIdUserQuizIdNameAndDate= roomId.split("¤¤");
        String [] userInfos= message.split("¤¤");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd yyyy HH:mm:ss", Locale.US);

        Optional<GameStarted> gameStarted = gameStartedRepository.findByQuizzIdAndLaunchDate(Long.valueOf(roomIdUserQuizIdNameAndDate[1]),roomIdUserQuizIdNameAndDate[3]);
       List<Player> players=  gameStarted.get().getPlayers().stream().filter(player ->
            player.getMail().equals(userInfos[2])
        ).collect(Collectors.toList());

        if(players.isEmpty()){
            AppUser appUser = appUserRepository.findByUsername(userInfos[2]);
            if(LocalDateTime.now().isBefore(LocalDateTime.parse(gameStarted.get().getLaunchDate().split("GMT")[0].trim(),formatter).plusMinutes(1L))) {
                Player player= playerRepository.saveAndFlush(new Player(appUser.getUsername(),appUser.getFirstname(),appUser.getLastname()));
                gameStarted.get().getPlayers().add(player);
                gameStartedRepository.save(gameStarted.get());
            }
            else {
                throw new RuntimeException("too late ");
            }
        }

        this.template.convertAndSend("/join/"+roomId, message);
    }

    @MessageMapping("send/done/{roomId}")
    public void onReceivedMessageDone( String message, @DestinationVariable String roomId) {
        this.template.convertAndSend("/done/"+roomId, message);
    }

}
