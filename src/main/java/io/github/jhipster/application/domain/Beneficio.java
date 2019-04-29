package io.github.jhipster.application.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Beneficio.
 */
@Entity
@Table(name = "beneficio")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Beneficio implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "tipo_beneficio")
    private String tipoBeneficio;

    @Column(name = "descuento")
    private Integer descuento;

    @OneToOne(mappedBy = "beneficio")
    @JsonIgnore
    private Miembros miembros;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoBeneficio() {
        return tipoBeneficio;
    }

    public Beneficio tipoBeneficio(String tipoBeneficio) {
        this.tipoBeneficio = tipoBeneficio;
        return this;
    }

    public void setTipoBeneficio(String tipoBeneficio) {
        this.tipoBeneficio = tipoBeneficio;
    }

    public Integer getDescuento() {
        return descuento;
    }

    public Beneficio descuento(Integer descuento) {
        this.descuento = descuento;
        return this;
    }

    public void setDescuento(Integer descuento) {
        this.descuento = descuento;
    }

    public Miembros getMiembros() {
        return miembros;
    }

    public Beneficio miembros(Miembros miembros) {
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
        Beneficio beneficio = (Beneficio) o;
        if (beneficio.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), beneficio.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Beneficio{" +
            "id=" + getId() +
            ", tipoBeneficio='" + getTipoBeneficio() + "'" +
            ", descuento=" + getDescuento() +
            "}";
    }
}
