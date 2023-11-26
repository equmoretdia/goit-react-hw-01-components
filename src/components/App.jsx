import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// import FriendList from './FriendList/FriendList';
// import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';

import PropTypes from 'prop-types';

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        key={username}
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList />
      <TransactionHistory />  */}
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default App;
