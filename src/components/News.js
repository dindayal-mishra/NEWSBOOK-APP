import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
static defaultProps ={
    country:'in',
    pageSize:8,
    category:'general',
    }

  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
        articles: [],
        loading : false,
        page:1,
        totalResults:0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - NEWS-BOOK`;
  }

  async updateNews(){
    this.props.setProgress(10);   
    // setprogress use for top loading bar
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7166504cd7614efbb1de6861a4fdd13f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data =  await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({articles : parsedData.articles ,
      totalResults:parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updateNews()
  }

  // handlePrevClick = async ()=> {
  //   this.setState({page:this.state.page-1});
  //   this.updateNews()
  // }

  // handleNextClick = async ()=> {
  //   this.setState({page:this.state.page-1});
  //   this.updateNews()
  // }
  // handleprev and handlenextclick use for next page and preivious page

  fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7166504cd7614efbb1de6861a4fdd13f&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
   this.setState({page : this.state.page + 1})
   let data =  await fetch(url);
   let parsedData = await data.json()
   this.setState({
     articles : this.state.articles.concat(parsedData.articles) ,
     totalResults:parsedData.totalResults,
   })
  };

  render() {
    return (
      <>
        <h1 style={{margin:'35px 0px',marginTop:'90px',backgroundColor:'skyblue'}} className="text-center" >"NEWS BOOK" - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading &&  <Spinner/>}
        <InfiniteScroll
          // datalength,next,hasmore,loader is inbuilt component for infinite scroller when npm-infinite scroller
          // install all the component automatic added to the infinite scroller
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
         <div className="container">
          <div className="row"> 
                {this.state.articles.map((element)=>{
                return <div className="col md-4"  key={element.url} >
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                  })}
                </div>
                </div>       
                
        </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button"className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
         </>
      
    )
  }
}

export default News

