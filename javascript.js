var anzena = "K19C11G11A11";
function submit() {
    if (document.getElementById("password").value == anzena) {
        passwordcorrect();
    } else {
        document.getElementById("confirm/errorText").innerHTML = "Incorrect Password. Please try again"
    }
};
function passwordcorrect() {
    document.getElementById("confirm/errorText").innerHTML = "Decrypting Files";
    sessionStorage.removeItem("auth");
    sessionStorage.setItem("key", "true");
    setTimeout(
        function() {
            document.getElementById("confirm/errorText").innerHTML = "Done";
            setTimeout(
                function() {
                    window.location.href = "index.html";
                },1000
            )
        },2000
    )
};

function createstorage() {
    sessionStorage.setItem("auth", "false")
};

function recreatestorage() {
    setTimeout(
        function() {
            sessionStorage.setItem("auth", "false");
        },30000
    )
};

function passcheck() {
    setTimeout(
        function() {
            if (sessionStorage.getItem("auth")) {
                window.location.href = "default.html";
            }
        },100
    )
    setTimeout(
        function() {
            if (sessionStorage.getItem("key")) {
            } else {
                window.location.href = "default.html";
            }
        },101
    )
};
function lockScreen() {
    window.location.href = "default.html";
    sessionStorage.setItem("auth", "false");
    sessionStorage.removeItem("key");
};
