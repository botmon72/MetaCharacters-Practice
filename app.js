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

//String to test
const str = 'greay?';

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