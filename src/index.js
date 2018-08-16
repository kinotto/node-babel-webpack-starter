
const resolvePromiseWithES7 = async () => {
  const result = await Promise.resolve("MyPromise");
  console.log(result);
}

resolvePromiseWithES7();