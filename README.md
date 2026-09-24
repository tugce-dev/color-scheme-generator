# 🎨 Color Palette Generator

A modern color palette generator that creates harmonious color schemes based on a selected seed color and color scheme mode.

The project uses The Color API to dynamically generate and display five-color palettes.

## 🚀 Live Demo

👉 [View Live Demo](https://palette-generator-tc.netlify.app/)

## ✨ Features

- Choose a seed color using a color picker
- Select from multiple color scheme modes
- Generate palettes dynamically using The Color API
- Display five generated colors with their HEX values
- Automatically generate a palette when the page loads
- Clean and responsive dark-themed interface

## 🎨 Color Scheme Modes

The generator supports several palette modes:

- Monochrome
- Monochrome Dark
- Monochrome Light
- Analogic
- Complement
- Analogic Complement
- Triad

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- REST API
- Fetch API
- The Color API

## 🧠 What I Practiced

This project helped me practice working with external APIs and asynchronous JavaScript, including:

- Making GET requests with `fetch()`
- Working with REST APIs
- Using URL query parameters
- Parsing JSON responses
- Working with API response data
- Dynamically rendering elements to the DOM
- Handling user input and events
- Building reusable functions
- Creating responsive layouts with Flexbox

## 🔗 API

Color palettes are generated using The Color API.

Example request:

```js
fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=5`)
```

The selected color and scheme mode are passed to the API as query parameters.


## 📁 Project Structure

```text
color-palette-generator/
│
├── index.html
├── styles.css
├── script.js
├── screenshot.png
└── README.md
```

## 👩‍💻 Author

Built by Tuğçe Çırak.
