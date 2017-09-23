

function squareRoot(a, b, c){
    const d = b * b - 4 * a * c;
    if (d > 0){
        const x1 = (- b + Math.sqrt(d))/(2 * a);
        const x2 = (- b - Math.sqrt(d))/(2 * a);
        return 'x1 = '+ x1 + '<br>' + ' x2 = ' + x2;
        
    } else if (d === 0) {
        const x = - b / (2 * a) ;
        return 'x = ' + x;
        
    } else {
        return "No roots";
    }
}
const result = squareRoot(2, 50, 8);
document.write(result);