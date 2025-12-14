<template>
  <q-page class="q-pa-md row justify-center">
    <div class="col-12 col-md-8">
      <div class="text-center q-mb-xl">
        <h4 class="text-primary text-weight-bold q-mb-sm">Arunta (Hogar)</h4>
        <div class="text-subtitle1 text-grey-8">Saludos en la familia</div>
      </div>

      <div class="q-pa-md" style="max-width: 600px; margin: 0 auto">
        <q-chat-message
          name="Jilata (Hermano)"
          bg-color="primary"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="primary" />
          </template>
          <div>
            <div class="text-h6">Kamisaraki</div>
            <div class="text-caption text-italic text-white">
              Cómo estás hermano.
            </div>
          </div>
        </q-chat-message>

        <q-chat-message name="Kullaka (Hermana)" bg-color="amber-7">
          <template v-slot:avatar>
            <q-icon name="face_3" size="40px" class="q-mx-sm" color="amber-9" />
          </template>
          <div>
            <div class="text-h6">Waliki. Walikiskthwa, jumasti?</div>
            <div class="text-caption text-italic">
              Bien, estoy bien nomas. ¿Y usted?
            </div>
          </div>
        </q-chat-message>

        <q-chat-message
          name="Jilata (Hermano)"
          bg-color="primary"
          text-color="white"
          sent
        >
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="primary" />
          </template>
          <div>
            <div class="text-h6">Nayasa waliskaraKthwa.</div>
            <div class="text-caption text-italic text-white">
              Yo también, estoy bien.
            </div>
          </div>
        </q-chat-message>

        <q-chat-message name="Kullaka (Hermana)" bg-color="amber-7">
          <template v-slot:avatar>
            <q-icon name="face_3" size="40px" class="q-mx-sm" color="amber-9" />
          </template>
          <div>
            <div class="text-h6">Kunjamasktasa achachila?</div>
            <div class="text-caption text-italic">¿Cómo estás abuelo?</div>
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
  name: "FrasesFamilia",
};
</script>

<style scoped>
.q-message-text--sent {
  color: white !important;
}
</style>
