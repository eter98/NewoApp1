import { IEquipoEmpresas } from 'app/shared/model/equipo-empresas.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export interface IMiembrosEquipoEmpresas {
    id?: number;
    equipoEmpresas?: IEquipoEmpresas;
    miembros?: IMiembros;
}

export class MiembrosEquipoEmpresas implements IMiembrosEquipoEmpresas {
    constructor(public id?: number, public equipoEmpresas?: IEquipoEmpresas, public miembros?: IMiembros) {}
}
