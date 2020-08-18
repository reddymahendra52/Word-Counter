var count = document.getElementById('count');
var input = document.getElementById('input');

input.addEventListener('keyup', function (e) {
    wordCounter(e.target.value);
});
function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if ((code > 47 && code < 58) ||
            (code > 64 && code < 91) ||
            (code > 96 && code < 123)) {
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
}

function wordCounter(text) {
    var text = input.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== '' && isWord(text[i])) {
            wordCount++;
        }
    }
    count.innerText = wordCount;
}
