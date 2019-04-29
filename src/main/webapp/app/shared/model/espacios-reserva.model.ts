import { ISedes } from 'app/shared/model/sedes.model';
import { IReservas } from 'app/shared/model/reservas.model';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { IEntradaInvitados } from 'app/shared/model/entrada-invitados.model';

export interface IEspaciosReserva {
    id?: number;
    nombre?: string;
    descripcion?: string;
    facilidades?: string;
    capacidad?: number;
    apertura?: string;
    cierre?: string;
    tarifa1Hora?: number;
    tarifa2Hora?: number;
    tarifa3Hora?: number;
    tarifa4Hora?: number;
    tarifa5Hora?: number;
    tarifa6Hora?: number;
    tarifa7Hora?: number;
    tarifa8Hora?: number;
    estadoReserva?: number;
    wifi?: string;
    sedes?: ISedes;
    reservas?: IReservas;
    entradaMiembros?: IEntradaMiembros;
    entradaInvitados?: IEntradaInvitados;
}

export class EspaciosReserva implements IEspaciosReserva {
    constructor(
        public id?: number,
        public nombre?: string,
        public descripcion?: string,
        public facilidades?: string,
        public capacidad?: number,
        public apertura?: string,
        public cierre?: string,
        public tarifa1Hora?: number,
        public tarifa2Hora?: number,
        public tarifa3Hora?: number,
        public tarifa4Hora?: number,
        public tarifa5Hora?: number,
        public tarifa6Hora?: number,
        public tarifa7Hora?: number,
        public tarifa8Hora?: number,
        public estadoReserva?: number,
        public wifi?: string,
        public sedes?: ISedes,
        public reservas?: IReservas,
        public entradaMiembros?: IEntradaMiembros,
        public entradaInvitados?: IEntradaInvitados
    ) {}
}
