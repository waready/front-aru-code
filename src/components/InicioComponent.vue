<template>
  <div class="inicio-container q-pa-lg">
    <!-- Header Section -->
    <div class="text-center q-mb-lg">
      <div class="title-badge q-mb-md">Aymara Yatiqañataki</div>
      <h5 class="text-h5 q-mt-md q-mb-sm text-grey-8">
        Plataforma interactiva para aprender y revalorar el idioma Aymara
      </h5>
      <p class="text-subtitle1 text-grey-6 text-italic">
        Aprende a través de vocabulario, juegos y cuentos tradicionales
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="row q-col-gutter-md">
      <!-- Salud Card -->
      <div class="col-12 col-md-4">
        <q-card class="category-card" flat bordered @click="navegarA('/salud')">
          <q-card-section class="text-center">
            <div class="icon-circle bg-red">
              <q-icon name="favorite" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Salud - K'umaraña</h6>
            <p class="text-body2 text-grey-7">
              Aprende vocabulario relacionado con la salud y el bienestar
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Educación Card -->
      <div class="col-12 col-md-4">
        <q-card
          class="category-card"
          flat
          bordered
          @click="navegarA('/educacion')"
        >
          <q-card-section class="text-center">
            <div class="icon-circle bg-blue">
              <q-icon name="school" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Educación - Yatiqaña</h6>
            <p class="text-body2 text-grey-7">
              Palabras y frases para el aprendizaje y la escuela
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Turismo Card -->
      <div class="col-12 col-md-4">
        <q-card
          class="category-card"
          flat
          bordered
          @click="navegarA('/turismo')"
        >
          <q-card-section class="text-center">
            <div class="icon-circle bg-green">
              <q-icon name="flight" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Turismo - Sarnaqawi</h6>
            <p class="text-body2 text-grey-7">
              Expresiones útiles para viajeros y guías turísticos
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Familia Card -->
      <div class="col-12 col-md-4">
        <q-card
          class="category-card"
          flat
          bordered
          @click="navegarA('/familia')"
        >
          <q-card-section class="text-center">
            <div class="icon-circle bg-purple">
              <q-icon name="group" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Familia - Wila Masaña</h6>
            <p class="text-body2 text-grey-7">
              Vocabulario sobre la familia y relaciones
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Hogar Card -->
      <div class="col-12 col-md-4">
        <q-card class="category-card" flat bordered @click="navegarA('/hogar')">
          <q-card-section class="text-center">
            <div class="icon-circle bg-orange">
              <q-icon name="home" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Hogar - Uta</h6>
            <p class="text-body2 text-grey-7">
              Palabras relacionadas con la casa y el hogar
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Comercio Card -->
      <div class="col-12 col-md-4">
        <q-card
          class="category-card"
          flat
          bordered
          @click="navegarA('/comercio')"
        >
          <q-card-section class="text-center">
            <div class="icon-circle bg-pink">
              <q-icon name="shopping_bag" size="50px" color="white" />
            </div>
            <h6 class="text-h6 q-mt-md q-mb-sm">Comercio - Aljaña</h6>
            <p class="text-body2 text-grey-7">
              Vocabulario para compras y el mercado
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioComponent",
  methods: {
    navegarA(ruta) {
      console.log("Navegando a:", ruta);
      this.$router.push(ruta);
    },
  },
};
</script>

<style scoped>
.inicio-container {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #fef8f0 0%, #fff9f0 100%);
  min-height: calc(100vh - 150px);
}

.title-badge {
  display: inline-block;
  background: linear-gradient(135deg, #ff3d00 0%, #ff9800 100%);
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 28px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 61, 0, 0.3);
}

.category-card {
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.icon-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.bg-red {
  background: #f44336;
}

.bg-blue {
  background: #2196f3;
}

.bg-green {
  background: #00a152;
}

.bg-purple {
  background: #9c27b0;
}

.bg-orange {
  background: #ff8f00;
}

.bg-pink {
  background: #e91e63;
}
</style>
