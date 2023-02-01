import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps ={
    country : 'in',
    size : 6 ,
    category :'general'
  }
  static propTypes={
 country : PropTypes.string,
 size : PropTypes.number ,
 category : PropTypes.string
    }
    
    constructor(){
        super();
        this.state = {
        articles : [],
        loading : false,
        page : 1
        }
    }
    async componentDidMount(){
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=703f96dda0f546199425b259106072ff&page=1&pagesize=${this.props.size}`;
   let data= await fetch(url);
   let parsedData = await data.json();
   this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults});

    }

    handlePrev= async()=>{
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=703f96dda0f546199425b259106072ff&page=${this.state.page - 1}&pagesize=${this.props.size}`;
        let data= await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles 
        })
    
}
    handleNext= async()=>{
        if(this.state.page+1> Math.ceil(this.state.totalResults/12)){

        }
        else {let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=703f96dda0f546199425b259106072ff&page=${this.state.page +1}&pagesize=${this.props.size}`;
        let data= await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles 
        })
       }
    }
    
  render() {
    return (
      
        <div className="container my-3 ">
          
           <h1 className="text-centre" style={{magin : '35px 0px',marginTop: '80px'}}>Some News , Some Knowledge !! </h1> 
          <div className="row">
            {this.state.articles.map((element)=>{
             return <div className="col-md-4">
             <NewsItem title ={element.title.slice(0,45)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} 
             newsUrl ={element.url} author={element.author} date={element.publishedAt} source ={element.source.name}/>
             </div>            
            })}

        </div>
        <div className="container  d-flex justify-content-between">  
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr; </button>
        </div>
        <div className="container text-center " >
           <h6 style={{color : '#180447'}} >Made With LOVE by Vivek</h6> 
        </div>
        </div>
        
     
    )
  }
}

export default News