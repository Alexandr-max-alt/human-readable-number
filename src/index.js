module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if (number === 0) {
    return 'zero';
    }
    
    function convertToWords(num) {
        if (num < 10) {
        return units[num];
        } else if (num < 20) {
        return teens[num - 10];
        } else if (num < 100) {
        return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
        } else if (num < 1000) {
        return units[Math.floor(num / 100)] + ' hundred ' + convertToWords(num % 100);
        } 
    }
    
    let res = convertToWords(number);
    return res.trim();
}
