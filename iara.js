const phrases = ["Sejam bem vindos!", "Como você está se sentindo?", "Você não está sozinho(a)! ", "Conte com a nossa equipe"];
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        const textElement = document.getElementById("text");

        function type() {
            if (currentCharIndex < phrases[currentPhraseIndex].length) {
                textElement.innerHTML += phrases[currentPhraseIndex].charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(type, 100); // Ajuste o tempo para a velocidade de digitação
            } else {
                setTimeout(erase, 2000); // Tempo antes de apagar a frase
            }
        }

        function erase() {
        if (currentCharIndex > 0) {
            textElement.innerHTML = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erase, 0); // Ajuste o tempo para a velocidade de apagar
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, 0); // Tempo antes de começar a digitar a próxima frase
        }
    }


        type();
