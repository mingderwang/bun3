const server = Bun.serve({
    port: 3001,
    fetch(req: Request) {
      const res: Response= new Response(JSON.stringify(process.env));    
      res.headers.set('Content-Type', 'application/json');
      return res;
    },
  });

  console.log(`Listening on http://localhost:${server.port} ...`);
  console.log(Bun.version);
  