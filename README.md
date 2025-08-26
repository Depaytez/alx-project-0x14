# CineSeek API Documentation

## API Overview
The MoviesDatabase API provides comprehensive data for over 9 million titles (movies, series, episodes) and 11 million actors/crew, including trailers, awards, and biographies. It supports filtering by year, genre, and pagination, with weekly updates for recent titles and daily updates for ratings.

## API Version
Version: 1.0 (as per current RapidAPI MoviesDatabase documentation on august 25th, 2025).

## Available Endpoints
- `/titles`: Fetch a list of movies (titles) with optional filters (year, genre, sort) and pagination.
- `/titles/{id}`: Retrieve details for a specific movie by ID.
- `/titles/{id}/ratings`: Gets ratings and votes for a title.
- `/titles/search/keyword/{keyword}`: Searches titles by keyword.
- `/titles/search/title/{title}`: Searches titles by title (exact or partial).
- `/actors`: Lists actors with filters.
- `/actors/{id}`: Retrieves actor details.
- `/title/utils/titleType`: Returns title types.
- `/title/utils/genres`: Returns title genres.
- `/title/utils/lists`: Returns predefined title lists (e.g., top_rated_250).


## Request and Response Format
- **Request**: GET/POST requests with optional query parameters (e.g., year, genre, page, limit). Authentication requires `x-rapidapi-key` and `x-rapidapi-host` headers.
   **Example**: `GET /titles?year=2024&genre=Comedy&limit=12&page=1`
<!-- - **Request**: GET or POST with query parameters (e.g., `year=2023`, `genre=Comedy`) and headers (`x-rapidapi-key`, `x-rapidapi-host`). -->

- **Response**: JSON object with a `results` key (array of titles) and optional `page, next, entries` keys for paginated endpoints  
   **Example**:
  ```json
  {
    "results": [
      {
        "id": "tt0000270",
        "titleText": { "text": "Movie Title" },
        "primaryImage": { "url": "https://image.url" },
        "releaseYear": { "year": "2024" }
      }
    ]
    "page": 1,
    "next": "/titles?page=2",
    "entries": 12
  }
  
json```

## Authentication
- Requires an API key passed via headers: `x-rapidapi-key` and `x-rapidapi-host: moviesdatabase.p.rapidapi.com`.
- Store the API key in `.env.local` (e.g., `MOVIE_API_KEY=your_key`)

## Error Handling
- Common errors: 401 (invalid API key), 429 (rate limit exceeded), 404 (invalid endpoint/ID or failed to connect to internet).
- Handle with try/catch in API routes, checking `response.ok` and status codes (e.g., `throw new Error('Failed to fetch')` if not OK).

## Usage Limits and Best Practices
- **Rate Limits**: API enforces request limits; use pagination (`limit`, `page`) to manage load.
- **Best Practices**: Cache responses for frequent queries, use server-side API routes to protect keys, implement error boundaries, and validate data with TypeScript interfaces.