const cipher = {

  encode: function(offset,string) {
    if(typeof string !== "string") {
      throw TypeError("El contenido de este mensaje no es texto");
      }
    let message="";
    for(let i=0;i<string.length;i++) {
      let asciiNumber= string[i].charCodeAt();
      if(asciiNumber>=65 && asciiNumber<=90) {
        let asciiDespla= (asciiNumber-65+offset)%26+65;
        message+= String.fromCharCode(asciiDespla);
      } else{
        message+= string[i];
      }
    } 
    return message
  },

  decode: function(offset,string) {
    if(typeof string !== "string") {
      throw TypeError("El contenido de este mensaje no es texto");
      }
    let message="";
    for(let i=0; i<string.length ;i++) {
      let asciiNumber= string[i].charCodeAt();
      if (asciiNumber>=65 && asciiNumber<=90) {
        message+= String.fromCharCode((asciiNumber+65-offset)%26+65);
      } else if(asciiNumber>=78 && asciiNumber<=90){
        message+= String.fromCharCode((asciiNumber+65+offset)%26+65);
      } else {
        message+= string[i];
      }
    }
    return message;
  },
 
};

export default cipher;
