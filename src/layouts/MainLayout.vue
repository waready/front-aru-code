<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-orange-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title></q-toolbar-title>
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
            :active="tab === 'inicio'"
            active-class="bg-orange-7"
            @click="tab = 'inicio'"
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
      <q-page class="bg-grey-2">
        <!-- Tabs -->
        <q-tabs
          v-model="tab"
          dense
          class="bg-white text-grey-7"
          active-color="orange-6"
          indicator-color="orange-6"
          align="left"
        >
          <q-tab name="inicio" icon="home" label="Inicio" />
          <q-tab name="comunicados" icon="article" label="Comunicados" />
          <q-tab name="nosotros" icon="group" label="Nosotros" />
          <q-tab name="ciclos" icon="apps" label="Ciclos" />
          <q-tab
            name="notificaciones"
            icon="notifications"
            label="Notificaciones"
          />
        </q-tabs>

        <q-separator />

        <!-- Tab Panels -->
        <q-tab-panels v-model="tab" animated>
          <!-- Panel Inicio -->
          <q-tab-panel name="inicio" class="q-pa-none">
            <inicio-component />
          </q-tab-panel>

          <!-- Panel Comunicados -->
          <q-tab-panel name="comunicados">
            <comunicados-component v-model="postText" />
          </q-tab-panel>

          <!-- Otros paneles -->
          <q-tab-panel name="nosotros">
            <div class="q-pa-md text-center text-grey-6">
              Contenido de Nosotros
            </div>
          </q-tab-panel>

          <q-tab-panel name="ciclos">
            <div class="q-pa-md text-center text-grey-6">
              Contenido de Ciclos
            </div>
          </q-tab-panel>

          <q-tab-panel name="notificaciones">
            <div class="q-pa-md text-center text-grey-6">
              Contenido de Notificaciones
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <!-- Footer -->
        <div
          class="fixed-bottom text-center q-pa-sm text-grey-6 bg-grey-2"
          style="font-size: 12px"
        >
          © 2025 Aru-Code .
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import InicioComponent from "components/InicioComponent.vue";
import ComunicadosComponent from "components/ComunicadosComponent.vue";

export default {
  name: "MainLayout",
  components: {
    InicioComponent,
    ComunicadosComponent,
  },
  setup() {
    const drawer = ref(true);
    const tab = ref("inicio");
    const postText = ref("");

    return {
      drawer,
      tab,
      postText,
    };
  },
};
</script>

<style>
.q-tab {
  text-transform: none;
}
</style>
