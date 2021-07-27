const quizData = [
    {
        question: 'Siapa Pencipta lagu Indonesia Raya..',
        a: 'Sayuti Melik',
        b: 'Soekarno',
        c: 'Wage Rudolf Supratman',
        d: 'Moh.Hatta', 
        correct: 'c'
    }, {
        question: 'Bendera Merah Putih Dijahit Oleh..',
        a: 'Fatmawati',
        b: 'Megawati',
        c: 'Sayuti Melik',
        d: 'Kartini',
        correct: 'a'
    }, {
        question: 'Dimana Proklamasi dibacakan..',
        a: 'Jl. Pegangsaan Timur No. 54',
        b: 'Jl. pegangsaan Timur No. 66',
        c: 'Jl. Pegangsaan Timur No. 56',
        d: 'Jl. Pegangsaan Timur No. 53',
        correct: 'c'
    }, {
        question: 'Kapan Indonesia Merdeka..',
        a: '23 Agustus 1945',
        b: '18 Agustus 1945',
        c: '17 Agustus 1945',
        d: '20 Agustus 1945',
        correct: 'c'
    }, {
        question: 'Apa kota jepang yang di bom oleh sekutu..',
        a: 'Tokyo dan Eno',
        b: 'Hiroshima dan Nagasaki',
        c: 'Nagasaki dan Kansai',
        d: 'Masamune dan Hirobaki',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
} 

function getSelected(){
        let answer = undefined;

        answerEls.forEach(answerEl =>{
            if (answerEl.checked){
                answer = answerEl.id;
            }
        });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() => {
    // untuk mengecek jawaban
    const answer = getSelected();

    console.log(answer)
 
    if(answer){
        
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Nilai Kamu adalah : 
            ${score}/${quizData.length} question.</h2>
            <button onclick= 'location.reload()'>Mengulang</button>`;
    
        }
    }
});