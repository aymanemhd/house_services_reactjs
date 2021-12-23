import { BrowserRouter as  Link } from 'react-router-dom'
function image({ title, smallImage,lnk }) {

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <Link path={lnk} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </Link>{" "}
      </div>
    </div>
  );
}

export default image;
