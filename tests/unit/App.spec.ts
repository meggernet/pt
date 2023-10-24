import { mount } from '@vue/test-utils';
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { checkTheme } from "@/services/ThemeSwitcherService";

jest.mock('@/services/ThemeSwitcherService', () => ({
  checkTheme: jest.fn(() => Promise.resolve()),
}));

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });
    expect(jest.isMockFunction(checkTheme)).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });
});