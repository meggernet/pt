<template>
  <div class="hours">
    <Hours />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hours from "@/components/Hours.vue";

@Options({
  components: {
    Hours,
  },
})
export default class HoursView extends Vue {}
</script>
