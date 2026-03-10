import Review from '../../ui/review/review';
import { ReviewType } from '../../types/review-type';

type ReviewsProps = {
  reviews: ReviewType[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map(({id, user, rating, comment, date}) => <Review key={id} user={user} rating={rating} comment={comment} date={date} />)}
    </ul>
  );
}

export default Reviews;
