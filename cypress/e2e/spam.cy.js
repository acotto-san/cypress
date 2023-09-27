import FacebookPage from "../pages/FacebookPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Entrante messenger", () => {

  let paginaDeFacebook
  before(() => {
   paginaDeFacebook = new FacebookPage('qayzn76@gmail.com','asdQWE!23')
  })

  beforeEach(() => {
    paginaDeFacebook.login();
    paginaDeFacebook.openConversation("Itchy and Scratchy's")
    });

  it("sendMensaje",() => {
    for (let i = 0; i < 15; i++){
      paginaDeFacebook.sendMessage("prueba123")
    }
    cy.wait(10000);
  });

});
