import { IGrupos } from 'app/shared/model/grupos.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export interface IMiembrosGrupo {
    id?: number;
    grupos?: IGrupos;
    miembros?: IMiembros;
}

export class MiembrosGrupo implements IMiembrosGrupo {
    constructor(public id?: number, public grupos?: IGrupos, public miembros?: IMiembros) {}
}
