const data_es = {
  name: "Jose Luis Maza",
  profession: "Desarrollador Web",
  address: "Mataró, Barcelona",
  email: "joseluismazaluna@gmail.com",
  avatar:
    "/CV_FOTO.jpg",
  aboutMe:
    "En cuanto a mis habilidades, destacan mi capacidad de aprendizaje y comunicación efectiva, lo que me ha permitido adquirir conocimientos en programación a través de un enfoque autodidacta. Soy un profesional proactivo y resolutivo, con una mentalidad creativa y ambiciones de crecimiento tanto a nivel personal como profesional.",
  createdBy: "Creado por Jose Luis Maza",
  education: {
    name: "Educación",
    degree: "DESARROLLO WEB",
    university: "ROCK THE CODE",
    graduationYear: "2023 - ACTUALIDAD",
    relevantCourses: ["Vite", "React", "JavaScript",],

    degree2: "CFGS - DESARROLLO DE APLICACIONES WEB",
    university2: "ILERNA ONLINE",
    graduationYear2: "2021 - 2023",
    relevantCourses2: ["PHP", "C++", "C#", "JavaScript",],
    degree3: "CFGM - SISTEMAS MICROINFORMÁTICOS Y REDES",
    university3: "IES THOS I CODINA",
    graduationYear3: "2015 - 2017",
  },
  workExperience: {
    name: "Experiencia",
    experiences: [
      {
        position: "Coordinador Informático",
        company: "I3e IT Resources",
        startDate: "07/2022",
        endDate: "Actualidad",
        description:
          "Coordinación y gestión de proyectos del Departament d'Educació. Planificación y ruta de entrega e instalación de material. Gestión de equipos. Administrar y mantener sistemas.",
      },
      {
        position: "Prácticas de programación",
        company: "I3e IT Resources",
        startDate: "09/2023",
        endDate: "01/2024",
        description:
          "Involucrado en un proyecto de gestión de personal automatizado para el departamento de selección, utilizando lenguajes de programación como JavaScript mediante método AGILE",
      },
      {
        position: "Administrativo",
        company: "Tuinet Sevices",
        startDate: "09/2019",
        endDate: "01/2020",
        description:
          "Grabación de datos. Realización y comunicaciones de incidencias. Búsqueda y clasificación de links web.",
      },
      {
        position: "Técnico Informático",
        company: "Tech Buddy",
        startDate: "01/2019",
        endDate: "09/2019",
        description:
          "Instalación, configuración y explicación de productos informáticos: Smart Tv, ordenadores e impresoras en casa de los clientes. Montaje y configuración de ordenadores. Instalación de sistemas operativos y paquetes ofimáticos. Migración de equipos informáticos.",
      },
      {
        position: "Desarrollador Web",
        company: "Dractnet Projects",
        startDate: "01/2017",
        endDate: "07/2017",
        description:
          "Creación de páginas web con HTML5 y CSS3 junto con gestores de contenido como: Wordpress, Joomla y PrestaShop entre otros. Montaje y configuración de ordenadores.",
      },
    ]
  },
  skills: [
    { name: ".Net", Image: "/net.png" },
    { name: "C++", Image: "/C++-Logo.wine.png" },
    { name: "MongoDB", Image: "/mongodb.png" },
    { name: "JavaScript", Image: "/javascript.png" },
    { name: "HTML 5", Image: "/html5.png" },
    { name: "CSS 3", Image: "/css3.png" },
    { name: "React", Image: "/react.png" },
    { name: "GitHub", Image: "/github.png" },
    { name: "Visual Studio Code", Image: "/vsc.png" },
    { name: "Visual Studio", Image: "/vs.png" },

    //{ name: "Desarrollador Frontend y Backend", icon: "fas fa-laptop-code" },
  ],
  projects: {
    name: "Projects",
    projectsDo: [
      {
        title: "GitHub",
        description:
          "Proyectos realizados en el bootcamp Rock The Code.",
        link: "https://github.com/joseluismaza",
        preview: "/github.jpg",
      },
      {
        title: "Netlify",
        description:
          "Enlace visual de los diferentes proyectos realizados en Rock the Code.",
        link: "https://app.netlify.com/teams/joseluismazaluna/overview",
        preview:
          "/netlify.jpeg",
      },
      {
        title: "Pinterest",
        description:
          "Proyecto Pinterest realizado como web asincrónica utilizando la API Unsplash.",
        link: "https://pinterest-joseluismaza.netlify.app/",
        preview:
          "/logo_pinterest.jpg",
      },
    ],
  },
};


export default data_es;