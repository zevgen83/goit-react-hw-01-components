import css from 'components/FriendList/FriendList.module.css';
import { FriendsListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                );
            }
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf( 
                PropTypes.exact({
                    id: PropTypes.number.isRequired, 
                    avatar: PropTypes.string.isRequired, 
                    name: PropTypes.string.isRequired, 
                    isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired
}