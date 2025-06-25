interface DataType {
   id: number;
   page: string;
   thumb: string;
   sub_title: string;
   title: string;
   link?: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      page: "index",
      thumb: "/assets/imgs/project/project-5.jpg",
      sub_title: "Revista México en Concreto – Ed. 110",
      title: "Junio 2025",
   },
   {
      id: 2,
      page: "index",
      thumb: "/assets/imgs/project/project-6.jpg",
      sub_title: "Informe Nacional del Concreto 2025",
      title: "Reporte estratégico de mercado",
   },
   {
      id: 3,
      page: "index",
      thumb: "/assets/imgs/project/project-7.jpg",
      sub_title: "Guía para Certificaciones NMX",
      title: "Capacitación y normativas actualizadas",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 2,
      page: "home_2",
      thumb: "/assets/imgs/project/project-2.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 3,
      page: "home_2",
      thumb: "/assets/imgs/project/project-3.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 4,
      page: "home_2",
      thumb: "/assets/imgs/project/project-4.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 5,
      page: "home_2",
      thumb: "/assets/imgs/project/project-3.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },
   {
      id: 6,
      page: "home_2",
      thumb: "/assets/imgs/project/project-3.jpg",
      sub_title: "Fixing roof",
      title: "Roof renovation",
   },

   // Proveedores
   {
      id: 1,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "(555) 123-4567",
      title: "Arkik",
      link: "https://app.arkik.io/"
   },
   {
      id: 2,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 812 040 8674",
      title: "ATRO MOTORS",
      link: "https://howomx.com/"
   },
   {
      id: 3,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "39 1917 2040",
      title: "BRAHER MIXERS",
      link: "https://www.braher.com.mx/"
   },
   {
      id: 4,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 1 56 1104 1083",
      title: "CarbonCure Technologies",
      link: "https://www.carboncure.com/"
   },
   {
      id: 5,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 55 5358 74114",
      title: "Cargotecnia",
      link: "https://www.cargotecnia.com/"
   },
   {
      id: 6,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 446 133 0541",
      title: "CARIBE MAQUINTER",
      link: "https://www.caribemaq.com/index.html"
   },
   {
      id: 7,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 555 279 5926",
      title: "Cementos Moctezuma",
      link: "https://www.moctezuma.com.mx/"
   },
   {
      id: 8,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 818 328 3000",
      title: "Cemex",
      link: "https://www.cemexmexico.com/"
   },
   {
      id: 9,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+01 800 563 0667",
      title: "Command Alkon",
      link: "https://latam.commandalkon.com/"
   },
   {
      id: 10,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 800 720 4010",
      title: "Construmac",
      link: "https://construmac.com/"
   },
   {
      id: 11,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 999 357 1564",
      title: "Fibra Fmax",
      link: "https://www.fmaxfibers.com/"
   },
   {
      id: 12,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 556 579 6070",
      title: "FRUMECAR",
      link: "https://frumecar.com/intelligent-systems/?lang=es"
   },
   {
      id: 13,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 81 888 003 00",
      title: "Isuzu Monterrey",
      link: "https://www.isuzumex.com.mx/concesionarios/nuevo-leon"
   },
   {
      id: 14,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 644 410 7021",
      title: "Maquinaria General de Obras y Tecnologia",
      link: "https://mgomaquinaria.com.mx/"
   },
   {
      id: 15,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 222 708 7604",
      title: "MTM",
      link: "https://mtmequipos.com/"
   },
   {
      id: 16,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 778 735 9750",
      title: "ODISA CONCRETE EQUIPMENT",
      link: "https://odisa.com/es/index.html"
   },
   {
      id: 17,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+57 314 623 1424",
      title: "Siloconnect",
      link: "https://www.nanolike.com/siloconnect/"
   },
   {
      id: 18,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "800 007 48 72",
      title: "Sitsa",
      link: "https://sitsa.com.mx/"
   },
   {
      id: 19,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+52 811 354 6808",
      title: "Suministros Concreteros",
      link: "https://sucot.com.mx/"
   },
   {
      id: 16,
      page: "proveedores",
      thumb: "/assets/imgs/project/project-1.jpg",
      sub_title: "+1 (320) 589-7485",
      title: "Superior Ind.",
      link: "https://superior-ind.com/"
   },
];

export default project_data;