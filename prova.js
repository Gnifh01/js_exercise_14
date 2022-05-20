function somma(a, b) {
  return function moltiplicazione(c, d) {
    console.log((a + b) * (c + d));
  };
}

const newFunction = somma(2, 3);
newFunction(4, 6);
