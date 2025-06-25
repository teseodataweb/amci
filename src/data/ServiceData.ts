interface DataType {
   id: number;
   page:string;
   thumb: string;
   icon: string;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      page:"eventos",
      thumb: "/assets/imgs/service/service-4.jpg",
      icon: "icon-roof",
      title: "Taller NMX-EC-17025 para laboratorios",
      desc: "Capacitación técnica sobre implementación de normas de calidad para ensayos de concreto."
   },
   {
      id: 2,
      page:"eventos",
      thumb: "/assets/imgs/service/service-5.jpg",
      icon: "icon-roof-8",
      title: "Certificación nacional para plantas de concreto",
      desc: "Proceso de evaluación y auditoría que valida el cumplimiento técnico-operativo en planta."
   },
   {
      id: 3,
      page:"eventos",
      thumb: "/assets/imgs/service/service-6.jpg",
      icon: "icon-roof-2",
      title: "Curso de seguridad para operadores de bomba pluma",
      desc: "Entrenamiento especializado en operación segura y normativa de maquinaria de bombeo."
   },
   {
      id: 4,
      page:"eventos",
      thumb: "/assets/imgs/service/service-7.jpg",
      icon: "icon-roof-3",
      title: "Sesión informativa sobre convenios",
      desc: "Conoce los beneficios de las alianzas con IMCYC, Constructo y otras entidades para certificación."
   },
   {
      id: 5,
      page:"eventos",
      thumb: "/assets/imgs/service/service-6.jpg",
      icon: "icon-roof-8",
      title: "Capacitación en especificaciones del concreto premezclado",
      desc: "Curso enfocado en los criterios técnicos, normativos y documentales de la norma NMX-C-155."
   },

   // inner_page
   
   {
      id: 1,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-1.jpg",
      icon: "icon-roof",
      title: "Roof Renovation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 2,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-2.jpg",
      icon: "icon-roof-2",
      title: "Roof Installation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 3,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-3.jpg",
      icon: "icon-roof-3",
      title: "Modified Roofing",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 4,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-7.jpg",
      icon: "icon-hammer",
      title: "Damage Repair",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 5,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-9.jpg",
      icon: "icon-roof-5",
      title: "Roof Animation",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
   {
      id: 6,
      page:"inner_page",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Fixing Roofing",
      desc: "Lorem ipsum dolor sit amet, is consectetur adipisci elit. Integer feugiat tortor non there are many other nullam."
   },
];

export default service_data;