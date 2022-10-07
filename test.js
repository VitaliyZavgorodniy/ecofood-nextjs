const renderHTML = (string, pattern) => {
  let result = string.split('');
  let addedCharacters = 0;

  pattern.forEach((item) => {
    result.splice(item[0] + addedCharacters, 0, `<${item[2]}>`);
    addedCharacters += 2;
    result.splice(item[1] + addedCharacters, 0, `</${item[2]}>`);
    addedCharacters += 3;
  });
  console.log({ result: result.join('') });
  return result.join('');
};

console.log(
  renderHTML('Hello, world', [
    [0, 2, 'i'],
    [4, 9, 'b'],
    [7, 10, 'u'],
  ])
);

{/* <i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u> */}