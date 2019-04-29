import { IGrupos } from 'app/shared/model/grupos.model';
import { IMiembros } from 'app/shared/model/miembros.model';

export const enum TipoConsumod {
    GRATIS = 'GRATIS',
    PAGO = 'PAGO'
}

export const enum Impuestod {
    IVA19 = 'IVA19',
    IVA6 = 'IVA6',
    IVA0 = 'IVA0',
    ICO = 'ICO',
    IPOCONSUMO8 = 'IPOCONSUMO8'
}

export const enum Categoriad {
    GENERAL = 'GENERAL',
    DE_GRUPO = 'DE_GRUPO',
    CORPORATIVO = 'CORPORATIVO',
    INSTITUCIONAL = 'INSTITUCIONAL',
    INTERNO = 'INTERNO'
}

export interface IEvento {
    id?: number;
    nombreEvento?: number;
    descripcion?: any;
    audioContentType?: string;
    audio?: any;
    videoContentType?: string;
    video?: any;
    foto1ContentType?: string;
    foto1?: any;
    foto2ContentType?: string;
    foto2?: any;
    bannerContentType?: string;
    banner?: any;
    tipoConsumo?: TipoConsumod;
    valor?: number;
    impuesto?: Impuestod;
    categoria?: Categoriad;
    tipoEvento?: number;
    grupos?: IGrupos[];
    miembros?: IMiembros;
}

export class Evento implements IEvento {
    constructor(
        public id?: number,
        public nombreEvento?: number,
        public descripcion?: any,
        public audioContentType?: string,
        public audio?: any,
        public videoContentType?: string,
        public video?: any,
        public foto1ContentType?: string,
        public foto1?: any,
        public foto2ContentType?: string,
        public foto2?: any,
        public bannerContentType?: string,
        public banner?: any,
        public tipoConsumo?: TipoConsumod,
        public valor?: number,
        public impuesto?: Impuestod,
        public categoria?: Categoriad,
        public tipoEvento?: number,
        public grupos?: IGrupos[],
        public miembros?: IMiembros
    ) {}
}
