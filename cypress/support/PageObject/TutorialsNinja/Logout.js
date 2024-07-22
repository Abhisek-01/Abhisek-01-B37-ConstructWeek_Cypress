class Logout{

  LogoutPage(){
    cy.xpath("(//a[contains(@href, 'https://tutorialsninja.com/demo/index.php?route=common/home')])[1]").click();
    cy.get('i[class="fa fa-user"]').click()
    cy.get('.dropdown-menu > :nth-child(5) > a').click()

  }
}

export default Logout;