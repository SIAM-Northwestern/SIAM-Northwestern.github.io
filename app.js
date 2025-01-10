
submit = document.getElementById("FORM-SUBMIT")

submit.addEventListener("click", function () {
    form_name = "Name: ".concat(" ", document.getElementById("FORM-NAME").value)
    form_email = "From: ".concat(" ", document.getElementById("FORM-EMAIL").value)
    form_query = document.getElementById("FORM-QUERY").value

    subject = "NU-Siam Question"
    to = "noahroselli2027@u.northwestern.edu,northwestern.siam.group@gmail.com"
    body = form_name.concat(" \n", form_email, " \n", form_query)
    
    var args = [];
    if (typeof subject !== 'undefined') {
        args.push('subject=' + encodeURIComponent(subject));
    }
    if (typeof body !== 'undefined') {
        args.push('body=' + encodeURIComponent(body))
    }

    var url = 'mailto:' + encodeURIComponent(to);
    if (args.length > 0) {
        url += '?' + args.join('&');
    }
    window.location.href = url
    return
});
