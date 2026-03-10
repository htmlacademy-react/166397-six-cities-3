import Review from '../review/review';

type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map(({id, user, rating, comment, date}) => <Review key={id} user={user} rating={rating} comment={comment} date={date} />)}
    </ul>
  );
}

export default Reviews;
