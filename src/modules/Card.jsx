import Info from "./info.jsx"
import Interests from "./Interests.jsx"
import About from "./About.jsx"
import Footer from "./Footer.jsx"

export default function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}