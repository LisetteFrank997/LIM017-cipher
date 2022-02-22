import cipher from './cipher.js';

const NextPage= document.getElementById("firtsbutton");
NextPage.addEventListener("click", ()=> {
    document.getElementById("Screen1").className="invisible";
    document.getElementById("Screen2").className="visible";
})

const SecondPage= document.getElementById("secondbutton");
SecondPage.addEventListener("click", ()=> {
    document.getElementById("Screen1").className="invisible";
    document.getElementById("Screen3").className="visible";
})

const FirtsPageAgain= document.getElementById("goBackFirtsPage");
FirtsPageAgain.addEventListener("click", ()=> {
    document.getElementById("Screen2").className="invisible";
    document.getElementById("Screen1").className="visible";
})

const FirtsPageAgain2= document.getElementById("goBackFirtsPage2");
FirtsPageAgain2.addEventListener("click", ()=> {
    document.getElementById("Screen3").className="invisible";
    document.getElementById("Screen1").className="visible";
})

let messageToCipher= document.getElementById("startCipher");
messageToCipher.addEventListener("click", ()=> {
    let string= document.getElementById("messageCipher").value;
    let offset= parseInt(document.getElementById("nivelButtonC").value);
    let messageCipher= cipher.encode(offset,string);
    document.getElementById("answerCipher").innerText= messageCipher;
})

let messageToDecipher= document.getElementById("startDecipher");
messageToDecipher.addEventListener("click", ()=> {
    let string= document.getElementById("messageDecipher").value;
    let offset= parseInt(document.getElementById("nivelButtonD").value);
    let messageDecipherH= cipher.decode(offset,string);
    document.getElementById("answerDecipher").innerText= messageDecipherH;
})

const capitalLetterC= document.getElementById("messageCipher");
capitalLetterC.addEventListener("keyup", ()=> {
    const sentence= document.getElementById("messageCipher").value;
    const sentCapital= sentence.toUpperCase();
    capitalLetterC.value= sentCapital;
})

const capitalLetterD= document.getElementById("messageDecipher");
capitalLetterD.addEventListener("keyup", ()=> {
    const sentenceD= document.getElementById("messageDecipher").value;
    const sentCapitalD= sentenceD.toUpperCase();
    capitalLetterD.value= sentCapitalD;
})

const errorMessage= document.getElementById("startCipher");
errorMessage.addEventListener("click", ()=> {
    let valueString= document.getElementById("messageCipher").value;
    let contendString= document.getElementById("answerCipher");
    if(valueString === "") {
        contendString.innerText = 'Por favor ingrese un mensaje a cifrar';
        contendString.classList.add("errorMessage");
    } else {
        contendString.classList.remove("errorMessage");
        const correctMessage = cipher.encode(valueString);
        contendString.innerText = correctMessage;   
      }
})

const errorMessageD= document.getElementById("startDecipher");
errorMessageD.addEventListener("click", ()=> {
    let valueString= document.getElementById("messageDecipher").value;
    let contendString= document.getElementById("answerDecipher");
    if(valueString === "") {
        contendString.innerText = 'Por favor ingrese un mensaje a Decifrar';
        contendString.classList.add("errorMessage");
    } else {
        contendString.classList.remove("errorMessage");
        const correctMessage = cipher.decode(valueString);
        contendString.innerText = correctMessage;   
      }
})

/*console.log(cipher); 
console.log(cipher.encode(offset, string)).toThrow(TypeError);
console.log(cipher.decode());*/