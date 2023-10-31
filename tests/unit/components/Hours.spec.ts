import { mount } from '@vue/test-utils';
import Hours from "@/components/Hours.vue";

describe('HoursComponent', () => {
  it('renders', () => {
    const wrapper = mount(Hours);
    expect(wrapper.exists()).toBe(true);

    let content = wrapper.html();

    expect(content).toContain('Hours');

    expect(content).toContain('data-test="outputPThas6Hours"');
    expect(content).toContain('data-test="outputPThas8Hours"');
  });
});