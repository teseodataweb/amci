interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "gestion",
      showAnswer: false,
      title: "¿Qué procesos específicos de una concretera </br> puedo digitalizar?",
      desc: "Puedes automatizar desde el control de pedidos, rutas de entrega y bitácoras de planta hasta reportes de cumplimiento normativo y seguimiento de calidad del concreto.",
   },
   {
      id: 2,
      page: "gestion",
      showAnswer: false,
      title: "¿El sistema está alineado con las certificaciones </br> AMCI?",
      desc: "Sí. Incluye módulos y formatos compatibles con las certificaciones NMX-C-155, auditorías internas y control documental exigido en procesos de evaluación AMCI.",
   },
   {
      id: 3,
      page: "gestion",
      showAnswer: true,
      title: "¿Sirve para plantas pequeñas o sólo para </br> operaciones grandes?",
      desc: "Es escalable. Lo usan tanto microplantas independientes como empresas con múltiples patios. Se adapta al nivel de operación sin comprometer funciones clave.",
   },
   {
      id: 4,
      page: "gestion",
      showAnswer: false,
      title: "¿Puedo gestionar mi personal y maquinaria con </br> esta herramienta?",
      desc: "Incluye módulos de control de operadores, mantenimientos preventivos, asignación de equipo y trazabilidad de unidades concretadoras y bombas.",
   },
   {
      id: 5,
      page: "gestion",
      showAnswer: false,
      title: "¿Cómo respalda AMCI la implementación de este </br> sistema?",
      desc: "AMCI colabora en la validación funcional del sistema, promueve su adopción como práctica recomendada y brinda soporte técnico especializado al sector.",
   },
];

export default faq_data;