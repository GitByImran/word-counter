document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('counter_input').addEventListener('input', countWords);
});

const countWords = () => {
    const text = document.getElementById('counter_input').value;
    const words = text.split(/\s+/);

    const filteredWords = words.filter(function (word) {
        return word.length > 0;
    });

    document.getElementById('wordCount').innerText = filteredWords.length;
    document.getElementById('charCount').innerText = text.length;
}
