
class Register{

  // This code usualy used for Register a new user
    
  RegisterStep1(){
      
    cy.visit('https://tutorialsninja.com/demo/');
    // cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
    cy.wait(5000)
    // cy.get('//li/a[@title="My Account"]').click()
    cy.get('i[class="fa fa-user"]').click()
    cy.xpath("(//a[normalize-space(text())='Register'])[1]").click()
    cy.get("#input-firstname").type("Harry")
    cy.get("#input-lastname").type("Buddy")
    cy.get("#input-email").type("Justin100@gmail.com")
    cy.get("#input-telephone").type("123156658")
    cy.get("#input-password").type("Justin@123")
    cy.get("#input-confirm").type("Justin@123")
    cy.xpath('(//input[@name="newsletter"])[1]').check().should("be.checked")
    cy.get('input[name="agree"]').check().should("be.checked")
    cy.get('input[class="btn btn-primary"]').click()
    cy.wait(5000)
    cy.get('a[class="btn btn-primary"]').click()
    cy.xpath("(//a[contains(@href, 'https://tutorialsninja.com/demo/index.php?route=common/home')])[1]").click();
    
  }

}

export default Register;