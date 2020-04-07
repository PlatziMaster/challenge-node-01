/**
 * @return The Unix timestamp
 */
const getTime = () => {
  // JavaScript uses milliseconds as the unit of measurement,
  // whereas Unix Time is in seconds.
  const now = new Date();
  const timestamp = now.getTime();
  // Convert from JavaScript timestamp to Unix timestamp
  const unixTimestamp = Math.floor(timestamp / 1000);

  return unixTimestamp;
};

module.exports = getTime;
