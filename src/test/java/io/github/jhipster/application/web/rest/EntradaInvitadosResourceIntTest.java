package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.Newoapp1App;

import io.github.jhipster.application.domain.EntradaInvitados;
import io.github.jhipster.application.repository.EntradaInvitadosRepository;
import io.github.jhipster.application.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;


import static io.github.jhipster.application.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import io.github.jhipster.application.domain.enumeration.TipoEntradad;
/**
 * Test class for the EntradaInvitadosResource REST controller.
 *
 * @see EntradaInvitadosResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Newoapp1App.class)
public class EntradaInvitadosResourceIntTest {

    private static final LocalDate DEFAULT_FECHA_ENTRADA = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_FECHA_ENTRADA = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_HORA_ENTRADA = "AAAAAAAAAA";
    private static final String UPDATED_HORA_ENTRADA = "BBBBBBBBBB";

    private static final TipoEntradad DEFAULT_TIPO_ENTRADA = TipoEntradad.INGRESO;
    private static final TipoEntradad UPDATED_TIPO_ENTRADA = TipoEntradad.SALIDA;

    @Autowired
    private EntradaInvitadosRepository entradaInvitadosRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restEntradaInvitadosMockMvc;

    private EntradaInvitados entradaInvitados;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EntradaInvitadosResource entradaInvitadosResource = new EntradaInvitadosResource(entradaInvitadosRepository);
        this.restEntradaInvitadosMockMvc = MockMvcBuilders.standaloneSetup(entradaInvitadosResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntradaInvitados createEntity(EntityManager em) {
        EntradaInvitados entradaInvitados = new EntradaInvitados()
            .fechaEntrada(DEFAULT_FECHA_ENTRADA)
            .horaEntrada(DEFAULT_HORA_ENTRADA)
            .tipoEntrada(DEFAULT_TIPO_ENTRADA);
        return entradaInvitados;
    }

    @Before
    public void initTest() {
        entradaInvitados = createEntity(em);
    }

    @Test
    @Transactional
    public void createEntradaInvitados() throws Exception {
        int databaseSizeBeforeCreate = entradaInvitadosRepository.findAll().size();

        // Create the EntradaInvitados
        restEntradaInvitadosMockMvc.perform(post("/api/entrada-invitados")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entradaInvitados)))
            .andExpect(status().isCreated());

        // Validate the EntradaInvitados in the database
        List<EntradaInvitados> entradaInvitadosList = entradaInvitadosRepository.findAll();
        assertThat(entradaInvitadosList).hasSize(databaseSizeBeforeCreate + 1);
        EntradaInvitados testEntradaInvitados = entradaInvitadosList.get(entradaInvitadosList.size() - 1);
        assertThat(testEntradaInvitados.getFechaEntrada()).isEqualTo(DEFAULT_FECHA_ENTRADA);
        assertThat(testEntradaInvitados.getHoraEntrada()).isEqualTo(DEFAULT_HORA_ENTRADA);
        assertThat(testEntradaInvitados.getTipoEntrada()).isEqualTo(DEFAULT_TIPO_ENTRADA);
    }

    @Test
    @Transactional
    public void createEntradaInvitadosWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = entradaInvitadosRepository.findAll().size();

        // Create the EntradaInvitados with an existing ID
        entradaInvitados.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEntradaInvitadosMockMvc.perform(post("/api/entrada-invitados")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entradaInvitados)))
            .andExpect(status().isBadRequest());

        // Validate the EntradaInvitados in the database
        List<EntradaInvitados> entradaInvitadosList = entradaInvitadosRepository.findAll();
        assertThat(entradaInvitadosList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllEntradaInvitados() throws Exception {
        // Initialize the database
        entradaInvitadosRepository.saveAndFlush(entradaInvitados);

        // Get all the entradaInvitadosList
        restEntradaInvitadosMockMvc.perform(get("/api/entrada-invitados?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(entradaInvitados.getId().intValue())))
            .andExpect(jsonPath("$.[*].fechaEntrada").value(hasItem(DEFAULT_FECHA_ENTRADA.toString())))
            .andExpect(jsonPath("$.[*].horaEntrada").value(hasItem(DEFAULT_HORA_ENTRADA.toString())))
            .andExpect(jsonPath("$.[*].tipoEntrada").value(hasItem(DEFAULT_TIPO_ENTRADA.toString())));
    }
    
    @Test
    @Transactional
    public void getEntradaInvitados() throws Exception {
        // Initialize the database
        entradaInvitadosRepository.saveAndFlush(entradaInvitados);

        // Get the entradaInvitados
        restEntradaInvitadosMockMvc.perform(get("/api/entrada-invitados/{id}", entradaInvitados.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(entradaInvitados.getId().intValue()))
            .andExpect(jsonPath("$.fechaEntrada").value(DEFAULT_FECHA_ENTRADA.toString()))
            .andExpect(jsonPath("$.horaEntrada").value(DEFAULT_HORA_ENTRADA.toString()))
            .andExpect(jsonPath("$.tipoEntrada").value(DEFAULT_TIPO_ENTRADA.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingEntradaInvitados() throws Exception {
        // Get the entradaInvitados
        restEntradaInvitadosMockMvc.perform(get("/api/entrada-invitados/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEntradaInvitados() throws Exception {
        // Initialize the database
        entradaInvitadosRepository.saveAndFlush(entradaInvitados);

        int databaseSizeBeforeUpdate = entradaInvitadosRepository.findAll().size();

        // Update the entradaInvitados
        EntradaInvitados updatedEntradaInvitados = entradaInvitadosRepository.findById(entradaInvitados.getId()).get();
        // Disconnect from session so that the updates on updatedEntradaInvitados are not directly saved in db
        em.detach(updatedEntradaInvitados);
        updatedEntradaInvitados
            .fechaEntrada(UPDATED_FECHA_ENTRADA)
            .horaEntrada(UPDATED_HORA_ENTRADA)
            .tipoEntrada(UPDATED_TIPO_ENTRADA);

        restEntradaInvitadosMockMvc.perform(put("/api/entrada-invitados")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEntradaInvitados)))
            .andExpect(status().isOk());

        // Validate the EntradaInvitados in the database
        List<EntradaInvitados> entradaInvitadosList = entradaInvitadosRepository.findAll();
        assertThat(entradaInvitadosList).hasSize(databaseSizeBeforeUpdate);
        EntradaInvitados testEntradaInvitados = entradaInvitadosList.get(entradaInvitadosList.size() - 1);
        assertThat(testEntradaInvitados.getFechaEntrada()).isEqualTo(UPDATED_FECHA_ENTRADA);
        assertThat(testEntradaInvitados.getHoraEntrada()).isEqualTo(UPDATED_HORA_ENTRADA);
        assertThat(testEntradaInvitados.getTipoEntrada()).isEqualTo(UPDATED_TIPO_ENTRADA);
    }

    @Test
    @Transactional
    public void updateNonExistingEntradaInvitados() throws Exception {
        int databaseSizeBeforeUpdate = entradaInvitadosRepository.findAll().size();

        // Create the EntradaInvitados

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEntradaInvitadosMockMvc.perform(put("/api/entrada-invitados")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(entradaInvitados)))
            .andExpect(status().isBadRequest());

        // Validate the EntradaInvitados in the database
        List<EntradaInvitados> entradaInvitadosList = entradaInvitadosRepository.findAll();
        assertThat(entradaInvitadosList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteEntradaInvitados() throws Exception {
        // Initialize the database
        entradaInvitadosRepository.saveAndFlush(entradaInvitados);

        int databaseSizeBeforeDelete = entradaInvitadosRepository.findAll().size();

        // Delete the entradaInvitados
        restEntradaInvitadosMockMvc.perform(delete("/api/entrada-invitados/{id}", entradaInvitados.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<EntradaInvitados> entradaInvitadosList = entradaInvitadosRepository.findAll();
        assertThat(entradaInvitadosList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(EntradaInvitados.class);
        EntradaInvitados entradaInvitados1 = new EntradaInvitados();
        entradaInvitados1.setId(1L);
        EntradaInvitados entradaInvitados2 = new EntradaInvitados();
        entradaInvitados2.setId(entradaInvitados1.getId());
        assertThat(entradaInvitados1).isEqualTo(entradaInvitados2);
        entradaInvitados2.setId(2L);
        assertThat(entradaInvitados1).isNotEqualTo(entradaInvitados2);
        entradaInvitados1.setId(null);
        assertThat(entradaInvitados1).isNotEqualTo(entradaInvitados2);
    }
}
