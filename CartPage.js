class CartPage {
    addToCart(quantity = 1) {
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.cart').click();
    }

    

    verifyCart(productName, quantity) {
        cy.get('.contentpanel').within(() => {
            cy.contains(productName).should('be.visible');
            cy.get('#cart_quantity9013993f688a965eb6fac5df1f1bd03309').should('have.value', quantity.toString());
        });
    }

    proceedToCheckout() {
        cy.get('#cart_checkout1').click(); 
    }

  
}

export default CartPage;