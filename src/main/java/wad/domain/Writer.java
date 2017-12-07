package wad.domain;

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
public class Writer extends AbstractPersistable<Long> {
    private String name;
    private LocalDate birthday;
    @ManyToMany
    private List<Article> articles;

    @Lob
    @Basic(fetch= FetchType.LAZY)
    private byte[] profilePicture;
}
