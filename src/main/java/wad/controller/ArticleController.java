package wad.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import wad.domain.Article;
import wad.repository.ArticleRepository;
import wad.service.ArticleService;

import javax.tools.FileObject;
import java.io.IOException;
import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    private ArticleRepository articleRep;

    @Autowired
    private ArticleService articleService;

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

    @PutMapping("/articles/{a_id}/writers/{w_id}")
    public Article addWriter(@PathVariable Long a_id, @PathVariable Long w_id) {
        return articleService.addWriterToArticle(a_id, w_id);
    }

    @PutMapping("/articles/{a_id}/categories/{name}")
    public Article addCategory(@PathVariable Long a_id, @PathVariable String name) {
        return articleService.addCategoryToArticle(a_id, name);
    }

    @PostMapping(path="/articles/{id}/picture")
    public Article addPicture(@PathVariable Long id, @RequestParam("file") MultipartFile picture) throws IOException {
        Article article = articleRep.getOne(id);
        article.setPicture(picture.getBytes());
        return articleRep.save(article);
    }

    @GetMapping(path = "/articles/{id}/picture", produces = "image/*")
    public byte[] getPicture(@PathVariable Long id) {
        return articleRep.getOne(id).getPicture();
    }

}