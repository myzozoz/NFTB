package wad.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Category extends AbstractPersistable<Long> {
    private String name;

    @ManyToMany
    @JsonBackReference
    private List<Article> articles;

    public void addArticle(Article article) {
        this.articles.add(article);
    }
}
