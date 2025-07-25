const question = [
    {
        question  : "What is  National Animal of India?",
        options   : ["Lion", "Tiger", "Leopard",],
        answer    : Tiger
    },
    {
        question  :  "What is  Capital of India?",
        options   :  ["Uttar pradesh","Mumbai","New Delhi",],
        answer    :  NewDelhi      
    }, 
    {
        question  :   "What is Biggest Ocean in the World?",
        options   :   ["Pacific","Indian ","Antratica",],
        answer    :   Pacific
    }
];
      let currentQuestion = 0;
      let score = 0;

      const questionsE1 = document.getElementById("question");
      const optionsE1 = document.getElementById("options");
      const nextBtn = document.getElementById("next-btn");
      const scoreE1 = document.getElementById("score");
      nextBtn.style.display = "none"; // Hide next button intially

      function loadQuestion() {
        const q = questions[currentQuestion];
        questionsE1.textContent = q.question;
        optionsE1.innerHTML = "";
        q.options.forEach(option=> {
          const btn = document.createElement("div");
          btn.classList.add("option");
          btn.textContent = option;
          btn.onclick = () => checkAnswer(option);
          optionsEl.appendChild(btn);
        });
    }
    
      function checkAnswer(selected) {
        const correct = questions[currentQuestion].answer;
        if (selected === correct) {
            score++;
            alert("Correct!");
        } else {
            alert('Wrong! Correct answer:${correct}');
        }
        nextBtn.style.display = "block";     //Show next button after answering        
        }

        nextBtn.addEventListener("click",() => {
            currentQuestion++;
            if (currentQuestion < question.length) {
                loadQuestion();
                nextBtn.style.display = "none"; //hide next button untill question is answered
            } else {
                showScore();
            }
        });

        function showScore() {
            questionsE1.textContent = "Quiz Completed!";
            optionsE1.innerHTML = "";
            nextBtn.style.display = "none";
            scoreE1.textContent = 'Your Score : ${score} / ${questions.length}';
        }

        // Initial load
        loadQuestion();

