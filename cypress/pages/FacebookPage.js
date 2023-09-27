
export default class FacebookPage {
    constructor(username,password) {
      this.username = username;
      this.password = password;
    }
  
    visit() {
      cy.visit('https://www.facebook.com/messages/t');
    }
  
    handleBrokenChatPage() {
      cy.contains("Volver a cargar página").click();
    }
  
    openConversation(conversationName) {
      this.visit();
      this.handleBrokenChatPage();
      cy.contains(conversationName).click();
    }
  
    sendMessage(message) {
      const input = cy.get('.xmjcpbm > .x1a02dak');
      input.type(message + '{enter}');
    }
  
    login() {
      cy.fbFinalUserLogin(this.username, this.password);
    }
  }
  
