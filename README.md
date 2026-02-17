# Zhenling Jiang - Personal Academic Website

Personal academic website built with React + Vite. Deployed to S3 + CloudFront.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

## Preview Production Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to the `master` branch triggers a GitHub Actions workflow that builds the site and deploys to S3 with CloudFront invalidation.
