import { Moment } from 'moment';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { IInvitados } from 'app/shared/model/invitados.model';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';
import { IReservas } from 'app/shared/model/reservas.model';

export const enum TipoEntradad {
    INGRESO = 'INGRESO',
    SALIDA = 'SALIDA'
}

export interface IEntradaInvitados {
    id?: number;
    fechaEntrada?: Moment;
    horaEntrada?: string;
    tipoEntrada?: TipoEntradad;
    espacioLibre?: IEspacioLibre;
    invitados?: IInvitados;
    espaciosReserva?: IEspaciosReserva;
    registroCompra?: IRegistroCompra;
    reservas?: IReservas;
}

export class EntradaInvitados implements IEntradaInvitados {
    constructor(
        public id?: number,
        public fechaEntrada?: Moment,
        public horaEntrada?: string,
        public tipoEntrada?: TipoEntradad,
        public espacioLibre?: IEspacioLibre,
        public invitados?: IInvitados,
        public espaciosReserva?: IEspaciosReserva,
        public registroCompra?: IRegistroCompra,
        public reservas?: IReservas
    ) {}
}
