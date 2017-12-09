package wad.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import wad.domain.Article;
import wad.domain.Writer;
import wad.repository.WriterRepository;

import java.util.List;

@RestController
public class WriterController {
    @Autowired
    private WriterRepository writerRep;

    @PostMapping("/writers")
    public Writer add(@RequestBody Writer writer) {
        return writerRep.save(writer);
    }

    @GetMapping("/writers")
    public List<Writer> getall() {
        return writerRep.findAll();
    }

    @GetMapping("/writers/{id}")
    public Writer getone(@PathVariable Long id) {
        return writerRep.getOne(id);
    }

    @GetMapping("/writers/{id}/articles")
    public List<Article> articlesForWriter(@PathVariable Long id) {
        Writer writer = writerRep.getOne(id);
        return writer.getArticles();
    }
}