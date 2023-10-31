import { mount } from '@vue/test-utils';
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

describe('ThemeSwitcherComponent', () => {
  it('renders', () => {
    const wrapper = mount(ThemeSwitcher);
    expect(wrapper.exists()).toBe(true);

    let content = wrapper.html();

    expect(content).toContain('data-test="themeSwitcher"');

    expect(content).toContain('data-test="lightModeButton"');
    expect(content).toContain('data-test="darkModeButton"');
    expect(content).toContain('data-test="systemModeButton"');
  });
});

