describe('TODOS page', () => {
  it('should add a new TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
  });

  it('should toogle a previous TODO', () => {
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .click()
      .should('have.class', 'complete');
  });
  //Test deleting a TODOITEM
  /*
  Se agregan dos items a la lista, se elimina el primero y al revisar,
  debió haber eliminado el primero pero el segundo debe seguir allí.
  */
  it('should delete a previous TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('To delete TODO')
      .get('button[type=submit]')
      .click()
      .get('input')
      .type('Base TODO')
      .get('button[type=submit]')
      .click()
      .get('button')
      .contains('Borrar')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('not.contain', '1. to delete TODO')
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. Base TODO');
  });
});
