import PropTypes from 'prop-types';

const Select = ({ onChange, value, children }) => (
    <select
        value={value}
        onChange={onChange}
    >
        {children}
    </select>
);

Select.propTypes = {
    onChange: Function.prototype,
    value: PropTypes.number,
    children: PropTypes.node,
}

export default Select;