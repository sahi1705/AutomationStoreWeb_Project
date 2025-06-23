import LoginPage from '../support/PomPages/LoginPage.js';
import SearchPage from '../support/PomPages/SearchPage.js';
import CartPage from '../support/PomPages/CartPage.js';
import WishlistPage from '../support/PomPages/WishlistPage.js';
import ContactPage from '../support/PomPages/ContactPage.js';


describe('Login Functionality', () => {
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();
    const wishlistPage = new WishlistPage();
    const contactPage = new ContactPage();

  
    it('login with valid credentials', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
       
        cy.contains('My Account').should('be.visible');
           
    });

    it('login with invalid credentials', () => {
        loginPage.login('sahilshirale1', 'sahil@123');
        cy.get('.alert-danger')
        .should('contain.text', 'Error: Incorrect login or password provided.');   
    });

    it(' login with correct username but wrong password', () => {
        loginPage.login('sahilshirale123', 'sahil123456');
          cy.get('.alert-danger')
          .should('contain.text', 'Error: Incorrect login or password provided.');
          
    });
    

    // Search test after login
    it(' Product search for "Perfume" and verify results', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.verifySearchResult('Perfume');
        cy.wait(3000)    
    });

   
    it('Product Search  unknown product', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('asdasdnonexistentproduct');
        searchPage.verifyNoResult();
        cy.wait(3000)    
    });
    

    //ADD to Cart
    it(' Add product to cart and verify quantity', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.selectFirstProduct();         
        cartPage.addToCart(2);                                             
        cartPage.verifyCart('Perfume', 2);            
    });

    it('Checkout Functinality ', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.searchProduct('Perfume');
        searchPage.selectFirstProduct();       
        cartPage.addToCart(2);                            
        cartPage.verifyCart('Perfume', 4);     
        cartPage.proceedToCheckout();         
        cy.url().should('include', 'checkout');
          
        
    });
    
    //Wishlist 

    it('Add product to Wishlist and verify it', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        cy.visit('https://automationteststore.com/');
        wishlistPage.selectFirstProductAndCaptureName();
        wishlistPage.addToWishlist();
        wishlistPage.goToWishlist();
        cy.wait(3000)    
       
    });

    //Contact Us

    it('Go to footer and validate Contact Us page', () => {
       
        loginPage.login('sahilshirale123', 'sahil@123456');
        cy.visit('https://automationteststore.com/');
        contactPage.goToContactFromFooter();
        contactPage.verifyContactPage();
        cy.wait(3000)    
    });
   
});