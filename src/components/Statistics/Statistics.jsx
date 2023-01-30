import css from 'components/Statistics/Statistics.module.css';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {    
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {stats.map(({ id, label, percentage}) => {
                    return (
                        <StatisticsItem key={id} label={label} percentage={percentage}/>
                    );                    
                })}  
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf( 
                PropTypes.exact({
                    id: PropTypes.string,
                    label: PropTypes.string.isRequired,
                    percentage: PropTypes.number.isRequired,
    }))
}
