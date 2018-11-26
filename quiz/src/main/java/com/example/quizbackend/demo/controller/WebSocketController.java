package com.example.quizbackend.demo.controller;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate template;

    public WebSocketController(SimpMessagingTemplate template) {
        this.template = template;
    }
//new SimpleDateFormat("HH:mm:ss").format(new Date())+"- "+
    @MessageMapping("send/register")
    public void onReceivedMessage( String message) {
        System.out.println("mememe");
        System.out.println(message);
        this.template.convertAndSend("/register-play", message);
    }
}
