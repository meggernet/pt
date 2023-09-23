<template>
  <div
    className="bg-gray-100 dark:bg-gray-900 flex p-2 text-center items-center"
    data-test="themeSwitcher"
  >
    <div className="w-1/3">
      <div className="flex flex-col">
        <button @click="switchToLightMode" data-test="lightModeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <span className="text-gray-900 dark:text-gray-200">Light</span>
        </button>
      </div>
    </div>
    <div className="w-1/3">
      <div className="flex flex-col">
        <button @click="switchToDarkMode" data-test="darkModeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-200"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-gray-900 dark:text-gray-200">Dark</span>
        </button>
      </div>
    </div>
    <div className="w-1/3">
      <div className="flex flex-col">
        <button @click="switchToSystem" data-test="systemModeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-200"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-gray-900 dark:text-gray-200">System</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  switchToLightTheme,
  switchToDarkTheme,
  switchToSystemTheme,
} from "@/services/ThemeSwitcherService";

@Options({
  methods: {
    switchToLightMode() {
      switchToLightTheme();
    },
    switchToDarkMode() {
      switchToDarkTheme();
    },
    switchToSystem() {
      switchToSystemTheme();
    },
  },
})
export default class ThemeSwitcher extends Vue {}
</script>
