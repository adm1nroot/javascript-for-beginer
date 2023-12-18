function reverseWord(x){
    var reversedWord='';  //describe the empty 
    for (var i= x.length-1 ; i>=0;i--){   // 
        reversedWord+=x[i];
    }
    console.log(reversedWord);
}
reverseWord("ramazan"); // nazamar