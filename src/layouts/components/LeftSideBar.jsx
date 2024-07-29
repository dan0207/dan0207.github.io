import Card from '../../components/ui/Card'
import EventCalendar from '../../components/EventCalendar'

function leftSideBar() {
    return (
        <div className="col-12 col-lg-3 order-2 order-lg-1">
            <Card card={libraryHours} />
            <Card card={eventsCalendar} />
            <Card card={documentations} />
        </div>
    )
}




const libraryHours = {
    title: "LIBRARY HOURS",
    content:
        <>
            <h5 className="card-title">
                Monday - Thursday
            </h5>
            <p className="card-text fs-2 fw-bold text-primary">
                7AM-6PM
            </p>
        </>,
}

const eventsCalendar = {
    title: "CALENDAR OF EVENTS",
    content: <EventCalendar />

}


const documentations = {
    title: "DOCUMENTATION",
    content:
        <>
            <ul className="text-start">
                <li><a href="">Library Website Instructions</a></li>
                <li><a href="">Login using CvSU Mail</a></li>
                <li><a href="">Requesting Reservation for Borrowing Books</a></li>
            </ul>
        </>
}



export default leftSideBar