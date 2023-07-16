import React from 'react'
// import PropTypes from 'prop-types'

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="mt-2">
            <div className="card" >
                <span className="position-absolute top-0 end-0 badge">{source}</span>
                <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "35vh" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}

                    </h5>
                    <p className="card-text">{description}....</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm" style={{
                        backgroundColor: "#002e5b",
                        color: "white"
                    }}>Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
