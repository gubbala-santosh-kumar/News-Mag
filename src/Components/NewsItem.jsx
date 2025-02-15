import image from '../assets/newsImage.jpg';
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <center><img src={src?src:image} style={{height:"200px",width:"320px"}} className="card-img-top" alt="News Image"/></center>
  <div className="card-body"> 
    <h5 className="card-title">{title.slice(0,35)}</h5>
    <p className="card-text">{description?description.slice(0,70):""}</p>
    <center><a href={url} className="btn btn-primary">Read More</a></center>
  </div>
</div>
  )
}

export default NewsItem