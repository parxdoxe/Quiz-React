import React from "react";

class Quiz extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            questions: [
                {
                    questionText: 'Quel est la capital de la France ?',
                    answerOptions : [
                        { answerText: 'New York', isCorrect: false},
                        { answerText: 'Paris', isCorrect: true},
                        { answerText: 'Bruge', isCorrect: false},
                        { answerText: 'Porto', isCorrect: false}
                    ],
                },
                {
                    questionText: 'Quel est la capital de la Russie ?',
                    answerOptions : [
                        { answerText: 'Washington', isCorrect: false},
                        { answerText: 'Paris', isCorrect: false},
                        { answerText: 'Moscou', isCorrect: true},
                        { answerText: 'Madrid', isCorrect: false}
                    ],
                },
                {
                    questionText: 'Quel est la capital de l\'espagne ?',
                    answerOptions : [
                        { answerText: 'Vienne', isCorrect: false},
                        { answerText: 'Londre', isCorrect: false},
                        { answerText: 'Rio', isCorrect: false},
                        { answerText: 'Madrid', isCorrect: true}
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0,
        }
    }

    
    handleClick = (isCorrect) => {

        if (isCorrect) {
            this.setState({ score: this.state.score + 1 })
        }
    

        let lastQuestion = this.state.questions.length
        let nextQuestion = this.state.currentQuestion+1

      if (nextQuestion < lastQuestion) {
        this.setState({ currentQuestion: nextQuestion })
      } else {
        this.setState({ showScore: true })
      }
            
    }

    reset = () => {
        this.setState({ currentQuestion: 0})
        this.setState({ score: 0})
        this.setState({ showScore: false })
    }

    render(){
        return (
            <div className="cardQuiz">
                { this.state.showScore == true ? (
                    

                        <div className="result">
                            <p>Votre résultat : {this.state.score}/{this.state.questions.length}</p> 
                            <button onClick={this.reset}>Recommencer</button>
                        </div>
                    
                    
                ) : (
                <div className="description">
                    <div className="question">
                         {this.state.questions[this.state.currentQuestion].questionText}
                    </div>
                    <div className="answer">
                        {this.state.questions[this.state.currentQuestion].answerOptions.map( answerOption => 
                        <button key={answerOption.answerText} onClick={() => this.handleClick(answerOption.isCorrect)} >{answerOption.answerText}</button> )}
                    </div>

                    <div className="current"><p> Question {this.state.currentQuestion + 1} / {this.state.questions.length}</p></div>
                </div>
                )}
                
            </div>
        )
    }

}

export default Quiz;