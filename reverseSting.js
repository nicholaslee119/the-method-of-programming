function reverseString (srcString) {

  var srcStringArray = srcString.split(' ');

  var res = '';

  srcStringArray.forEach((element)=>{
    res = " " + element + res;
  })

  return res.trim();
}

console.log(reverseString('I am a student.'));
