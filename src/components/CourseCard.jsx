import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({course}) => {
    const {_id,title,imageUrl,createdDate,description} = course
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shadow-sm ">
  <figure>
    <img className='w-[400px] h-[200px] object-cover'
      src={imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {/* <p>{createdDate}</p> */}
    <p> Date: <span className='font-medium'>{new Date(course.createdDate).toISOString().slice(0, 10)}</span></p>
    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {description}
                </p>
    <div className="card-actions justify-end">
      <Link to={`/all-courses/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseCard;