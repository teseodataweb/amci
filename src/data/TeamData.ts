interface DataType {
  id: number;
  page: string;
  thumb: string;
  name: string;
  designation: string;
  link?: string; // Nuevo campo opcional para el link
  categories?: number[]; // Un miembro puede estar en varias categorías
  facebook?: string;   // <-- Nuevo campo opcional
  instagram?: string;  // <-- Nuevo campo opcional
  linkedin?: string;   // <-- Nuevo campo opcional
}

const team_data: DataType[] = [
  {
    id: 1,
    page: "home_3",
    thumb: "/assets/imgs/team/team-1.jpg",
    name: "Kristin Watson",
    designation: "Project Manager",
  },
  {
    id: 2,
    page: "home_3",
    thumb: "/assets/imgs/team/team-2.jpg",
    name: "Annette Black",
    designation: "Senior QA Engineer",
  },
  {
    id: 3,
    page: "home_3",
    thumb: "/assets/imgs/team/team-3.jpg",
    name: "Ralph Edwards",
    designation: "Engineer",
  },

  // mesa_Directiva

  {
    id: 1,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Josué Zaragoza Santos",
    designation: "Presidente de AMCI",
    link: "/josue_Z",
    categories: [1],
    facebook: "https://facebook.com/usuario",
    instagram: "https://instagram.com/usuario",
    linkedin: "https://linkedin.com/in/usuario",
  },
  {
    id: 2,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Jorge González Garrido",
    designation: "Tesorero",
    // link: "/jorge_G",
    categories: [1],
    instagram: "https://instagram.com/usuario",
    
  },
  {
    id: 3,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "David Marcelo González Serna",
    designation: "Secretario",
    // link: "/david_M",
    categories: [1]
  },
  {
    id: 4,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/woman.jpg",
    name: "Ana Esperanza Contreras Yedra",
    designation: "Vocal 1",
    // link: "/ana_E",
    categories: [1]
  },
  {
    id: 5,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Hernán Espinosa Solís",
    designation: "Vocal 2",
    // link: "/hernan_E",
    categories: [1]
  },
  {
    id: 6,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Enrique Casas Irigoyen",
    designation: "Comisario",
    // link: "/enrique_C",
    categories: [1]
  },
  {
    id: 7,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/woman.jpg",
    name: "Jimena Muñoz Albarrán",
    designation: "Gestión Pública",
    // link: "/jimena_M",
    categories: [2]
  },
  {
    id: 8,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Miguel Leal Gutiérrez",
    designation: "Certificación y Capacitación",
    // link: "/miguel_L",
    categories: [2]
  },
  {
    id: 9,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Horacio del Castillo Lafuente",
    designation: "Crédito y Cobranza",
    // link: "/horacio_C",
    categories: [2]
  },
  {
    id: 10,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Gilberto Duarte",
    designation: "Expos",
    // link: "/gilberto_D",
    categories: [2]
  },
  {
    id: 11,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Mauro González Jr.",
    designation: "Innovación",
    // link: "/mauro_G",
    categories: [2]
  },
  {
    id: 12,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Iván Ruibal Flores",
    designation: "Desarrollo Sustentable",
    // link: "/ivan_R",
    categories: [2]
  },
  {
    id: 13,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Adrián Maynes García",
    designation: "Relación con Proveedores",
    // link: "/adrian_M",
    categories: [2]
  },
  {
    id: 14,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Miguel Ángel Ramírez Álvarez",
    designation: "Tecnología",
    // link: "/miguel_A",
    categories: [2]
  },
  {
    id: 15,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Diego Erasmo Pinilla Samudio",
    designation: "Relaciones Públicas",
    // link: "/diego_E",
    categories: [2]
  },
  {
    id: 16,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Eduardo Valencia",
    designation: "Competitividad",
    // link: "/eduardo_V",
    categories: [2]
  },
  {
    id: 17,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Miguel Canto",
    designation: "Delegaciones",
    // link: "/miguel_C",
    categories: [2]
  },
  {
    id: 18,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Fernando Luna Rodríguez",
    designation: "Honor y Justicia/Consejero",
    // link: "/fernando_L",
    categories: [3, 4]
  },
  {
    id: 19,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Erik Francisco Arévalo Gil",
    designation: "Presidente",
    // link: "/erik_F",
    categories: [4]
  },
  {
    id: 20,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Emmanuel Guillermo García Villarreal",
    designation: "Consejero",
    // link: "/emmanuel_G",
    categories: [4]    
  },
  {
    id: 21,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Darío Martínez Álvarez",
    designation: "Consejero",
    // link: "/dario_M",
    categories: [4]
  },
  {
    id: 22,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Ricardo Pepi Sandoval",
    designation: "Consejero",
    // link: "/ricardo_P",
    categories: [4]
  },
  {
    id: 23,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/icons/man.jpg",
    name: "Ramiro José Páez Cruz",
    designation: "Consejero",
    // link: "/ramiro_J",
    categories: [4]
  },
];

export default team_data;
