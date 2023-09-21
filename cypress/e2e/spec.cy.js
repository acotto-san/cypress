Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://qa.ysocial.net/Test/Login.aspx?Redirect=~/Default.aspx");
    cy.get('input[name="ctl00$contentplaceholderContenido$textboxUser"]').type(
      "QAdmin"
    );
    cy.get(
      'input[name="ctl00$contentplaceholderContenido$textboxPassword"]'
    ).type("asdQWE!23");
    cy.get("#sumbitLogin").click(); //si esto no termino de loguear
    cy.visit("https://qa.ysocial.net/Test/Reports/RTAgents.aspx"); //esto me saca de la pagina antes de que haya logueado
    //si encuentra al agente en la lista
    cy.wait(5000)
    // if (Cypress.$('table[id="tableAgents"] a:contains("Poo Chie")').length > 0) {
    //   cy.log("ESTOY EN EL IF");
    //   let row = cy
    //         .get('table[id="tableAgents"]')
    //         .contains("Pablo Yacoli")
    //         .parents("tr");
    //       //lo desconecta
    //       row.find('a[rel="disconnect"]').click();
    //       cy.get('input[rel="confirm"]').click();
    // }else{
    //   cy.log("NO ENTRE AL IF");
    // }

    // cy.contains("Pablo Yacoli");

    cy.get('table[id="tableAgents"]').within(()=>{
      cy.contains('Pablo Yacoli')
      .parent('tr').within(()=>{
        cy.get('a[rel="disconnect"]').click();
      })
    })
  });

  it("Visits the Kitchen Sink", () => {
    cy.visit('https://qa.ysocial.net/test/agent/#/')
    // cy.url().should('https://qa.ysocial.net/test/agent/#/login');
    cy.get('input[placeholder="Usuario"]').type('pyacoli');
    cy.get('input[name="password"]').type('asdQWE!23');
    cy.contains('INGRESAR',{'matchCase':false}).click();
    // se pone en disponible
    cy.contains('Login',{'timeout':100000}).click();
    // cy.get(':nth-child(1) > a > :nth-child(1) > .state-name').click();
    // //intenta responder primer mensaje asignado
    // cy.get('.navigation-telegram > div > .fab').click();
    // cy.get('#textareaActAsChat').type("prueba{enter}").
  });
});

const clickIfExist = (element) => {
  cy.get("body").then((body) => {
    if (body.find(element).length > 0) {
      cy.log("found");

      return true;
    } else {
      cy.log("NOTfound");

      return false;
    }
  });
};
