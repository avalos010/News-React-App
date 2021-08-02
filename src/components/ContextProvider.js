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
    const url = `https://newsapi.org/v2/everything?q=latest&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({
        Topnews: json.articles
      }))
      .then(() => this.setState({
        JumboNews: this.state.Topnews.splice(0, 1),
      }))
    //Fetch Apple News

    fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({
        AppleNews: json.articles
      }))

    //Fetch MicrosoftNews
    fetch(`https://newsapi.org/v2/everything?q=microsoft&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({
        MicrosoftNews: json.articles
      }))



  }



  render() {
    return ( 
      <MyContext.Provider value = {
        {
          state: this.state,
          Topnews: this.state.Topnews,
          JumboNews: this.state.JumboNews,
          AppleNews: this.state.AppleNews,
          MicrosoftNews: this.state.MicrosoftNews,

        }
      } > {
        this.props.children
      } </MyContext.Provider>
    )
  }




}
