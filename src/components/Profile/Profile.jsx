import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.profile} key={username}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>
            {stats.followers.toLocaleString()}
          </span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views.toLocaleString()}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Profile;
