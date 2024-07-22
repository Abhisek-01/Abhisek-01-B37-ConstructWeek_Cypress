class Login{

  LoginStep2(){

    // cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
    cy.visit('https://tutorialsninja.com/demo/')
    cy.get('i[class="fa fa-user"]').click()
    cy.get('.dropdown-menu > :nth-child(2) > a').click({force:true})
    cy.get('input[id="input-email"]').type("Justin100@gmail.com")
    cy.get('input[id="input-password"]').type("Justin@123")
    cy.get('input[class="btn btn-primary"]').click()

    cy.xpath("(//a[contains(@href, 'https://tutorialsninja.com/demo/index.php?route=common/home')])[1]").click();

  }

}

export default Login;