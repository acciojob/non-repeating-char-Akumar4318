function firstNonRepeatedChar(str) {
 // Write your code here
    let n=str.length;

    for(let i=0;i<n;i++){
        let found=false;

        for(let j=0;j<n;j++){
            if(str[i]==str[j] && i!=j){
                found=true;
                break;
            }
        }

        if(found==false){
            return str[i]
        }
    }
    return "null"
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
