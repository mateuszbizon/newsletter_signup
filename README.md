# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
- [Overview](#overview)
  - [The challange](#the-challange)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challange

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live site URL: [https://mateuszbizon.github.io/newsletter_signup/](https://mateuszbizon.github.io/newsletter_signup/)

## My process

### Built with

- html5
- scss
- flexbox
- js
- gulp

### What I learned

I learned about event listener called **blur**, which show that is input valid or not before submitting form.

```js
emailInput.addEventListener("blur", () => {
    validateEmail();
})
```

## Author

- Frontend Mentor - [@mateuszbizon](https://www.frontendmentor.io/profile/mateuszbizon)