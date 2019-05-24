import React, {Component} from 'react';
import React_Card from '../reactCard/reactCard';
import './quizCard.css'
import data from '../../assets/data.json'

class Quiz_Card_Diff extends Component {

  constructor() {
    super()
    this.state={
      selectedOption: null,
      index:0,
      key:1,
      score:0
    }
  }

  handleOptionChange = changeEvent => {
    this.setState({selectedOption: changeEvent.target.value});
  };

  handleFormSubmit = (formSubmitEvent,prevState) => {
    formSubmitEvent.preventDefault();
    if(this.state.selectedOption === data.difficult[this.state.index].correct)
    {
      if(this.state.index < 5)
      {
        this.setState({selectedOption:null});
        this.setState({score: this.state.score + 5});
        this.setState({index: this.state.index + 1});
      }
    }
    else
    {
      console.log("failure")
      if(this.state.index < 5)
      {
        this.setState({selectedOption:null});
        this.setState({index: this.state.index + 1});
      }
      else
      {
        console.log("finish")
      }
    }
  };

  render() { 
    if(this.state.index < 5 ) 
    {
      return (
        <div>
            <React_Card />
            <div className="ques_cont">
              <p className="ques_index"> Question {parseInt(this.state.index)+1}: </p>
              <p className="ques"> {data.difficult[this.state.index].question} </p>
              <form className="form" onSubmit={this.handleFormSubmit}>
                <div className="test">
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)} 
                                    checked={this.state.selectedOption === '1'} 
                                    onChange={this.handleOptionChange} />
                        {data.difficult[this.state.index].options[0].answer}
                      </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+1} 
                                    checked={this.state.selectedOption === '2'} 
                                    onChange={this.handleOptionChange} />
                      {data.difficult[this.state.index].options[1].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+2} 
                                    checked={this.state.selectedOption === '3'} 
                                    onChange={this.handleOptionChange} />
                      {data.difficult[this.state.index].options[2].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value={parseInt(this.state.key)+3}
                                    checked={this.state.selectedOption === '4'} 
                                    onChange={this.handleOptionChange} />
                      {data.difficult[this.state.index].options[3].answer}
                    </label>
                  </div>
                </div>
                <button className="submit_btn" type="submit">Submit</button>
              </form>
            </div>
        </div>
      );
    }
    
    else
    {
      if(this.state.score === 0){
        return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Very Poor in General Knowledge</p>
              </div>
            </div>
          );
      }
          
      else if(this.state.score === 5) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Poor in General Knowledge</p>
              </div>
            </div>
          );
      }
            
      else if(this.state.score === 10) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Poor in General Knowledge</p>
              </div>
            </div>
          );
      }
            
      else if(this.state.score === 15) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Average in General Knowledge</p>
              </div>
            </div>
          );
      }
              
      else if(this.state.score === 20) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Good in General Knowledge</p>
              </div>
            </div>
          );
      }

      else if(this.state.score === 25) {
         return(
            <div>
              <React_Card />
              <div className="result">
                <p className="title">Thank You for playing !!!</p>
                <p className="score">Your Score is : {this.state.score} </p>
                <p className="rank">You are Very Good in General Knowledge</p>
              </div>
            </div>
          );
      }
    }
  }
}

export default Quiz_Card_Diff;
