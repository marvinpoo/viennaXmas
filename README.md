# Photo Gallery

This is a simple, responsive photo gallery built with Next.js and automatically deployable to GitHub Pages.

## Features

- Responsive grid layout
- Automatic thumbnail generation
- Lightbox for full-size image viewing
- Optimized for performance with Next.js Image component
- Easily deployable to GitHub Pages

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Add your photos to the `public/photos` directory
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is set up for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://{username}.github.io/{repo-name}`

Make sure to update the `assetPrefix` and `basePath` in `next.config.js` with your actual repository name.

## Customization

- Modify the gallery layout in `components/Gallery.tsx`
- Adjust thumbnail sizes in `scripts/generateThumbnails.js`
- Customize the lightbox in `components/Lightbox.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
