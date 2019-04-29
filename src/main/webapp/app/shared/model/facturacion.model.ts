import { IEmpresa } from 'app/shared/model/empresa.model';
import { ICuentaAsociada } from 'app/shared/model/cuenta-asociada.model';
import { IRegistroCompra } from 'app/shared/model/registro-compra.model';
import { IEquipoEmpresas } from 'app/shared/model/equipo-empresas.model';

export const enum TipoPersonad {
    INATURAL = 'INATURAL',
    JURIDICA = 'JURIDICA'
}

export const enum PeriodicidadFacturaciond {
    SEMANAL = 'SEMANAL',
    QUINCENAL = 'QUINCENAL',
    MENSUAL = 'MENSUAL',
    BIMESTRAL = 'BIMESTRAL',
    TRIMESTRAL = 'TRIMESTRAL'
}

export interface IFacturacion {
    id?: number;
    titularFactura?: string;
    tipoPersona?: TipoPersonad;
    periodicidadFacturacion?: PeriodicidadFacturaciond;
    maximoMonto?: number;
    empresa?: IEmpresa;
    cuentaAsociada?: ICuentaAsociada;
    registroCompras?: IRegistroCompra[];
    equipoEmpresas?: IEquipoEmpresas;
}

export class Facturacion implements IFacturacion {
    constructor(
        public id?: number,
        public titularFactura?: string,
        public tipoPersona?: TipoPersonad,
        public periodicidadFacturacion?: PeriodicidadFacturaciond,
        public maximoMonto?: number,
        public empresa?: IEmpresa,
        public cuentaAsociada?: ICuentaAsociada,
        public registroCompras?: IRegistroCompra[],
        public equipoEmpresas?: IEquipoEmpresas
    ) {}
}
