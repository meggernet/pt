// https://docs.cypress.io/api/table-of-contents

const sizes = [
  "ipad-2",
  "ipad-mini",
  "iphone-3",
  "iphone-4",
  "iphone-5",
  "iphone-6",
  "iphone-6+",
  "iphone-7",
  "iphone-8",
  "iphone-x",
  "iphone-xr",
  "iphone-se2",
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "macbook-16",
  "samsung-note9",
  "samsung-s10",
  [1024, 768],
  [1280, 720],
  [1980, 1024],
  [2560, 1440],
  [3840, 2160],
];
describe("Hours test", () => {
  sizes.forEach((size) => {
    it("Should show title on ${size} screen", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.contains("h1", "Hours");
    });

    it("Should be able to switch to light mode on ${size} screen", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get('[data-test="lightModeButton"]').click();
    });

    it("Should be able to switch to dark mode on ${size} screen", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get('[data-test="darkModeButton"]').click();
    });

    it("Should be able to switch to system mode on ${size} screen", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get('[data-test="systemModeButton"]').click();
    });
  });
});
