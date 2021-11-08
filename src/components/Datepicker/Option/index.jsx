import PropTypes from 'prop-types';

const Option = ({ value, children }) => (
    <option value={value}>{children}</option>
);

Option.propTypes = {
    value: PropTypes.number,
    children: PropTypes.node,
}

export default Option;