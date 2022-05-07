# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

This challenge tests your ability to build out a project from scratch. You will be provided with a design and a set of instructions to help you build out the project.
It tests your ability to use external APIs and structure the returned data the way you want to.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
- See new advice without refreshing the page or clicking on the dice icon

### Links

- Solution URL: [Add solution URL here](https://github.com/Felistus/random-advice-generator)
- Live Site URL: [Add live site URL here]https://felistus-random-advice-gen.netlify.app/)

## My process

### Built with

- Custom CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) - TypeScript language
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - For styles
- [Vite](https://vitejs.dev/guide/#overview) - Build tool
- [Netlify](https://www.netlify.com/) - Deployment platform

### What I learned

- How to use Tailwind CSS to build out a responsive design.
- How to fetch data from an external API using axios and how to structure the data the way I want.
- How to use React to build out a component.
- How to use TypeScript to build out a component.
- How to add quotes symbol to the generated advice or piec of text.

```css
blockquote::before {
  content: open-quote;
}

blockquote::after {
  content: close-quote;
}

blockquote {
  quotes: "“" "”" "‘" "’";
}
```

## Author

- Frontend Mentor - [@Felistus](https://www.frontendmentor.io/profile/Felistus)
- Twitter - [@ezeugoobieze](https://www.twitter.com/ezeugoobieze)
