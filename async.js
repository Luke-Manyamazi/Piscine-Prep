function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function showData() {
  let data = await getData();
  console.log(data);
}
showData();