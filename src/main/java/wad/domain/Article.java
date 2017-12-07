package wad.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Article extends AbstractPersistable<Long> {

    private String title;
    private String lead; //Kuka ois arvannu et ingressi on englanniks "lead"
    @Column(length=2000)
    private String body;
    private LocalDateTime publishDate;
    @ManyToMany(mappedBy = "articles")
    private List<Writer> writers;
    @ManyToMany(mappedBy = "articles")
    private List<Category> categories;

    @Lob
    @Basic(fetch= FetchType.LAZY)
    private byte[] picture;
}
