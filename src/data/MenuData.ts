
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
        has_dropdown: true,
        sub_menus: [
            { link: "/", title: "Inicio" },
        ],
    },
    {
        id: 2,
        title: "AMCI",
        link: "/quienes_Somos",
        has_dropdown: true,
        sub_menus: [
            { link: "/quienes_Somos", title: "Quienes somos" },
            { link: "/eventos", title: "Eventos" },
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
            { link: "/software", title: "Software" },
        ],
    },
    {
        id: 4,
        title: "Convenios y Veneficios",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/convenios", title: "Convenios" },
            { link: "/certificaciones", title: "Certificaciones" },
            { link: "/maquinaria", title: "Maquinaria" },
            { link: "/gestion", title: "Gestion" },
            { link: "/hoteles", title: "Hoteles" },
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
        has_dropdown: true,
        sub_menus: [
            { link: "https://amciac.org/blog/", title: "Blog" },
        ],
    },
];

export default menu_data;