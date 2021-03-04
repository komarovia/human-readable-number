module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['hundred'];

    number = String(number);

    let result = (number < 20) ? numbers[number] : // 1 - 19
    (number.length === 2 && number > 19 && number[1] == 0) ? dozens[number[0]] : //20, 30, 40 ...
      (number.length === 2 && number[1] != 0) ? dozens[number[0]] + ' ' + numbers[number[1]] : //21, 22, 23 ...
        (number.length === 3 && number[1] == 0 && number[2] == 0) ? numbers[number[0]] + ' ' + hundred : //100, 200, 300 ...
          (number.length === 3 && number[1] == 1) ? numbers[number[0]] + ' ' + hundred + ' ' + numbers[number[1] + number[2]] : //111 - 119
            (number.length === 3 && number[2] == 0) ? numbers[number[0]] + ' ' + hundred + ' ' + dozens[number[1]] : //120, 130, 140 ...
              (number.length === 3 && number[0] == 1 && number[1] != 0 && number[2] != 0) ? numbers[number[0]] + ' ' + hundred + ' ' + dozens[number[1]] + ' ' + numbers[number[2]] : //111 - 199
                (number.length === 3 && number[0] == 1) ? numbers[number[0]] + ' ' + hundred + ' ' + numbers[number[2]] : //111 - 199
                  (number.length === 3 && number[1] == 0) ? numbers[number[0]] + ' ' + hundred + ' ' + numbers[number[2]] : ///101 -109
                    numbers[number[0]] + ' ' + hundred + ' ' + dozens[number[1]] + ' ' + numbers[number[2]]; //123, 124, 125 ...

    return result
}
