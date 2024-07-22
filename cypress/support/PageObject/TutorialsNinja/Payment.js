class Payment{

  PaymentStep5(){
    //Click on continue for forther procedure
    cy.get('a[class="btn btn-primary"]').click().wait(2000)
    // checked the biling address using new address
    
    // cy.get(':nth-child(3) > label > input').check().should('be.checked')
    
    cy.get("#input-payment-firstname").type("Abhisek")
    cy.get("#input-payment-lastname").type("Baral")
    cy.get("#input-payment-company").type("Nolan Edtech Private Ltd")
    cy.get('#input-payment-address-1').type("Nolan Edutech Private Limited Incubex HSR21, 5th Main Road, Sector 6 HSR Layout, Bengaluru Karnataka, India Pin code:560102")
    cy.get('#input-payment-address-2').type(" ");
    cy.get('#input-payment-city').type("Bengalore")
    cy.get('#input-payment-postcode').type("560102")


    //selection cuntry
    cy.get("#input-payment-country").should("be.visible").and("be.enabled")
    cy.get("#input-payment-country").select("India").should("have.value", "99").get('option[value="99"]').should("have.text", "India")
    //selection state
    cy.get("#input-payment-zone").should("be.visible").and("be.enabled")
    cy.get("#input-payment-zone").select("Karnataka").should("have.value", "1489").get('option[value="1489"]').should("have.text", "Karnataka")

    cy.get("#button-payment-address").click({force:true})

    // checking existing address.
   
  }

}

export default Payment;