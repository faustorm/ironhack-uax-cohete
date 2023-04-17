const paises = ['Omán','Israel', 'Grecia', 'Italia','España','Portugal','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','Caribe','Panamá', 'México','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico'];

let combustible = 10;
let step = 100/paises.length;
let avance = 0;
let distancia = combustible * step;

for(let i = 0; i < paises.length; i++) {
  if(avance < distancia) {
    console.log(`Pasa por ${paises[i]} sin incidentes`);
  }
  else {
    console.log(`BOOOOOM, adiós ${paises[i]}`);
  break;
  }
  avance += step;
  
}
