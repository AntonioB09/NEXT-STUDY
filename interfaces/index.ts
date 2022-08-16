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

export interface RowData {
  name: string;
  email: string;
  company: string;
}

export interface TableSortProps {
  data: RowData[];
}

export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}
