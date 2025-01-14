import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header>
            <div>
                <span><h2 className="itl title">M.J </h2><h4 className="itl motto title">Collections</h4></span>
                <p className="itl motto">Quality never goes out of style</p>
            </div>
            <img className="header-icon" src="./images/icon.jpg"  />
            <Link className="back-button" to={'/'}>Back</Link>
        </header>
    )
}