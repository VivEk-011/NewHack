import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description , imageUrl ,newsUrl , author  , date ,source} = this.props;
    return (
        <div className="conatiner my-3">  
        <div className="card" >
            <div style={{display : 'flex', justifyContent : 'end' , position:'absolute' ,right:'0' }} >
            <span className="badge rounded-pill bg-danger" >{source}</span>
            </div>
      
        <img src={!imageUrl ? "https://images.livemint.com/img/2022/08/10/600x338/irctc_1660127138907_1660127139048_1660127139048.JPG" : imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text ">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ?author:"Unkonown"} at {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Check </a>
        </div>
      </div>
    
      </div>
    )
  }
}

export default NewsItem