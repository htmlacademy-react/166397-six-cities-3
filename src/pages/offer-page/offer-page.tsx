import { Helmet } from 'react-helmet-async';
import { NewReview, ReviewType } from '../../types/review-type';
import Reviews from '../../components/reviews/reviews';
import Places from '../../components/places/places';
import ReviewForm from '../../components/review-form/review-form';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../authorizationStatus';
import Map from '../../components/map/map';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer-type';
import NotFoundPage from '../not-found-page/not-found-page';
import { offer as pageOffer } from '../../mocks/offer';
import { capitalizeValue, getRaitingPercentage } from '../../utils/common';

type OfferPageProps = {
  onSubmit: (review: NewReview) => void;
  reviews: ReviewType[];
  offers: Offer[];
}

const OfferPage = ({onSubmit, reviews, offers}: OfferPageProps): JSX.Element => {
  const {id: offerId} = useParams();
  const authorizationStatus = getAuthorizationStatus();
  const isUserSignIn = authorizationStatus === AuthorizationStatus.Auth;
  const activeOffer = offers.find((offer) => offer.id === offerId);
  const starsWidth = getRaitingPercentage(pageOffer.rating);

  if (!activeOffer) {
    return <NotFoundPage />;
  }

  const nearOffers = offers.filter((offer) => offer.city.name === activeOffer?.city.name && offer.id !== offerId).slice(0, 3);
  const visibleOffers = [...nearOffers, activeOffer];

  return (
    <>
      <Helmet>
        <title>6 cities. Предложения</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {pageOffer.images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={image}
                  alt="Photo studio"
                />
              </div>
            )).slice(0, 6)}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {pageOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {pageOffer.title}
              </h1>
              <button className={`offer__bookmark-button ${pageOffer.isFavorite && 'offer__bookmark-button--active'} button`} type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: starsWidth }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{pageOffer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{capitalizeValue(pageOffer.type)}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {pageOffer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {pageOffer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{pageOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&rsquo;s inside</h2>
              <ul className="offer__inside-list">
                {pageOffer.goods.map((good) => (
                  <li key={good} className="offer__inside-item">{good}</li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${pageOffer.host.isPro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={pageOffer.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{capitalizeValue(pageOffer.host.name)}</span>
                <span className="offer__user-status">{pageOffer.host.isPro ? 'Pro' : ''}</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {pageOffer.description}
                </p>
                <p className="offer__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              {reviews?.length && <Reviews reviews={reviews} />}
              {isUserSignIn && <ReviewForm onSubmit={onSubmit} />}
            </section>
          </div>
        </div>
        <Map className="offer__map" offers={visibleOffers} activeOffer={activeOffer} />
      </section>
      <div className="container">
        <Places className="near-places" imgClassName="near-places__image-wrapper" listClassName="near-places__list" cardClassName="near-places__card" offers={nearOffers}>
          <h2 className="near-places__title">
              Other places in the neighbourhood
          </h2>
        </Places>
      </div>
    </>
  );
};

export default OfferPage;
