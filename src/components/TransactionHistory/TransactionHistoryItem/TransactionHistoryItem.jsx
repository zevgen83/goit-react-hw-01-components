import css from 'components/TransactionHistory/TransactionHistoryItem/TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
    return (
        <tr key={id} className={css.rowTable}>
            <td className={css.cellTable}>{type}</td>
            <td className={css.cellTable}>{amount}</td>
            <td className={css.cellTable}>{currency}</td>
        </tr>
    );
}

TransactionHistoryItem.propTypes = {
    id: PropTypes.string, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired, 
    currency: PropTypes.string.isRequired,
}