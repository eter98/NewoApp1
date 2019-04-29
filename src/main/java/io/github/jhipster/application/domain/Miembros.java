package io.github.jhipster.application.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Miembros.
 */
@Entity
@Table(name = "miembros")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Miembros implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "nacionalidad")
    private String nacionalidad;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;

    @Column(name = "genero")
    private String genero;

    @Column(name = "correo_electronico")
    private String correoElectronico;

    @Column(name = "celular")
    private String celular;

    @Column(name = "id_equipo_emprearial")
    private Integer idEquipoEmprearial;

    @Column(name = "id_sede")
    private Integer idSede;

    @Column(name = "derechos_de_compra")
    private Integer derechosDeCompra;

    @Column(name = "tipo_acceso")
    private Integer tipoAcceso;

    @OneToOne
    @JoinColumn(unique = true)
    private EspacioLibre espacioLibre;

    @OneToOne
    @JoinColumn(unique = true)
    private HostSede hostSede;

    @OneToOne
    @JoinColumn(unique = true)
    private Beneficio beneficio;

    @OneToMany(mappedBy = "miembros")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Invitados> invitados = new HashSet<>();
    @OneToMany(mappedBy = "miembros")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Blog> blogs = new HashSet<>();
    @OneToMany(mappedBy = "miembros")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Evento> eventos = new HashSet<>();
    @OneToMany(mappedBy = "miembros")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Reservas> reservas = new HashSet<>();
    @OneToMany(mappedBy = "miembros")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<MiembrosGrupo> miembrosGrupos = new HashSet<>();
    @OneToOne(mappedBy = "miembros")
    @JsonIgnore
    private PerfilMiembro perfilMiembro;

    @OneToOne(mappedBy = "miembros")
    @JsonIgnore
    private RegistroCompra registroCompra;

    @OneToOne(mappedBy = "miembros")
    @JsonIgnore
    private EntradaMiembros entradaMiembros;

    @OneToOne(mappedBy = "miembros")
    @JsonIgnore
    private MiembrosEquipoEmpresas miembrosEquipoEmpresas;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public Miembros nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public Miembros apellido(String apellido) {
        this.apellido = apellido;
        return this;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public Miembros nacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
        return this;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public Miembros fechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
        return this;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public LocalDate getFechaRegistro() {
        return fechaRegistro;
    }

    public Miembros fechaRegistro(LocalDate fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
        return this;
    }

    public void setFechaRegistro(LocalDate fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public String getGenero() {
        return genero;
    }

    public Miembros genero(String genero) {
        this.genero = genero;
        return this;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public Miembros correoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
        return this;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getCelular() {
        return celular;
    }

    public Miembros celular(String celular) {
        this.celular = celular;
        return this;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public Integer getIdEquipoEmprearial() {
        return idEquipoEmprearial;
    }

    public Miembros idEquipoEmprearial(Integer idEquipoEmprearial) {
        this.idEquipoEmprearial = idEquipoEmprearial;
        return this;
    }

    public void setIdEquipoEmprearial(Integer idEquipoEmprearial) {
        this.idEquipoEmprearial = idEquipoEmprearial;
    }

    public Integer getIdSede() {
        return idSede;
    }

    public Miembros idSede(Integer idSede) {
        this.idSede = idSede;
        return this;
    }

    public void setIdSede(Integer idSede) {
        this.idSede = idSede;
    }

    public Integer getDerechosDeCompra() {
        return derechosDeCompra;
    }

    public Miembros derechosDeCompra(Integer derechosDeCompra) {
        this.derechosDeCompra = derechosDeCompra;
        return this;
    }

    public void setDerechosDeCompra(Integer derechosDeCompra) {
        this.derechosDeCompra = derechosDeCompra;
    }

    public Integer getTipoAcceso() {
        return tipoAcceso;
    }

    public Miembros tipoAcceso(Integer tipoAcceso) {
        this.tipoAcceso = tipoAcceso;
        return this;
    }

    public void setTipoAcceso(Integer tipoAcceso) {
        this.tipoAcceso = tipoAcceso;
    }

    public EspacioLibre getEspacioLibre() {
        return espacioLibre;
    }

    public Miembros espacioLibre(EspacioLibre espacioLibre) {
        this.espacioLibre = espacioLibre;
        return this;
    }

    public void setEspacioLibre(EspacioLibre espacioLibre) {
        this.espacioLibre = espacioLibre;
    }

    public HostSede getHostSede() {
        return hostSede;
    }

    public Miembros hostSede(HostSede hostSede) {
        this.hostSede = hostSede;
        return this;
    }

    public void setHostSede(HostSede hostSede) {
        this.hostSede = hostSede;
    }

    public Beneficio getBeneficio() {
        return beneficio;
    }

    public Miembros beneficio(Beneficio beneficio) {
        this.beneficio = beneficio;
        return this;
    }

    public void setBeneficio(Beneficio beneficio) {
        this.beneficio = beneficio;
    }

    public Set<Invitados> getInvitados() {
        return invitados;
    }

    public Miembros invitados(Set<Invitados> invitados) {
        this.invitados = invitados;
        return this;
    }

    public Miembros addInvitados(Invitados invitados) {
        this.invitados.add(invitados);
        invitados.setMiembros(this);
        return this;
    }

    public Miembros removeInvitados(Invitados invitados) {
        this.invitados.remove(invitados);
        invitados.setMiembros(null);
        return this;
    }

    public void setInvitados(Set<Invitados> invitados) {
        this.invitados = invitados;
    }

    public Set<Blog> getBlogs() {
        return blogs;
    }

    public Miembros blogs(Set<Blog> blogs) {
        this.blogs = blogs;
        return this;
    }

    public Miembros addBlog(Blog blog) {
        this.blogs.add(blog);
        blog.setMiembros(this);
        return this;
    }

    public Miembros removeBlog(Blog blog) {
        this.blogs.remove(blog);
        blog.setMiembros(null);
        return this;
    }

    public void setBlogs(Set<Blog> blogs) {
        this.blogs = blogs;
    }

    public Set<Evento> getEventos() {
        return eventos;
    }

    public Miembros eventos(Set<Evento> eventos) {
        this.eventos = eventos;
        return this;
    }

    public Miembros addEvento(Evento evento) {
        this.eventos.add(evento);
        evento.setMiembros(this);
        return this;
    }

    public Miembros removeEvento(Evento evento) {
        this.eventos.remove(evento);
        evento.setMiembros(null);
        return this;
    }

    public void setEventos(Set<Evento> eventos) {
        this.eventos = eventos;
    }

    public Set<Reservas> getReservas() {
        return reservas;
    }

    public Miembros reservas(Set<Reservas> reservas) {
        this.reservas = reservas;
        return this;
    }

    public Miembros addReservas(Reservas reservas) {
        this.reservas.add(reservas);
        reservas.setMiembros(this);
        return this;
    }

    public Miembros removeReservas(Reservas reservas) {
        this.reservas.remove(reservas);
        reservas.setMiembros(null);
        return this;
    }

    public void setReservas(Set<Reservas> reservas) {
        this.reservas = reservas;
    }

    public Set<MiembrosGrupo> getMiembrosGrupos() {
        return miembrosGrupos;
    }

    public Miembros miembrosGrupos(Set<MiembrosGrupo> miembrosGrupos) {
        this.miembrosGrupos = miembrosGrupos;
        return this;
    }

    public Miembros addMiembrosGrupo(MiembrosGrupo miembrosGrupo) {
        this.miembrosGrupos.add(miembrosGrupo);
        miembrosGrupo.setMiembros(this);
        return this;
    }

    public Miembros removeMiembrosGrupo(MiembrosGrupo miembrosGrupo) {
        this.miembrosGrupos.remove(miembrosGrupo);
        miembrosGrupo.setMiembros(null);
        return this;
    }

    public void setMiembrosGrupos(Set<MiembrosGrupo> miembrosGrupos) {
        this.miembrosGrupos = miembrosGrupos;
    }

    public PerfilMiembro getPerfilMiembro() {
        return perfilMiembro;
    }

    public Miembros perfilMiembro(PerfilMiembro perfilMiembro) {
        this.perfilMiembro = perfilMiembro;
        return this;
    }

    public void setPerfilMiembro(PerfilMiembro perfilMiembro) {
        this.perfilMiembro = perfilMiembro;
    }

    public RegistroCompra getRegistroCompra() {
        return registroCompra;
    }

    public Miembros registroCompra(RegistroCompra registroCompra) {
        this.registroCompra = registroCompra;
        return this;
    }

    public void setRegistroCompra(RegistroCompra registroCompra) {
        this.registroCompra = registroCompra;
    }

    public EntradaMiembros getEntradaMiembros() {
        return entradaMiembros;
    }

    public Miembros entradaMiembros(EntradaMiembros entradaMiembros) {
        this.entradaMiembros = entradaMiembros;
        return this;
    }

    public void setEntradaMiembros(EntradaMiembros entradaMiembros) {
        this.entradaMiembros = entradaMiembros;
    }

    public MiembrosEquipoEmpresas getMiembrosEquipoEmpresas() {
        return miembrosEquipoEmpresas;
    }

    public Miembros miembrosEquipoEmpresas(MiembrosEquipoEmpresas miembrosEquipoEmpresas) {
        this.miembrosEquipoEmpresas = miembrosEquipoEmpresas;
        return this;
    }

    public void setMiembrosEquipoEmpresas(MiembrosEquipoEmpresas miembrosEquipoEmpresas) {
        this.miembrosEquipoEmpresas = miembrosEquipoEmpresas;
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
        Miembros miembros = (Miembros) o;
        if (miembros.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), miembros.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Miembros{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", apellido='" + getApellido() + "'" +
            ", nacionalidad='" + getNacionalidad() + "'" +
            ", fechaNacimiento='" + getFechaNacimiento() + "'" +
            ", fechaRegistro='" + getFechaRegistro() + "'" +
            ", genero='" + getGenero() + "'" +
            ", correoElectronico='" + getCorreoElectronico() + "'" +
            ", celular='" + getCelular() + "'" +
            ", idEquipoEmprearial=" + getIdEquipoEmprearial() +
            ", idSede=" + getIdSede() +
            ", derechosDeCompra=" + getDerechosDeCompra() +
            ", tipoAcceso=" + getTipoAcceso() +
            "}";
    }
}
