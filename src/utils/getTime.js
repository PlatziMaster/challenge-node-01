// # 3.1 CREA UNA FUNCIÓN LLAMADA GETTIME QUE RETORNA LA FECHA EN UNIX Timestamp
function getTime() {
  const date = Math.round((new Date()).getTime() / 1000);
  return date;
};

module.exports = getTime;
