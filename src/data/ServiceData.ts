interface DataType {
  id: number;
  page: string;
  thumb: string;
  icon: string;
  title: string;
  desc: string;
  link?: string; // Optional link for external pages
}

const service_data: DataType[] = [
  {
    id: 1,
    page: "eventos",
    thumb: "/assets/imgs/service/service-4.jpg",
    icon: "fas fa-vials", // Laboratorio
    title: "Taller NMX-EC-17025 para laboratorios",
    desc: "Capacitación técnica sobre implementación de normas de calidad para ensayos de concreto.",
  },
  {
    id: 2,
    page: "eventos",
    thumb: "/assets/imgs/service/service-5.jpg",
    icon: "fas fa-industry", // Planta/Certificación
    title: "Certificación nacional para plantas de concreto",
    desc: "Proceso de evaluación y auditoría que valida el cumplimiento técnico-operativo en planta.",
  },
  {
    id: 3,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-hard-hat", // Seguridad
    title: "Curso de seguridad para operadores de bomba pluma",
    desc: "Entrenamiento especializado en operación segura y normativa de maquinaria de bombeo.",
  },
  {
    id: 4,
    page: "eventos",
    thumb: "/assets/imgs/service/service-7.jpg",
    icon: "fas fa-handshake", // Convenios
    title: "Sesión informativa sobre convenios",
    desc: "Conoce los beneficios de las alianzas con IMCYC, Constructo y otras entidades para certificación.",
  },
  {
    id: 5,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-file-contract", // Especificaciones/documentos
    title: "Capacitación en especificaciones del concreto premezclado",
    desc: "Curso enfocado en los criterios técnicos, normativos y documentales de la norma NMX-C-155.",
  },
  {
    id: 6,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-chart-bar", // Estadística/Calidad
    title: "Control de Calidad y Control Estadístico",
    desc: "Dos cursos presenciales impartidos en Puebla para profundizar en patologías del concreto y control estadístico en planta. Incluye promoción para socios.",
  },
  {
    id: 7,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-lightbulb", // Innovación/Futuro
    title: "Impulsando el Futuro del Concreto",
    desc: "Encuentro técnico en Guadalajara para debatir el futuro del sector concreto independiente. Espacios de networking y visión estratégica.",
  },
  {
    id: 8,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-users", // Reunión/Networking
    title: "Reunión de Concreteros Zona Bajío 2025",
    desc: "Encuentro regional en Aguascalientes para concreteros del Bajío. Intercambio de experiencias, avances técnicos y alianzas comerciales.",
  },
  {
    id: 9,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-gavel", // Asamblea/Decisiones
    title: "Asamblea Nacional AMCI 2025",
    desc: "Reunión institucional en CDMX para presentar avances, renovar compromisos y tomar decisiones estratégicas con todos los socios AMCI.",
  },
  {
    id: 10,
    page: "eventos",
    thumb: "/assets/imgs/service/service-6.jpg",
    icon: "fas fa-globe-americas", // Internacional/Expo
    title: "CONEXPO-CON/AGG 2026 – Delegación AMCI",
    desc: "Asiste con AMCI a la mayor feria de construcción de América. Más de 2,000 expositores y lanzamientos de tecnología en concreto.",
  },

  // Maquinaria

  {
    id: 1,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-truck-loading", // Bomba Pluma (camión con brazo)
    title: "Bomba </br> Pluma",
    desc: "Equipo hidráulico montado sobre camión para distribución precisa del concreto en obras verticales o de difícil acceso.",
  },
  {
    id: 2,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-2.jpg",
    icon: "fas fa-industry", // Planta Dosificadora (industria)
    title: "Planta </br> Dosificadora",
    desc: "Sistema fijo o móvil que mezcla los componentes del concreto garantizando la proporción exacta y la trazabilidad.",
  },
  {
    id: 3,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-3.jpg",
    icon: "fas fa-truck-monster", // Camión Revolvedor (camión grande)
    title: "Camión </br> Revolvedor",
    desc: "Vehículo especializado para el transporte de concreto premezclado, con tambor giratorio para mantener la mezcla homogénea.",
  },
  {
    id: 4,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-truck-moving", // Auto bomba (camión de mudanza)
    title: "Auto </br> bomba",
    desc: "Unidad móvil con capacidad de bombeo directo a grandes distancias y alturas, ideal para obras horizontales.",
  },
  {
    id: 5,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-cogs", // Planta de Trituración (engranes)
    title: "Planta </br> de Trituración",
    desc: "Maquinaria para procesamiento de agregados, permitiendo a las concreteras controlar la calidad de sus materiales.",
  },
  {
    id: 6,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-warehouse", // Tolvas y Silos (almacén)
    title: "Tolvas </br> y Silos",
    desc: "Contenedores industriales utilizados para almacenamiento y dosificación de cemento y agregados con alta eficiencia.",
  },
  {
    id: 7,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-trailer", // Chasis de Arrastre (remolque)
    title: "Chasis </br> de Arrastre",
    desc: "Plataforma móvil utilizada para transportar equipos pesados o plantas móviles entre obras y centros logísticos.",
  },
  {
    id: 8,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-tools", // Aditamentos para bombeo (herramientas)
    title: "Aditamentos </br> para bombeo",
    desc: "Mangueras, tubos y accesorios especializados que permiten un flujo continuo y seguro del concreto en obra.",
  },
  {
    id: 9,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-desktop", // Sistema de Control Automatizado (pantalla)
    title: "Sistema </br> de Control Automatizado",
    desc: "Software y hardware que permite monitorear y ajustar en tiempo real el proceso de producción de concreto.",
  },
  {
    id: 10,
    page: "maquinaria",
    thumb: "/assets/imgs/service/service-1.jpg",
    icon: "fas fa-vials", // Laboratorio de Control de Calidad (tubos de ensayo)
    title: "Laboratorio </br> de Control de Calidad",
    desc: "Equipamiento técnico para realizar pruebas de resistencia, asentamiento y composición del concreto, conforme a norma.",
  },

  //convenios

  {
    id: 1,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Convenio IMCYC",
    desc: "Accede a certificaciones profesionales con tarifas preferenciales gracias a nuestra alianza estratégica con el Instituto Mexicano del Cemento y del Concreto.",
  },
  {
    id: 2,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Webinars Colaborativos",
    desc: "Participa como proveedor en espacios formativos junto a concreteros independientes, con hasta tres webinars al año para posicionarte ante socios clave.",
  },
  {
    id: 3,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Anuncios en Revista México en Concreto",
    desc: "Da visibilidad a tu marca con media plana o plana completa durante 6 o 12 meses en nuestra publicación especializada en el sector del concreto.",
  },
  {
    id: 4,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Banner Web y Ficha de Contacto",
    desc: "Destaca tu marca en nuestro sitio oficial con un banner visible y ficha comercial interactiva durante el periodo contratado (6 o 12 meses).",
  },
  {
    id: 5,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Stands con Descuento en Constructo",
    desc: "Accede a precios preferenciales en stands de exposición durante el evento Constructo, punto de encuentro clave para el sector concretero.",
  },
  {
    id: 6,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Acceso a World of Concrete (Las Vegas)",
    desc: "Obtén pases gratuitos como proveedor afiliado para asistir a la feria internacional más importante del concreto en Las Vegas.",
  },
  {
    id: 7,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Difusión por Email Marketing",
    desc: "Promociona tus servicios con envíos directos a más de 2,500 contactos de la industria concretera mediante nuestras campañas por correo.",
  },
  {
    id: 8,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Difusión vía WhatsApp",
    desc: "Llega de forma inmediata a más de 1,000 concreteros afiliados con tus promociones, lanzamientos o comunicados vía WhatsApp profesional.",
  },
  {
    id: 9,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Contacto con Socios",
    desc: "Conéctate directamente con concreteros afiliados a través de actividades estratégicas pensadas para generar networking y nuevos leads.",
  },
  {
    id: 10,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Aparece tu Logo en la Web",
    desc: "Incorpora tu logotipo en las secciones de mayor tráfico del sitio AMCI, ya sea en la homepage o como aliado destacado según tu convenio.",
  },
  {
    id: 11,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "icon-roof-6",
    title: "Descuento en Cursos AMCI",
    desc: "Capacita a tu equipo con tarifas especiales en talleres, certificaciones y cursos técnicos organizados por la asociación.",
  },
];

export default service_data;
