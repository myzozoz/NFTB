package wad.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Writer extends AbstractPersistable<Long> {
    private String name;
    private LocalDate birthday;
    @ManyToMany
    @JsonBackReference
    private List<Article> articles;

    @Lob
    @Basic(fetch= FetchType.LAZY)
    private byte[] profilePicture;

    public void addArticle(Article article) {
        this.articles.add(article);
    }
}
