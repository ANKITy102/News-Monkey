import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useEffect } from 'react';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true)
  const [pageNo, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {

    props.setProgress(40);
    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`)
    props.setProgress(60)
    let parsedUrl = await url.json();
    props.setProgress(80)
    // setState({ pageNo: pageNo+1 })
    setArticles(parsedUrl.articles)
    setTotalResults(parsedUrl.totalResults)
    console.log(parsedUrl)
    props.setProgress(100);
    setPage(pageNo + 1)
    console.log("Aritcle length: ", articles.length, " total Results: ", totalResults);
    console.log(pageNo, " pageNO")


  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])


  // handlePrevClick = async () => {
  //   updateNews(page - 1);
  // }
  // handleNextClick = async () => {
  //   console.log("next")
  //   if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

  //   }
  //   else {
  //     updateNews(page + 1)
  //   }
  // }
  const fetchMOreData = async () => {

    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    // console.log(articles.length, totalResults)
    props.setProgress(40);
    // console.log(pageNo, " pageNO")
    // console.log("loading")
    document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`
    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`)
    props.setProgress(60);
    let parsedUrl = await url.json();
    console.log(parsedUrl)
    props.setProgress(80)
    setArticles(articles.concat(parsedUrl.articles))
    setTotalResults(parsedUrl.totalResults)
    setPage(pageNo + 1)
    props.setProgress(100);
                                        
    // console.log(pageNo, " pageNO")

  };

                       
  // console.log("hello")
  return (
    <>

      {articles.length ? <div className="container-sm my-3">
        <h2 style={{ marginTop: "80px", color: "white", marginBottom: "20px" }}>NewsMonkey - {props.category}</h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMOreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader />}
          endMessage={<h3 style={{ color: "white", textAlign: "center" }}>No more items to load</h3>}
        // scrollThreshold={10}
        // scrollableTarget="scrollableDiv" // Set the threshold to 100 pixels from the bottom
        >
          <div className="container">

            <div className="row" >
              {articles.map((element) => {
                return <div className="col-md-4 mb-3"><NewsItem title={element.title ? element.title.slice(0, 44) : "No title"} description={element.description ? element.description.slice(0, 88) : "author didn't provide description"} imageUrl={element.urlToImage ? element.urlToImage : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </div > : <Loader />
      }

    </>
  )

}
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
