function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  nota=(ex/6)+((p1*2)/6)+((p2*3)/6)
  classenota=nota>=9?"A":nota>=7.5?"B":nota>=6?"C":"D"
  return classenota
}