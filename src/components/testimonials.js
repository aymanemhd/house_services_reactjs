function testimonials(props) {
    return (
        <div id='testimonials'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>COMMENTAIRE</h2>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                      </div>
                      <div className='testimonial-content'>
                        <p>"{d.text}"</p>
                        <div className='testimonial-meta'> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
}

export default testimonials
