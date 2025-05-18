class WishlistPage {
    selectFirstProductAndCaptureName() {
        return cy.get('.fixed_wrapper .prdocutname').first().then($el => {
            const productName = $el.text().trim();
            cy.wrap(productName).as('productName'); // Save for later check
            $el.click();
        });
    }

    addToWishlist() {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img').click();
    }

    goToWishlist() {
        cy.get('.wishlist_add');
    }

    
}

export default WishlistPage;



