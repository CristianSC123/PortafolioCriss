export interface Tecnologia {
    nombre: string;
    icono: string;
    es_principal: boolean;
  }
  
  export interface Proyecto {
    id: string;
    titulo: string;
    descripcion: string;
    url_repositorio: string;
    url_demo: string;
    imagen: string;
    tecnologias: Tecnologia[];
  }
  