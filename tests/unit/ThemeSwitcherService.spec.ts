import {
  checkTheme,
  switchToLightTheme,
  switchToDarkTheme,
  switchToSystemTheme,
} from "@/services/ThemeSwitcherService";

describe("ThemeSwitcherService => checkTheme", () => {
  it("checks theme", () => {
    const expected = "dark";

    localStorage.theme = "dark";
    checkTheme();
    expect(document.documentElement.classList).toContain(expected);
  });
});

describe("ThemeSwitcherService => switchToLightTheme", () => {
  it("switches to light theme", () => {
    const expected = "light";

    switchToLightTheme();
    expect(localStorage.theme).toBe(expected);
    expect(document.documentElement.classList).not.toContain("dark");
  });
});

describe("ThemeSwitcherService => switchToDarkTheme", () => {
  it("switches to light theme", () => {
    const expected = "dark";

    switchToDarkTheme();
    expect(localStorage.theme).toBe(expected);
    expect(document.documentElement.classList).toContain("dark");
  });
});

describe("ThemeSwitcherService => switchToSystemTheme", () => {
  it("switches to system theme => not dark", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    switchToSystemTheme();
    expect(localStorage.theme).toBeUndefined();
    expect(document.documentElement.classList).not.toContain("dark");
  });

  it("switches to system theme => dark", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    switchToSystemTheme();
    expect(localStorage.theme).toBeUndefined();
    expect(document.documentElement.classList).toContain("dark");
  });
});
