import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'miembros',
                loadChildren: './miembros/miembros.module#Newoapp1MiembrosModule'
            },
            {
                path: 'perfil-miembro',
                loadChildren: './perfil-miembro/perfil-miembro.module#Newoapp1PerfilMiembroModule'
            },
            {
                path: 'entrada-miembros',
                loadChildren: './entrada-miembros/entrada-miembros.module#Newoapp1EntradaMiembrosModule'
            },
            {
                path: 'invitados',
                loadChildren: './invitados/invitados.module#Newoapp1InvitadosModule'
            },
            {
                path: 'entrada-invitados',
                loadChildren: './entrada-invitados/entrada-invitados.module#Newoapp1EntradaInvitadosModule'
            },
            {
                path: 'sedes',
                loadChildren: './sedes/sedes.module#Newoapp1SedesModule'
            },
            {
                path: 'espacio-libre',
                loadChildren: './espacio-libre/espacio-libre.module#Newoapp1EspacioLibreModule'
            },
            {
                path: 'host-sede',
                loadChildren: './host-sede/host-sede.module#Newoapp1HostSedeModule'
            },
            {
                path: 'reservas',
                loadChildren: './reservas/reservas.module#Newoapp1ReservasModule'
            },
            {
                path: 'espacios-reserva',
                loadChildren: './espacios-reserva/espacios-reserva.module#Newoapp1EspaciosReservaModule'
            },
            {
                path: 'registro-compra',
                loadChildren: './registro-compra/registro-compra.module#Newoapp1RegistroCompraModule'
            },
            {
                path: 'facturacion',
                loadChildren: './facturacion/facturacion.module#Newoapp1FacturacionModule'
            },
            {
                path: 'equipo-empresas',
                loadChildren: './equipo-empresas/equipo-empresas.module#Newoapp1EquipoEmpresasModule'
            },
            {
                path: 'miembros-equipo-empresas',
                loadChildren: './miembros-equipo-empresas/miembros-equipo-empresas.module#Newoapp1MiembrosEquipoEmpresasModule'
            },
            {
                path: 'cuenta-asociada',
                loadChildren: './cuenta-asociada/cuenta-asociada.module#Newoapp1CuentaAsociadaModule'
            },
            {
                path: 'beneficio',
                loadChildren: './beneficio/beneficio.module#Newoapp1BeneficioModule'
            },
            {
                path: 'perfil-equipo-empresa',
                loadChildren: './perfil-equipo-empresa/perfil-equipo-empresa.module#Newoapp1PerfilEquipoEmpresaModule'
            },
            {
                path: 'empresa',
                loadChildren: './empresa/empresa.module#Newoapp1EmpresaModule'
            },
            {
                path: 'landing',
                loadChildren: './landing/landing.module#Newoapp1LandingModule'
            },
            {
                path: 'productos-servicios',
                loadChildren: './productos-servicios/productos-servicios.module#Newoapp1ProductosServiciosModule'
            },
            {
                path: 'pais',
                loadChildren: './pais/pais.module#Newoapp1PaisModule'
            },
            {
                path: 'ciudad',
                loadChildren: './ciudad/ciudad.module#Newoapp1CiudadModule'
            },
            {
                path: 'blog',
                loadChildren: './blog/blog.module#Newoapp1BlogModule'
            },
            {
                path: 'evento',
                loadChildren: './evento/evento.module#Newoapp1EventoModule'
            },
            {
                path: 'grupos',
                loadChildren: './grupos/grupos.module#Newoapp1GruposModule'
            },
            {
                path: 'miembros-grupo',
                loadChildren: './miembros-grupo/miembros-grupo.module#Newoapp1MiembrosGrupoModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Newoapp1EntityModule {}
