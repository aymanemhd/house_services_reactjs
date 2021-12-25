import Details from "./Details";
import Image from "./image";
import { Link } from "react-router-dom";

function gallery(props) {
    return (
        <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Notre Services</h2>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-sm-4' id="glr">
                    <Link to={"Annonseur"}><Image  title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}   /></Link>
                    
                  </div>
                ))
                : 'Loading...'}
            </div>
          </div>
        </div>
      </div>
    )
}

export default gallery
