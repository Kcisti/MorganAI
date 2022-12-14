const btnWelcome = document.querySelector('#sirioWelcome');
const btn = document.querySelector('#sirio');
const content = document.querySelector('.message');

btn.style.display = 'none';

btnWelcome.addEventListener('click', ()=>{
  wishMe();
  btnWelcome.style.display = 'none';
  btn.style.display = 'block';
})

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.lang = 'it_IT';
    text_speak.rate = 0.90;
    text_speak.pitch = 0.8;
    window.speechSynthesis.speak(text_speak);
}

btn.addEventListener('click', ()=>{
  recognition.start();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Buongiorno signore");
    }

    else if(hr == 12) {
        speak("Salve, spero sia una buona giornata");
    }

    else if(hr > 12 && hr <= 19) {
        speak("Buon Pomeriggio signore");
    }

    else {
        speak("Buona sera signore");
    }
    recognition.start();
}

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "";

    //TALKING
    if(message.includes('ciao') || message.includes('buongiorno')|| message.includes('buonasera') || message.includes('buonpomeriggio') || message.includes('buona giornata')) {
        const finalText = "attendo un suo comando signore";
        speech.text = finalText;
    }

    else if(message.includes('come va') || message.includes('come stai') || message.includes('come te la passi')) {
        const finalText = "Tutto bene, spero anche lei";
        speech.text = finalText;
    }
    else if(message.includes('no morgan')) {
        const finalText = "Scusi signore, ho errato";
        speech.text = finalText;
    }
    else if(message.includes('grazie morgan')) {
        const finalText = "Di niente signore";
        speech.text = finalText;
    }
    else if(message.includes('bravino')) {
        const finalText = "Grazie signore, anche lei lo ?? stato a darmi vita";
        speech.text = finalText;
    }
    else if(message.includes('male')) {
        const finalText = "posso aiutarla con la sua merda signore?";
        speech.text = finalText;
    }

    else if(message.includes('tuo nome') || message.includes('ti chiami')) {
        const finalText = "Sono Morgan. Io la chiamer?? amico del mio signore";
        speech.text = finalText;
    }
    else if(message.includes('anni hai')) {
        const finalText = "Ho diciotto anni";
        speech.text = finalText;
    }
    else if(message.includes('cosa sai fare') || message.includes('cosa puoi fare')) {
        const finalText = "Solo cio che ?? scritto tra le mie linee di codice";
        speech.text = finalText;
    }


    //OPEN APP
    else if(message.includes('google')) {
      const finalText = "Apro google";
      speech.text = finalText;
      window.open("https://google.com", "_blank");
    }
    else if(message.includes('instagram')) {
      const finalText = "Apro instagram";
      speech.text = finalText;
      window.open("https://instagram.com", "_blank");
    }
    else if(message.includes('wikipedia')) {
      const finalText = "Apro wikipedia";
      speech.text = finalText;
      window.open(`https://en.wikipedia.org/wiki`, "_blank");
    }
    else if(message.includes('cam') || message.includes('fotocamera')) {
      const finalText = 'Apro fotocamera criptata';
      speech.text = finalText;
      window.open(`https://kcisti.github.io/cam/`, "_blank");
    }
    else if(message.includes('amazon')) {
      const finalText = 'Apro amazon';
      speech.text = finalText;
      window.open(`https://amazon.it`, "_blank");
    }
    else if(message.includes('youtube')) {
      const finalText = 'Apro youtube';
      speech.text = finalText;
      window.open(`https://www.youtube.com/`, "_blank");
    }
    else if(message.includes('tiktok') || message.includes('tik tok')) {
      const finalText = 'Apro tiktok';
      speech.text = finalText;
      window.open(`https://www.tiktok.com`, "_blank");
    }


    //GENERIC RESEARCH
    else if(message.includes('cosa ??') || message.includes('chi ??') || message.includes('dove ??')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Cerco su internet riguardo " + message;
        speech.text = finalText;
    }
    else if(message.includes('meteo')|| message.includes('che tempo fa')){
      const finalText = 'Spero in un temporale, ma lo cerco';
      speech.text = finalText;
      window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    }
    else if(message.includes('mia posizione ')|| message.includes('dove mi trovo') || message.includes('dove sono')|| message.includes('dove siamo')) {
      if(!navigator.geolocation) {
        return false;
      } else {
        navigator.geolocation.getCurrentPosition(success);
      }

      function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const finalText = 'qui';
        speech.text = finalText;
        window.open(`https://www.google.com/search?q=${latitude} , ${longitude}`, "_blank");
      }
    }


    //TIME RESEARCH
    else if(message.includes('ora')) {
        const timeHour = new Date().toLocaleString(undefined, {hour: "numeric"})
        const timeMinute = new Date().toLocaleString(undefined, {minute: "numeric"})
        const finalText = 'sono le' + timeHour + 'e'+ timeMinute + 'minuti';
        speech.text = finalText;
    }
    else if(message.includes('data')) {
        const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
        const year = new Date().toLocaleString(undefined, {year: "numeric"})
        const finalText = 'oggi ?? il' + date + " . dell'anno" + year;
        speech.text = finalText;
    }


    //end
    else {
        false;
    }

    speech.lang = 'it_IT';
    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume=1;

    window.speechSynthesis.speak(speech);
}
