import Image from "./image";

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
                  <div key={`${d.title}-${i}`} className='col-sm-3' id="glr">
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
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
