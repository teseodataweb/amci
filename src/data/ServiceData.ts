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

   //convenios

   {
      id: 1,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Convenio IMCYC",
      desc: "Accede a certificaciones profesionales con tarifas preferenciales gracias a nuestra alianza estratégica con el Instituto Mexicano del Cemento y del Concreto."
   },
   {
      id: 2,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Webinars Colaborativos",
      desc: "Participa como proveedor en espacios formativos junto a concreteros independientes, con hasta tres webinars al año para posicionarte ante socios clave."
   },
   {
      id: 3,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Anuncios en Revista México en Concreto",
      desc: "Da visibilidad a tu marca con media plana o plana completa durante 6 o 12 meses en nuestra publicación especializada en el sector del concreto."
   },
   {
      id: 4,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Banner Web y Ficha de Contacto",
      desc: "Destaca tu marca en nuestro sitio oficial con un banner visible y ficha comercial interactiva durante el periodo contratado (6 o 12 meses)."
   },
   {
      id: 5,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Stands con Descuento en Constructo",
      desc: "Accede a precios preferenciales en stands de exposición durante el evento Constructo, punto de encuentro clave para el sector concretero."
   },
   {
      id: 6,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Acceso a World of Concrete (Las Vegas)",
      desc: "Obtén pases gratuitos como proveedor afiliado para asistir a la feria internacional más importante del concreto en Las Vegas."
   },
   {
      id: 7,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Difusión por Email Marketing",
      desc: "Promociona tus servicios con envíos directos a más de 2,500 contactos de la industria concretera mediante nuestras campañas por correo."
   },
   {
      id: 8,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Difusión vía WhatsApp",
      desc: "Llega de forma inmediata a más de 1,000 concreteros afiliados con tus promociones, lanzamientos o comunicados vía WhatsApp profesional."
   },
   {
      id: 9,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Contacto con Socios",
      desc: "Conéctate directamente con concreteros afiliados a través de actividades estratégicas pensadas para generar networking y nuevos leads."
   },
   {
      id: 10,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Aparece tu Logo en la Web",
      desc: "Incorpora tu logotipo en las secciones de mayor tráfico del sitio AMCI, ya sea en la homepage o como aliado destacado según tu convenio."
   },
   {
      id: 11,
      page:"convenios",
      thumb: "/assets/imgs/service/service-10.jpg",
      icon: "icon-roof-6",
      title: "Descuento en Cursos AMCI",
      desc: "Capacita a tu equipo con tarifas especiales en talleres, certificaciones y cursos técnicos organizados por la asociación."
   },
];

export default service_data;