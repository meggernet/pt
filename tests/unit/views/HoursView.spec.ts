import { mount } from "@vue/test-utils";
import HoursView from "@/views/HoursView.vue";

describe("HoursView", () => {
  it("renders", () => {
    const wrapper = mount(HoursView);
    expect(wrapper.exists()).toBe(true);
  });
});
