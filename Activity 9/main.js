document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = {}

    data.firstName = document.getElementById("validationDefault01").value;
    data.lastName = document.getElementById("validationDefault02").value;
    data.username = document.getElementById("validationDefaultUsername").value;
    data.city = document.getElementById("validationDefault03").value;
    data.state = document.getElementById("validationDefault04").value;
    data.zip = document.getElementById("validationDefault05").value;
    data.account = document.getElementById("validationDefault06").value;
    data.idType = document.getElementById("validationDefault07").value;
    data.idNumber = document.getElementById("validationDefault08").value;
    data.check = document.getElementById("invalidCheck2");

    let isValid = true;
    let errorMessage = "";

    // Validations
    if (!/^[A-Z]/.test(firstName)) {
      isValid = false;

      errorMessage += "El nombre debe comenzar con mayuscula\n";
    }

    if (!/^[A-Z]/.test(lastName)) {
      isValid = false;

      errorMessage += "El apellido debe comenzar con mayuscula\n";
    }

    if (!/^\d{5}$/.test(zip)) {
      isValid = false;

      errorMessage += "El codigo zip solo puede ser 5 numeros\n";
    }

    if (idNumber.trim() === "") {
      isValid = false;
      errorMessage += "El número de identificación no puede estar vacío\n";

      console.log(data);
    }

    console.log(data, isValid, errorMessage)
  });
});
