import { useParams } from "react-router-dom";
import Header from "./Header";
import LoadingImage from "./Image";
import { items } from "./itemArrays";
import { useState } from "react";

export default function Item() {
    const field = useParams().extra;
    const id = useParams().id;
    const type = items[field][id].type;
    const img = items[field][id].url.slice(1,)
    const number = '0740404524'
    const[copy, setCopy] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(number);
        setCopy(prev => !prev);
    }
    
    return (
        <div className="item-page">
            <Header />
            <LoadingImage className={"item-image"} width={'330px'} height={'50vh'} alt={field + 'clothes'} src={img} />
            <div className="additives">
                <div className="added"><p>{type.toUpperCase()}</p></div>
                <div className="added"><p>{field.toUpperCase()}</p></div>
                <h3 className="title-gray">Reach me at: </h3>
                <div className="added title-gray"><h4>Phone/Whatsapp: </h4>{number}
                 { copy ? <i class="fa-solid fa-check"></i> : <i onClick={handleClick} class="fa-regular fa-copy"></i> }</div>
                <h3 className="title-gray itl">For orders, reservations & payments</h3>
                <h3 className="title">JOHN MSAANI COLLECTIONS</h3>
            </div>
        </div>
    )
}