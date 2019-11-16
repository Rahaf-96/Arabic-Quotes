import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Wisdom from './components/Wisdom';
import {QuotesList} from './components/QuotesList';
import Header from './components/Header';



class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 0,
      searchfield: '',
    }
  }


  handleClick = (category) => {
    this.setState({
      category: category
    });
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
   
}

  render() {
    const filterQuotes = QuotesList.filter(quote => {
      return quote.author.toLowerCase().includes(this.state.searchfield.toLowerCase());
  });

  console.log(filterQuotes);

    return (

      <div className="App">
             
        {
          
          this.state.category === 0 ?
            <div>
               <header> مكتبة الإقتباسات العربية</header>

              <Container handleClick={this.handleClick}/>
            </div>
            :
            this.state.category === 1?
            <div>
                 <Header  onSearchChange={this.onSearchChange}/>

                <Wisdom quotesList={filterQuotes}  />
                </div>
          
              :
              <Wisdom quotesList={filterQuotes}/>

        }


      </div>

    );
  }

}

export default App;
