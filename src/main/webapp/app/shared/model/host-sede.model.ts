import { ISedes } from 'app/shared/model/sedes.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export interface IHostSede {
    id?: number;
    nombre?: string;
    sedes?: ISedes;
    miembros?: IMiembros;
}

export class HostSede implements IHostSede {
    constructor(public id?: number, public nombre?: string, public sedes?: ISedes, public miembros?: IMiembros) {}
}
