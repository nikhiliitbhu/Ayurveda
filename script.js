 const questions = Array.from({length: 15}, (_, i) => ({
      text: `Question ${i + 1}: What is option ${String.fromCharCode(65 + (i % 3))}?`,
      options: ['A', 'B', 'C'],
      images: [
        'https://via.placeholder.com/150?text=A',
        'https://via.placeholder.com/150?text=B',
        'https://via.placeholder.com/150?text=C'
      ],
      selected: null,
      visited: false
    }));
    let currentQuestionIndex = 0;

    function startTest() {
      const name = document.getElementById('username').value.trim();
      if (!name) return alert("Please enter your name.");
      document.getElementById('homePage').style.display = "none";
      document.getElementById('testPage').style.display = "block";
      loadQuestion();
      renderSidebar();
    }

    function loadQuestion() {
      const q = questions[currentQuestionIndex];
      q.visited = true;
      document.getElementById("questionText").textContent = q.text;
      const optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = "";

      q.options.forEach((opt, idx) => {
        const div = document.createElement("div");
        div.className = "option";
        if (q.selected === opt) div.classList.add("selected");
        div.innerHTML = `<img src="${q.images[idx]}" alt="${opt}" /><div>${opt}</div>`;
        div.onclick = () => {
          if (q.selected === opt) {
            q.selected = null;
          } else {
            q.selected = opt;
          }
          loadQuestion();
          renderSidebar();
        };
        optionsContainer.appendChild(div);
      });
      renderSidebar();
    }

    function renderSidebar() {
      const container = document.getElementById("questionButtons");
      container.innerHTML = "";
      questions.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.textContent = `Question ${i + 1}`;
        btn.className = "question-button";
        if (i === currentQuestionIndex) btn.classList.add("current-question");
        else if (!q.visited) btn.classList.add("not-visited");
        else if (q.visited && !q.selected) btn.classList.add("visited-not-answered");
        else if (q.selected) btn.classList.add("answered");
        btn.onclick = () => {
          currentQuestionIndex = i;
          loadQuestion();
        };
        container.appendChild(btn);
      });
    }

    function nextQuestion() {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      }
    }

    function prevQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
      }
    }

    function submitTest() {
      if (questions.some(q => q.selected === null)) {
        alert("Please answer all questions before submitting.");
        return;
      }

      let countA = 0, countB = 0, countC = 0;
      questions.forEach(q => {
        if (q.selected === 'A') countA++;
        else if (q.selected === 'B') countB++;
        else if (q.selected === 'C') countC++;
      });

      document.getElementById("testPage").style.display = "none";
      document.getElementById("resultPage").style.display = "block";
      document.getElementById("resultSummary").textContent = `You selected:
        A: ${countA}, B: ${countB}, C: ${countC}`;
    }

    function selectOption(index) {
  const question = questions[currentQuestionIndex];
  question.selected = index;

  renderQuestion();
  updateSidebarButton(currentQuestionIndex);
}

function updateSidebarButton(index) {
  const button = document.getElementById(`qbtn-${index}`);
  const question = questions[index];

  // Remove all status classes
  button.classList.remove('not-visited', 'visited-not-answered', 'answered', 'current-question');

  if (question.selected !== undefined) {
    button.classList.add('answered'); // Green
  } else if (index === currentQuestionIndex) {
    button.classList.add('current-question'); // Yellow
  } else {
    button.classList.add('visited-not-answered'); // Red
  }
}
