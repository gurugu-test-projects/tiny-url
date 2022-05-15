## Running the project

**From the repo**:

1. Clone this project
2. Go to the project directory and run `npm install`
3. Run `npm run start:dev`
4. To get a short URL: hit `localhost:3000/encode/` with POST request and pass URL inside the body (e.g. `{ url: "https://www.google.com" }`).
5. To decode short URL into full URL: hit `localhost:3000/decode/` with GET request and pass short URL as the query (e.g. `localhost:3000/decode/GeAi9K`).
