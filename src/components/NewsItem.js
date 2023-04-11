import React, { Component } from 'react'
//export class NewsItem extends Component {
  const NewsItem = (props)=>{
  //render() {
    let {title,description, imageUrl,newsUrl,author,date,source}=props;//this.props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          {/* <span className={`badge rounded-pill bg-${this.props.col}`} style={{left: "90%",zIndex:1}}>{source}</span> */}
          <span className={`badge rounded-pill bg-${props.col}`} style={{left: "90%",zIndex:1}}>{source}</span>
          </div>
  <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-97838158,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-1525369/97838158.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
 // }
}
export default NewsItem
