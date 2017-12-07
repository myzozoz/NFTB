package wad.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wad.domain.Article;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findTop5ByOrderByPublishDateDesc();
}
