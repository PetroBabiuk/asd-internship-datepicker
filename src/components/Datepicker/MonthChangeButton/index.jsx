import PropTypes from 'prop-types';

const MonthChangeButton = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

MonthChangeButton.propTypes = {
    onClick: Function.prototype,
    disabled: PropTypes.bool,
    children: PropTypes.node,
}

export default MonthChangeButton;