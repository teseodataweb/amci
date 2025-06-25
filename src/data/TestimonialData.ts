
interface DataType {
   id: number;
   page: string;
   avatar: string;
   name: string;
   designation: string;
   desc: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      avatar: "/assets/imgs/resources/testimonials-2.png",
      name: "Carlos Vázquez",
      designation: "Director Operativo, Concretos VIMA – Puebla",
      desc: "“ El Informe Nacional del Concreto nos dio claridad sobre la demanda en nuestra región. Tomamos mejores decisiones de expansión gracias a sus datos ”"
   },
   {
      id: 2,
      page: "home_1",
      avatar: "/assets/imgs/resources/testimonials-1.png",
      name: "Mariana Castañeda",
      designation: "Concretos del Norte – Monterrey",
      desc: "“ Lo mejor han sido los cursos. Me ayudaron a actualizarme con temas que en planta muchas veces damos por hecho. No todo es perfecto, pero sí es útil ”"
   },
   {
      id: 3,
      page: "home_1",
      avatar: "/assets/imgs/resources/testimonials-2.png",
      name: "Iván Morales",
      designation: "Afiliado desde 2021 – Tijuana",
      desc: "“ Con AMCI me enteré de cosas que ni sabía que afectaban a mi negocio. Desde precios regionales hasta temas fiscales. A veces mandan mucha info, pero siempre hay algo que te sirve ”"
   },
];

export default testi_data;