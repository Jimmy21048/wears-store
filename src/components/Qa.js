import { useState } from "react"

export default function Qa({q, a}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="qa">
            <div className="question">
                <p>{q}</p>
                { open ? <i onClick={() => setOpen(prev => !prev)} className="fa-solid fa-minus"></i> :
                 <i onClick={() => setOpen(prev => !prev)}className="fa-solid fa-plus"></i> }
                
            </div>
            <div className={ open ? 'answer' : 'answer-hidden' }>
                {a}
            </div>
        </div>
    )
}