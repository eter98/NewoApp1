import { IMiembrosGrupo } from 'app/shared/model/miembros-grupo.model';
import { IEvento } from 'app/shared/model/evento.model';

export const enum TipoGrupod {
    INTERNO = 'INTERNO',
    EXTERNO = 'EXTERNO',
    PATROCINADO = 'PATROCINADO',
    PUBLICO = 'PUBLICO'
}

export const enum Categoriad {
    GENERAL = 'GENERAL',
    DE_GRUPO = 'DE_GRUPO',
    CORPORATIVO = 'CORPORATIVO',
    INSTITUCIONAL = 'INSTITUCIONAL',
    INTERNO = 'INTERNO'
}

export const enum TipoConsumod {
    GRATIS = 'GRATIS',
    PAGO = 'PAGO'
}

export interface IGrupos {
    id?: number;
    nombreGrupo?: string;
    instagram?: string;
    facebook?: string;
    twiter?: string;
    linkedIn?: string;
    tipoGrupo?: TipoGrupod;
    categoria?: Categoriad;
    tipoConsumo?: TipoConsumod;
    valorSuscripcion?: number;
    reglasGrupo?: any;
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
    miembrosGrupos?: IMiembrosGrupo[];
    evento?: IEvento;
}

export class Grupos implements IGrupos {
    constructor(
        public id?: number,
        public nombreGrupo?: string,
        public instagram?: string,
        public facebook?: string,
        public twiter?: string,
        public linkedIn?: string,
        public tipoGrupo?: TipoGrupod,
        public categoria?: Categoriad,
        public tipoConsumo?: TipoConsumod,
        public valorSuscripcion?: number,
        public reglasGrupo?: any,
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
        public miembrosGrupos?: IMiembrosGrupo[],
        public evento?: IEvento
    ) {}
}
