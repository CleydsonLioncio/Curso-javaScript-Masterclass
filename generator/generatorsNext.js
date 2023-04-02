function* forever() {
  let value = 1;
  while (true) {
    console.log(value++);
    yield value++;
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
foreverGenerator.next();
foreverGenerator.next();
today();
foreverGenerator.next();
foreverGenerator.next();
