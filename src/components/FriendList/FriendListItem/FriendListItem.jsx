import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li key={id} className={css.item}>
            <span className={ isOnline ? css.statusOnLine : css.statusOffLine}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );    
}

FriendsListItem.propTypes = {
    id: PropTypes.number, 
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    isOnline: PropTypes.bool.isRequired,
}