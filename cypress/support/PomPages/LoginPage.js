class LoginPage {
    homepage() {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top > li > a').click()
    }
    enterUsername(username) {
        cy.get('#loginFrm_loginname').type(username)
    }

    enterPassword(password) {
        cy.get('#loginFrm_password').type(password)
    }

    clickLogin() {
        cy.get('button[title="Login"]').click()
    }

    login(username, password) {
        this.homepage()
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }
}

export default LoginPage;