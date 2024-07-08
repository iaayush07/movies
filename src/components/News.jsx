import React from 'react'
// import {news} from './../assets/js/movies'

const News = ({news}) => {
  return (
    <div className='rounded-1 border border-1 border-secondary overflow-hidden'>
            <div className="card-header px-3 py-2 border-bottom-light">
                <span className={`badge text-capitalize bg-primary`}>{news.categoryNames[0]}</span>
            </div>
            <div className='image-wrapper border-bottom-light d-flex justify-content-center align-items-center' height="200px">
                <img src={news.imageUrl} alt="img" />
            </div>
            <div className='px-3 py-2 border-bottom-light'>
                <h6 className='fw-bold'>{news.subtitle}</h6>
                <p className='mt-1'>
                    {news.content}
                </p>
            </div>
            <div className='text-capitalize px-3 py-2 fst-italic fs-6 card-footer'>
                {news.authorName}
            </div>
        </div>
  )
}

export default News