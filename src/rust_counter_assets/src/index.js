import { rust_counter } from "../../declarations/rust_counter";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with rust_counter actor, calling the greet method
  const greeting = await rust_counter.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
