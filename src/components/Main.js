import Tabs from "./Tabs";
const Main = () => {
    return (
        <div className="main">
            <header>
                <div>
                    <span><h2 className="itl title">MSAANI </h2><h4 className="itl motto title">Collections</h4></span>
                    <p className="itl motto">Quality never goes out of style</p>
                </div>
            </header>
            <Tabs />
            <div className="present" ></div>
            <div id="jackets" className="type" ></div>
            <div id="trousers" className="type" ></div>
            <div id="skirts" className="type" ></div>
            <div id="shorts" className="type" ></div>
            <div id="shirts" className="type" ></div>
        </div>
    )
}

export default Main;