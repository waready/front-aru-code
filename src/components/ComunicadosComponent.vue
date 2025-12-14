<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <div class="row items-center q-mb-md">
        <q-avatar size="50px" class="q-mr-md bg-orange-6">
          <q-icon name="person" size="30px" color="white" />
        </q-avatar>
        <div class="text-h6 text-grey-8">DOCENTE</div>
      </div>

      <q-input
        v-model="postText"
        type="textarea"
        placeholder="¿Qué estas pensando DOCENTE?"
        outlined
        rows="3"
        class="q-mb-md"
      />

      <div class="row items-center">
        <q-btn
          flat
          dense
          icon="image"
          label="Agregar Imagen"
          color="grey-7"
          class="q-mr-sm"
        />
        <q-btn flat dense icon="search" label="Buscar" color="grey-7" />
        <q-space />
        <q-btn
          unelevated
          label="Publicar"
          color="blue"
          class="text-white"
          style="min-width: 120px"
        />
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "ComunicadosComponent",
  data() {
    return {
      postText: "",
    };
  },
};
</script>
