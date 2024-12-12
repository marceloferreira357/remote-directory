const main = () => {
  const message: string = "Hello, World!";
  console.log(message);
};

if (require.main === module) {
  main();
}
