# News Hub
![CI](https://github.com/Shrutiii3/NewsHub/actions/workflows/ci.yml/badge.svg)
## Overview
News Hub is an API based news website that fetches and displays latest news articles from various sources using the NewsAPI. The application allows users to search for news by keywords, and it also provides navigation links to filter news by categories such as Sports, Finance, and Politics.
## Features
- Fetches news articles from the NewsAPI.
- Displays news articles with images, titles, descriptions, and sources.
- Provides navigation links to filter news by categories.
- Allows users to search for news articles by keywords.
- Responsive design for mobile and desktop views.
## Technologies Used
- HTML
- CSS
- JavaScript
- NewsAPI
## ScreenShots
![img1](https://github.com/Shrutiii3/NewsHub/assets/124484769/bcc825c5-24ff-4303-9491-222105b59bb3)
## Running with Docker
This project is containerized using Docker with an nginx-based image.

Build the image:
```bash
docker build -t news-hub .
```

Run the container:
```bash
docker run -p 8080:80 news-hub
```
Visit `localhost:8080` in your browser.
## CI/CD
A GitHub Actions workflow automatically validates the Docker build on every push and pull request to `main`. See `.github/workflows/ci.yml`.
