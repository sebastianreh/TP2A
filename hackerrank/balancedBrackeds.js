// {[]}
// {[(])}
// {{[[(())]]}}


function isBalanced(s) {

    let aux = -1;
    while (s.length != 0) {
        aux = s.length;
        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");

        if(aux == s.length) return "NO";
    }
    return "YES";
}

console.log(isBalanced("{[([[[]]])]}"));


