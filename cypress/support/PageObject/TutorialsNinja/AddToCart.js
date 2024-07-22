
class AddToCart{

  AddInCartStep4(){
    cy.get('input[name="option[225]"]').clear().type('2024-07-24')
    cy.get('input[id="input-quantity"]').clear().type('3')
    cy.get('button[id="button-cart"]').click()

    
    cy.get('button[class="btn btn-inverse btn-block btn-lg dropdown-toggle"]').click()
    cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"] > strong').click()
  }

}

export default AddToCart;