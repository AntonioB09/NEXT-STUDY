// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface HeaderProps {
  links: { link: string; label: string ; sublabel?: string; sublabel2?: string}[];
}

export interface CardProps {
  cards: { imagen: string; titel: string ; description: string; bottom_name: string}[];
}