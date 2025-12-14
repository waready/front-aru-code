const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/IndexPage.vue") },
      {
        path: "/salud",
        component: () => import("../pages/menus/MenuSalud.vue"), // ← Cambiado aquí
      },

      // Subrutas de Salud

      // Subrutas de Salud
      {
        path: "salud/vocabulario",
        component: () => import("../pages/views/salud/VocabularioSalud.vue"),
      },
      {
        path: "salud/frases",
        component: () => import("../pages/views/salud/FrasesSalud.vue"),
      },
      {
        path: "salud/verbos",
        component: () => import("../pages/views/salud/VerbosSalud.vue"),
      },
      {
        path: "salud/juegos",
        component: () => import("../pages/views/salud/JuegosSalud.vue"),
      },
      {
        path: "salud/cuentos",
        component: () => import("../pages/views/salud/CuentosSalud.vue"),
      },
      {
        path: "salud/conversaciones",
        component: () => import("../pages/views/salud/ConversacionesSalud.vue"),
      },

      {
        path: "educacion",
        component: () => import("../pages/menus/MenuEducacion.vue"),
      },
      // Subrutas de Educacion
      {
        path: "educacion/vocabulario",
        component: () =>
          import("../pages/views/educacion/VocabularioEducacion.vue"),
      },
      {
        path: "educacion/frases",
        component: () => import("../pages/views/educacion/FrasesEducacion.vue"),
      },
      {
        path: "educacion/verbos",
        component: () => import("../pages/views/educacion/VerbosEducacion.vue"),
      },
      {
        path: "educacion/juegos",
        component: () => import("../pages/views/educacion/JuegosEducacion.vue"),
      },
      {
        path: "educacion/cuentos",
        component: () =>
          import("../pages/views/educacion/CuentosEducacion.vue"),
      },
      {
        path: "educacion/conversaciones",
        component: () =>
          import("../pages/views/educacion/ConversacionesEducacion.vue"),
      },

      {
        path: "turismo",
        component: () => import("../pages/menus/MenuTurismo.vue"),
      },
      // Subrutas de Turismo
      {
        path: "turismo/vocabulario",
        component: () =>
          import("../pages/views/turismo/VocabularioTurismo.vue"),
      },
      {
        path: "turismo/frases",
        component: () => import("../pages/views/turismo/FrasesTurismo.vue"),
      },
      {
        path: "turismo/verbos",
        component: () => import("../pages/views/turismo/VerbosTurismo.vue"),
      },
      {
        path: "turismo/juegos",
        component: () => import("../pages/views/turismo/JuegosTurismo.vue"),
      },
      {
        path: "turismo/cuentos",
        component: () => import("../pages/views/turismo/CuentosTurismo.vue"),
      },
      {
        path: "turismo/conversaciones",
        component: () =>
          import("../pages/views/turismo/ConversacionesTurismo.vue"),
      },
      {
        path: "familia",
        component: () => import("../pages/menus/MenuFamilia.vue"),
      },
      // Subrutas de Familia
      {
        path: "familia/vocabulario",
        component: () =>
          import("../pages/views/familia/VocabularioFamilia.vue"),
      },
      {
        path: "familia/frases",
        component: () => import("../pages/views/familia/FrasesFamilia.vue"),
      },
      {
        path: "familia/verbos",
        component: () => import("../pages/views/familia/VerbosFamilia.vue"),
      },
      {
        path: "familia/juegos",
        component: () => import("../pages/views/familia/JuegosFamilia.vue"),
      },
      {
        path: "familia/cuentos",
        component: () => import("../pages/views/familia/CuentosFamilia.vue"),
      },
      {
        path: "familia/conversaciones",
        component: () =>
          import("../pages/views/familia/ConversacionesFamilia.vue"),
      },
      {
        path: "fauna",
        component: () => import("../pages/menus/MenuFauna.vue"),
      },
      // Subrutas de Fauna
      {
        path: "fauna/vocabulario",
        component: () => import("../pages/views/fauna/VocabularioFauna.vue"),
      },
      {
        path: "fauna/frases",
        component: () => import("../pages/views/fauna/FrasesFauna.vue"),
      },
      {
        path: "fauna/verbos",
        component: () => import("../pages/views/fauna/VerbosFauna.vue"),
      },
      {
        path: "fauna/juegos",
        component: () => import("../pages/views/fauna/JuegosFauna.vue"),
      },
      {
        path: "fauna/cuentos",
        component: () => import("../pages/views/fauna/CuentosFauna.vue"),
      },
      {
        path: "fauna/conversaciones",
        component: () => import("../pages/views/fauna/ConversacionesFauna.vue"),
      },

      {
        path: "comercio",
        component: () => import("../pages/menus/MenuComercio.vue"),
      },
      // Subrutas de Comercio
      {
        path: "comercio/vocabulario",
        component: () =>
          import("../pages/views/comercio/VocabularioComercio.vue"),
      },
      {
        path: "comercio/frases",
        component: () => import("../pages/views/comercio/FrasesComercio.vue"),
      },
      {
        path: "comercio/verbos",
        component: () => import("../pages/views/comercio/VerbosComercio.vue"),
      },
      {
        path: "comercio/juegos",
        component: () => import("../pages/views/comercio/JuegosComercio.vue"),
      },
      {
        path: "comercio/cuentos",
        component: () => import("../pages/views/comercio/CuentosComercio.vue"),
      },
      {
        path: "comercio/conversaciones",
        component: () =>
          import("../pages/views/comercio/ConversacionesComercio.vue"),
      },
      {
        path: "juegos-salud",
        component: () => import("../pages/menus/MenuJuego.vue"),
      },
      {
        path: "frases-salud",
        component: () => import("../pages/menus/MenuFrases.vue"),
      },
      {
        path: "gramatica-salud",
        component: () => import("../pages/menus/MenuGramaticas.vue"),
      },
      /**gramatica**/
      // { path:'palabras', component: () => import('../pages/views/gramatica/Palabras.vue')},
      // { path:'sufijos', component: () => import('../pages/views/gramatica/SistemaSufijos.vue')},
      {
        path: "verbos-salud",
        component: () => import("../pages/views/gramatica/Verbos.vue"),
      },
      {
        path: "adjetivos-salud",
        component: () => import("../pages/views/gramatica/Adjetivos.vue"),
      },
      {
        path: "adverbio-salud",
        component: () => import("../pages/views/gramatica/Adverbio.vue"),
      },

      { path: "login", component: () => import("../pages/views/Login.vue") },
      // { path:'register', component: () => import('../pages/views/Register.vue')},

      {
        path: "colores",
        component: () => import("../pages/views/Colores.vue"),
      },
      {
        path: "numeros",
        component: () => import("../pages/views/Numeros.vue"),
      },
      { path: "tiempo", component: () => import("../pages/views/Tiempo.vue") },

      {
        path: "juego_memoria",
        component: () =>
          import("../pages/juegos/juegoMemoria/JuegoMemoria.vue"),
      },
      {
        path: "juego_orden_numero",
        component: () => import("../pages/juegos/OrdenNumero.vue"),
      },
      {
        path: "juego_ahorcado_1",
        component: () => import("../pages/juegos/Crusigrama.vue"),
      },

      {
        path: "juego_ahorcado",
        component: () => import("../pages/juegos/AhorcadoFinal.vue"),
      },

      {
        path: "gramar",
        component: () => import("../pages/views/Gramatica.vue"),
      },
      {
        path: "chat",
        component: () => import("../pages/views/Pronunciacion.vue"),
      },
      // vocabulario
      {
        path: "animales",
        component: () => import("../pages/views/vocabulario/Animales.vue"),
      },
      {
        path: "insectos",
        component: () => import("../pages/views/vocabulario/insectos.vue"),
      },

      //semanas
      {
        path: "semana1",
        component: () => import("../pages/semanas/Semana1.vue"),
      },
      {
        path: "semana2",
        component: () => import("../pages/semanas/Semana2.vue"),
      },

      {
        path: "semana5",
        component: () => import("../pages/semanas/Semana5.vue"),
      },
      {
        path: "semana4",
        component: () => import("../pages/semanas/Semana4.vue"),
      },
      {
        path: "semana6",
        component: () => import("../pages/semanas/Semana6.vue"),
      },
      {
        path: "semana7",
        component: () => import("../pages/semanas/Semana7.vue"),
      },

      {
        path: "arbustos_arboles",
        component: () =>
          import("../pages/views/vocabulario/arbustos_arboles.vue"),
      },
      {
        path: "chacra_campo",
        component: () => import("../pages/views/vocabulario/Chacra_campo.vue"),
      },
      {
        path: "cuerpo_humano",
        component: () => import("../pages/views/vocabulario/cuerpo_humano.vue"),
      },
      {
        path: "familia",
        component: () => import("../pages/views/vocabulario/familia.vue"),
      },
      {
        path: "lugares",
        component: () => import("../pages/views/vocabulario/Lugares.vue"),
      },
      {
        path: "minerales",
        component: () => import("../pages/views/vocabulario/minerales.vue"),
      },
      {
        path: "naturaleza",
        component: () => import("../pages/views/vocabulario/Naturaleza.vue"),
      },
      {
        path: "palabras_comunes",
        component: () =>
          import("../pages/views/vocabulario/palabras_comunes.vue"),
      },
      // { path:'peces_pajaros', component: () => import('../pages/views/vocabulario/peces_pajaros.vue')},
      {
        path: "pronombres",
        component: () => import("../pages/views/vocabulario/Pronombres.vue"),
      },
      {
        path: "ropa",
        component: () => import("../pages/views/vocabulario/ropa.vue"),
      },
      {
        path: "vegetales",
        component: () => import("../pages/views/vocabulario/vegetales.vue"),
      },
      {
        path: "verbos_infinitivos",
        component: () =>
          import("../pages/views/vocabulario/verbos_infinitivos.vue"),
      },
      {
        path: "juego_memoria",
        component: () =>
          import("../pages/juegos/juegoMemoria/JuegoMemoria.vue"),
      },
      {
        path: "juego_orden_numero",
        component: () => import("../pages/juegos/OrdenNumero.vue"),
      },
      {
        path: "juego_ahorcado_1",
        component: () => import("../pages/juegos/Crusigrama.vue"),
      },

      {
        path: "juego_ahorcado",
        component: () => import("../pages/juegos/AhorcadoFinal.vue"),
      },
    ],
  },

  // Always leave this as last one
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorNotFound.vue"),
  },
];

export default routes;
