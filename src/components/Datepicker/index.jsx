import { useState, useEffect } from 'react';
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
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    useEffect(() => {
        onChange(startDate, endDate);
    }, [startDate, endDate, onChange]);

    useEffect(() => {
        setSelectedDates([]);
        setStartDate(null);
        setEndDate(null);
    },[type])

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
    
    const fillSelectedDates = (startDate, endDate) => {
        const milisecondsInDay = 86400000;
        if (startDate.getTime() < endDate.getTime()) {
            for (let t = startDate.getTime(); t <= endDate.getTime(); t += milisecondsInDay) {
                setSelectedDates(prev => [...prev, new Date(t)])
            }
        } else {
            for (let t = endDate.getTime(); t <= startDate.getTime(); t += milisecondsInDay) {
                setSelectedDates(prev => [...prev, new Date(t)])
            }
        }
    }

    const handleDayClick = date => {
        if (type && type === 'simple') {
            if (calendar.areEqual(date, startDate)) {
                setStartDate(null);
                return;
        }
            setStartDate(date);
        }
        if (type && type === 'range') {
            if (startDate === null) {
                setStartDate(date);
            }
            if (startDate !== null && (date.getTime() === startDate.getTime())) {
                setStartDate(null);
                setEndDate(null);
                setSelectedDates([]);
            }
            if (startDate !== null && (date.getTime() !== startDate.getTime()) && endDate === null) {
                setEndDate(date);
                fillSelectedDates(startDate, date);
            }
            if (startDate !== null && endDate !== null && (startDate && date.getTime() !== startDate.getTime())
                && selectedDates.every(selectedDate => (selectedDate.getTime() !== date.getTime()))) {
                    setStartDate(date);
                    setEndDate(null);
                    setSelectedDates([]);
            }
            if (startDate !== null && endDate !== null && (startDate && date.getTime() !== startDate.getTime())
                && selectedDates.some(selectedDate => selectedDate.getTime() === date.getTime())) {
                    setSelectedDates([]);
                    setEndDate(date);
                    fillSelectedDates(startDate, date);
            }
        }
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
                                        'selected': calendar.areEqual(date,startDate) || selectedDates.some(selectedDate => calendar.areEqual(date,selectedDate))
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
    type: PropTypes.string,
    years: PropTypes.oneOf([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]),
    monthNames: PropTypes.oneOf(['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']),
    weekDayNames: PropTypes.oneOf(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']),
}

export default Datepicker;