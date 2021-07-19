function submit() {
    var guesses = document.getElementsByClassName("guess");
    for (let i = 0; i < guesses.length; i++) {
        const inp = guesses[i];
        if (inp.value.toLowerCase().replace(/\s+/g, '') != inp.dataset.name.toLowerCase().replace(/\s+/g, '')) {
            return;
    }}
    // guesses.forEach(inp => {
        
    //     }
    // });
    window.location.replace("http://www.no-homo.github.io/minecraft.html");
}