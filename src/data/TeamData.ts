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
    thumb: "/assets/imgs/team/team-1.jpg",
    name: "Josué Zaragoza Santos",
    designation: "Project Manager",
    link: "/josue_Z",
    categories: [1],
    facebook: "https://facebook.com/usuario",
    instagram: "https://instagram.com/usuario",
    linkedin: "https://linkedin.com/in/usuario",
  },
  {
    id: 2,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-2.jpg",
    name: "Jorge González Garrido",
    designation: "Senior QA Engineer",
    // link: "/jorge_G",
    categories: [1],
    instagram: "https://instagram.com/usuario",
    
  },
  {
    id: 3,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-3.jpg",
    name: "David Marcelo González Serna",
    designation: "Engineer",
    // link: "/david_M",
    categories: [1]
  },
  {
    id: 4,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-4.jpg",
    name: "Ana Esperanza Contreras Yedra",
    designation: "Roof Worker",
    // link: "/ana_E",
    categories: [1]
  },
  {
    id: 5,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-5.jpg",
    name: "Hernán Espinosa Solís",
    designation: "Project Manager",
    // link: "/hernan_E",
    categories: [1]
  },
  {
    id: 6,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Enrique Casas Irigoyen",
    designation: "Engineer",
    // link: "/enrique_C",
    categories: [1]
  },
  {
    id: 7,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Jimena Muñoz Albarrán",
    designation: "Engineer",
    // link: "/jimena_M",
    categories: [2]
  },
  {
    id: 8,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Miguel Leal Gutiérrez",
    designation: "Engineer",
    // link: "/miguel_L",
    categories: [2]
  },
  {
    id: 9,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Horacio del Castillo Lafuente",
    designation: "Engineer",
    // link: "/horacio_C",
    categories: [2]
  },
  {
    id: 10,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Gilberto Duarte",
    designation: "Engineer",
    // link: "/gilberto_D",
    categories: [2]
  },
  {
    id: 11,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Mauro González Jr.",
    designation: "Engineer",
    // link: "/mauro_G",
    categories: [2]
  },
  {
    id: 12,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Iván Ruibal Flores",
    designation: "Engineer",
    // link: "/ivan_R",
    categories: [2]
  },
  {
    id: 13,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Adrián Maynes García",
    designation: "Engineer",
    // link: "/adrian_M",
    categories: [2]
  },
  {
    id: 14,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Miguel Ángel Ramírez Álvarez",
    designation: "Engineer",
    // link: "/miguel_A",
    categories: [2]
  },
  {
    id: 15,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Diego Erasmo Pinilla Samudio",
    designation: "Engineer",
    // link: "/diego_E",
    categories: [2]
  },
  {
    id: 16,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Eduardo Valencia",
    designation: "Engineer",
    // link: "/eduardo_V",
    categories: [2]
  },
  {
    id: 17,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Miguel Canto",
    designation: "Engineer",
    // link: "/miguel_C",
    categories: [2]
  },
  {
    id: 18,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Fernando Luna Rodríguez",
    designation: "Engineer",
    // link: "/fernando_L",
    categories: [3, 4]
  },
  {
    id: 19,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Erik Francisco Arévalo Gil",
    designation: "Engineer",
    // link: "/erik_F",
    categories: [4]
  },
  {
    id: 20,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Emmanuel Guillermo García Villarreal",
    designation: "Engineer",
    // link: "/emmanuel_G",
    categories: [4]    
  },
  {
    id: 21,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Darío Martínez Álvarez",
    designation: "Engineer",
    // link: "/dario_M",
    categories: [4]
  },
  {
    id: 22,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Ricardo Pepi Sandoval",
    designation: "Engineer",
    // link: "/ricardo_P",
    categories: [4]
  },
  {
    id: 23,
    page: "mesa_Directiva",
    thumb: "/assets/imgs/team/team-6.jpg",
    name: "Ramiro José Páez Cruz",
    designation: "Engineer",
    // link: "/ramiro_J",
    categories: [4]
  },
];

export default team_data;
