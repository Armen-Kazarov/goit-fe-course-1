const formatString = function (string) {
  let stringCut;

  if (string.length <= 40) {
    return string;
  } else {
    let stringCut = `${string.slice(0, 41)}...`;
    return stringCut;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
