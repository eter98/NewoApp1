package io.github.jhipster.application.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import io.github.jhipster.application.domain.enumeration.TipoGrupod;

import io.github.jhipster.application.domain.enumeration.Categoriad;

import io.github.jhipster.application.domain.enumeration.TipoConsumod;

/**
 * A Grupos.
 */
@Entity
@Table(name = "grupos")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Grupos implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "nombre_grupo")
    private String nombreGrupo;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "twiter")
    private String twiter;

    @Column(name = "linked_in")
    private String linkedIn;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_grupo")
    private TipoGrupod tipoGrupo;

    @Enumerated(EnumType.STRING)
    @Column(name = "categoria")
    private Categoriad categoria;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_consumo")
    private TipoConsumod tipoConsumo;

    @Column(name = "valor_suscripcion")
    private Integer valorSuscripcion;

    @Lob
    @Column(name = "reglas_grupo")
    private String reglasGrupo;

    @Lob
    @Column(name = "audio")
    private byte[] audio;

    @Column(name = "audio_content_type")
    private String audioContentType;

    @Lob
    @Column(name = "video")
    private byte[] video;

    @Column(name = "video_content_type")
    private String videoContentType;

    @Lob
    @Column(name = "foto_1")
    private byte[] foto1;

    @Column(name = "foto_1_content_type")
    private String foto1ContentType;

    @Lob
    @Column(name = "foto_2")
    private byte[] foto2;

    @Column(name = "foto_2_content_type")
    private String foto2ContentType;

    @Lob
    @Column(name = "banner")
    private byte[] banner;

    @Column(name = "banner_content_type")
    private String bannerContentType;

    @OneToMany(mappedBy = "grupos")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<MiembrosGrupo> miembrosGrupos = new HashSet<>();
    @ManyToOne
    @JsonIgnoreProperties("grupos")
    private Evento evento;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreGrupo() {
        return nombreGrupo;
    }

    public Grupos nombreGrupo(String nombreGrupo) {
        this.nombreGrupo = nombreGrupo;
        return this;
    }

    public void setNombreGrupo(String nombreGrupo) {
        this.nombreGrupo = nombreGrupo;
    }

    public String getInstagram() {
        return instagram;
    }

    public Grupos instagram(String instagram) {
        this.instagram = instagram;
        return this;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getFacebook() {
        return facebook;
    }

    public Grupos facebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getTwiter() {
        return twiter;
    }

    public Grupos twiter(String twiter) {
        this.twiter = twiter;
        return this;
    }

    public void setTwiter(String twiter) {
        this.twiter = twiter;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public Grupos linkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
        return this;
    }

    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
    }

    public TipoGrupod getTipoGrupo() {
        return tipoGrupo;
    }

    public Grupos tipoGrupo(TipoGrupod tipoGrupo) {
        this.tipoGrupo = tipoGrupo;
        return this;
    }

    public void setTipoGrupo(TipoGrupod tipoGrupo) {
        this.tipoGrupo = tipoGrupo;
    }

    public Categoriad getCategoria() {
        return categoria;
    }

    public Grupos categoria(Categoriad categoria) {
        this.categoria = categoria;
        return this;
    }

    public void setCategoria(Categoriad categoria) {
        this.categoria = categoria;
    }

    public TipoConsumod getTipoConsumo() {
        return tipoConsumo;
    }

    public Grupos tipoConsumo(TipoConsumod tipoConsumo) {
        this.tipoConsumo = tipoConsumo;
        return this;
    }

    public void setTipoConsumo(TipoConsumod tipoConsumo) {
        this.tipoConsumo = tipoConsumo;
    }

    public Integer getValorSuscripcion() {
        return valorSuscripcion;
    }

    public Grupos valorSuscripcion(Integer valorSuscripcion) {
        this.valorSuscripcion = valorSuscripcion;
        return this;
    }

    public void setValorSuscripcion(Integer valorSuscripcion) {
        this.valorSuscripcion = valorSuscripcion;
    }

    public String getReglasGrupo() {
        return reglasGrupo;
    }

    public Grupos reglasGrupo(String reglasGrupo) {
        this.reglasGrupo = reglasGrupo;
        return this;
    }

    public void setReglasGrupo(String reglasGrupo) {
        this.reglasGrupo = reglasGrupo;
    }

    public byte[] getAudio() {
        return audio;
    }

    public Grupos audio(byte[] audio) {
        this.audio = audio;
        return this;
    }

    public void setAudio(byte[] audio) {
        this.audio = audio;
    }

    public String getAudioContentType() {
        return audioContentType;
    }

    public Grupos audioContentType(String audioContentType) {
        this.audioContentType = audioContentType;
        return this;
    }

    public void setAudioContentType(String audioContentType) {
        this.audioContentType = audioContentType;
    }

    public byte[] getVideo() {
        return video;
    }

    public Grupos video(byte[] video) {
        this.video = video;
        return this;
    }

    public void setVideo(byte[] video) {
        this.video = video;
    }

    public String getVideoContentType() {
        return videoContentType;
    }

    public Grupos videoContentType(String videoContentType) {
        this.videoContentType = videoContentType;
        return this;
    }

    public void setVideoContentType(String videoContentType) {
        this.videoContentType = videoContentType;
    }

    public byte[] getFoto1() {
        return foto1;
    }

    public Grupos foto1(byte[] foto1) {
        this.foto1 = foto1;
        return this;
    }

    public void setFoto1(byte[] foto1) {
        this.foto1 = foto1;
    }

    public String getFoto1ContentType() {
        return foto1ContentType;
    }

    public Grupos foto1ContentType(String foto1ContentType) {
        this.foto1ContentType = foto1ContentType;
        return this;
    }

    public void setFoto1ContentType(String foto1ContentType) {
        this.foto1ContentType = foto1ContentType;
    }

    public byte[] getFoto2() {
        return foto2;
    }

    public Grupos foto2(byte[] foto2) {
        this.foto2 = foto2;
        return this;
    }

    public void setFoto2(byte[] foto2) {
        this.foto2 = foto2;
    }

    public String getFoto2ContentType() {
        return foto2ContentType;
    }

    public Grupos foto2ContentType(String foto2ContentType) {
        this.foto2ContentType = foto2ContentType;
        return this;
    }

    public void setFoto2ContentType(String foto2ContentType) {
        this.foto2ContentType = foto2ContentType;
    }

    public byte[] getBanner() {
        return banner;
    }

    public Grupos banner(byte[] banner) {
        this.banner = banner;
        return this;
    }

    public void setBanner(byte[] banner) {
        this.banner = banner;
    }

    public String getBannerContentType() {
        return bannerContentType;
    }

    public Grupos bannerContentType(String bannerContentType) {
        this.bannerContentType = bannerContentType;
        return this;
    }

    public void setBannerContentType(String bannerContentType) {
        this.bannerContentType = bannerContentType;
    }

    public Set<MiembrosGrupo> getMiembrosGrupos() {
        return miembrosGrupos;
    }

    public Grupos miembrosGrupos(Set<MiembrosGrupo> miembrosGrupos) {
        this.miembrosGrupos = miembrosGrupos;
        return this;
    }

    public Grupos addMiembrosGrupo(MiembrosGrupo miembrosGrupo) {
        this.miembrosGrupos.add(miembrosGrupo);
        miembrosGrupo.setGrupos(this);
        return this;
    }

    public Grupos removeMiembrosGrupo(MiembrosGrupo miembrosGrupo) {
        this.miembrosGrupos.remove(miembrosGrupo);
        miembrosGrupo.setGrupos(null);
        return this;
    }

    public void setMiembrosGrupos(Set<MiembrosGrupo> miembrosGrupos) {
        this.miembrosGrupos = miembrosGrupos;
    }

    public Evento getEvento() {
        return evento;
    }

    public Grupos evento(Evento evento) {
        this.evento = evento;
        return this;
    }

    public void setEvento(Evento evento) {
        this.evento = evento;
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
        Grupos grupos = (Grupos) o;
        if (grupos.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), grupos.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Grupos{" +
            "id=" + getId() +
            ", nombreGrupo='" + getNombreGrupo() + "'" +
            ", instagram='" + getInstagram() + "'" +
            ", facebook='" + getFacebook() + "'" +
            ", twiter='" + getTwiter() + "'" +
            ", linkedIn='" + getLinkedIn() + "'" +
            ", tipoGrupo='" + getTipoGrupo() + "'" +
            ", categoria='" + getCategoria() + "'" +
            ", tipoConsumo='" + getTipoConsumo() + "'" +
            ", valorSuscripcion=" + getValorSuscripcion() +
            ", reglasGrupo='" + getReglasGrupo() + "'" +
            ", audio='" + getAudio() + "'" +
            ", audioContentType='" + getAudioContentType() + "'" +
            ", video='" + getVideo() + "'" +
            ", videoContentType='" + getVideoContentType() + "'" +
            ", foto1='" + getFoto1() + "'" +
            ", foto1ContentType='" + getFoto1ContentType() + "'" +
            ", foto2='" + getFoto2() + "'" +
            ", foto2ContentType='" + getFoto2ContentType() + "'" +
            ", banner='" + getBanner() + "'" +
            ", bannerContentType='" + getBannerContentType() + "'" +
            "}";
    }
}
