interface DataType {
  id: number;
  page: string;
  title: string;
  desc: string;
  showAnswer: boolean;
  list_items?: string[]; // Nuevo campo opcional para listado
  small_title?: string; // <-- Nuevo campo opcional
}

const faq_data: DataType[] = [
  {
    id: 1,
    page: "gestion",
    showAnswer: false,
    title:
      "¿Qué procesos específicos de una concretera </br> puedo digitalizar?",
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
    title:
      "¿Sirve para plantas pequeñas o sólo para </br> operaciones grandes?",
    desc: "Es escalable. Lo usan tanto microplantas independientes como empresas con múltiples patios. Se adapta al nivel de operación sin comprometer funciones clave.",
  },
  {
    id: 4,
    page: "gestion",
    showAnswer: false,
    title:
      "¿Puedo gestionar mi personal y maquinaria con </br> esta herramienta?",
    desc: "Incluye módulos de control de operadores, mantenimientos preventivos, asignación de equipo y trazabilidad de unidades concretadoras y bombas.",
  },
  {
    id: 5,
    page: "gestion",
    showAnswer: false,
    title: "¿Cómo respalda AMCI la implementación de este </br> sistema?",
    desc: "AMCI colabora en la validación funcional del sistema, promueve su adopción como práctica recomendada y brinda soporte técnico especializado al sector.",
  },

  // Material Capasitación

  {
    id: 1,
    page: "capasitacion",
    showAnswer: false,
    title: "NMRCA - Tópicos del Concreto Premezclado",
    small_title: "Guía esencial de fundamentos",
    desc: "Compendio de 41 documentos traducidos sobre el concreto en la práctica. Cubre preguntas comunes del tipo: ¿qué es?, ¿por qué se usa?, ¿cómo se trabaja?",
    list_items: [
      "Ideal para capacitación inicial.",
      "Basado en materiales NMRCA.",
      "Acceso digital inmediato.",
    ]
  },
  {
    id: 2,
    page: "capasitacion",
    showAnswer: false,
    title: "Manual del Conductor de Revolvedora",
    small_title: "Entrenamiento en operación y servicio",
    desc: "Manual completo para operadores nuevos o en capacitación. Abarca desde conocimiento del concreto hasta relaciones con el cliente.",
    list_items: [
      "Buenas prácticas de manejo.",
      "Prevención de errores operativos.",
      "Cuidado del equipo y del cliente.",
    ]
  },
  {
    id: 3,
    page: "capasitacion",
    showAnswer: false,
    title: "Paquete #1 – Capacitación en video (9 DVDs)",
    small_title: "Seguridad y operación con bombas y revolvedoras",
    desc: "Colección audiovisual enfocada en prácticas seguras, instalación, limpieza y maniobras de riesgo.",
    list_items: [
      "Videos didácticos paso a paso.",
      "Contenido avalado por ACPA.",
      "Uso recomendado en entrenamientos presenciales.",
      ".",
      "Incluye",
      "Guía de operador certificado",
      "Instalación, limpieza y altura",
      "Seguridad para conductores y trabajadores",
    ]
  },
  {
    id: 4,
    page: "capasitacion",
    showAnswer: false,
    title: "Paquete #2 – Manuales impresos (3 documentos)",
    small_title: "Documentación para consulta técnica",
    desc: "Tres manuales clave para reforzar la seguridad y procedimientos con bombas estacionarias.",
    list_items: [
      "Manual de seguridad general",
      "Manual específico para líneas de bombeo",
      "Material didáctico para formación interna",
    ]
  },
  {
    id: 5,
    page: "capasitacion",
    showAnswer: false,
    title: "Paquete #3 – Combo completo </br> (9 DVDs + 3 Manuales)",
    small_title: "Entrenamiento integral en seguridad y operación",
    desc: "Incluye todo el contenido del Paquete #1 y Paquete #2. Ideal para centros de capacitación o plantas con múltiples operadores.",
    list_items: [
      "Formación visual y escrita combinada",
      "Optimiza el tiempo de entrenamiento",
      "Avalado por expertos del sector",
    ]
  },
];

export default faq_data;
