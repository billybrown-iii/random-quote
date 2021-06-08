import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import TwitterIcon from '@material-ui/icons/Twitter';


class QuoteContainer extends Component {

    state = {
        data: [{quote: {
                    body: '', 
                    author: ''
                }}],
        url: '',
        fade: 'in',
        colorNum: Math.floor(Math.random() * 10 + 1)
    }

    updateCurrentQuote = () => {
        const url = 'https://favqs.com/api/qotd';

        
        
        fetch(url)
            .then(this.setState({fade: 'out'}))
            .then(response => response.json())
            .then(data => {
                console.log(data.quote.body);
                document.body.className = '';
                this.setState(function(state, props){
                    let newNum = Math.floor(Math.random() * 10 + 1);
                    while (newNum === state.colorNum){
                        newNum = Math.floor(Math.random() * 10 + 1)
                    }
                    return {colorNum: newNum}
                })
                document.body.classList.add("c" + this.state.colorNum);
                setTimeout(() => {this.setState({
                data: [data],
                url: 'https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="' 
                + data.quote.body
                + '" - '
                + data.quote.author,
                fade: 'in'})}, 400)})
    }

    componentDidMount(){
        this.updateCurrentQuote();
    }
    
    render(){
        const {data} = this.state;
        
        const result = data.map((item) => {
            return (
                <div id="the-quote" className={this.state.fade}>
                    <div 
                        id="text"
                        dangerouslySetInnerHTML={{__html: item.quote.body}}>
                        {/* {item.quote.body} */}
                    </div>
                    <div id="author">
                        - {item.quote.author}
                    </div>
                </div>
                // <ul>
                //     <li>{item.quote.author}</li>
                //     <li>{item.quote.body}</li>
                // </ul>
            )
        })
        return (
            <div id="container">


            <div id="quote-box">
                <div>
                    {result}
                </div>
                    <div id="link-container">
                        <IconButton 
                            color="primary" 
                            aria-label="Tweet quote"
                            href={this.state.url}
                            target="_blank"
                            id="tweet">
                            <TwitterIcon />
                        </IconButton>
                        <div id="new-quote">
                            <IconButton 
                                color="primary" 
                                aria-label="New quote"
                                onClick={this.updateCurrentQuote}
                                id="refresh">
                                <ReplayIcon />
                            </IconButton>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default QuoteContainer;