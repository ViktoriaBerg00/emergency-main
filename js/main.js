alert("noget");
document.querySelector("#kjole").addEventListener("mouseover", mouseoverkjole);
function mouseoverkjole() {
  console.log("mouseoverkjole");
  document.querySelector("#kjole").style.fill = "blue";
}

document.querySelector("#kjole").addEventListener("mouseout", mouseoutkjole);
function mouseoutkjole() {
  console.log("mouseoutkjole");
  document.querySelector("#kjole").style.fill = "red";
}

document.querySelector("#kjole").addEventListener("click", clickkjole);
function clickkjole() {
  console.log("mouseoverkjole");
  document.querySelector(".info-text h2").textContent = "Kjolen er lyserod";
  document.querySelector(".info-text p").textContent = "den ligner en prinsessekjole ";
  document.querySelector("#efficiency").textContent = "Den er sa fin";
  document.querySelector("#requirement").textContent = "Den er sa flot";
}
