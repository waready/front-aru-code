<template>
  <q-page class="q-pa-md">
    <div class="text-center q-mb-xl">
      <h4 class="text-blue-9 text-weight-bold q-mb-sm">
        Cuentos (Siwsawinaka)
      </h4>
      <div class="text-subtitle1 text-grey-8">Historias para aprender</div>
    </div>

    <!-- Grid Layout: 2 columns on medium screens, 1 on small -->
    <div class="row q-col-gutter-lg justify-center">
      <div class="col-12 col-md-4" v-for="video in videos" :key="video.id">
        <q-card
          class="my-card hover-zoom cursor-pointer"
          @click="openVideo(video)"
          :disable="!video.url"
        >
          <!-- Thumbnail with Play Overlay -->
          <q-img :src="video.thumbnail" style="height: 220px">
            <template v-if="video.url">
              <div class="absolute-full flex flex-center bg-black-transparent">
                <q-icon
                  name="play_circle_outline"
                  size="5rem"
                  color="white"
                  class="play-icon"
                />
              </div>
              <div class="absolute-bottom text-subtitle2 text-center bg-none">
                Clic para ver video
              </div>
            </template>
            <template v-else>
              <div class="absolute-full flex flex-center bg-black-transparent">
                <q-icon name="lock_clock" size="4rem" color="grey-4" />
              </div>
            </template>
          </q-img>

          <q-card-section>
            <div class="text-h6 text-blue-9 text-center">{{ video.title }}</div>
            <div class="text-subtitle2 text-grey-7 text-center">
              {{ video.subtitle }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Video Modal (Zoom effect) -->
    <q-dialog
      v-model="showDialog"
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 800px; max-width: 95vw">
        <q-card-section class="row items-center q-pb-none bg-blue-9 text-white">
          <div class="text-h6">{{ currentVideo.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-none bg-black">
          <!-- Conditional Player: HTML5 Video for local files, q-video (iframe) for others -->
          <video
            v-if="isLocalVideo(currentVideo.url)"
            controls
            autoplay
            style="width: 100%; max-height: 450px; display: block"
            :src="currentVideo.url"
          >
            Tu navegador no soporta el elemento de video.
          </video>

          <q-video
            v-else
            :ratio="16 / 9"
            :src="currentVideo.url"
            style="height: 450px; width: 100%"
          />
        </q-card-section>

        <q-card-section class="q-pa-md text-grey-9 text-justify text-subtitle1">
          {{ currentVideo.desc }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "CuentosEducacion",
  data() {
    return {
      showDialog: false,
      currentVideo: {},
      videos: [
        {
          id: 1,
          title: "El Perdiz y el zorro",
          subtitle: "p'isaqa y qamaqi (Cuento)",
          desc: "Un cuento tradicional sobre la perdiz. Escucha antentamente la narración en Aimara.",
          url: "statics/video/el-perdiz.mp4",
          thumbnail: "statics/images/thumb_zorro_perdiz.png",
        },
        {
          id: 2,
          title: "Próximamente",
          subtitle: "Muy pronto nuevos cuentos",
          desc: "",
          url: "", // Empty URL indicates disabled/coming soon
          thumbnail: "statics/images/thumb_proximamente.png",
        },
      ],
    };
  },
  methods: {
    openVideo(video) {
      if (!video.url) return;
      this.currentVideo = video;
      this.showDialog = true;
    },
    isLocalVideo(url) {
      return url && (url.endsWith(".mp4") || !url.startsWith("http"));
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.hover-zoom:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.bg-black-transparent {
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
}
.hover-zoom:hover .bg-black-transparent {
  background: rgba(0, 0, 0, 0);
}
.play-icon {
  opacity: 0.9;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}
.hover-zoom:hover .play-icon {
  transform: scale(1.2);
}
</style>
