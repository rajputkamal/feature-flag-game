const showContent = (id) => {
  let feature = document.getElementById(id);
  feature.classList.toggle("show");
};

const showSteps = (firstId, secondId) => {
  let firstStep = document.getElementById(firstId);
  let secondStep = document.getElementById(secondId);
  firstStep.style.display = "none";
  secondStep.style.display = "block";
}
