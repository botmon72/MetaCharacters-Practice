let re;
re = /hello/i; 


//Using Metacharacters
re = /^h/i; //MUST begin with 'h'
re = /hello$/i; //MUST end with 'h'
re = /^hello$/i; //must both END and BEGIN with the SAME 'hello'
re = /h.llo/i;  //the '.' can act as a wild card for exactly ONE character
re = /h*llo/i;  //the '*' can act as a wild card for ANY # of chars including 0
re = /gre?a?y/i;  //users can spell gray in two ways. 'e' and 'a' is in question. OPTIONAL CHAR
re = /gre?a?y\?/i; //escaping characters - to actually use '?', put '\' before

//Brackets [] - Character sets
re = /gr[ae]y/i;  //Must be either an 'a' or an 'e'
re = /[GF]r[ae]y/;
re = /[^GF]ray/;  //Match anything EXCEPT G or F
re = /^[GF]ray/;  //Must start with 'G' or 'F'
re = /[A-Z]ray/;  //Match ANY uppercase letter
re = /[a-z]ray/;  //match ANY lowercase letter
re = /[A-Za-z]ray/; //match ANY letter
re = /[0-9][0-9] dogs/;  //match any double digit

//Braces {} - Quantifiers
re = /Hel{2}o/i;  // 'l' must occur exactly 2 times
re = /Hel{2,4}o/i;  // 'l' can only occur between 2-4 times
re = /Hel{2,}o/i;   // 'l' must occur AT LEAST 2 times

//Parenthesis () - Grouping
re = /^([0-9]x){3}$/; //Must have 'numX' three times



//String to test
const str = '3x5x2x';

const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  }else{
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re,str);