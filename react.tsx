function Component(props: {message: string}) {
  return (
    <body>
      <h1 style={{color: 'green'}}>{props.message}</h1>
    </body>
  );
}

console.log(<Component message="Hello world!" />);
