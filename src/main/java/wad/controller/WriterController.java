package wad.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import wad.domain.Article;
import wad.domain.Writer;
import wad.repository.WriterRepository;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@RestController
public class WriterController {
    @Autowired
    private WriterRepository writerRep;

    @Transactional
    @PostMapping("/writers")
    public Writer add(@RequestBody Writer writer) {
        return writerRep.save(writer);
    }

    @Transactional
    @GetMapping("/writers")
    public List<Writer> getall() {
        return writerRep.findAll();
    }

    @GetMapping("/writers/{id}")
    public Writer getone(@PathVariable Long id) {
        return writerRep.getOne(id);
    }

    @Transactional
    @GetMapping("/writers/{id}/articles")
    public List<Article> articlesForWriter(@PathVariable Long id) {
        Writer writer = writerRep.getOne(id);
        return writer.getArticles();
    }

    @Transactional
    @PostMapping(path="/writers/{id}/picture")
    public Writer addPicture(@PathVariable Long id, @RequestParam("file") MultipartFile picture) throws IOException {
        Writer writer = writerRep.getOne(id);
        writer.setProfilePicture(picture.getBytes());
        return writerRep.save(writer);
    }

    @Transactional
    @GetMapping(path = "/writers/{id}/picture", produces = "image/*")
    public byte[] getPicture(@PathVariable Long id) {
        return writerRep.getOne(id).getProfilePicture();
    }
}