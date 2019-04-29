package io.github.jhipster.application.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A MiembrosGrupo.
 */
@Entity
@Table(name = "miembros_grupo")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MiembrosGrupo implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties("miembrosGrupos")
    private Grupos grupos;

    @ManyToOne
    @JsonIgnoreProperties("miembrosGrupos")
    private Miembros miembros;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Grupos getGrupos() {
        return grupos;
    }

    public MiembrosGrupo grupos(Grupos grupos) {
        this.grupos = grupos;
        return this;
    }

    public void setGrupos(Grupos grupos) {
        this.grupos = grupos;
    }

    public Miembros getMiembros() {
        return miembros;
    }

    public MiembrosGrupo miembros(Miembros miembros) {
        this.miembros = miembros;
        return this;
    }

    public void setMiembros(Miembros miembros) {
        this.miembros = miembros;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        MiembrosGrupo miembrosGrupo = (MiembrosGrupo) o;
        if (miembrosGrupo.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), miembrosGrupo.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MiembrosGrupo{" +
            "id=" + getId() +
            "}";
    }
}
