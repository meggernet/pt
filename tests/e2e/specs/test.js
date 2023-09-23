// https://docs.cypress.io/api/table-of-contents

describe("Hours test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "Hours");
  });
});
