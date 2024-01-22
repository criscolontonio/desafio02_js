const students = [
  {
    name: "Maria",
    firstTest : 8,
    secondTest : 9
  },

  {
    name: "Pedro",
    firstTest : 5,
    secondTest : 6
    
  },
  {
    name: "Julia",
    firstTest : 3,
    secondTest : 5
    
  },
  {
    name: "João",
    firstTest : 10,
    secondTest : 9
    
  }
]

function average( firstTest,secondTest){
  return ((firstTest + secondTest)/2)
}


function show (student){
  if(average(student.firstTest,student.secondTest) >=7){
  return `A média do(a) aluno(a) ${student.name} é: ${average(student.firstTest,student.secondTest )}
Parabens ${student.name}! Você foi aprovado(a) no concurso!`
}
else{return `A média do(a) aluno(a) ${student.name} é: ${average(student.firstTest,student.secondTest )}
Não foi dessa vez ${student.name}! Tente novamente!`
}

}

for (let student of students){
  let message = show (student)
  alert( message)
}