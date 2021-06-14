$(document).ready(function() {

  $.ajax({
    url: 'https://www.feriadosapp.com/api/holidays.json',
    success: function(datosFeriados) {
      //console.log(datosFeriados.data)
      const feriadosTodos = datosFeriados.data;
      const dataFeriados = feriadosTodos.map((feriado) => {
          return `<tr>
                <td>${feriado.date}</td>
                <td>${feriado.title}</td>
                <td>${feriado.extra}</td>
                <td>${feriado.law}</td>
                <td>${feriado.law_id}</td>
              </tr>`
        })
        //console.log(dataFeriados)
      $('#tablaFeriado').html(`<table><tr>
      <th>Fecha</th>
      <th>Titulo</th>
      <th>Extra</th>
      <th>Ley</th>
      <th>Ley Id</th>
      </tr>
      ${dataFeriados.join('')}
      </table>`)
    }



  });
});