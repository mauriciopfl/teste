<template>
  <v-app>
    <default-bar />

    <default-view />

    <v-bottom-navigation>
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>
