import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
        <div className="my-3">
       <div className="card" style={{width: "18rem"}}>
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
        <span className="badge rounded-pill bg-success">{source}</span>
        </div>
            <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text" ><small className="text-danger">By {!author? "unknown" :author} On {new Date(date).toGMTString()}</small></p>
                 <a href={newsUrl} terget="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
          </div>
         
      </div>
     
    )
  }
}

export default NewsItem
