# Savin Gowda — Portfolio

A responsive, cinematic personal portfolio built with React, Vite, Tailwind CSS and Framer Motion. The visual direction is based on the supplied reference video: dark editorial styling, oversized condensed typography, red accents, project storytelling and a strong contact close.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Personalise before publishing

Search `src/App.jsx` and update:
- `your-email@example.com` to your real email.
- Instagram, LinkedIn and GitHub URLs to your profiles.
- Project descriptions and project images to your actual work.
- Education and experience dates/details as needed.

### Add your portrait
The hero currently uses a designed initials placeholder, not a real photo. Add your portrait to `public/images/savin-portrait.jpg`, then replace the `.portrait-placeholder` block in `src/App.jsx` with:

```jsx
<img className="hero-portrait" src="/images/savin-portrait.jpg" alt="Savin Gowda" />
```

Add styling in `src/index.css`:

```css
.hero-portrait { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
```

### Replace project thumbnails
The current thumbnails use remote Unsplash images as temporary visual placeholders. Replace the `image` values in the `projects` array with your own files, for example `/images/vr-project.jpg`. Put those files in `public/images/`.

## Notes
- Contact email and social links are placeholders and must be updated.
- No achievements, awards or client logos have been invented.
- The site is responsive and includes mobile navigation, animated section reveals and project preview modals.
