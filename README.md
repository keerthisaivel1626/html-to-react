# html-to-react by keerthana

# React Learning Notes – From HTML to React & Parcel

## 1. Starting with HTML, CSS and JavaScript

Initially, I created a basic HTML page to understand how web pages work.

### Step 1: Create an HTML file

Created an `index.html` file and added an H1 tag to display text.

```html
<!DOCTYPE html>
<html>
<head>
    <title>React Learning</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>

    <script src="script.js"></script>
</body>
</html>
```

### Step 2: Add CSS

Created a separate `style.css` file and linked it using the `<link>` tag inside the HTML head.

```css
.heading {
    color: blue;
    font-size: 30px;
}
```

### Step 3: JavaScript DOM Manipulation

Created a separate `script.js` file to manipulate HTML elements using JavaScript.

Important DOM methods and properties:

- `document.createElement()` – Creates a new HTML element.
- `document.getElementById()` – Selects an element using its ID.
- `document.querySelector()` – Selects an element using a CSS selector.
- `element.classList.add()` – Adds a CSS class.
- `element.classList.remove()` – Removes a CSS class.
- `element.innerText` – Updates the text content.
- `element.append()` – Adds an element inside another element.

Example:

```javascript
const heading = document.createElement("h1");

heading.innerText = "Hello World";

heading.classList.add("heading");

const root = document.getElementById("root");

root.append(heading);
```

**What happens here?**

1. JavaScript creates an H1 element.
2. Adds text to the H1 element.
3. Applies a CSS class.
4. Selects the root div from HTML.
5. Appends the H1 element inside the root div.

This is how we dynamically create and display HTML elements using JavaScript.

---

## 2. Introduction to React

React is a JavaScript library used to build user interfaces.

Instead of manually creating and manipulating DOM elements, React allows us to describe what the UI should look like.

### Step 1: Adding React using CDN

Initially, I used React through CDN links directly inside HTML.

```html
<script crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```

**Why do we need two CDN links?**

- React: Provides the core React functionality, including `React.createElement()`.
- ReactDOM: Provides the functionality to render React elements into the browser DOM.

React itself is independent of the browser. ReactDOM connects React with the browser DOM.

### Development and Production CDN files

React provides different builds:

- Development build: Provides warnings, debugging information and helpful error messages.
- Production build: Optimized for production with development-only checks removed.

We generally use development builds while developing and production builds when deploying applications.

### Why do we use crossorigin?

The `crossorigin` attribute controls how the browser makes cross-origin requests for the script.

It is useful when loading external scripts, particularly when handling errors and debugging information.

---

## 3. React.createElement()

After adding React CDN, I created elements using `React.createElement()`.

Example:

```javascript
const heading = React.createElement(
    "h1",
    {},
    "Hello World from React"
);
```

**Syntax:**

```javascript
React.createElement(type, props, children);
```

- `type`: HTML element type, such as h1, div, p.
- `props`: Attributes and properties such as id, className and style.
- `children`: Text, another React element, or multiple child elements.

### Passing HTML attributes

```javascript
const heading = React.createElement(
    "h1",
    {
        id: "heading",
        className: "title"
    },
    "Hello React"
);
```

Note: React uses `className` instead of `class` when defining CSS classes through React elements.

### Passing multiple children

We can pass multiple children as separate arguments.

```javascript
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2")
);
```

We can also pass an array of React elements as children.

```javascript
const children = [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2")
];

const parent = React.createElement(
    "div",
    {},
    children
);
```

This helps us understand how React creates nested element structures.

---

## 4. ReactDOM.createRoot() and render()

After creating React elements, we need to display them inside the browser.

For React 18, we use `ReactDOM.createRoot()`.

```javascript
const heading = React.createElement(
    "h1",
    {},
    "Hello World from React"
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(heading);
```

**Understanding the flow:**

1. `React.createElement()` creates a React element description.
2. `document.getElementById("root")` selects the root div from HTML.
3. `ReactDOM.createRoot()` creates a React root for that DOM container.
4. `root.render()` tells React to render the element inside the root container.

Important: `createRoot()` is part of the React 18+ API. Older React versions commonly used `ReactDOM.render()`.

---

## 5. Introduction to Parcel Bundler

After understanding React through CDN, I moved towards using a bundler.

Parcel is a web application bundler that helps us develop, build and optimize web applications.

Instead of manually managing multiple JavaScript files, CSS files, dependencies and assets, Parcel handles much of this process.

