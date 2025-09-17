const capitalize = (str) => {
    const words = str.split(" ");
    words.forEach((word,index)=>{
        const subWord = word.slice(1);
        words[index]=word[0].toUpperCase()+subWord;
    })

    return words.join(" ");
}
//trabaja con frases

const capitalizeEvenLetters = (str) => {
    const words = str.toLowerCase().split(" ");
    const wordsCapitalized=[];
    for (let i=0; i < words.length; i++ ){
        let word="";
        for (let j=0; j<words[i].length; j++){
            if(j % 2 ===0){
                word+=words[i][j].toUpperCase();
            }else{
                word += words[i][j];
            }
        }
        wordsCapitalized.push(word);
    }
    return wordsCapitalized.join(" ");
}


//exportando solo funciones: 
export {capitalize,capitalizeEvenLetters};