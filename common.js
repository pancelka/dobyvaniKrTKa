function visited() {
    let name = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    localStorage.setItem(name, "true");
}


$(document).ready(function(){
    $("a").each(function(index, element){
        if ($(element).data("prompt")) {
            if($(element).data("password")) {
                $(element).click(function(e) {
                    let input = window.prompt($(element).data("prompt"));
                    if (input === null) {
                        e.preventDefault();
                        return;
                    }
                    input = input.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    let passwords = $(element).data("password").split(",");
                    passwords = passwords.map(function(x) {
                        return x.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    })
                    for (const p of passwords) {
                        if (p == input)
                            return;
                    }
                    e.preventDefault();
                    alert("Heslo '" + input + "' není správně.")
                });
            }
            else {
                $(element).click(function(e) {
                    if(!window.confirm($(element).data("prompt"))) {
                        e.preventDefault();
                    }
                });
            }
        }
    });

});

visited();