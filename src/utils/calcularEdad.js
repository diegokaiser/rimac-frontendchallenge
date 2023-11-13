export const calcularEdad = (birthDay) => {
  let today = new Date()
  var birthday = new Date(birthDay)
  var edad = today.getFullYear() - birthday.getFullYear()
  var mes = today.getMonth() - birthday.getMonth()

  if(
    mes < 0 ||
    (mes === 0 && today.getDate() < birthday.getDate())
  ) {
    edad--
  }

  return edad
}