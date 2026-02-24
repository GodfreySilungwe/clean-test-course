describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('http://192.168.8.96:3000');
  });
  it('selects Handhelds', () => {
    //TODO: Add a test to check Handhelds
    cy.contains('Handshelds').click()
    cy.contains('Cheese Barger')
    cy.contains('Fajita Tacos')
  });
  it('selects Appeteasers', () => {
    //TODO: Add a test to check Appeteasers
    cy.contains('Appeteasers').click()
    cy.contains('Tater Tots')
    cy.contains('Buffalo Wings')
    cy.contains('Cheese Barger').should('not.exist')
    cy.contains('Fajita Tacos').should('not.exist')
  });
});
