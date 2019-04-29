import { ICiudad } from 'app/shared/model/ciudad.model';
import { ILanding } from 'app/shared/model/landing.model';
import { IEntradaMiembros } from 'app/shared/model/entrada-miembros.model';
import { IHostSede } from 'app/shared/model/host-sede.model';
import { IEspaciosReserva } from 'app/shared/model/espacios-reserva.model';
import { IEspacioLibre } from 'app/shared/model/espacio-libre.model';

export interface ISedes {
    id?: number;
    nombreSede?: string;
    coordenadaX?: number;
    coordenadaY?: number;
    direccion?: string;
    telefonoComunidad?: string;
    telefonoNegocio?: string;
    capacidadEspacioLibre?: number;
    descripcionSede?: any;
    horario?: string;
    imagen1ContentType?: string;
    imagen1?: any;
    imagen2ContentType?: string;
    imagen2?: any;
    ciudad?: ICiudad;
    landing?: ILanding;
    entradaMiembros?: IEntradaMiembros;
    hostSede?: IHostSede;
    espaciosReserva?: IEspaciosReserva;
    espacioLibre?: IEspacioLibre;
}

export class Sedes implements ISedes {
    constructor(
        public id?: number,
        public nombreSede?: string,
        public coordenadaX?: number,
        public coordenadaY?: number,
        public direccion?: string,
        public telefonoComunidad?: string,
        public telefonoNegocio?: string,
        public capacidadEspacioLibre?: number,
        public descripcionSede?: any,
        public horario?: string,
        public imagen1ContentType?: string,
        public imagen1?: any,
        public imagen2ContentType?: string,
        public imagen2?: any,
        public ciudad?: ICiudad,
        public landing?: ILanding,
        public entradaMiembros?: IEntradaMiembros,
        public hostSede?: IHostSede,
        public espaciosReserva?: IEspaciosReserva,
        public espacioLibre?: IEspacioLibre
    ) {}
}
