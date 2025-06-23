class SearchPage {
    searchProduct(productName) {
        cy.get('input[placeholder="Search Keywords"]').type(productName);
        cy.get('.button-in-search > .fa').click();
    }

    verifySearchResult(productName) {
        cy.get('.fixed_wrapper .prdocutname').each((ele) => {
            cy.wrap(ele).should('contain.text', productName);
        });
    }

    verifyNoResult() {
        cy.contains('There is no product that matches the search criteria.').should('be.visible');
    }

    selectFirstProduct() {
        cy.get('.fixed_wrapper .prdocutname').first().click();
    }
}

export default SearchPage;