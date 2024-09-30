# Day 1 - JS Intro


# Day 2 - JS Intro
    1. Ways to write JS
    2. Variable - var, let, const
    3. Ways to show the output - console.log, alert, confirm, prompt
    4. Data Types
    5. Comments
    6. Operators - Arithmetic, Bitwise, Logical operators

# Day 3 - JS Intro
    1. Loops
    2. Strings Methods
    3. Functions
    4. Dates
    5. Number and Math
    6. Error Handling
    7. Promises


# Day 4 - TS Framework
    1. Introduction to TypeScript
        a. What is TypeScript?
        b. Why Use TypeScript?
        c. How the TypeScript works with JavaScript

    2. Advantage of TypeScript
        a. Early Error Detection
        b. Improve Code Readability
        c. Better Tooling
        d. Enhanced Refactoring
    
    3. Overview of Node and Node Environment Setup
        a. What is Node.js?
        b. Why to use Node JS
        c. Setting NodeJs 
        d. Verifying Installation

    4. Installing and configuring typescript Engine
        a. Installing TypeScript
        b. Setting up TypeScript Project
        c. Configure TypeScript

    5. Understanding Transpilation

# Day 5 - TS Framework
    1. TS Simple Types
        a. Three main primitives in JS and TS
        b. Two less common primitives in JS and TS
        c. Explict and Implict
        d. Error in Type Assignment
        e. About any
        f. Static and Dynamic Type

    2. Data Types
        a. string
        b. number
        c. Array
        d. Object
        e. Tuples
        f. Enum
        g. Void
        h. NULL

# Day 6 - OOPS in TypeScript
    1. Defining Class and Creating Objects
    2. Property, Methods and Constructors 
    3. Handling Inheritance
    4. Types of Inheritance in TypeScript
    5. Understanding Access Modifiers
    6. Static Methods in TypeScript 
    7. Understanding Interfaces in TypeScript

# Day 7 - OOPS in TypeScript (02-09-2024)
    1. Types of Inheritance in TypeScript
    2. Understanding Access Modifiers
    3. Static Methods in TypeScript 
    4. Understanding Interfaces in TypeScript

# Day 8 - ReactJs : Introduction and Features (04-09-24)
    ReatJS: ReactJS is an open-source JavaScript library primarily used for building user interfaces (Front-end), especially for single-page applications (SPAs). It allows developers to create large web applications that can update and render efficiently with minimal coding.


    Key Features:
        1. Component-Based: In React, everything is a component. A component encapsulates a piece of the UI, like a complex UIs from simple components.
        2. Learn Once, Write Anywhere: React-Native
        3. Virtual DOM: React uses a virtual DOM that improves the performance of web applications by minimizing the number of costly DOM manipulations

    Need for ReactJS:
        1. Efficient UI Rendering Easy
        2. Reusable Components
        3. Unidirectional Data Flow
        4. Community and Ecosystem

    Understand SPA:

    What is an SPA? A Single Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. Instead of loading new pages from the server for each interaction, SPAs load new content via JavaScript, often through AJAX requests, and update the existing page without requiring a full reload.

    Advantages of SPAs:

    Fast User Experience: Since SPAs only load a single HTML page and update content dynamically, they provide a smoother and faster user experience compared to traditional multi-page applications.

    Reduced Server Load: SPAs reduce the amount of data that needs to be sent from the server, as only the necessary content is updated instead of reloading the entire page.

    Seamless Navigation: SPAs allow for a more seamless and fluid user experience, with content updating in place without the need for page reloads.

    How React Enables SPAs: React is ideal for building SPAs due to its component-based architecture and virtual DOM. React components can dynamically update and render based on the application's state, making it easy to build responsive and interactive SPAs.



# Day 9 - ReactJS(05-09-24)
    It is good to know these folders and files:
        1. node_modules: Stores all the necessary node packages of the React applications.
        2. public:
            a. favicon.ico: an Icon file
            b. index.html: The only HTML file we have in the entire application
            c. Images: Will store in the public folder only.
            d. manifest.json: It is used to make the application a progressive web app
            c. robots.txt: Tells search engine crawlers which URLs the crawler can access on your site


        3. src:
            a. App.css, index.css - Are different CSS files for designing the page
            b. index.js : a file which allows to connect all the components with index.html inside public folder
            c. App.js: A file where we usually import most of the presentational components
            d. serviceWorker.js: is used to add progressive web app features
            c. setupTests.js - to write testing cases
        
        4. package.json: List of packages the applications uses

        5. .gitignore: React boilerplate come with git initiated, and the .gitignore allows files and folders not to be pushed to Github

        6. README.md - Markdown file to write documentation


# Day 10 - ReactJS(11-09-24)
    1. React Components
        A React component is a small, reusable code, which is responsible for one part of the application UI. A React application is an aggregation of components. 

        Components can be;
        a. Functional Component / Presentational Component / Stateless Component / Dumb Component
        b. Class Component / Container Component / Statefull Component / Smart Component

    2. Injecting data to JSX elements
    3. Creating the JSX elements inside the index.js of react folder
    4. Class, objects and functions - Revise

# Day 11 - ReactJS(12-09-24)
    1. Creating React Component
        a. Functional Component

# Day 12 - ReactJS (12-09-24)
    1. React Props
        Props is a special keyword in React that stands for properties and is being used to pass the data from one component to another and mostly from parent component to child component.
        We can say props is a data carrier that mean transporting

# Day 13 - ReactJS (19-09-24)
    1. React Props
        Props is a special keyword in React that stands for properties and is being used to pass the data from one component to another and mostly from parent component to child component.
        We can say props is a data carrier that mean transporting

# Day 14 - ReactJS (20-09-24)
    2. Props Object
        Different data type props
            a. String props type
            b. Number props type
            c. Boolean props type
            d. Array props type
            e. Object props type
            f. Function prop types
    
    3. Destructuring props


# Day 15 - ReactJS (26-09-24)
    a. String props type
    b. Number props type
    c. Boolean props type
    d. Array props type
    e. Object props type

# Day 15 - ReactJS (27-09-24)
    a. Function props type

    1. React Foundation
    2. Understanding DOMs
        1. Virtual DOM
        2. Real DOM
    3. React Jargon
        1. State - Pending
        2. Component
        3. Re-rendering

# Day 16 - ReactJS (30-09-24)
    1. Hooks State
    2. Hooks 
    3. React Fragments/Reconciliation
    4. Array Destructuring & Object Destructuring