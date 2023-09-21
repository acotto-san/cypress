Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Entrante messenger", () => {
  beforeEach(() => {
 //si esto no termino de loguear
  cy.fbFinalUserLogin('','');
  });

  it("sendMensaje", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });


  it("sendMensaje2", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje3", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje4", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje5", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje6", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje7", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje8", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });

  it("sendMensaje9", () => {
    
    cy.visit('https://www.facebook.com/messages/t')
    cy.contains("Volver a cargar página").click();
    cy.contains("Itchy and Scratchy's").click();
    const input = cy.get('.xmjcpbm > .x1a02dak');
    for (let i = 0; i < 15; i++){
      input.type(Date.now()+'{enter}');
    }
    input.type('dyc{enter}')
  });
});
