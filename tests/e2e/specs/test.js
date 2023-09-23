// https://docs.cypress.io/api/table-of-contents

describe("Hours test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "Hours");
  });

  it("Inputs a string and outputs the correct values (1d / onePThasHours=6)", () => {
    cy.visit("/");
    cy.get("#hours").type("1d");
    cy.get('[name="onePThasHours"]').check("6");

    cy.get(".outputPThasHours-6").contains("1PT");
    cy.get(".outputPThasHours-8").contains("0.75PT");
  });

  it("Inputs a string and outputs the correct values (1d / onePThasHours=8)", () => {
    cy.visit("/");
    cy.get("#hours").type("1d");
    cy.get('[name="onePThasHours"]').check("8");

    cy.get(".outputPThasHours-6").contains("1.3333333333333333PT");
    cy.get(".outputPThasHours-8").contains("1PT");
  });
});
