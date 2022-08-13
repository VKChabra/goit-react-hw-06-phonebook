import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
