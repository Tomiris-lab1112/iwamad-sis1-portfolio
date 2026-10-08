# Oraz Tomiris - Portfolio

**Live site:** https://tomiris-lab1112.github.io/iwamad-sis1-portfolio/

This is my personal portfolio website with three sections: About me, Projects and Contact. It shows my practice projects from the course and has a dark/light theme toggle and a contact form with validation. I built it with plain HTML, CSS and JavaScript, without any frameworks.

## Design decisions

1. **Layout** — On desktop the projects are shown in three columns, and on a phone they become one column, so the cards stay readable and nothing scrolls sideways. The header also changes: on a phone the logo, menu and theme button are stacked, and on desktop they are in one row.
2. **Colours** — I used a calm green accent on a light grey background, and a dark green-black background for dark mode. All colours are CSS variables, so one attribute on the page switches the whole theme, and text stays high-contrast in both modes.
3. **Touch-friendly mobile header and smaller hero title** — When I tested the page at 375px, the big hero title took up almost half of the screen and the menu links were too small to tap comfortably. I reduced the title size on phones and made the menu links and theme button at least 44px tall, and kept the larger title only for screens from 768px.