<template>
  <div className="bg-gray-100 dark:bg-gray-900 items-center text-center p-2">
    <h1 className="w-full text-gray-900 dark:text-gray-200 font-semibold mb-4">
      Hours
    </h1>
    <form>
      <div className="w-full mx-auto flex flex-col mb-2">
        <label
          htmlFor="hours"
          className="mb-1 text-gray-900 dark:text-gray-200"
        >
          Input
        </label>
        <input
          v-model="inputString"
          type="text"
          name="hours"
          id="hours"
          placeholder="1w 3d 4h"
          className="p-2 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-200 rounded"
        />
      </div>
      <div className="flex mb-2">
        <div className="w-1/2 mx-auto flex flex-col items-center">
          <label
            htmlFor="onePThasHours-6"
            className="text-gray-900 dark:text-gray-200"
          >
            1PT=6H
          </label>
          <input
            v-model="onePThasHours"
            type="radio"
            name="onePThasHours"
            id="onePThasHours-6"
            value="6"
          />
        </div>
        <div className="w-1/2 mx-auto flex flex-col items-center">
          <label
            htmlFor="onePThasHours-8"
            className="text-gray-900 dark:text-gray-200"
          >
            1PT=8H
          </label>
          <input
            v-model="onePThasHours"
            type="radio"
            name="onePThasHours"
            id="onePThasHours-8"
            value="8"
          />
        </div>
      </div>
    </form>
    <hr className="mb-2" />
    <div className="w-full mx-auto mb-2 flex">
      <div className="w-1/6"></div>
      <div className="w-2/6">
        <span className="text-green-500">TotalHours</span>
      </div>
      <div className="w-2/6">
        <span className="text-gray-900 dark:text-gray-200">
          {{ calculatedHours }}H
        </span>
      </div>
      <div className="w-1/6"></div>
    </div>
    <div className="w-full mx-auto mb-2 flex">
      <div className="w-1/6"></div>
      <div className="w-2/6">
        <span className="text-green-500">1PT=6H</span>
      </div>
      <div className="w-2/6">
        <span
          className="text-gray-900 dark:text-gray-200"
          data-test="outputPThas6Hours"
        >
          {{ this.calculatedPTs6 }}
        </span>
      </div>
      <div className="w-1/6"></div>
    </div>
    <div className="w-full mx-auto mb-2 flex">
      <div className="w-1/6"></div>
      <div className="w-2/6">
        <span className="text-green-500">1PT=8H</span>
      </div>
      <div className="w-2/6">
        <span
          className="text-gray-900 dark:text-gray-200"
          data-test="outputPThas8Hours"
        >
          {{ this.calculatedPTs8 }}
        </span>
      </div>
      <div className="w-1/6"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { toPT, parseInput, calculateTotalHours } from "@/services/PTFormatter";
import { computed } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Hours extends Vue {
  inputString = "";
  onePThasHours = 6;

  calculatedPTs6 = computed(() => {
    const output = toPT(this.inputString, this.onePThasHours, 6);
    return `${output.toFixed(2)} PT`;
  });
  calculatedPTs8 = computed(() => {
    const output = toPT(this.inputString, this.onePThasHours, 8);
    return `${output.toFixed(2)} PT`;
  });

  get calculatedHours() {
    return calculateTotalHours(
      parseInput(this.inputString),
      this.onePThasHours,
    );
  }
}
</script>
