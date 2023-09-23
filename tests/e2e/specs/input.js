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
    it("Outputs the correct values on ${size} screen and input (1d / onePThasHours=6)", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get("#hours").type("1d");
      cy.get('[name="onePThasHours"]').check("6");

      cy.get('[data-test="outputPThas6Hours"]').contains("1.00 PT");
      cy.get('[data-test="outputPThas8Hours"]').contains("0.75 PT");
    });

    it("Outputs the correct values on ${size} screen and input (1d / onePThasHours=8)", () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("/");
      cy.get("#hours").type("1d");
      cy.get('[name="onePThasHours"]').check("8");

      cy.get('[data-test="outputPThas6Hours"]').contains("1.33 PT");
      cy.get('[data-test="outputPThas8Hours"]').contains("1.00 PT");
    });
  });
});
