function StringContain (targetString, sourceString) {
  var sortedTargetString = sortChar (targetString);
  var sortedSourceString = sortChar (sourceString);
  for (let i = 0, j = 0; j < sortedSourceString.length;) {
    while (i < sortedTargetString.length && sortedTargetString.charAt(i) < sortedSourceString.charAt(j)) {
      i++;
    }
    if (i === sortedTargetString.length || sortedTargetString.charAt(i) > sortedSourceString.charAt(j))
      return false;
    j++;
  }
  return true;
}

function sortChar (sourceString) {
  var stringArray = [...sourceString];
  return stringArray.sort().join('');
}


console.log(StringContain('ABCDE', 'ABCD'));
console.log(StringContain('ABCDE', 'ABCDK'));
console.log(StringContain('ABCDE', 'ABCDD'));
console.log(StringContain('CABDE', 'DABCD'));