class CartPage {
    addToCart(quantity = 1) {
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.cart').click();
    }
    verifyCart(productName, quantity) {
        cy.get('.contentpanel').within(() => {
            cy.contains(productName).should('be.visible');
            cy.get('#cart_quantity89a45ab41d0bddba8ea847d7b3f42c19d0') 
          .should('have.value', quantity.toString());
        });
    }

    proceedToCheckout() {
        cy.get('#cart_checkout1').click(); 
    }
}

export default CartPage;