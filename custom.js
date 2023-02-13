const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];
  const eguna = [
    "Domeka",
    "Astelena",
    "Martitzena",
    "Eguaztena",
    "Eguena",
    "Barikua",
    "Zapatua"
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ];
  const zi= ["Duminică",
  "Luni",
  "Marţi",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sâmbătă"]
  
  const giorno=[
  "Domenica",
  "Lunedi",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato"]
  
  const fecha = new Date();
  const fechanum = fecha.getDay();
  console.log(fechanum);
  const fechaletra = dias[fechanum];
  const egunaletra = eguna[fechanum];
  const dayletra = day[fechanum];
  const ziletra = zi[fechanum];
  const giornoletra = giorno[fechanum];
  console.log(egunaletra);
  console.log(fechaletra);
  let resultado = document.getElementById("resultado");
  let select = document.getElementById("select");
  
  select.addEventListener("change", function (event) {
    let valor = select.value;
    console.log(valor);
  
    if (event.target.value === "1") {
      resultado.innerHTML = fechaletra;
    } else if (event.target.value === "2") {
      resultado.innerHTML = egunaletra;
    } else if (event.target.value === "3") {
      resultado.innerHTML = dayletra;
    }else if (event.target.value === "4") {
      resultado.innerHTML = ziletra;
    } else if (event.target.value === "5") {
      resultado.innerHTML = giornoletra;
    }
  
  });
  
  
  