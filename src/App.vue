<template>
  <div class="bg-white dark:bg-black p-2 mx-auto h-screen w-screen">
    <div class="lg:w-2/3 lg:mx-auto">
      <router-view />
      <hr className="m-2" />
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { Options, Vue } from "vue-class-component";
import { checkTheme } from "@/services/ThemeSwitcherService";

checkTheme();

@Options({
  components: {
    ThemeSwitcher,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
