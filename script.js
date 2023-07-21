"use strict";

// 9.Function to hide personal information
const formEl = document.getElementById("formInput");
const emailInputEl = document.getElementById("emailInput");
const personalInfoEl = document.getElementById("personalInfo");
const alertEl = document.getElementById("alert");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (regex.test(emailInputEl.value)) {
    formEl.classList.add("hide");
    personalInfoEl.classList.remove("hide");
  } else {
    alertEl.textContent = "Email address invalid";
    alertEl.classList.add("text-danger");
  }
});

// 10.Function to hide career information
const subJobInfos = document.querySelectorAll(".sub-job-info");

subJobInfos.forEach((subJobInfo) => {
  const btnViewEl = subJobInfo.querySelector(".btn-view");
  const jobInfoEl = subJobInfo.querySelector(".job-info");

  subJobInfo.addEventListener("mouseover", function () {
    btnViewEl.classList.remove("hide");
  });
  subJobInfo.addEventListener("mouseout", function () {
    btnViewEl.classList.add("hide");
  });

  btnViewEl.addEventListener("click", function () {
    if (jobInfoEl.classList.value.includes("hide")) {
      jobInfoEl.classList.remove("hide");
      this.textContent = "▲ VIEW LESS";
      subJobInfo.classList.add("h-100");
    } else {
      jobInfoEl.classList.add("hide");
      this.textContent = "▼ VIEW MORE";
      subJobInfo.classList.remove("h-100");
    }
  });
});

// (Additional) Show certificate image in large size
const backdropEl = document.getElementById("backdrop");
const overlayEl = document.getElementById("overlay");

const handleShowImage = (url) => {
  backdropEl.classList.remove("hide");
  const alert = document.createElement("h5");
  alert.textContent = "Click backdrop to exit";
  alert.classList.add("text-white");
  alert.classList.add("m-4");
  backdropEl.append(alert);

  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("alt", "certificate");
  image.classList.add("w-100");
  overlayEl.append(image);
  overlayEl.classList.remove("hide");
};

const handleClickBackdrop = () => {
  backdropEl.classList.add("hide");
  overlayEl.classList.add("hide");
  overlayEl.removeChild(overlayEl.querySelector("img"));
  backdropEl.removeChild(backdropEl.querySelector("h5"));
};
