import React from 'react'

const Cart = ({ movie }) => {
    return (
        <div className='rounded-1 border border-1 border-secondary overflow-hidden'>
            <div className="card-header px-3 py-2 border-bottom-light">
                <span className={`badge text-capitalize ${movie.label === "upcoming" ? "bg-success" : "bg-primary"}`}>{movie.label}</span>
            </div>
            <div className='image-wrapper border-bottom-light d-flex justify-content-center align-items-center' height="200px">
                <img src={movie.img} alt={movie.name} />
            </div>
            <div className='px-3 py-2 border-bottom-light'>
                <h6 className='fw-bold'>{movie.name}</h6>
                <p className='mt-1'>
                    {movie.details}
                </p>
            </div>
            <div className='text-capitalize px-3 py-2 fs-6 border-bottom-light'>
                {movie.actor}
            </div>
            <div className='text-capitalize px-3 py-2 fs-6 border-bottom-light'>
                {movie.actress}
            </div>
            <div className='text-capitalize px-3 py-2 fst-italic fs-6 card-footer'>
                {movie.type}
            </div>
        </div>
    )
}

export default Cart