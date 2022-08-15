import { CardProps, HeaderProps} from '../interfaces'

export const linksData: HeaderProps[] = [
  {
      "links": [
        {
          "link": "/vacunados",
          "label": "Registro",
          "sublabel": "Vacunados",
          "sublabel2": "Contagiados"
        },
        {
          "link": "/cetrosalud",
          "label": "Centros de Salud",
          "sublabel": "Hospitalizacion",
          "sublabel2": "Vacunacion"
        },
      ]
    }
]

export const cardData: CardProps[] = [
  {
      "cards": [
        {
          "imagen": "vacunacion.jpg",
          "titel": "Registrar Vacunados",
          "description": "Registrar persona vacunada , informacion de vacunas.",
          "bottom_name": "Registrar"
        },
        {
          "imagen": "tratamiento.jpg",
          "titel": "Control de Contagio",
          "description": "Administar contagiados y sus tratamientos, informacion de centros de salud.",
          "bottom_name": "Entrar"
        },
      ]
    }
]