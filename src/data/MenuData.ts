
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
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
            { link: "/home-two", title: "Home Two" },
            { link: "/home-three", title: "Home Three" },
            { link: "/dark-home", title: "Home Dark" },
        ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "Quienes Somos",
        link: "/quienes_Somos",
    },
    {
        id: 3,
        title: "Services",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/eventos", title: "Eventos" },
            { link: "/services-details", title: "Services Details" },
        ],
    },
    {
        id: 4,
        title: "Pages",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            {
                link: "#",
                title: "Projects",
                mega_menus: [
                    {
                        title: "Proveedores",
                        link: "/proveedores",
                    },
                    {
                        title: "Socios",
                        link: "/socios",
                    }
                ],
            },
            { link: "/convenios", title: "Convenios" },
            { link: "/certificaciones", title: "Certificaciones" },
            { link: "/faq", title: "Faq's" },
            { link: "/not-found", title: "Error Page" },
        ],
    },
    {
        id: 5,
        title: "Blog",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/blog-standard", title: "Blog Default" },
            { link: "/blog-grid", title: "Blog Grid" },
            { link: "/blog-details", title: "Blog Details" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contacto",
        link: "/contacto",
    },
];

export default menu_data;