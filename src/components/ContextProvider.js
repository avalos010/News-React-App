import React, {
  Component
} from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    Topnews: null,
    JumboNews: null,
    AppleNews: null,
    MicrosoftNews: null
  }
  componentWillMount = () => {

    //Fetch Latest
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f220456e25214eb3804eaa77e7ecca42`;
    fetch(url)
      .then(res => res)
      .then(res => res.json())
      .then(json => this.setState({
        Topnews: json.articles
      }))
      .then(() => this.setState({
        JumboNews: this.state.Topnews.splice(0, 1),
      }))
    //Fetch Apple News

    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2018-06-05&sortBy=popularity&apiKey=f220456e25214eb3804eaa77e7ecca42`)
      .then(res => res)
      .then(res => res.json())
      .then(json => this.setState({
        AppleNews: json.articles
      }))

    //Fetch MicrosoftNews
    fetch(`https://newsapi.org/v2/everything?q=Microsoft&from=2018-06-05&sortBy=popularity&apiKey=f220456e25214eb3804eaa77e7ecca42`)
      .then(res => res)
      .then(res => res.json())
      .then(json => this.setState({
        MicrosoftNews: json.articles
      }))



  }



  render() {
    return ( <
      MyContext.Provider value = {
        {
          state: this.state,
          Topnews: this.state.Topnews,
          JumboNews: this.state.JumboNews,
          AppleNews: this.state.AppleNews,
          MicrosoftNews: this.state.MicrosoftNews,

        }
      } > {
        this.props.children
      } <
      /MyContext.Provider>
    )
  }




}
