# CineSeek API Documentation

## API Overview
The MoviesDatabase API provides comprehensive data for over 9 million titles (movies, series, episodes) and 11 million actors/crew, including trailers, awards, and biographies. It supports filtering by year, genre, and pagination, with weekly updates for recent titles and daily updates for ratings.

## API Version
Version: 1.0 (as per current RapidAPI MoviesDatabase documentation on august 25th, 2025).

## Available Endpoints
- `/titles`: Fetch a list of titles with optional filters (year, genre, sort) and pagination.
- `/titles/{id}`: Retrieve details for a specific title by IMDb ID.
- `/titles/x/upcoming`: List upcoming titles with filters.
- `/titles/{id}/ratings`: Get ratings and votes for a title.
- `/titles/series/{seriesId}`: Fetch episodes for a series by series ID.
- `/titles/seasons/{seriesId}`: Return the number of seasons for a series.
- `/titles/series/{seriesId}/{season}`: List episodes for a specific season.
- `/titles/episode/{id}`: Retrieve details for a specific episode.
- `/titles/x/titles-by-ids`: Fetch titles by a list of IDs.
- `/titles/search/keyword/{keyword}`: Search titles by keyword.
- `/titles/search/title/{title}`: Search titles by title (exact or partial).
- `/titles/search/akas/{aka}`: Search titles by exact AKA (case-sensitive).
- `/actors`: List actors with filters.
- `/actors/{id}`: Retrieve details for a specific actor by IMDb ID.
- `/title/utils/titleType`: Return available title types.
- `/title/utils/genres`: Return available genres.
- `/title/utils/lists`: Return predefined title lists (e.g., `top_rated_250`).

## Request and Response Format
- **Request**: GET/POST requests with optional query parameters (e.g., year, genre, page, limit). Authentication requires `x-rapidapi-key` and `x-rapidapi-host` headers.
   **Example**: `GET /titles?year=2024&genre=Comedy&limit=12&page=1`

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
  ```

## Authentication
- Requires an API key passed via headers: `x-rapidapi-key` and `x-rapidapi-host: moviesdatabase.p.rapidapi.com`.
- Store the API key in `.env.local` (e.g., `MOVIE_API_KEY=your_key`)

## Error Handling
- Common errors: 401 (invalid API key), 429 (rate limit exceeded), 404 (invalid endpoint/ID or fails to connect to internet).
- Handle with try/catch in API routes, checking `response.ok` and status codes (e.g., `throw new Error('Failed to fetch')` if not OK).
**Example**
```typescript
try {
 const response = await fetch('/api/fetch-movies', {method: 'POST'});
 if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
 const data = await response.json();
} catch (error) {
 console.error('Fetch error:', error.message);
}
```

## Usage Limits and Best Practices
- **Rate Limits**: API enforces request limits; use pagination (`limit`, `page`) to manage load.
- **Best Practices**: Cache responses for frequent queries, use server-side API routes to protect keys, implement error boundaries, and validate data with TypeScript interfaces.