import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
  const { _id, title, imageUrl, createdDate, description } = course
  return (
    <div>
      {/* <div className="card bg-base-100 w-full max-w-sm shadow-sm ">
        <figure>
          <img className='w-[400px] h-[200px] object-cover'
            src={imageUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
      
          <p> Date: <span className='font-medium'>{new Date(course.createdDate).toISOString().slice(0, 10)}</span></p>
          <p className=" text-sm mt-2 line-clamp-3">
            {description}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/all-courses/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div> */}

       <div>
      <div className="card  w-full max-w-sm shadow-sm p-2 bg-white">
        <figure>
          <img
            className="w-[400px] h-[200px] object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className='text-black'>
            Date:{' '}
            <span className="font-medium">
              {new Date(createdDate).toISOString().slice(0, 10)}
            </span>
          </p>
          <p className="text-sm mt-2 line-clamp-3 text-black">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/all-courses/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseCard;