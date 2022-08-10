module.exports = function toReadable (number) {
    const primitives = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
      };
    
      const pastTen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
      };
    
      const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
      };
    
      let numberRead = (String(number)).split('');
      let firstSymb = Number(numberRead[0]);
      let secondSymb = Number(numberRead[1]);
      let thirdSymb = Number(numberRead[2]);
      let secPlusThird = numberRead[1] + numberRead[2];
      console.log(secPlusThird)
      let numberreadable = '';
    
      numberreadable =
        (number < 10) ? primitives[number] :
          (number < 20) ? pastTen[number] :
            (number >= 20 && number <= 100 && secondSymb !==0) ? `${tens[firstSymb]} ${primitives[secondSymb]}` :
            (number >= 20 && number < 100 && secondSymb ==0) ? `${tens[firstSymb]}` : 
            (number >= 100 && secondSymb ==0 && thirdSymb ==0) ?  `${primitives[firstSymb]} hundred` : 
            (number >= 100 && secondSymb ==0 && thirdSymb !==0) ?  `${primitives[firstSymb]} hundred ${primitives[thirdSymb]}`:
            (number >= 100 && secondSymb !==0 && secondSymb !==1 && thirdSymb ==0) ?  `${primitives[firstSymb]} hundred ${tens[secondSymb]}`:
            (number >= 100 && secondSymb !==0 && secondSymb !==1 && thirdSymb !==0) ?  `${primitives[firstSymb]} hundred ${tens[secondSymb]} ${primitives[thirdSymb]}`:
            (number >= 100 && secondSymb == 1) ?  `${primitives[firstSymb]} hundred ${pastTen[secPlusThird]}` : '' ;
      return numberreadable;
};
