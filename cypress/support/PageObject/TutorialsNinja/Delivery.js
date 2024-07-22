
class Delivery{

  //Check deliveryDetail is fatching form enter new details. just checked the radio that we alrady have address
  deliveryDetail(){
    // cy.xpath('(//input[@name="payment_address"])[1]').check().should("be.checked")
    cy.get('input[id="button-payment-address"]').click()
    cy.get('#button-shipping-address').click();
  }

  // Click on forther procceed
  deliveryMethod(){
    // cy.xpath('(//input[@id="button-shipping-method"])[1]').click()
    cy.get('#button-shipping-method').click()
  }

  // For Payment method completed
  PaymentMethod(){
    cy.get('input[type="checkbox"]').check().should("be.checked")
    cy.get('#button-payment-method').click()
  }

  // For order conform
  ConformOrder(){
    cy.get('input[value="Confirm Order"]').click()
    //Move to home page
    
  }

}

export default Delivery;