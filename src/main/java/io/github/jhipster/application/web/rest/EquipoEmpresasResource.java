package io.github.jhipster.application.web.rest;
import io.github.jhipster.application.domain.EquipoEmpresas;
import io.github.jhipster.application.repository.EquipoEmpresasRepository;
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
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing EquipoEmpresas.
 */
@RestController
@RequestMapping("/api")
public class EquipoEmpresasResource {

    private final Logger log = LoggerFactory.getLogger(EquipoEmpresasResource.class);

    private static final String ENTITY_NAME = "equipoEmpresas";

    private final EquipoEmpresasRepository equipoEmpresasRepository;

    public EquipoEmpresasResource(EquipoEmpresasRepository equipoEmpresasRepository) {
        this.equipoEmpresasRepository = equipoEmpresasRepository;
    }

    /**
     * POST  /equipo-empresas : Create a new equipoEmpresas.
     *
     * @param equipoEmpresas the equipoEmpresas to create
     * @return the ResponseEntity with status 201 (Created) and with body the new equipoEmpresas, or with status 400 (Bad Request) if the equipoEmpresas has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/equipo-empresas")
    public ResponseEntity<EquipoEmpresas> createEquipoEmpresas(@RequestBody EquipoEmpresas equipoEmpresas) throws URISyntaxException {
        log.debug("REST request to save EquipoEmpresas : {}", equipoEmpresas);
        if (equipoEmpresas.getId() != null) {
            throw new BadRequestAlertException("A new equipoEmpresas cannot already have an ID", ENTITY_NAME, "idexists");
        }
        EquipoEmpresas result = equipoEmpresasRepository.save(equipoEmpresas);
        return ResponseEntity.created(new URI("/api/equipo-empresas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /equipo-empresas : Updates an existing equipoEmpresas.
     *
     * @param equipoEmpresas the equipoEmpresas to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated equipoEmpresas,
     * or with status 400 (Bad Request) if the equipoEmpresas is not valid,
     * or with status 500 (Internal Server Error) if the equipoEmpresas couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/equipo-empresas")
    public ResponseEntity<EquipoEmpresas> updateEquipoEmpresas(@RequestBody EquipoEmpresas equipoEmpresas) throws URISyntaxException {
        log.debug("REST request to update EquipoEmpresas : {}", equipoEmpresas);
        if (equipoEmpresas.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        EquipoEmpresas result = equipoEmpresasRepository.save(equipoEmpresas);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, equipoEmpresas.getId().toString()))
            .body(result);
    }

    /**
     * GET  /equipo-empresas : get all the equipoEmpresas.
     *
     * @param filter the filter of the request
     * @return the ResponseEntity with status 200 (OK) and the list of equipoEmpresas in body
     */
    @GetMapping("/equipo-empresas")
    public List<EquipoEmpresas> getAllEquipoEmpresas(@RequestParam(required = false) String filter) {
        if ("miembrosequipoempresas-is-null".equals(filter)) {
            log.debug("REST request to get all EquipoEmpresass where miembrosEquipoEmpresas is null");
            return StreamSupport
                .stream(equipoEmpresasRepository.findAll().spliterator(), false)
                .filter(equipoEmpresas -> equipoEmpresas.getMiembrosEquipoEmpresas() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all EquipoEmpresas");
        return equipoEmpresasRepository.findAll();
    }

    /**
     * GET  /equipo-empresas/:id : get the "id" equipoEmpresas.
     *
     * @param id the id of the equipoEmpresas to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the equipoEmpresas, or with status 404 (Not Found)
     */
    @GetMapping("/equipo-empresas/{id}")
    public ResponseEntity<EquipoEmpresas> getEquipoEmpresas(@PathVariable Long id) {
        log.debug("REST request to get EquipoEmpresas : {}", id);
        Optional<EquipoEmpresas> equipoEmpresas = equipoEmpresasRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(equipoEmpresas);
    }

    /**
     * DELETE  /equipo-empresas/:id : delete the "id" equipoEmpresas.
     *
     * @param id the id of the equipoEmpresas to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/equipo-empresas/{id}")
    public ResponseEntity<Void> deleteEquipoEmpresas(@PathVariable Long id) {
        log.debug("REST request to delete EquipoEmpresas : {}", id);
        equipoEmpresasRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
