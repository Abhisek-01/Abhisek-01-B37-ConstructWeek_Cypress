class Search{

  SearchStep3(){
    
    // cy.visit('https://tutorialsninja.com/demo/')
    cy.get('input[name="search"]').click().type("HP").type("{enter}")

    // cy.get('img[alt="HP LP3065"]').click()
    // cy.xpath("(//img[@alt='HP LP3065'])[2]").click()
    cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=47&search=HP"])[1]').click()

  }

}

export default Search;