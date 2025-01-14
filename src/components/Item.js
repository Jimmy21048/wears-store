import { useParams } from "react-router-dom";
import Header from "./Header";
import LoadingImage from "./Image";
import { items } from "./itemArrays";

export default function Item() {
    const field = useParams().extra;
    const id = useParams().id;
    const type = items[field][id].type;
    const img = items[field][id].url.slice(1,)
    console.log(img)
    return (
        <div className="item-page">
            <Header />
            <LoadingImage className={"item-image"} width={'330px'} height={'50vh'} alt={field + 'clothes'} src={img} />
            <div className="additives">
                <div className="added"><h4>Clothe: </h4>{type}</div>
                <div className="added"><h4>Type: </h4>{field}</div>
                <h3>Reach me at: </h3>
                <div className="added"><h4>Phone/Whatsapp: </h4>0740404524</div>
                <h3>For orders, reservations & payments</h3>
                <h3>JOHN MSAANI COLLECTIONS</h3>
            </div>
        </div>
    )
}