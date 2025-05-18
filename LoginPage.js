class LoginPage {
    visit() {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
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
        this.visit()
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }
}

export default LoginPage;

