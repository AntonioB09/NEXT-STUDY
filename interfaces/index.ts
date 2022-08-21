// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';




export interface HeaderProps {
  links: { link: string; label: string ; sublabel?: string; sublabel2?: string}[];
}

export interface CardProps {
  cards: { imagen: string; titel: string ; description: string; bottom_name: string}[];
}

export enum altoRiesgo{
  true = "red",
  false = "green" 
}

export interface Persona {
 
  doc_identidad:  number;          
  nombre_per:     string;         
  apellido_per:   string;        
  fecha_nac:      Date;
  sexo:           string;          
  ocupacion_per:  string;
  alto_riesgo:    boolean;
  n_telefono_per: number;
  direccion:      string;
  es_paciente:    boolean;
  es_pers_salud:  boolean;
  nacionalidad:   string;
  activo:         boolean;
  reside:         Reside[];          
}

export interface IDetallePersona {
  detalles_persona: Persona;
}


export interface Reside {
  doc_identidad: number;
  cod_municipio: number;
  fecha_reside:  Date;
  id:            number;
}


export interface TableSortProps {
  personas: Persona[];
}

export interface ThProps {
  children?: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort?(): void;
}
