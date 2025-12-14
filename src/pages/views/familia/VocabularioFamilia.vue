<!-- <template>
  <div class="q-pa-md">
    <h4 class="text-center">Vocabulario de Salud</h4>
    <p class="text-center">Contenido en construcción...</p>
  </div>
</template>

<script>
export default {
  name: "VocabularioSalud",
};
</script> -->
<template>
  <q-page class="container q-ma-lg">
    <h4 class="text-center">Vocabulario de Salud</h4>
    <div class="row q-gutter-lg justify-center">
      <div
        class="col-md-2 col-sm-5 col-xs-12"
        v-for="item in menu"
        :key="item.id"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <q-card class="my-card">
          <img spinner-color="orange" :src="item.img" />

          <q-card-section>
            <div class="text-h6 text-center">{{ item.name }}</div>
            <div class="text-subtitle2 text-center">{{ item.desc }}</div>
          </q-card-section>

          <q-card-section class="text-center">
            <q-btn
              color="primary"
              rounded
              class="sull-width"
              label="Ver mas"
              :to="item.url"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      scrollInfo: {},
      prop: "juegos",
      menu: [
        {
          id: 5,
          name: "Familia",
          img: "/statics/menu/menu_familia.jpg",
          desc: "Palabras de la familia y personas en aimara...",
          url: "/familia",
        },
      ],
    };
  },
  created() {
    AOS.init();
  },
  methods: {
    onScroll(info) {
      this.scrollInfo = info;
    },
  },
};
</script>
