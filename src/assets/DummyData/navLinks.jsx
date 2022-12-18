import dashboard from '../../assets/Images/dashboardIcon.png'
import assets from '../../assets/Images/assetsIcon.png'
import booking from '../../assets/Images/bookingIcon.png'
import sell_car from '../../assets/Images/sellCarIcon.png'
import buy_car from '../../assets/Images/buyCarIcon.png'
import services from '../../assets/Images/servicesIcon.png'
import calendar from '../../assets/Images/calendarIcon.png'
import messages from '../../assets/Images/messagesIcon.png'



const navLinks = [
    {
        path: "/dashboard",
        icon: dashboard,
        display: "Dashboard",
    },
    {
        path: "/assets",
        icon: assets,
        display: "Assets"
    },
    {
        path: "/bookings",
        icon: booking,
        display: "Booking",
    },
    {
        path: "/sell-car",
        icon: sell_car,
        display: "Sell Cars",
    },
    {
        path: "/buy-car",
        icon: buy_car,
        display: "Buy Cars",
    },
    {
        path: "/services",
        icon: services,
        display: "Services",
    },
    {
        path: "/calendar",
        icon: calendar,
        display: "Calendar",
    },
    {
        path: "/messages",
        icon: messages,
        display: "Messages",
    },


];

export default navLinks;