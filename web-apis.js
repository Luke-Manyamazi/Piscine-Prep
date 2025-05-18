fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

document.addEventListener("click", () => console.log("Clicked!"));

setTimeout(() => {
  console.log("3 seconds later...");
}, 3000);
