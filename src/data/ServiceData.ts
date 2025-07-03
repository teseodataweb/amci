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
    icon: "fas fa-certificate", // World of Concrete – Las Vegas
    title: "World of Concrete – Las Vegas",
    desc: "Accede gratuitamente al piso de exhibición del evento internacional más importante del concreto, como parte de la delegación AMCI.",
  },
  {
    id: 2,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-hotel", // Hotel City Express
    title: "Hotel City Express",
    desc: "Tarifas preferenciales para socios activos en toda la cadena. Solicita tu número de convenio en info@amciac.org.",
  },
  {
    id: 3,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-plane", // Viva Aerobus
    title: "Viva Aerobus",
    desc: "Viaja con descuento en vuelos nacionales para eventos y reuniones AMCI. Convenio exclusivo para concreteros afiliados.",
  },
  {
    id: 4,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-university", // Convenio con IMCYC
    title: "Convenio con IMCYC",
    desc: "Accede a certificaciones y cursos técnicos del Instituto Mexicano del Cemento y del Concreto con tarifas preferenciales.",
  },
  {
    id: 5,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-ad", // Banner y Ficha Comercial
    title: "Banner y Ficha Comercial",
    desc: "Promociona tu marca como proveedor en el sitio AMCI con banner web y ficha interactiva durante 6 o 12 meses.",
  },
  {
    id: 6,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-newspaper", // Anuncio en México en Concreto
    title: "Anuncio en México en Concreto",
    desc: "Elige entre media plana o plana completa para anunciar tu empresa en la revista más leída del sector.",
  },
  {
    id: 7,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-chalkboard-teacher", // Webinars de Proveedores
    title: "Webinars de Proveedores",
    desc: "Participa como expositor en hasta 3 webinars anuales dirigidos a concreteros afiliados.",
  },
  {
    id: 8,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-envelope", // Difusión por Email
    title: "Difusión por Email",
    desc: "Envía tus campañas comerciales a más de 2,500 contactos del sector a través del canal oficial de AMCI.",
  },
  {
    id: 9,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fab fa-whatsapp", // Difusión por WhatsApp
    title: "Difusión por WhatsApp",
    desc: "Promociona lanzamientos, promociones o nuevos servicios con mensajes a una red exclusiva de concreteros activos.",
  },
  {
    id: 10,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-award", // Descuento en Constructo
    title: "Descuento en Constructo",
    desc: "Precios preferenciales en stands de exposición durante el evento Constructo, el principal foro del concreto independiente.",
  },
  {
    id: 11,
    page: "convenios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-user-friends", // Contacto con Socios
    title: "Contacto con Socios",
    desc: "Vinculación directa con concreteros afiliados a través de eventos, ruedas de negocios y campañas estratégicas.",
  },

  // Beneficios

  {
    id: 1,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-users", // Representación Gremial
    title: "Representación Gremial",
    desc: "Participación activa ante cámaras, asociaciones y organismos del sector para fortalecer la voz del concreto independiente.",
  },
  {
    id: 2,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-balance-scale", // Gestión Gubernamental
    title: "Gestión Gubernamental",
    desc: "Apoyo institucional en trámites, normativas y vinculación con autoridades del sector construcción.",
  },
  {
    id: 3,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-book-open", // Capacitación Gratuita
    title: "Capacitación Gratuita",
    desc: "Accede sin costo a talleres técnicos y cursos administrativos organizados por AMCI durante el año.",
  },
  {
    id: 4,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-graduation-cap", // Beca en Cursos Especializados
    title: "Beca en Cursos Especializados",
    desc: "Obtén una inscripción gratuita al año para cualquiera de nuestros cursos, con valor máximo de $5,000 MXN.",
  },
  {
    id: 5,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-newspaper", // Revista México en Concreto
    title: "Revista México en Concreto",
    desc: "Recibe la edición digital de nuestra revista especializada, con artículos técnicos, casos de éxito y tendencias del concreto.",
  },
  {
    id: 6,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-globe", // Presencia Web como Socio
    title: "Presencia Web como Socio",
    desc: "Aparece en el sitio oficial de AMCI con tu ficha de contacto, ubicación y categoría de servicio.",
  },
  {
    id: 7,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-calendar-alt", // Eventos Exclusivos
    title: "Eventos Exclusivos",
    desc: "Invitación preferencial a congresos, juntas regionales y exposiciones con conferencias de alto nivel.",
  },
  {
    id: 8,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-cogs", // Apoyo con Maquinaria
    title: "Apoyo con Maquinaria",
    desc: "Facilitamos la búsqueda y vinculación para adquirir o vender equipo como revolvedoras o bombas pluma.",
  },
  {
    id: 9,
    page: "beneficios",
    thumb: "/assets/imgs/service/service-10.jpg",
    icon: "fas fa-headset", // Atención Personalizada
    title: "Atención Personalizada",
    desc: "Soporte directo por parte del equipo AMCI para gestiones internas, certificaciones, eventos y vinculación técnica.",
  },
];

export default service_data;
