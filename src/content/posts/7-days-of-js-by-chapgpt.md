---
title: 7 days of JS by ChatGPT
description: I decided to team up with ChatGPT to create a 7-day JavaScript challenge, inspired by the popular 30 days of JS. The results? Truly amazing!
pubDate: 2024-06-12T16:00:01Z
tags: "web, frontend, AI, coding, javascript, projects, LLM, chatGpt"
image: '../images/7-days-of-js-by-chapgpt.jpg'
imgAlt: 'An Artificial intelligence solving JS challenges in a computer'
---

Are you ready to embark on a JavaScript adventure? We all know that practice makes perfect, especially in the world of coding. But let's face it, sometimes the typical coding challenge platforms can be a bit, well, generic.

🤖 That's where ChatGPT comes in! 🤖

I decided to team up with ChatGPT to create a 7-day JavaScript challenge, inspired by the popular 30 days of JS. The results? Truly amazing!

## **The Idea**

As I immersed myself in coding challenges, I realized something crucial. While platforms like Leetcode are fantastic for honing generic problem-solving skills, they often miss the mark when it comes to frontend development.

Picture this: You're in a frontend developer interview, and they throw specific React and JS problems at you. Sound familiar? That's where the 30-day challenge concept comes in handy!

## **Leveraging the Power of ChatGPT 🚀**

So, I decided to enlist the help of ChatGPT to curate my very own 7-day challenge. The idea? Bite-sized exercises that focus on real-world frontend development scenarios.

Curious about the challenges? Here's a sneak peek:

**Challenge 1: Interactive Form Validation**

Create a web form with input fields like name, email, and password. Implement real-time validation using JavaScript to provide feedback to the user as they type. Ensure that it checks for valid email format, password strength, and other relevant criteria.

**Challenge 2: Image Carousel**

Build a simple image carousel that allows users to navigate through a collection of images using JavaScript. Include features like auto-play, next/previous buttons, and a navigation indicator.

**Challenge 3: Responsive Navigation Menu**

Create a responsive navigation menu that collapses into a hamburger menu on smaller screens. Use HTML, CSS, and JavaScript to make it functional. It should smoothly transition between states.

**Challenge 4: Recipe Finder**

Build a Recipe Finder App that helps users find recipes based on the ingredients they have. Users should be able to enter ingredients they have at home, and the app will provide a list of recipes that can be made using those ingredients. You should integrate with a recipe API of your choice to fetch recipe data.

**Challenge 5: Weather App**

Build a weather app that fetches weather data from a public API based on user input (e.g., city or zip code). Display the current weather and a 3-day forecast. Use JavaScript to make asynchronous API requests and render the data dynamically.

**Challenge 6: Quiz App**

Create a web-based quiz application that allows users to take quizzes on various topics. Users should be able to select a quiz category, answer multiple-choice questions, and receive a score at the end of the quiz. The app should provide feedback on correct and incorrect answers and keep track of the user's score.

**Challenge 7: Quote Generator**

Build a Quote Generator App that generates and displays random quotes to users. You should integrate with a quote API to fetch random quotes and display them on the webpage. Users can click a button to load a new random quote.

## **Building a Solid Rubric**

In the world of interviews, having a rubric is like having a map in a treasure hunt. It helps assess every candidate fairly and consistently. So, I turned to ChatGPT to craft a comprehensive rubric.

Here's what the rubric for the first challenge looks like:

| Criteria | Max Points | Novice | Intermediate | Proficient |
| --- | --- | --- | --- | --- |
| Code Structure and Organization | 10 | Q1 | Q2 | Q3 |
| Functionality | 15 | Q4 | Q5 | Q6 |
| User Interface | 10 | Q7 | Q8 | Q9 |
| JavaScript Proficiency | 15 | Q10 | Q11 | Q12 |

**Code Structure and Organization**

**Q1:** Structured JavaScript code for form validation by separating it into well-defined functions, such as **`FormValidator.validateForm`**, to handle different aspects of validation. Followed a modular approach to keep code organized and maintainable.

