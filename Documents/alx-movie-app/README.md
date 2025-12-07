# CineSeek – Movie Discovery App

## API Overview
CineSeek uses the MoviesDatabase API to fetch movie metadata (titles, posters, release years, genres).  
The API provides a simple REST interface with pagination, filtering by year/genre, and lightweight JSON responses.

## Version
Current documented version: **v1**  
Base URL: `https://moviesdatabase.p.rapidapi.com`

## Available Endpoints
- `GET /titles` – list movies (supports `year`, `genre`, `page`, `limit`)
- `GET /titles/{id}` – single movie details
- `GET /genres` – list all genres
- `GET /actors` – list actors
- `GET /search` – search movies by keyword

## Request and Response Format
**Request (headers):**
**Typical response (truncated):**
```json
{
  "results": [
    {
      "id": "tt1234567",
      "primaryImage": { "url": "https://...jpg" },
      "titleText": { "text": "Movie Title" },
      "releaseYear": { "year": 2024 }
    }
  ],
  "page": 1,
  "total": 120
}