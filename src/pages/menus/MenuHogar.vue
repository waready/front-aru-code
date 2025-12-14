<template>
  <q-page class="container q-ma-lg">
    <!-- Header Pill -->
    <div class="row justify-center q-mb-md">
      <div class="title-pill bg-orange-10 text-white shadow-3">Hogar - Uta</div>
    </div>
    <p class="text-center text-grey-8 text-subtitle1 q-mb-xl">
      La casa y el hogar
    </p>

    <!-- Grid -->
    <div class="row q-col-gutter-lg justify-center">
      <router-link
        class="col-12 col-md-5 col-sm-6 cursor-pointer"
        v-for="item in menu"
        :key="item.id"
        :to="item.url"
        style="text-decoration: none; color: inherit; display: block"
      >
        <q-card
          class="category-card-horizontal row items-center no-wrap q-pa-sm"
          flat
          bordered
        >
          <!-- Icon Section -->
          <div class="q-pa-md">
            <div class="icon-circle-small shadow-2" :class="item.colorClass">
              <q-icon :name="item.icon" size="30px" color="white" />
            </div>
          </div>

          <!-- Text Section -->
          <q-card-section class="q-pa-sm">
            <div
              class="text-weight-bold text-subtitle1 text-grey-9 text-capitalize"
            >
              {{ item.name }}
            </div>
            <div class="text-caption text-grey-6 line-clamp-2">
              {{ item.desc }}
            </div>
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MenuHogar",
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Vocabulario",
          desc: "Partes de la casa",
          url: "/hogar/vocabulario",
          icon: "home",
          colorClass: "bg-light-blue",
        },
        {
          id: 2,
          name: "Frases",
          desc: "Frases en el hogar",
          url: "/hogar/frases",
          icon: "chat_bubble",
          colorClass: "bg-light-green",
        },
        {
          id: 3,
          name: "Verbos",
          desc: "Verbos cotidianos",
          url: "/hogar/verbos",
          icon: "cleaning_services",
          colorClass: "bg-orange",
        },
        {
          id: 4,
          name: "Juegos",
          desc: "Juegos sobre la casa",
          url: "/hogar/juegos",
          icon: "sports_esports",
          colorClass: "bg-deep-purple",
        },
        {
          id: 5,
          name: "Cuentos",
          desc: "Historias del hogar",
          url: "/hogar/cuentos",
          icon: "auto_stories",
          colorClass: "bg-red",
        },
        {
          id: 6,
          name: "Conversaciones",
          desc: "Charlas familiares",
          url: "/hogar/conversaciones",
          icon: "forum",
          colorClass: "bg-teal",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-pill {
  border-radius: 50px;
  padding: 10px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.category-card-horizontal {
  border-radius: 15px;
  transition: all 0.3s ease;
  background: #fdfdfd;
}

.category-card-horizontal:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background: white;
}

.icon-circle-small {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Custom Colors if needed, or use Quasar classes */
.bg-light-blue {
  background: #03a9f4;
}
.bg-light-green {
  background: #8bc34a;
}
.bg-orange {
  background: #ff9800;
}
.bg-deep-purple {
  background: #673ab7;
}
.bg-red {
  background: #f44336;
}
.bg-teal {
  background: #009688;
}
</style>
