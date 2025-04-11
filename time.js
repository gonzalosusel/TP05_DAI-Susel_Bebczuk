const fillBlanks = (n) => n.toString().length == 1 ? "0" + n : n;

export default function(){
    let date = new Date();
    return fillBlanks(date.getHours()) + ":" + fillBlanks(date.getMinutes()) + ":" + fillBlanks(date.getSeconds())
}