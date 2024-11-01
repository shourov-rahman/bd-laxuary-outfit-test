function convertToBanglaNumber(number: number): string {
  const banglaLookupTable: Record<number, string> = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  // Convert the number to a string and replace each digit with its corresponding Bengali digit
  const numberString = number.toString();
  const banglaNumber = numberString
    .split("")
    .map((digit) => banglaLookupTable[parseInt(digit, 10)] || digit)
    .join("");

  return banglaNumber;
}

export default convertToBanglaNumber;
