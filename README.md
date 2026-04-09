# Lab Work #5 — JavaScript DOM Manipulation & Browser Storage

**Course:** Web Application Development  
**Year of Study:** 2 | **Semester:** 1 | **Year:** 2024

**Author:** Maksym Poliukhovych

---

## Description

A tea-themed single-page website extended with JavaScript to demonstrate DOM manipulation, event handling, browser storage (cookies and localStorage), and dynamic UI interactions.

## Features

### Form: Find Largest Digit
- Enter any natural number (0–1,000,000) and submit to find its largest digit.
- The result is saved to a **cookie**. On the next page load, the saved digit is shown via an alert and the cookie is cleared — the form stays hidden until the page is refreshed.

### Radio: Right-align on Mouse Leave
- Select a page block (left sidebar, right sidebar, or main content).
- The chosen block right-aligns its text on `mouseout` and restores left-alignment on `mouseover`.
- The selected option persists across page reloads via **localStorage**.

### Ordered List Builder
- Choose a page section from a dropdown and enter text to append a new `<li>` to that section's ordered list.
- Items persist in **localStorage** within the session and are cleared on page unload.

### Action Buttons
- **Action1** — swaps the inner HTML of the sub-header and the sidebar footer.
- **Action2** — calculates the area of a parallelogram (side × height) and appends it to the content block.

## Page Structure

- **Header** — site title and subtitle with an ordered list slot
- **Left sidebar** — fun facts about tea with an ordered list slot
- **Sub-header** — action buttons and an ordered list slot
- **Main content** — tea overview, type descriptions, image, forms, and an ordered list slot
- **Right sidebar** — external tea articles with an ordered list slot
- **Sidebar footer** — contact info with an ordered list slot
- **Footer** — author link with an ordered list slot

## Demo

[View on GitHub Pages](https://marshmalllows.github.io/web-lab5/)

## Technologies

- HTML5 (semantic markup, forms, `<select>`, radio inputs)
- CSS3 (Grid layout, external stylesheet)
- JavaScript (DOM API, events, cookies, localStorage)
