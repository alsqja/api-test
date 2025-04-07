package com.example.apitest.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Controller
@RequiredArgsConstructor
public class ModalController {

    private final SpringTemplateEngine templateEngine;

    @GetMapping(value = "/api/modal", produces = MediaType.TEXT_HTML_VALUE)
    public String getModalHtml(Model model) {
        model.addAttribute("title", "임베디드 테스트 챗봇");
        return "modal";
    }
}
