function handleClick(event) {
    //this === event.target
    console.log(this);
    console.log(event.target);
    makeSound(event.target.innerText);
    buttonAnimation(event.target.innerText);
}

// Added event to Each buttom using for loop
let eventArray = document.querySelectorAll("button");
for (const event of eventArray) {
    event.addEventListener("click", handleClick);
}

// Adding Event Listeners to Keyboard Pressed
document.addEventListener("keypress", handleKeyboardEvent);

function handleKeyboardEvent(event) {
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case "1":
            {
                let kick = new Audio("soundsBateria/crash-cymbal.wav");
                kick.play();
                break;
            }
        case "2":
            {
                let kick = new Audio("soundsBateria/ride-bell.wav");
                kick.play();
                break;
            }
        case "3":
            {
                let kick = new Audio("soundsBateria/splash-cymbal.wav");
                kick.play();
                break;
            }
        case "4":
            {
                let tom1 = new Audio("soundsBateria/hihat-open.wav");
                tom1.play();
                break;
            }
        case "5":
            {
                let tom2 = new Audio("soundsBateria/snare.mp3");
                tom2.play();
                break;
            }
        case "6":
            {
                let snare = new Audio("soundsBateria/cajabateria.wav");
                snare.play();
                break;
            }
        case "7":
            {
                let tom4 = new Audio("soundsBateria/tom1.wav");
                tom4.play();
                break;
            }
        case "8":
            {
                let crash = new Audio("soundsBateria/tom2.wav");
                crash.play();
                break;
            }
        case "9":
            {
                let tom3 = new Audio("soundsBateria/kick-drum2.wav");
                tom3.play();
                break;
            }

        default:
            {
                break;
            }
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    document.body.classList.add("modify-body");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        document.body.classList.remove("modify-body");
    }, 200);
}