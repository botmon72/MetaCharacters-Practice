let re;
re = /hello/i; 


//Using Metacharacters
re = /^h/i;         //MUST begin with 'h'
re = /hello$/i;     //MUST end with 'h'
re = /^hello$/i;    //must both END and BEGIN with the SAME 'hello'
re = /h.llo/i;      //the '.' can act as a wild card for exactly ONE character
re = /h*llo/i;      //the '*' can act as a wild card for ANY # of chars including 0
re = /gre?a?y/i;    //users can spell gray in two ways. 'e' and 'a' is in question. OPTIONAL CHAR
re = /gre?a?y\?/i;  //escaping characters - to actually use '?', put '\' before

//Brackets [] - Character sets
re = /gr[ae]y/i;      //Must be either an 'a' or an 'e'
re = /[GF]r[ae]y/;
re = /[^GF]ray/;      //Match anything EXCEPT G or F
re = /^[GF]ray/;      //Must start with 'G' or 'F'
re = /[A-Z]ray/;      //Match ANY uppercase letter
re = /[a-z]ray/;      //match ANY lowercase letter
re = /[A-Za-z]ray/;   //match ANY letter
re = /[0-9][0-9] dogs/;  //match any double digit

//Braces {} - Quantifiers
re = /Hel{2}o/i;    // 'l' must occur exactly 2 times
re = /Hel{2,4}o/i;  // 'l' can only occur between 2-4 times
re = /Hel{2,}o/i;   // 'l' must occur AT LEAST 2 times

//Parenthesis () - Grouping
re = /^([0-9]x){3}$/; //Must have 'numX' three times

//Shorthand Character Classes
re = /\w/;    //word character - alphanumeric (any # or letter or _)
re = /\w+/;   //'+' equals one or more word character
re = /\W/;    //Non-word characters
re = /\d/;    //Match the first digit
re = /\d+/;   //Match any digit however many times
re = /\D/;    //Match any NON-digit
re = /\s/;    //match whitespace char
re = /\S/;    //match NON-whitespace char
re = /Hell\b/i;   //word boundary - without the '\b', it'll match even the word 'Hello'

//Assertions
re = /x(?=y)/;    //Match x only if followed by y
re = /x(?!y)/;   //Match x only if followed by NOT y


//String to test
const str = '345';

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