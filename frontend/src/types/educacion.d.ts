export interface Educacion{
    id: string;
    institucion: string;
    titulo: string;
    tipo: string;
    fecha_inicio: string;
    fecha_fin: string;
}

export interface Certificado{
    nombre:string;
    id: string;
    fecha_emision: string;
    educacion: Educacion;
}