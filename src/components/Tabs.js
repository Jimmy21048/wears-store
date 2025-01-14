import { useState } from "react"
export default function Tabs() {
    const [tab, setTab] = useState({
        jacket : '',
        trous : '',
        skirt: '',
        short: '',
        shirt: ''
    })
    const tabControl = {
        jacket : '',
        trous : '',
        skirt: '',
        short: '',
        shirt: ''
    }

    const handleClick = (item) => {
        setTab({...tabControl, [item] : 'activeTab'})
    }
    return (
        <div className="tabs">
            <a onClick={() => handleClick('jacket')} className={tab.jacket + ' tab'} href="#jackets" >jackets</a>
            <a onClick={() => handleClick('trous')} className={tab.trous + ' tab'} href="#trousers">trousers</a>
            <a onClick={() => handleClick('skirt')} className={tab.skirt + ' tab'} href="#skirts">skirts</a>
            <a onClick={() => handleClick('short')} className={tab.short + ' tab'} href="#shorts">shorts</a>
            <a onClick={() => handleClick('shirt')} className={tab.shirt + ' tab'} href="#shirts">shirts</a>
        </div>
    )
}