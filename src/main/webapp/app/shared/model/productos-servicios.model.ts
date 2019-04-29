import { IPerfilEquipoEmpresa } from 'app/shared/model/perfil-equipo-empresa.model';

export const enum Impuestod {
    IVA19 = 'IVA19',
    IVA6 = 'IVA6',
    IVA0 = 'IVA0',
    ICO = 'ICO',
    IPOCONSUMO8 = 'IPOCONSUMO8'
}

export interface IProductosServicios {
    id?: number;
    nombreProducto?: string;
    fotoContentType?: string;
    foto?: any;
    descripcion?: string;
    inventariables?: number;
    valor?: number;
    impuesto?: Impuestod;
    perfilEquipoEmpresa?: IPerfilEquipoEmpresa;
}

export class ProductosServicios implements IProductosServicios {
    constructor(
        public id?: number,
        public nombreProducto?: string,
        public fotoContentType?: string,
        public foto?: any,
        public descripcion?: string,
        public inventariables?: number,
        public valor?: number,
        public impuesto?: Impuestod,
        public perfilEquipoEmpresa?: IPerfilEquipoEmpresa
    ) {}
}
