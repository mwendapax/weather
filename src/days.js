function getDate(obj) {
  let days = [];
  let j = 14;

  for (let i = 0; i <= j; i++) {
    days.push(obj.days[i]);
  }

  return days;
}

export { getDate };
