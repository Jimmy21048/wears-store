// import { useRef } from "react";
import Tabs from "./Tabs";
import LoadingImage from "./Image";
import { items } from "./itemArrays";
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
                    <span><h2 className="itl title">M.J </h2><h4 className="itl motto title">Collections</h4></span>
                    <p className="itl motto">Quality never goes out of style</p>
                </div>
                <img className="header-icon" src="./images/icon.jpg"  />
            </header>
            <Tabs />
            <div className="display-hero">
                <div className="hero" >
                    <div className="slide fade">
                        <LoadingImage src={"./images/display4.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Quality products</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/display2.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Affordable prices</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/display3.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Best customer experience</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/display1.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">A variety of products</div>
                    </div>
                    <div className="slide fade">
                        <LoadingImage src={"./images/display5.jpg"} className={'hero-img'} alt={'display item'} height={'55vh'} width={'350px'} />
                        <div className="text">Just for you</div>
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
                <h3 className="title-gray">Jackets</h3>
                <div className="items-div">
                    <h4 className="title2">Varsity jackets</h4>
                    <div className="category-div">
                        {/* <LoadingImage src={'./images/varsityLogo.png'} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/> */}
                        {
                            items.varsity.map((jacket) => {
                                return (
                                    <LoadingImage src={jacket.url} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>




                </div>
                <div className="items-div">
                    <h4 className="title2">Puffer jackets</h4>
                    <div className="category-div">
                        {/* <LoadingImage src={'./images/pufferLogo.png'} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/> */}
                        {
                            items.puffer.map((jacket) => {
                                return (
                                    <LoadingImage src={jacket.url} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="items-div">
                    <h4 className="title2">Fleece jackets</h4>
                    <div className="category-div">
                        {/* <LoadingImage src={'./images/fleeceLogo.png'} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/> */}
                        {
                            items.fleece.map((jacket) => {
                                return (
                                    <LoadingImage src={jacket.url} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div id="trousers" className="type" >
                <h3 className="title-gray">Trousers</h3>
                <div className="items-div">
                    <h3 className="title2">Lady jeans</h3>
                    <div className="category-div">
                        {
                            items.ladyJeans.map((jean) => {
                                return (
                                    <LoadingImage src={jean.url} alt={'lady jeans'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="items-div">
                    <h3 className="title2">Male jeans</h3>
                    <div className="category-div">
                        {
                            items.maleJeans.map((jean) => {
                                return (
                                    <LoadingImage src={jean.url} alt={'male jeans'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="items-div">
                    <h3 className="title2">Mom jeans</h3>  
                    <div className="category-div">
                        {
                            items.momJeans.map((jean) => {
                                return (
                                    <LoadingImage src={jean.url} alt={'jackets'} className={'item'} height={'200px'} width={'150px'}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div id="skirts" className="type" >
                <h3 className="title-gray">Skirts</h3>
            </div>
            <div id="shorts" className="type" >
                <h3 className="title-gray">Shorts</h3>
            </div>
            <div id="shirts" className="type" >
                <h3 className="title-gray">Shirts</h3>
            </div>
        </div>
    )
}

export default Main;