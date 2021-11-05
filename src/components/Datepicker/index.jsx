import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as calendar from '../../utils/calendar';
import './index.css';

const Datepicker = ({
    onChange = Function.prototype,
    type,
    years = calendar.years,
    monthNames = calendar.monthNames,
    weekDayNames = calendar.weekDayNames,
}) => {
    
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

    const handlePrevMonthButtonClick = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNextMonthButtonClick = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const handleSelectYearChange = (event) => {
        const year = event.target.value;
        setDate(new Date(year, date.getMonth()));
    };

    const handleSelectMonthChange = (event) => {
        const month = event.target.value;
        setDate(new Date(date.getFullYear(), month));
    };


    const handleDayClick = date => {
        setSelectedDate(date);
        onChange(date);
    };

    return (
        <div className="calendar">
            <header>
                <button
                    onClick={handlePrevMonthButtonClick}
                    disabled={date.getFullYear() === years[0] && date.getMonth() === 0}
                >
                    {'<'}
                </button>

                <select
                    value={date.getMonth()}
                    onChange={handleSelectMonthChange}
                >
                    {monthNames.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>

                <select
                    value={date.getFullYear()}
                    onChange={handleSelectYearChange}
                >
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option>
                    )}
                </select>

                <button
                    onClick={handleNextMonthButtonClick}
                    disabled={date.getFullYear() === years[years.length - 1] && date.getMonth() === 11}
                >
                    {'>'}
                </button>
            </header>

            <table>
                <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>
                        )}
                    </tr>
                </thead>

                <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classNames('day', {
                                        'today': calendar.areEqual(date, new Date()),
                                        'selected': calendar.areEqual(date, selectedDate)
                                    })}
                                    onClick={() => handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

Datepicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    years: PropTypes.oneOf([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]),
    monthNames: PropTypes.oneOf(['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']),
    weekDayNames: PropTypes.oneOf(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']),
}

export default Datepicker;