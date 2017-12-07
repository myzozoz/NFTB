package wad.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wad.domain.Article;
import wad.repository.ArticleRepository;

import java.util.List;

@RestController
public class NewsController {
    @Autowired
    private ArticleRepository articleRep;

    @GetMapping("/news")
    public List<Article> getAll() {
        return articleRep.findAll();
    }

    @PostMapping("/news")
    public Article add(@RequestBody Article article) {
        return articleRep.save(article);
    }

    @GetMapping("/news/{id}")
    public Article getone(@PathVariable Long id) {
        return articleRep.getOne(id);
    }
}
