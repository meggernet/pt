<template>
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Hours</h3>
      <form className="mt-5 sm:flex sm:items-center">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="hours" className="sr-only"> Input </label>
          <input
            v-model="inputString"
            type="text"
            name="hours"
            id="hours"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="1W 3PT 6H"
          />
        </div>
      </form>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>TotalHours {{ calculatedHours }}H</p>
      </div>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <span class="text-red-500">1PT=6H</span>
        <p>{{ calculatedPTs(6) }}</p>
      </div>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <span class="text-red-500">1PT=8H</span>
        <p>{{ calculatedPTs(8) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toPT, parseInput, calculateTotalHours } from "@/services/PTFormatter";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Hours extends Vue {
  inputString = "";

  get calculatedHours() {
    return calculateTotalHours(parseInput(this.inputString));
  }

  calculatedPTs(onePThasHours = 6) {
    return toPT(this.inputString, onePThasHours);
  }
}
</script>
