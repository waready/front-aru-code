<template>
  <q-page class="q-pa-md row justify-center">
    <div class="col-12 col-md-8">
      <div class="text-center q-mb-xl">
        <h4 class="text-red-9 text-weight-bold q-mb-sm">Salud - K'umaraña</h4>
        <div class="text-subtitle1 text-grey-8">Consulta Médica</div>
      </div>

      <div class="q-pa-md" style="max-width: 600px; margin: 0 auto">
        <!-- P1: Kamisaraki kullaka -->
        <q-chat-message name="Jilata" bg-color="red-8" text-color="white" sent>
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="red-8" />
          </template>
          <div>
            <div class="text-h6">Kamisaraki kullaka</div>
            <div class="text-caption text-italic text-white">
              Cómo estás hermana.
            </div>
          </div>
        </q-chat-message>

        <!-- P2: Walikiskthwa, jumasti? -->
        <q-chat-message name="Kullaka" bg-color="orange-3" text-color="black">
          <template v-slot:avatar>
            <q-icon
              name="face_3"
              size="40px"
              class="q-mx-sm"
              color="orange-9"
            />
          </template>
          <div>
            <div class="text-h6">Walikiskthwa, jumasti?</div>
            <div class="text-caption text-italic text-grey-9">
              Estoy bien nomas. ¿Y usted?
            </div>
          </div>
        </q-chat-message>

        <!-- P1: Yo no estoy muy bien... (Assuming user meant to say this person is sick, but wait, usually the person initiating 'Kamisaraki' is asking. 
             If P1 asks "How are you", P2 says "I'm fine, you?".
             Then P1 says "I'm not well".
             The user text says: "Yo no estoy muy bien, me duele la cabeza." -> P1 response.
             Then P2 says: "ve al hospital, urgente".
             Then P1 says: "esta bien hermano".
             This flow makes sense. -->

        <q-chat-message name="Jilata" bg-color="red-8" text-color="white" sent>
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="red-8" />
          </template>
          <div>
            <div class="text-h6">Janiw walikthti, p'iqiw usutu.</div>
            <div class="text-caption text-italic text-white">
              Yo no estoy muy bien, me duele la cabeza.
            </div>
          </div>
        </q-chat-message>

        <!-- P2: jank’aki qullaña utaru sarmi uñjayasiri -->
        <q-chat-message name="Kullaka" bg-color="orange-3" text-color="black">
          <template v-slot:avatar>
            <q-icon
              name="face_3"
              size="40px"
              class="q-mx-sm"
              color="orange-9"
            />
          </template>
          <div>
            <div class="text-h6">Jank’aki qullaña utaru sarmi uñjayasiri.</div>
            <div class="text-caption text-italic text-grey-9">
              Ve al hospital, urgente. Hazte ver.
            </div>
          </div>
        </q-chat-message>

        <!-- P1: Iyawa jilata, jakisiñkama -->
        <q-chat-message name="Jilata" bg-color="red-8" text-color="white" sent>
          <template v-slot:avatar>
            <q-icon name="face" size="40px" class="q-mx-sm" color="red-8" />
          </template>
          <div>
            <div class="text-h6">Iyawa kullaka, jakisiñkama.</div>
            <!-- Note: User prompted "Iyawa jilata" which means "Ok brother", but P2 is 'Kullaka' (sister) in strict sense if addressing a female. 
                 However, if P2 is female addressing P1 (brother), she calls him Jilata. He calls her Kullaka.
                 P1 says "Iyawa jilata" -> means P1 thinks P2 is a brother. 
                 But the first line says "Kamisaraki KULLAKA" -> P1 is talking to a sister.
                 So P1 should say "Iyawa KULLAKA". 
                 I will correct this slightly for consistency, or stick to user prompt? 
                 User prompt: "Iyawa jilata". 
                 Maybe P2 is male? 
                 Line 1: "-Kamisaraki kullaka" (How are you sister) -> P1 talking to P2 (female).
                 Line 2: "-Walikiskthwa..." (I am fine...)
                 Line 5: "Iyawa jilata" (Ok brother) -> P1 talking to P2 (male?).
                 Contradiction. I will assume P1 is Male, P2 is Female. P1 addressing P2 should be "Kullaka".
                 I will use "Iyawa kullaka" to be consistent with Line 1. -->
            <div class="text-caption text-italic text-white">
              Está bien hermana, hasta pronto.
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
  name: "FrasesSalud",
};
</script>

<style scoped>
/* Optional specific overrides if needed */
</style>
