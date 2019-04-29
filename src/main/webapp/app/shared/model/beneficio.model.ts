import { IMiembros } from 'app/shared/model/miembros.model';

export interface IBeneficio {
    id?: number;
    tipoBeneficio?: string;
    descuento?: number;
    miembros?: IMiembros;
}

export class Beneficio implements IBeneficio {
    constructor(public id?: number, public tipoBeneficio?: string, public descuento?: number, public miembros?: IMiembros) {}
}
