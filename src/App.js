import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import { QuotesList } from './components/QuotesList';
import Header from './components/Header';
import Category from './components/Category';



class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      searchfield: '',
      category: '',
    }
  }


  handleClick = (home, category) => {
    this.setState({
      home: home,
      category: category
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render() {

    const categoryFilter = QuotesList.filter(quote => {
      return ((quote.category === this.state.category) && (quote.author.toLowerCase().includes(this.state.searchfield.toLowerCase())));
    });


    return (
      <div className="App">
        {
          this.state.home === true ?
            <div>
              <header> مكتبة الإقتباسات العربية </header>
              <Container handleClick={this.handleClick} />
            </div>
            :
            <div>
              <Header onSearchChange={this.onSearchChange} handleClick={this.handleClick} />
              <Category quotesList={categoryFilter} />

            </div>
        }

      </div>

    );
  }

}

export default App;
