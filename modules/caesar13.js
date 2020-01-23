function caesar13(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetBig = [...alphabet.toUpperCase()];
  alphabet = [...alphabet];
  const shiftNumber = 13; //liczba o którą przesuwana jest szyfrowana litera
  let result = [];

  if (typeof text !== "string") return "Wpisana fraza musi być tekstem!";

  if (text == "") return "Wpisana fraza nie może być pusta";

  text = [...text];

  result = text.map(el => {
    if (el === " " || /\d/.test(el)) return el; //Sprawdzamy spacje i cyfry

    if (/[A-Z]/.test(el)) {
      //Wielkie litery pozostają wielkie
      const index = alphabetBig.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabetBig[newIndex];
    } else {
      //Małe pozostają małe
      const index = alphabet.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabet[newIndex];
    }
  });
  return result.join("");
}

export default caesar13;
