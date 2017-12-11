package wad.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wad.domain.Article;
import wad.domain.Category;
import wad.domain.Writer;
import wad.repository.ArticleRepository;
import wad.repository.CategoryRepository;
import wad.repository.WriterRepository;

import javax.transaction.Transactional;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository articleRep;
    @Autowired
    private WriterRepository writerRep;
    @Autowired
    private CategoryRepository categoryRep;


    @Transactional
    public Article addWriterToArticle(Long article_id, Long writer_id) {
        Article article = articleRep.getOne(article_id);
        Writer writer = writerRep.getOne(writer_id);

        article.addWriter(writer);
        writer.addArticle(article);

        writerRep.save(writer);
        articleRep.save(article);

        return article;
    }

    @Transactional
    public Article addCategoryToArticle(Long article_id, String category_name) {
        Article article = articleRep.getOne(article_id);
        Category category = categoryRep.findByName(category_name);

        article.addCategory(category);
        category.addArticle(article);

        categoryRep.save(category);
        articleRep.save(article);
        return article;
    }
}
