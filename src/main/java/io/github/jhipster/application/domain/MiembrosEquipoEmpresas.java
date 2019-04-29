package io.github.jhipster.application.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A MiembrosEquipoEmpresas.
 */
@Entity
@Table(name = "miembros_equipo_empresas")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MiembrosEquipoEmpresas implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @OneToOne
    @JoinColumn(unique = true)
    private EquipoEmpresas equipoEmpresas;

    @OneToOne
    @JoinColumn(unique = true)
    private Miembros miembros;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EquipoEmpresas getEquipoEmpresas() {
        return equipoEmpresas;
    }

    public MiembrosEquipoEmpresas equipoEmpresas(EquipoEmpresas equipoEmpresas) {
        this.equipoEmpresas = equipoEmpresas;
        return this;
    }

    public void setEquipoEmpresas(EquipoEmpresas equipoEmpresas) {
        this.equipoEmpresas = equipoEmpresas;
    }

    public Miembros getMiembros() {
        return miembros;
    }

    public MiembrosEquipoEmpresas miembros(Miembros miembros) {
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
        MiembrosEquipoEmpresas miembrosEquipoEmpresas = (MiembrosEquipoEmpresas) o;
        if (miembrosEquipoEmpresas.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), miembrosEquipoEmpresas.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MiembrosEquipoEmpresas{" +
            "id=" + getId() +
            "}";
    }
}
