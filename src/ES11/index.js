const button = document.getElementById("button");

button.addEventListener("click",async () => {
  const module = await import("./hello.js");
  module.sayHello();
});