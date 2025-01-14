// import { useRef } from "react";
import Tabs from "./Tabs";
import LoadingImage from "./Image";
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
                        <LoadingImage src={"./images/test1.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Text caption 1</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/test1.png"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Text caption 2</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/test3.jpeg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Text caption 3</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/test4.jpeg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Text caption 4</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/test2.jpeg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
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
            <div id="jackets" className="type" >
                <h3>Jackets</h3>
                <div className="items-div">
                    <LoadingImage src={'./images/test2.jpeg'} alt={'jackets'} height={'200px'} width={'150px'} />
                </div>
            </div>
            <div id="trousers" className="type" >
                <h3>Trousers</h3>
            </div>
            <div id="skirts" className="type" >
                <h3>Skirts</h3>
            </div>
            <div id="shorts" className="type" >
                <h3>Shorts</h3>
            </div>
            <div id="shirts" className="type" >
                <h3>Shirts</h3>
            </div>
        </div>
    )
}

export default Main;