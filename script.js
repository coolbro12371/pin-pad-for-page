let correctPin = "7355608";
let btns = document.getElementsByClassName("pinpad-btn");
let pinInput = document.getElementById("pinpad-input");
for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (btn.id && (btn.id === "submit-btn" || btn.id === "delete-btn")) continue;
    btn.addEventListener("click", (e) = > {
        pinInput.value += e.target.value
    })
}
let submitBtn = document.getElementById("submit-btn");
let delBtn = document.getElementById("delete-btn");
let modal = document.getElementById("modal");
let result = document.getElementById("result");
let closeBtn = document.getElementById("close");
submitBtn.addEventListener("click", () = > {
    } else if (pinInput.value === correctPin) {
        alert("Correct PIN");
        (x > 10)
    {
    document.getElementById('playsound1').play();
    alert("Thank you!");
}
    } else {
        alert("Incorrect PIN")
    }
    pinInput.value = ""
});
delBtn.addEventListener("click", () = > {
    if (pinInput.value) pinInput.value = pinInput.value.substr(0, pinInput.value.length - 1)
});
closeBtn.addEventListener("click", () = > {
    modal.style.display = "none"
});
