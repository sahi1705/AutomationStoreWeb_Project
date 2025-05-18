import LoginPage from '../support/asProject/LoginPage.js';
import SearchPage from '../support/asProject/SearchPage.js';
import CartPage from '../support/asProject/CartPage.js';
import WishlistPage from '../support/asProject/WishlistPage.js';
import ContactPage from '../support/asProject/ContactPage.js';


describe('Login Functionality', () => {
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();
    const wishlistPage = new WishlistPage();
    

    it('login with valid credentials', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        cy.contains('My Account').should('be.visible');
    });

    it('login with invalid credentials', () => {
        loginPage.login('wronguser', 'wrongpassword');
        cy.get('.alert-danger')
          .should('contain.text', 'Error: Incorrect login or password provided.');
    });

    it(' login with correct username but wrong password', () => {
        loginPage.login('sahilshirale123', 'wrongpass123');
        cy.get('.alert-danger')
          .should('contain.text', 'Error: Incorrect login or password provided.');
    });
    

    // ✅ Search test after login
    it(' Product search for "Perfume" and verify results', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.verifySearchResult('Perfume');
    });

   
    it('Product Search  unknown product', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('asdasdnonexistentproduct');
        searchPage.verifyNoResult();
    });
    

    //ADD to Cart
    it(' Add product to cart and verify quantity', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.selectFirstProduct();              
        cartPage.addToCart(1);                         
                              
        cartPage.verifyCart('Perfume', 25);            
    });

    it('Checkout Functinality ', () => {
        loginPage.login('sahilshirale123', 'sahil@123456');
        searchPage.searchProduct('Perfume');
        searchPage.selectFirstProduct();  
        cy.wait(3000)     
        cartPage.addToCart(1);                 
                          
        cartPage.verifyCart('Perfume', 26);     
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
       
    });

    //Contact Us

    it('Go to footer and validate Contact Us page', () => {
        const contactPage = new ContactPage();
        loginPage.login('sahilshirale123', 'sahil@123456');
        cy.visit('https://automationteststore.com/');
        contactPage.goToContactFromFooter();
        contactPage.verifyContactPage();
    });
   
});