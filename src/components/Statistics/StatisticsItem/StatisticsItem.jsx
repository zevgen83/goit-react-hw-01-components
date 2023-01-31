import css from 'components/Statistics/StatisticsItem/StatisticsItem.module.css';
import { getRandomHexColor } from '../../../utils/getRandomHexColor';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>);  
}

StatisticsItem.propTypes = {    
    label: PropTypes.string.isRequired, 
    percentage: PropTypes.number.isRequired,
}