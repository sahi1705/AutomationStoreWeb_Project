# AutomationStoreWeb_Project

## Resume: [QA_Sahil_Resume](https://drive.google.com/file/d/1-QZGgsFeTayxeH_VfWMeBfx7hbrphyw-/view?usp=sharing)






## Objective

To perform Functional and Automation as well as  Usability Testing on the AutomationStore Web Application, ensure compatibility across various browsers and address any performance issues.

## Tech Stack used in this Project

<img alt="GitHub" src="https://automationteststore.com/resources/image/18/7a/8.png" />

**Version Control and Testing tools used:**

<img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=flat" />

**Operating System and browsers used:**

<img alt="Windows" src="https://img.shields.io/badge/Windows-00ADEF?logo=windows&logoColor=white&style=flat" />
<img alt="Edge" src="https://img.shields.io/badge/Edge-5C2D91?logo=microsoft-edge&logoColor=white&style=flat" />
<img alt="Firefox" src="https://img.shields.io/badge/Firefox-FF9500?logo=firefox-browser&logoColor=white&style=flat" />
<img alt="Chrome" src="https://img.shields.io/badge/Chrome-4285F4?logo=google-chrome&logoColor=white&style=flat" />
<img alt="Cypress" src="https://github.com/user-attachments/assets/bebb5d6b-9232-4ee0-b095-cbf69654941f" />

## Directory Structure
AutomationStoreProject/
├─ AutomationStore_Test Plan
├─ AutomationStore_Test scenarios
├─ AutomationStore_MindMap.png
├─ AutomationStore_BugReport
├─AutomationStore_SummaryReport.

## Application Under Test 

AUT URL: https://automationteststore.com/

## Scope 
<details>
<summary><strong>Features to be Tested</strong></summary>


- Login
- Product Search 
- Add to Cart
- Checkout
- WishList
- Footer/Contact Us 



</details>

<details>
<summary><strong>Testing Types</strong></summary>

- Functional Testing
- Automation Testing 
- Usability Testing
- Compatibility Testing

</details>

## With Cypress
To design and implement an automated testing framework using Cypress that validates key user workflows of an e-commerce application: login,
 search, add to cart, wishlist, checkout, and contact functionality.

 ## Framework Structure:

 cypress/
├── e2e/
│   └── TestAsWebApp.cy.js            // Main test suite
├── support/
│   └── PomPages/
│       ├── LoginPage.js           // Handles login actions
│       ├── SearchPage.js          // Handles search and result validation
│       ├── CartPage.js            // Add to cart, view, and checkout
│       ├── WishlistPage.js        // Wishlist actions
│       └── ContactPage.js         // Footer and Contact Us form




## Test Case Execution Status

| Test Case Status            | Build Result        |
|-----------------------------|---------------------|
| Total Number of Test Cases  | 38                |
| Passed Test Cases           | ![Passed](https://img.shields.io/badge/-31-green) |
| Failed Test Cases           | ![Failed](https://img.shields.io/badge/-7-red) |
| Blocked/Skipped Test Cases  | ![Blocked/Skipped](https://img.shields.io/badge/-0-yellow) |

## Defects Status

| Defect Status   | Build Result |        
|-----------------|--------------|
| Total number    | 7          |                  
| Blocker         | ![Blocker](https://img.shields.io/badge/-0-red) |
| Critical        | ![Critical](https://img.shields.io/badge/-1-orange) |
| Major           | ![Major](https://img.shields.io/badge/-1-yellow) |
| Minor           | ![Minor](https://img.shields.io/badge/-5-green) |   





## Attachments

![1](https://github.com/user-attachments/assets/d5e12611-7576-4187-9bc6-2700abd49f09)
![2](https://github.com/user-attachments/assets/2a5c012d-512e-4621-bcd0-7ddeb0107a6b)
![4](https://github.com/user-attachments/assets/5cd5b7bb-14f3-423c-9271-d420ecf0a4a5)



## Recommendations & Suggestions

Based on the evaluation of Web Application, the following improvements are recommended:

1. **Wishlist Behavior**
-	Users can add to wishlist without any confirmation or visual feedback.
-	 Suggestion: Show a toast message like “Added to Wishlist” or animate the wishlist icon.
-	Also, no option to remove items from wishlist.

2. **Cart & Checkout Logic**
-	No confirmation message before proceeding to checkout
-	 Suggestion: Add a summary popup before redirecting to checkout.

3. **Search Suggestions** 
-	As-you-type suggestions are missing in the search bar.


---

Feel free to modify or add any specific details related to your implementation or other context-specific information.

## 🚀 About Me

I'm an  aspiring student in Software Engineer in Development & Testing (SDET) currently building a strong foundation in both manual testing and Automation Testing.. I focus on delivering high-quality solutions through Manual testing and Automation testing practices.

## Feedback

If you have any feedback, please reach out to me at sahilshirale324@gmail.com
