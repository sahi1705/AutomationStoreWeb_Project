class ContactPage {
    goToContactFromFooter() {
        cy.get('footer').within(() => {
            cy.get('.info_links_footer > :nth-child(5) > a').click();
        });
    }

    verifyContactPage() {
        cy.url().should('include', 'contact');
        cy.get('h1.heading1').should('contain.text', 'Contact Us');
        cy.get('#ContactUsFrm_first_name').type('sahilshirale')
        cy.get('#ContactUsFrm_email').type('sahilshirale324@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('HelloWorld')
        cy.get('button[title="Submit"]').click()
    }
}

export default ContactPage;