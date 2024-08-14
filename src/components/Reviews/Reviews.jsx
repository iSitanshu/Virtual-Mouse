import React from 'react';
import './Reviews.css';
import { Logogif } from '../../assets/assets';
import { BackgroundImg } from '../../assets/assets';


const reviews = [
  {
    name: 'Mummy',
    rating: 5,
    comment: 'The virtual mouse system is amazing! It has completely changed the way I interact with my computer.',
    image: Logogif,
  },
  {
    name: 'Papa',
    rating: 4,
    comment: 'Very innovative and user-friendly. Just a few minor glitches but overall a great product Highly recommend for anyone looking to enhance their experience!.',
    image: Logogif,
  },
  {
    name: 'Debu',
    rating: 5,
    comment: 'Fantastic technology! Works seamlessly and makes computer interaction much easier.',
    image: Logogif,
  },
];

const Reviews = () => {
  return (
    <div className="reviews" style={{ backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: 'cover', backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', minHeight: '50vh' }}>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className={`review-card ${index === 1 ? 'center-review' : ''}`}>
            <h2>{review.name}</h2>
            <img src={review.image} alt={review.name} className="review-image" />
            <div className="review-rating">
              {'⭐'.repeat(review.rating)}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
