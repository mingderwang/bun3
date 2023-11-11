Bun.serve({
    fetch(req: Request) {
      const res: Response= new Response(JSON.stringify(process.env));    
      res.headers.set('Content-Type', 'application/json');
      return res;
    },
  });