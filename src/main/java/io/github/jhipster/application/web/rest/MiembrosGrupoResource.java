package io.github.jhipster.application.web.rest;
import io.github.jhipster.application.domain.MiembrosGrupo;
import io.github.jhipster.application.repository.MiembrosGrupoRepository;
import io.github.jhipster.application.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.application.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing MiembrosGrupo.
 */
@RestController
@RequestMapping("/api")
public class MiembrosGrupoResource {

    private final Logger log = LoggerFactory.getLogger(MiembrosGrupoResource.class);

    private static final String ENTITY_NAME = "miembrosGrupo";

    private final MiembrosGrupoRepository miembrosGrupoRepository;

    public MiembrosGrupoResource(MiembrosGrupoRepository miembrosGrupoRepository) {
        this.miembrosGrupoRepository = miembrosGrupoRepository;
    }

    /**
     * POST  /miembros-grupos : Create a new miembrosGrupo.
     *
     * @param miembrosGrupo the miembrosGrupo to create
     * @return the ResponseEntity with status 201 (Created) and with body the new miembrosGrupo, or with status 400 (Bad Request) if the miembrosGrupo has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/miembros-grupos")
    public ResponseEntity<MiembrosGrupo> createMiembrosGrupo(@RequestBody MiembrosGrupo miembrosGrupo) throws URISyntaxException {
        log.debug("REST request to save MiembrosGrupo : {}", miembrosGrupo);
        if (miembrosGrupo.getId() != null) {
            throw new BadRequestAlertException("A new miembrosGrupo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MiembrosGrupo result = miembrosGrupoRepository.save(miembrosGrupo);
        return ResponseEntity.created(new URI("/api/miembros-grupos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /miembros-grupos : Updates an existing miembrosGrupo.
     *
     * @param miembrosGrupo the miembrosGrupo to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated miembrosGrupo,
     * or with status 400 (Bad Request) if the miembrosGrupo is not valid,
     * or with status 500 (Internal Server Error) if the miembrosGrupo couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/miembros-grupos")
    public ResponseEntity<MiembrosGrupo> updateMiembrosGrupo(@RequestBody MiembrosGrupo miembrosGrupo) throws URISyntaxException {
        log.debug("REST request to update MiembrosGrupo : {}", miembrosGrupo);
        if (miembrosGrupo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        MiembrosGrupo result = miembrosGrupoRepository.save(miembrosGrupo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, miembrosGrupo.getId().toString()))
            .body(result);
    }

    /**
     * GET  /miembros-grupos : get all the miembrosGrupos.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of miembrosGrupos in body
     */
    @GetMapping("/miembros-grupos")
    public List<MiembrosGrupo> getAllMiembrosGrupos() {
        log.debug("REST request to get all MiembrosGrupos");
        return miembrosGrupoRepository.findAll();
    }

    /**
     * GET  /miembros-grupos/:id : get the "id" miembrosGrupo.
     *
     * @param id the id of the miembrosGrupo to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the miembrosGrupo, or with status 404 (Not Found)
     */
    @GetMapping("/miembros-grupos/{id}")
    public ResponseEntity<MiembrosGrupo> getMiembrosGrupo(@PathVariable Long id) {
        log.debug("REST request to get MiembrosGrupo : {}", id);
        Optional<MiembrosGrupo> miembrosGrupo = miembrosGrupoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(miembrosGrupo);
    }

    /**
     * DELETE  /miembros-grupos/:id : delete the "id" miembrosGrupo.
     *
     * @param id the id of the miembrosGrupo to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/miembros-grupos/{id}")
    public ResponseEntity<Void> deleteMiembrosGrupo(@PathVariable Long id) {
        log.debug("REST request to delete MiembrosGrupo : {}", id);
        miembrosGrupoRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}