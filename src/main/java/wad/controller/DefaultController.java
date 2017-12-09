package wad.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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

    @GetMapping("/category/{name}")
    public String category(@PathVariable String name) {
        return "category";
    }
}