**Q2:** Used descriptive names for variables and functions, aiming for clarity and readability. This approach enhances code maintainability.

**Q3:** Adhered to coding best practices when developing the form validation solution. Followed conventions for code indentation, used meaningful variable and function names, and kept code concise and focused.

**Functionality**

**Q4:** Successfully implemented real-time validation for form inputs by attaching event listeners to input fields to trigger validation functions when input values change, providing immediate feedback to users.

**Q5:** Employed a regular expression pattern to validate email addresses, checking for valid email formats, such as **username@domain.com**, ensuring proper email structure.

**Q6:** Included error handling in form validation code, providing clear and user-friendly error messages to help users understand and correct input errors. Gracefully prevented form submission with invalid data.

**User Interface**

**Q7:** Designed user-friendly and visually appealing form validation messages with well-styled messages that provided clear feedback to users, enhancing the overall user experience.

**Q8:** Applied CSS styling to form elements, ensuring a consistent and visually pleasing appearance. Followed a systematic approach to styling, making form elements look polished and well-organized.

**Q9:** Ensured responsiveness and accessibility on various devices and screen sizes using responsive design techniques. Employed CSS media queries to adapt the user interface to different viewport sizes, enhancing accessibility and usability.

**JavaScript Proficiency**

**Q10:** Demonstrated proficiency in JavaScript concepts and techniques throughout the form validation solution. Utilized event listeners, conditional statements, regular expressions, and DOM manipulation effectively.

**Q11:** Utilized DOM manipulation to dynamically update the user interface based on validation results by altering the content and styles of elements to provide real-time feedback.

**Q12:** Considered performance in JavaScript code, ensuring efficiency and lightweight code with no significant performance bottlenecks, ensuring a smooth user experience without unnecessary delays.

📋 This rubric is a game-changer when it comes to self-assessment during training. I'm using it, and the results are eye-opening!

## **Starter Kits and Solutions**

Now, let's talk about getting candidates off to a strong start. I asked ChatGPT to create starter kits to give them that initial nudge. Take a peek at the starter kit for the first challenge:

<details>

<summary>Check the template code!</summary>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>

  <style>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form {
      width: 300px; 
      margin: 0 auto; 
      display: flex;
      flex-direction: column;
    }
    label {
     box-sizing: border-box;
      display: block; 
      margin-bottom: 5px; 
    }
    input {
      box-sizing: border-box;
      width: 100%; 
      padding: 5px; 
      margin-bottom: 10px; 
    }
    button {
      display: block; 
      width: 100%; 
      padding: 10px; 
      background-color: #007bff; 
      color: #fff; 
      border: none; 
    }
    button:hover {
      background-color: #0056b3; 
    }
  </style>
</head>
<body>
  <h1>Form Validation</h1>
  <form id="validationForm">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" data-validation="notEmpty">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" data-validation="email">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" data-validation="notEmpty">
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" name="confirmPassword" data-validation="passwordMatch">
    <button type="submit">Submit</button>
  </form>

  <script>
    const FormValidator = (function () {
      return {
        validateForm() {}
      }
    })();

    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("validationForm");

      form.addEventListener("submit", function (event) {
        
      });
    });
  </script>
