<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-orange-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>Aymara Yatiqañataki</q-toolbar-title>
        <q-btn flat round dense icon="logout">
          <q-tooltip>Salir</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- Drawer (Sidebar) -->
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="212"
      :breakpoint="500"
      bordered
      class="bg-orange-6 text-white"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md text-center">
          <q-avatar size="80px" class="q-mb-sm bg-orange-7">
            <q-icon name="person" size="50px" />
          </q-avatar>
          <div class="text-h6">DOCENTE</div>
          <q-btn flat dense round icon="settings" size="sm" color="white" />
        </div>

        <q-list class="text-white">
          <q-item
            clickable
            v-ripple
            :active="$route.path === '/'"
            active-class="bg-orange-7"
            to="/"
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Inicio</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="apps" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Horarios</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            icon="folder"
            label="Recursos"
            default-opened
            header-class="text-white"
            expand-icon-class="text-white"
          >
            <q-list class="text-white">
              <q-item clickable v-ripple class="q-pl-xl">
                <q-item-section>
                  <q-item-label>Material de clase</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="q-pl-xl">
                <q-item-section>
                  <q-item-label>Tareas</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="q-pl-xl">
                <q-item-section>
                  <q-item-label>Evaluaciones</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple class="q-pl-xl">
                <q-item-section>
                  <q-item-label>Biblioteca</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="schedule" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Asistencia</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",
  setup() {
    const drawer = ref(true);

    return {
      drawer,
    };
  },
};
</script>
