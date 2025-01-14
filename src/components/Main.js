// import { useRef } from "react";
import Tabs from "./Tabs";

const Main = () => {
    let slideIndex=0;
    let i;

    const showSlides = () => {
        let slides = document.getElementsByClassName('slide');
        let dots = document.getElementsByClassName('dot');

        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) { slideIndex = slides.length; }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        
    }
    setInterval(showSlides, 10000);
    
    return (
        <div className="main">
            <header>
                <div>
                    <span><h2 className="itl title">MSAANI </h2><h4 className="itl motto title">Collections</h4></span>
                    <p className="itl motto">Quality never goes out of style</p>
                </div>
            </header>
            <Tabs />
            <div className="display-hero">
                <div className="hero" >
                    <div className="slide fade">
                        <img src="./images/test1.jpg" alt="display item" />
                        <div className="text">Text caption 1</div>
                    </div>
                    <div className="slide fade">
                        <img src="./images/test1.png" alt="display item" />
                        <div className="text">Text caption 2</div>
                    </div>
                    <div className="slide fade">
                        <img src="./images/test3.jpeg" alt="display item" />
                        <div className="text">Text caption 3</div>
                    </div>
                    <div className="slide fade">
                        <img src="./images/test4.jpeg" alt="display item" />
                        <div className="text">Text caption 4</div>
                    </div>
                    <div className="slide fade">
                        <img src="./images/test2.jpeg" alt="display item" />
                        <div className="text">Text caption 5</div>
                    </div>
                </div>
                <div className="dots" >
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            <div id="jackets" className="type" ></div>
            <div id="trousers" className="type" ></div>
            <div id="skirts" className="type" ></div>
            <div id="shorts" className="type" ></div>
            <div id="shirts" className="type" ></div>
        </div>
    )
}

export default Main;