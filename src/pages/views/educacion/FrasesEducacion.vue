<template>
  <q-page class="q-pa-md row justify-center">
    <div class="col-12 col-md-8">
      <div class="text-center q-mb-xl">
        <h4 class="text-blue-9 text-weight-bold q-mb-sm">
          Yatiqaña (Educación)
        </h4>
        <div class="text-subtitle1 text-grey-8">Diálogo en la escuela</div>
      </div>

      <div class="q-pa-md" style="max-width: 600px; margin: 0 auto">
        <!-- P1: Kamisaraki jilata -->
        <q-chat-message
          name="Jilata 1"
          bg-color="blue-8"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="blue-8" />
          </template>
          <div>
            <div class="text-h6">Kamisaraki jilata</div>
            <div class="text-caption text-italic text-white">
              Cómo estás hermano.
            </div>
          </div>
        </q-chat-message>

        <!-- P2: Walikiskthwa, jumasti? -->
        <q-chat-message name="Jilata 2" bg-color="grey-3" text-color="black">
          <template v-slot:avatar>
            <q-icon name="face_6" size="40px" class="q-mx-sm" color="grey-8" />
          </template>
          <div>
            <div class="text-h6">Walikiskthwa, jumasti?</div>
            <div class="text-caption text-italic text-grey-8">
              Estoy bien nomas. ¿Y usted?
            </div>
          </div>
        </q-chat-message>

        <!-- P1: Nayasa waliskaraKthwa -->
        <q-chat-message
          name="Jilata 1"
          bg-color="blue-8"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="blue-8" />
          </template>
          <div>
            <div class="text-h6">Nayasa waliskaraKthwa.</div>
            <div class="text-caption text-italic text-white">
              Yo también, estoy bien.
            </div>
          </div>
        </q-chat-message>

        <!-- P1: Kawkirusa sarata? -->
        <q-chat-message
          name="Jilata 1"
          bg-color="blue-8"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="blue-8" />
          </template>
          <div>
            <div class="text-h6">Kawkirusa sarata?</div>
            <div class="text-caption text-italic text-white">
              ¿A dónde irás?
            </div>
          </div>
        </q-chat-message>

        <!-- P2: yatiqaña utaruwa saraja -->
        <q-chat-message name="Jilata 2" bg-color="grey-3" text-color="black">
          <template v-slot:avatar>
            <q-icon name="face_6" size="40px" class="q-mx-sm" color="grey-8" />
          </template>
          <div>
            <div class="text-h6">Yatiqaña utaruwa saraja</div>
            <div class="text-caption text-italic text-grey-8">
              Iré a la escuela.
            </div>
          </div>
        </q-chat-message>

        <!-- P1: jisa, jakisiñkama -->
        <q-chat-message
          name="Jilata 1"
          bg-color="blue-8"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="blue-8" />
          </template>
          <div>
            <div class="text-h6">Jisa, jakisiñkama.</div>
            <div class="text-caption text-italic text-white">
              Bueno, hasta pronto.
            </div>
          </div>
        </q-chat-message>
      </div>

      <!-- Action Button -->
      <div class="row justify-center q-mt-xl">
        <q-btn
          color="secondary"
          icon="volume_up"
          label="Escuchar conversación"
          rounded
          push
          size="lg"
          disable
        >
          <q-tooltip>Audio próximamente</q-tooltip>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "FrasesEducacion",
};
</script>

<style scoped>
/* Optional specific overrides if needed */
</style>
