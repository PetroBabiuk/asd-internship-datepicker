import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background-color: dodgerblue;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button,
input,
select {
  height: 2em;
  font-size: 1rem;
  background-color: #fff;
  color: #363636;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
}

button:focus,
input:focus,
select:focus {
  outline: none;
}

button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.25em 0.75em;
  text-align: center;
}

button[disabled] {
  background-color: #dbdbdb;
}

select,
input {
  padding: 0.25em 0.5em;
}

input {
  max-width: 40%;
}

.App {
  max-width: 320px;
  padding: 10px;
  border: 2px solid #0081ff;
  border-radius: 20px;
  background-color: #ffffff;
}

.radiobuttons-form {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.inputs {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.calendar div {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.calendar div button,
.calendar div select {
  margin: 0 4px;
}

.calendar table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  margin: auto;
}

.calendar th {
  vertical-align: middle;
  text-align: center;
  height: 36px;
}

.calendar .day {
  padding: 4px 8px;
  vertical-align: middle;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 10px;
}

.calendar .day:hover {
  background-color: #eaeaea;
  cursor: pointer;
}

.calendar .day.selected {
  border: 2px solid dodgerblue;
}

.calendar .day.today {
  background-color: dodgerblue;
  color: white;
}

.calendar .day.today:hover {
  background-color: #0081ff;
}

.calendar .day.today.selected {
  border: 2px solid lightgray;
}
`

export default GlobalStyle;