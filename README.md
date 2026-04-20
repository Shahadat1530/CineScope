# 🎬 CineScope

## 🔗 Live Demo
https://cine-scope-black-phi.vercel.app/

---

## 📄 Description
CineScope is a modern web application built with Next.js that allows users to browse, discover, and view detailed information about movies. It features a clean UI, dynamic movie data, and responsive design for all devices.

---

## Advanced Routing
- 🎭 Parallel Routing - Uses @modal slot for seamless modal rendering
- 🔄 Intercepting Routes - Opens news details in a modal while updating the URL
- 🔃 Graceful Fallback - Reloading a modal URL shows the full page view

---

## API Endpoints (Not Connected to UI)
- GET /api/movies - Retrieve all movies
- GET /api/movies/[id] - Get a specific movie by id
- PATCH /api/movies/[id] - Update movie title or description
- DELETE /api/movies/[id] - Delete a specific movie

---

## Error Handling
- 🚫 General 404 Page - For non-existent routes
- 🎬 Movies-Specific 404 - Custom message showing the missing movie slug