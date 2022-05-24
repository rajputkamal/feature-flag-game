const showContent = (id) => {
  let feature = document.getElementById(id);
  feature.classList.toggle("show");
};

const showSteps = (firstId, secondId, stepId) => {
  let firstStep = document.getElementById(firstId);
  let secondStep = document.getElementById(secondId);
  let stepbackground = document.getElementById(stepId)
  firstStep.style.display = "none";
  secondStep.style.display = "block";
  stepbackground.classList.remove('opacity-half')
  stepbackground.classList.add('opacity-full');
  console.log(stepbackground)
}
