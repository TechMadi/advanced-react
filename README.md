# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## useState

- useState Hook
- returns an array with two elements : the current state value and  a function  that we can use to update the state
- accepts  default value as an argument
- state update triggers re-render
- Render  happens when the application is intialized first .
- When props or  state changes , the component need to be  updated

## General Rules of Hooks

- start with "use"( booth -react and custom hooks)
- components must be uppercase
- invoke inside  function/component body
- don't call  hooks  conditionally ( cover later)
- set functions  don't update  state  immediately

## useEffect  Basics

useEffect us a  hook in react that allows you to perform  sidde effects in function components.There is no need for urban dictiontary-basically  any work  outside  of the component. Some examples of the side effects are : subscruptions, fetching data, directly updating the DOM, event listners, timers,etc.

- useEffect Hook
- accepts two arguments(second optional)
- first argument - cb function
- second argument - dependecy array
- by default runs on each render(intial  and re-render)
- cb can't return promise ( so can't make it async)
- if dependency array  empty[] runs only on intial render
