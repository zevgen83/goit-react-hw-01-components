import css from 'components/TransactionHistory/TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.headTable}>
                <tr>
                <th className={css.elTable}>Type</th>
                <th className={css.elTable}>Amount</th>
                <th className={css.elTable}>Currency</th>
                </tr>
            </thead>
            <tbody>

                {items.map(({ id, type, amount, currency }) =>  {
                    return (
                        <TransactionHistoryItem 
                            key={id} 
                            type={type} 
                            amount={amount} 
                            currency={currency}
                        />
                    );
                }
                )}                
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf( 
                PropTypes.exact({
                    id: PropTypes.string.isRequired, 
                    type: PropTypes.string.isRequired, 
                    amount: PropTypes.string.isRequired, 
                    currency: PropTypes.string.isRequired,
    }).isRequired).isRequired
}