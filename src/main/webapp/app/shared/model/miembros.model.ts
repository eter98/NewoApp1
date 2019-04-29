import { Moment } from 'moment';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { IHostSede } from 'app/shared/model/host-sede.model';
import { IBeneficio } from 'app/shared/model/beneficio.model';
import { IInvitados } from 'app/shared/model/invitados.model';
import { IBlog } from 'app/shared/model/blog.model';
import { IEvento } from 'app/shared/model/evento.model';
import { IReservas } from 'app/shared/model/reservas.model';
import { IMiembrosGrupo } from 'app/shared/model/miembros-grupo.model';
import { IPerfilMiembro } from 'app/shared/model/perfil-miembro.model';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { IMiembrosEquipoEmpresas } from 'app/shared/model/miembros-equipo-empresas.model';

export interface IMiembros {
    id?: number;
    nombre?: string;
    apellido?: string;
    nacionalidad?: string;
    fechaNacimiento?: Moment;
    fechaRegistro?: Moment;
    genero?: string;
    correoElectronico?: string;
    celular?: string;
    idEquipoEmprearial?: number;
    idSede?: number;
    derechosDeCompra?: number;
    tipoAcceso?: number;
    espacioLibre?: IEspacioLibre;
    hostSede?: IHostSede;
    beneficio?: IBeneficio;
    invitados?: IInvitados[];
    blogs?: IBlog[];
    eventos?: IEvento[];
    reservas?: IReservas[];
    miembrosGrupos?: IMiembrosGrupo[];
    perfilMiembro?: IPerfilMiembro;
    registroCompra?: IRegistroCompra;
    entradaMiembros?: IEntradaMiembros;
    miembrosEquipoEmpresas?: IMiembrosEquipoEmpresas;
}

export class Miembros implements IMiembros {
    constructor(
        public id?: number,
        public nombre?: string,
        public apellido?: string,
        public nacionalidad?: string,
        public fechaNacimiento?: Moment,
        public fechaRegistro?: Moment,
        public genero?: string,
        public correoElectronico?: string,
        public celular?: string,
        public idEquipoEmprearial?: number,
        public idSede?: number,
        public derechosDeCompra?: number,
        public tipoAcceso?: number,
        public espacioLibre?: IEspacioLibre,
        public hostSede?: IHostSede,
        public beneficio?: IBeneficio,
        public invitados?: IInvitados[],
        public blogs?: IBlog[],
        public eventos?: IEvento[],
        public reservas?: IReservas[],
        public miembrosGrupos?: IMiembrosGrupo[],
        public perfilMiembro?: IPerfilMiembro,
        public registroCompra?: IRegistroCompra,
        public entradaMiembros?: IEntradaMiembros,
        public miembrosEquipoEmpresas?: IMiembrosEquipoEmpresas
    ) {}
}
