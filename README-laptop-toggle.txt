Lenovo LOQ open/close interaction

Files changed:
- index.html
- style.css
- script.js

New assets:
- assets/laptop/loq-open.png
- assets/laptop/loq-closed.png

Behavior:
- Laptop starts open.
- Click/tap it to close and show the back image.
- Click/tap again to open and show the front image.
- Enter and Space work automatically because the laptop is a button.
- GSAP handles the folding transition; reduced-motion gets an immediate state change.
- Existing desktop mouse parallax remains on the outer laptop wrapper.
