/**** INSTRUCTION SIDE ****/

const kjole = document.querySelector("#kjole");
const jakke = document.querySelector("#jakke");
const jeans = document.querySelector("#jeans");

const infoHeading = document.querySelector(".info-text h2");
const infoText = document.querySelector(".info-text p");
const efficiencyBox = document.querySelector("#efficiency");
const requirementBox = document.querySelector("#requirement");

function updateInfo(title, text, risk, advice) {
  if (infoHeading) infoHeading.textContent = title;
  if (infoText) infoText.textContent = text;
  if (efficiencyBox) efficiencyBox.textContent = risk;
  if (requirementBox) requirementBox.textContent = advice;
}

if (kjole) {
  kjole.addEventListener("mouseover", function () {
    kjole.style.fill = "#8a4a4a";
    kjole.style.cursor = "pointer";
  });

  kjole.addEventListener("mouseout", function () {
    kjole.style.fill = "#6d3b3b";
  });

  kjole.addEventListener("click", function () {
    updateInfo("Kritisk fejl: Du er landet i 1800-tallet", "Du træder ud på en brostensbelagt gade. Folk stopper op og stirrer. Din kjole passer ikke helt ind i tiden.", "Risiko: Du tiltrækker opmærksomhed fra overklassen.", "Anbefaling: Find en hat og undgå at vække mistanke.");
  });
}

if (jakke) {
  jakke.addEventListener("mouseover", function () {
    jakke.style.fill = "#8a4a4a";
    jakke.style.cursor = "pointer";
  });

  jakke.addEventListener("mouseout", function () {
    jakke.style.fill = "#6d3b3b";
  });

  jakke.addEventListener("click", function () {
    updateInfo("Advarsel: Du er havnet i 1950'erne", "Du står i en diner, og din jakke virker lidt for moderne til omgivelserne.", "Risiko: Du bliver opfattet som en outsider.", "Anbefaling: Hold en lav profil og prøv at blende ind.");
  });
}

if (jeans) {
  jeans.addEventListener("mouseover", function () {
    jeans.style.fill = "#8a4a4a";
    jeans.style.cursor = "pointer";
  });

  jeans.addEventListener("mouseout", function () {
    jeans.style.fill = "#6d3b3b";
  });

  jeans.addEventListener("click", function () {
    updateInfo("Stabil landing: 1990'erne registreret", "Du befinder dig blandt denim og afslappede hverdagslooks. Du passer næsten ind.", "Risiko: Minimal, men du bliver stadig observeret.", "Anbefaling: Bland dig i mængden og hold dig til neutrale farver.");
  });
}

/**** FORMS / REGISTER SIDE ****/

const webform = document.querySelector("#webform");

if (webform) {
  webform.addEventListener("submit", submitForm);
}

function submitForm(event) {
  event.preventDefault();

  const nameField = document.querySelector("#name");
  const emailField = document.querySelector("#email");
  const periodField = document.querySelector("#period");
  const urgencyField = document.querySelector('input[name="urgency"]:checked');
  const descriptionField = document.querySelector("#description");

  const name = nameField ? nameField.value : "";
  const email = emailField ? emailField.value : "";
  const period = periodField ? periodField.value : "";
  const urgency = urgencyField ? urgencyField.value : "-";
  const description = descriptionField ? descriptionField.value : "";

  const sumName = document.querySelector("#sum-name");
  const sumEmail = document.querySelector("#sum-email");
  const sumPeriod = document.querySelector("#sum-period");
  const sumUrgency = document.querySelector("#sum-urgency");
  const sumDescription = document.querySelector("#sum-description");

  if (sumName) sumName.textContent = name || "Ikke angivet";
  if (sumEmail) sumEmail.textContent = email || "Ikke angivet";
  if (sumPeriod) sumPeriod.textContent = period || "Ikke valgt";
  if (sumUrgency) sumUrgency.textContent = urgency;
  if (sumDescription) {
    sumDescription.textContent = description ? description : "Ingen beskrivelse angivet";
  }
}