</body>
</html>
```

</details>

And as for the solutions, ChatGPT came up with this:

<details>

<summary>Check the solution code!</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>

    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      form {
        width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      label {
        box-sizing: border-box;
        display: block;
        margin-bottom: 5px;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
      }
      button {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
      }
      button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1>Form Validation</h1>
    <form id="validationForm">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" data-validation="notEmpty" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" data-validation="email" />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        data-validation="notEmpty"
      />
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        data-validation="passwordMatch"
      />
      <button type="submit">Submit</button>
    </form>

    <script>
      const FormValidator = (function () {
        // Public validation functions
        return {
          validateForm(form) {
            const inputs = form.querySelectorAll("[data-validation]");
            let isFormValid = true;

            // Validate each input
            for (const input of inputs) {
              const inputValue = input.value;
              const validationType = input.getAttribute("data-validation");

              let isValid = false;

              switch (validationType) {
                case "notEmpty":
                  isValid = inputValue.trim() !== "";
                  break;
                case "email":
                  const emailPattern =
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                  isValid = emailPattern.test(inputValue);
                  break;
                case "passwordMatch":
                  const password = form.querySelector(
                    '[name="password"]'
                  ).value;
                  isValid = inputValue === password;
                  break;
                default:
                  isValid = true; // Default to true if no matching validation type
              }

              if (!isValid) {
                alert(`Invalid input for ${input.name}.`);
                isFormValid = false;
                break; // Stop validation on the first error
              }
            }

            return isFormValid;
          },
        };
      })();

      document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("validationForm");

        form.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the form from submitting

          // Validate the entire form
          const isFormValid = FormValidator.validateForm(form);

          if (isFormValid) {
            // If all validations pass, you can proceed with form submission
            alert("Form submitted successfully!");
            form.reset(); // Clear the form
          }
        });
      });
    </script>
  </body>
</html>
```

</details>

Sure, it took a few iterations to perfect, but the result is rock-solid. How would you grade ChatGPT's performance based on the rubric?

## **The Tests**

No coding challenge is complete without rigorous testing. It's where the rubber meets the road. Here are the tests ChatGPT wrote:

<details>

<summary>Check the test code!</summary>

```html
<script>
    // Function to assert that a condition is true
    function assert(condition, message) {
      if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
      }
    }

    // Simulate form submission for testing
    function simulateFormSubmit() {
      const form = document.getElementById("testForm");
      form.submit();
    }

    // Test Case 1: Empty Name Field
    function testCase1() {
      const nameInput = document.getElementById("name");
      nameInput.value = "";
      try {
        simulateFormSubmit();
      } catch (error) {
        assert(error.message === "Assertion failed: Invalid input for name.", "Test Case 1 failed");
      }
    }

    // Test Case 2: Invalid Email Format
    function testCase2() {
      const emailInput = document.getElementById("email");
      emailInput.value = "invalid_email";
      try {
        simulateFormSubmit();
      } catch (error) {
        assert(error.message === "Assertion failed: Invalid input for email.", "Test Case 2 failed");
      }
    }

    // Test Case 3: Empty Password Field
    function testCase3() {
      const passwordInput = document.getElementById("password");
      passwordInput.value = "";
      try {
        simulateFormSubmit();
      } catch (error) {
        assert(error.message === "Assertion failed: Invalid input for password.", "Test Case 3 failed");
      }
    }

    // Test Case 4: Password Mismatch
    function testCase4() {
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      passwordInput.value = "password123";
      confirmPasswordInput.value = "mismatched_password";
      try {
        simulateFormSubmit();
      } catch (error) {
        assert(error.message === "Assertion failed: Invalid input for confirmPassword.", "Test Case 4 failed");
      }
    }

    // Test Case 5: Valid Form
    function testCase5() {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      nameInput.value = "John Doe";
      emailInput.value = "johndoe@example.com";
      passwordInput.value = "securePassword";
      confirmPasswordInput.value = "securePassword";
      try {
        simulateFormSubmit();
      } catch (error) {
        assert(false, "Test Case 5 failed: Unexpected error.");
      }
    }

    // Run test cases
    testCase1();
    testCase2();
    testCase3();
    testCase4();
    testCase5();
  </script>
```

</details>

## **In Conclusion**

Exploring the potential of GEN AI, especially in the realm of learning, has been nothing short of fascinating. It brings a fresh perspective to the table. I plan to keep experimenting with it, and the possibilities seem limitless.

While working with ChatGPT did involve some back-and-forth, it's incredible to think that I assembled the initial pieces of this challenge in less than an hour. As AI tools continue to evolve, content generation is set to become even more seamless.

👨‍💻 If you enjoyed this exploration and fancy taking up the challenge, I've compiled all the challenges, starter kits, solutions, and the rubric in this [repository](https://github.com/juanallo/7-js-challenges-by-chatgpt). Dive in and supercharge your JavaScript skills!
