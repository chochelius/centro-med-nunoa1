// creación de los array

let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

// mostrar registros solicitados

document.write(`
<p> La primera atención de radiología es ${radiologia[0].paciente} - ${
  radiologia[0].prevision
}
<br>
La última atención de radiología es ${
  radiologia[radiologia.length - 1].paciente
} - ${radiologia[radiologia.length - 1].prevision} 
<br> <br>
La primera atención de traumatología es ${traumatologia[0].paciente} - ${
  traumatologia[0].prevision
}
<br>
La última atención de traumatología es ${
  traumatologia[traumatologia.length - 1].paciente
} - ${traumatologia[traumatologia.length - 1].prevision}
<br> <br>
La primera atención de dental es ${dental[0].paciente} - ${dental[0].prevision}
<br>
La última atención de traumatología es ${
  dental[dental.length - 1].paciente
} - ${dental[dental.length - 1].prevision}
</p>`);

// Tablas por cada una de las especialidades

document.write(`
<br>
<h2> Horas Radiología </h2>
<br>
<table class="table">
<thead>
  <tr>
    <th scope="col">Hora</th>
    <th scope="col">Especialista</th>
    <th scope="col">Paciente</th>
    <th scope="col">RUT</th>
    <th scope="col">Prevision</th>
    </thead>
  </tr>`);

radiologia.forEach((item) =>
  document.write(` <tr>
<th scope="row">${item.hora}</th>
<td>${item.especialista}</td>
<td>${item.paciente}</td>
<td>${item.rut}</td>
<td>${item.prevision}</td>
</tr>`)
);

document.write(`</table>`);

document.write(`
<br>
<h2> Horas Traumatología </h2>
<br>
<table class="table">
<thead>
  <tr>
    <th scope="col">Hora</th>
    <th scope="col">Especialista</th>
    <th scope="col">Paciente</th>
    <th scope="col">RUT</th>
    <th scope="col">Prevision</th>
    </thead>
  </tr>`);

traumatologia.forEach((item) =>
  document.write(` <tr>
<th scope="row">${item.hora}</th>
<td>${item.especialista}</td>
<td>${item.paciente}</td>
<td>${item.rut}</td>
<td>${item.prevision}</td>
</tr>`)
);

document.write(`</table>`);

document.write(`
<br>
<h2> Horas Dental </h2>
<br>
<table class="table">
<thead>
  <tr>
    <th scope="col">Hora</th>
    <th scope="col">Especialista</th>
    <th scope="col">Paciente</th>
    <th scope="col">RUT</th>
    <th scope="col">Prevision</th>
    </thead>
  </tr>`);

dental.forEach((item) =>
  document.write(` <tr>
<th scope="row">${item.hora}</th>
<td>${item.especialista}</td>
<td>${item.paciente}</td>
<td>${item.rut}</td>
<td>${item.prevision}</td>
</tr>`)
);

document.write(`</table>`);

//con el forEach estuvo mucho más fácil hacer cada una de las tablas sin necesitar tanto código.