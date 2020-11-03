<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(format, i) in formats" cols="12" class="mb-2" :key="i">
            <h1 class="title mb-2">{{ format.name }}</h1>
            <iframe
              scrolling="no"
              frameBorder="0"
              src="https://npm-fixed-income-fund.betacore.nl/"
              :width="`${format.width}px`"
              :height="`${format.height}px`"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-application .title {
  font-family: "Playfair Display", serif !important;
}
iframe {
  overflow: hidden;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      formats: [
        {
          name: "Billboard",
          width: 970,
          height: 250
        },
        {
          name: "Leaderboard",
          width: 728,
          height: 90
        },
        {
          name: "Large Rectangle",
          width: 336,
          height: 280
        },
        {
          name: "MPU",
          width: 300,
          height: 250
        },
        {
          name: "Halfpage Ad",
          width: 300,
          height: 600
        },
        {
          name: "Skyscraper",
          width: 160,
          height: 600
        }
      ]
    };
  }
};
</script>

<style></style>
