package wad.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultController {

    @GetMapping("*")
    public String redirect() {
        return "redirect:/news";
    }

    @GetMapping("/news")
    public String root() {
        return "index";
    }

    @GetMapping("/category")
    public String category() {
        return "category";
    }
}
