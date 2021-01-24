const multiples = (number, limit) => {
  const results = [number];

  for (let i = 1; number + number * i <= limit; i = i + 1) {
    results.push(number + number * i);
  }

  return results;
};

export default multiples;