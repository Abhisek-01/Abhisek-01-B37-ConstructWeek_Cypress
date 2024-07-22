
class ProductView{

  ViewProdDetails(){
    cy.get('i[class="fa fa-user"]').click()
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
    cy.get('a[class="btn btn-info"]').click()

  }
}

export default ProductView;