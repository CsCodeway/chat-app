const socket = io();
const content = document.querySelector('.content');
const button = document.querySelector('emoji-picker');

let name;

do {
    name = prompt('Please Enter Your Name: ')
} while (!name)


button.addEventListener('emoji-click', (data) =>
        // console.log(data.detail.unicode))
        document.getElementById("input").value += data.detail.unicode);
        

btn.addEventListener("click", () => {
    
    if (input.value == 0) {}
    else {
        sendMessage(input.value);
    }
});

function sendMessage(message) {

    let msg = {
        user: name,
        message: message.trim()
    }


    //Append

    appendMessage(msg, 'right')
    input.value = ''
    scrollToBottom()

    //Send to Server

    socket.emit('message', msg)
};

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')

    let className = type

    mainDiv.classList.add(className, 'message')

    let markup =
        `<h3>${msg.user}</h3>
    <p>${msg.message}</p>`

    mainDiv.innerHTML = markup

    content.appendChild(mainDiv)
};

//Receive Messages

socket.on('message', (msg) => {
    appendMessage(msg, 'left')
    scrollToBottom()
});

function scrollToBottom() {
    content.scrollTop = content.scrollHeight
};