### Why do we need Parcel?

In real-world applications, we work with:

- Multiple JavaScript files.
- CSS and HTML files.
- Images and other assets.
- Third-party npm packages.
- Development and production environments.

Parcel helps manage these resources and prepares the application for development and production.

### Step 1: Install Parcel

```bash
npm install -D parcel
```

This installs Parcel as a development dependency.

### Step 2: Run Parcel

```bash
npx parcel index.html
```

Here:

- `npx` executes the locally installed Parcel package.
- `parcel` invokes the Parcel bundler.
- `index.html` is the entry point of our application.

Parcel starts a local development server and creates a development build.

### Step 3: Production Build

```bash
npx parcel build index.html
```

This generates an optimized production build that can be deployed.

---

## 6. Important Parcel Features

### 1. Development Server

Parcel starts a local development server so we can run our application in the browser.

### 2. Hot Module Replacement (HMR)

When we modify our code, Parcel updates the application without requiring a complete manual browser refresh in supported cases.

This improves the development experience.

### 3. File Watching

Parcel continuously monitors project files for changes.

When a file changes, it triggers the necessary rebuild.

### 4. HTTPS Support

Parcel supports running the development server using HTTPS, which is useful when testing features that require a secure context.

### 5. Image Optimization

Parcel can optimize images during production builds to reduce asset sizes.

### 6. Bundling

Parcel combines and processes application dependencies and assets into optimized output bundles.

### 7. Minification

Removes unnecessary characters, whitespace and other redundant content to reduce file sizes.

### 8. Compression

Production assets can be compressed using supported compression techniques to reduce transfer sizes.

### 9. Caching

Parcel caches build results to avoid repeating unnecessary work and speed up subsequent builds.

### 10. Code Splitting

Parcel can split application code into multiple bundles so that all code does not necessarily need to load at once.

### 11. Tree Shaking

Removes unused code from production bundles when it can safely determine that code is unused.

### 12. Content Hashing

Parcel generates content-based hashes for output files. This helps with browser caching and cache invalidation when file contents change.

### 13. Differential Bundling

Parcel can generate different output bundles for different browser targets when configured.

This helps support older browsers while allowing modern browsers to use newer JavaScript features.

### 14. Error Handling

Parcel provides useful build-time error messages and diagnostic information to help developers identify issues.

---

## 7. Understanding package.json and package-lock.json

When installing Parcel, npm maintains dependency information in two important files.

### package.json

Contains project metadata and dependency declarations.

Example:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "devDependencies": {
    "parcel": "^2.0.0"
  }
}
```

### package-lock.json

This file records the exact resolved dependency versions and dependency tree installed by npm.

**Why should we commit package-lock.json?**

Imagine I install a particular version of Parcel locally.

Another developer clones my project and runs:

```bash
npm install
```

The lock file helps npm install the same resolved dependency versions instead of independently resolving potentially different compatible versions.

This makes development and production builds more consistent.

We should commit both `package.json` and `package-lock.json` to Git.

### Understanding ^ and ~

These symbols define version ranges in package.json.

Example:

```json
"parcel": "^2.0.0"
```

`^` (Caret):

Allows compatible updates without crossing the next major version.

For example:

`^2.0.0` allows versions from 2.0.0 up to, but not including, 3.0.0.

```json
"parcel": "~2.0.0"
```

`~` (Tilde):

Allows patch-level updates within the same minor version.

For example:

`~2.0.0` allows versions from 2.0.0 up to, but not including, 2.1.0.

**Important:** These symbols define allowed version ranges. The package-lock.json records the exact resolved versions.

---

## 8. Does Parcel Make React Faster?

An important distinction:

React is responsible for building and updating the UI.

Parcel is responsible for bundling and optimizing application resources.

Parcel can improve application loading and delivery performance through:

- Minification.
- Tree shaking.
- Code splitting.
- Asset optimization.
- Caching.
- Production bundling.

However, Parcel does not inherently make React's rendering algorithm faster.

React handles UI updates, while Parcel optimizes how application code and assets are prepared and delivered to the browser.



## 10. Commands to Remember

| Command | Purpose |
|---|---|
| `npm init -y` | Initialize a Node.js project |
| `npm install -D parcel` | Install Parcel as a development dependency |
| `npx parcel index.html` | Start development server |
| `npx parcel build index.html` | Generate production build |
| `npm install` | Install project dependencies |
| `npm run start` | Run the configured start script |
| `npm run build` | Run the configured production build script |

---



