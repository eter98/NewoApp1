import { ISedes } from 'app/shared/model/sedes.model';

export interface ILanding {
    id?: number;
    descripcion?: string;
    telefonoNegocio?: string;
    numeroPuestos?: number;
    tarifa?: number;
    fotografiaContentType?: string;
    fotografia?: any;
    iva?: boolean;
    sedes?: ISedes;
}

export class Landing implements ILanding {
    constructor(
        public id?: number,
        public descripcion?: string,
        public telefonoNegocio?: string,
        public numeroPuestos?: number,
        public tarifa?: number,
        public fotografiaContentType?: string,
        public fotografia?: any,
        public iva?: boolean,
        public sedes?: ISedes
    ) {
        this.iva = this.iva || false;
    }
}
