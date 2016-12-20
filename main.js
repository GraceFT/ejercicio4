var tiempo, costoMinuto, total;
tiempo= prompt("Por favor, ingrese el tiempo de la llamada"," ");
tiempo=parseFloat(tiempo);
costoMinuto= prompt("Por favor, ingrese el costo por minuto"," ");
costoMinuto=parseInt(costoMinuto);

total=tiempo*costoMinuto;
total=parseInt(total);
alert("El total del costo de la llamada es "+total);