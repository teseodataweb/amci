interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  className?: string;
  sub_menus?: {
    link: string;
    title: string;
    mega_menus?: {
      link: string;
      title: string;
    }[];
  }[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "AMCI",
    link: "/quienes_Somos",
    has_dropdown: true,
    sub_menus: [
      { link: "/quienes_Somos", title: "Quienes somos" },
      { link: "/eventos", title: "Eventos" },
      { link: "/mesa_Directiva", title: "Mesa directiva" },
      { link: "/publicaciones", title: "Publicaciones" },
      { link: "/software", title: "Software" },
    ],
  },
  {
    id: 3,
    title: "Miembros",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/proveedores", title: "Provedores" },
      { link: "/socios", title: "Socios" },
    ],
  },
  {
    id: 4,
    title: "Convenios y Beneficios",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/convenios", title: "Convenios" },
      { link: "/certificaciones", title: "Certificaciones" },
      { link: "/maquinaria", title: "Maquinaria" },
      { link: "/financiamiento", title: "Financiamiento" },
    ],
  },
  {
    id: 5,
    title: "Capacitación",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/mnx", title: "MNX" },
      { link: "/convenios_certificacion", title: "Convenios Certificados" },
      { link: "/material_Capasitacion", title: "Material Capasitacion" },
      { link: "/pruebas_Concreto", title: "Pruebas Concreto" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "https://amciac.org/blog/",
    has_dropdown: false,
  },
  {
    id: 6,
    has_dropdown: false,
    title: "Contacto",
    link: "/contacto",
    className: "hide-on-desktop",
  },
];

export default menu_data;
