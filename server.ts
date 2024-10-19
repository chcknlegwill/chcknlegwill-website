// server.ts
let visitCount = 0;

const server = Bun.serve({
  port: 3000,
  async fetch(req: { url: string | URL; }) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      visitCount++;
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Visit Counter</title>
            <style>
              body {
                font-family: system-ui, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                text-align: center;
              }
              .counter {
                font-size: 4rem;
                font-weight: bold;
                color: #2563eb;
              }
            </style>
          </head>
          <body>
            <h1>Welcome to the Counter!</h1>
            <p>This page has been visited:</p>
            <div class="counter">${visitCount}</div>
            <p>times since the server started.</p>
          </body>
        </html>
        `,
        {
          headers: {
            "Content-Type": "text/html",
          },
        }
      );
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);