function calcularIP() {
    const peso = parseFloat(document.getElementById("peso").value);
    const pt = parseFloat(document.getElementById("pt").value);
    const pa = parseFloat(document.getElementById("pa").value);
    const resultadoDiv = document.getElementById("resultado");

    if (!peso || !pt || !pa || pa === 0) {
      resultadoDiv.innerText = "Preencha todos os campos corretamente.";
      resultadoDiv.style.color = "#dc3545";
        alert("Á campos vazio. Preecha por favor 🧐!")
      return;
    }

    const ip = (peso * pt) / pa;
    resultadoDiv.style.color = "#222";
    resultadoDiv.style.fontSize = "23px"
    resultadoDiv.innerText = `IP calculado: ${ip.toFixed(2)}`;
  }

  function fazerOutroCalculo() {
    document.getElementById("peso").value = "";
    document.getElementById("pt").value = "";
    document.getElementById("pa").value = "";
    document.getElementById("resultado").innerText = "";
  }
