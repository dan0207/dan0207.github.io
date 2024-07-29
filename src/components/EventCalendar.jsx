import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function EventCalendar() {
    const [value, setValue] = useState(new Date())

    const handleChange = (newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Calendar onChange={handleChange} value={value} />
            <h1>{value.getMonth()}</h1>
        </div>
    )
}


export default EventCalendar

