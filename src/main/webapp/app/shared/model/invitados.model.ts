import { IEntradaInvitados } from 'app/shared/model/entrada-invitados.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export interface IInvitados {
    id?: number;
    nombre?: string;
    apellido?: string;
    identificacion?: string;
    correo?: string;
    telefono?: string;
    tiempoMaximo?: boolean;
    entradaInvitados?: IEntradaInvitados;
    miembros?: IMiembros;
}

export class Invitados implements IInvitados {
    constructor(
        public id?: number,
        public nombre?: string,
        public apellido?: string,
        public identificacion?: string,
        public correo?: string,
        public telefono?: string,
        public tiempoMaximo?: boolean,
        public entradaInvitados?: IEntradaInvitados,
        public miembros?: IMiembros
    ) {
        this.tiempoMaximo = this.tiempoMaximo || false;
    }
}
