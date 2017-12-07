package wad.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wad.domain.Article;
import wad.repository.ArticleRepository;

import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    private ArticleRepository articleRep;

    @GetMapping("/articles")
    public List<Article> getAll() {
        return articleRep.findAll();
    }

    @PostMapping("/articles")
    public Article add(@RequestBody Article article) {
        return articleRep.save(article);
    }

    @GetMapping("/articles/{id}")
    public Article getone(@PathVariable Long id) {
        return articleRep.getOne(id);
    }

    @GetMapping("/articles/latest")
    public List<Article> getLastFive() {
        return articleRep.findTop5ByOrderByPublishDateDesc();
    }
}