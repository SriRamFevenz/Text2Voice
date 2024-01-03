let speech = new SpeechSynthesisUtterance()

let btn = document.querySelector('.listen-btn')
let textarea = document.querySelector('#txt-area')


let voices = []

let voiceSelect = document.querySelector("select")

speech.text = "Welcome to Text 2 Voice Convertor"
window.speechSynthesis.speak(speech) 

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice,i) =>(voiceSelect.options[i] = new Option(voice.name,i)))
};

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value]
})

btn.addEventListener('click',()=>{
    
    if (textarea.value == "" || textarea.value == " ") {
        speech.text = "Write anything...."
        window.speechSynthesis.speak(speech) 
    } else {
        speech.text = textarea.value
        window.speechSynthesis.speak(speech)    
    }
})

