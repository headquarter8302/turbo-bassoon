const url = window.location.href;

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    };
})();
