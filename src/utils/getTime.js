// UNIX Timestamp es un numero entero que representa el
// numero of seconds transcurrido desde
// 1 / Enero / 1970

const getTime = () => Math.floor(Date.now() / 1000);

module.exports = getTime;
