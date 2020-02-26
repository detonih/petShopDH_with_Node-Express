const upperCaseFirstLetter = (string) => {
  return string.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const transformaBooleano = (boo) => {
  if(boo == true) {
    return 'sim'
  } else if (boo == false) {
    return 'não'
  }
}

module.exports = {
  upperCaseFirstLetter,
  transformaBooleano
}