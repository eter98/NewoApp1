import { Moment } from 'moment';
import { ISedes } from 'app/shared/model/sedes.model';
import { IMiembros } from 'app/shared/model/miembros.model';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';

export interface IEntradaMiembros {
    id?: number;
    fechaEntrada?: Moment;
    horaEntrada?: string;
    tipoEntrada?: number;
    tiempoMaximo?: boolean;
    sedes?: ISedes;
    miembros?: IMiembros;
    espacioLibre?: IEspacioLibre;
    espaciosReserva?: IEspaciosReserva;
}

export class EntradaMiembros implements IEntradaMiembros {
    constructor(
        public id?: number,
        public fechaEntrada?: Moment,
        public horaEntrada?: string,
        public tipoEntrada?: number,
        public tiempoMaximo?: boolean,
        public sedes?: ISedes,
        public miembros?: IMiembros,
        public espacioLibre?: IEspacioLibre,
        public espaciosReserva?: IEspaciosReserva
    ) {
        this.tiempoMaximo = this.tiempoMaximo || false;
    }
}
