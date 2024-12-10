import React, { useState } from "react";
import "../style/DropDownHover.css"

const DropDownOnHover = () => {
    const [showList, setShowList] = useState(false);
    const [stayList, setStayList] = useState(false);
    const [listData, setListData] = useState("");
    const [list, setList] = useState([
        { name: "nameone", age: "21" },
        { name: "nametwo", age: "22" },
        { name: "namethree", age: "21" },
        { name: "namefour", age: "22" },
        { name: "namefive", age: "21" },
        { name: "namesix", age: "23" }
    ])
    return (
        <>
            <div className="main-container">
                <div className="drop-down-div-header" onMouseEnter={() => { setShowList(true) }} onMouseLeave={() => { setShowList(false) }}>SELECT</div>
                <div className="drop-down-data">
                    {showList && (
                        <div className="drop-down-div-list">
                            {list.map((item, index) => (
                                <ul key={index} onMouseEnter={() => { setShowList(true) }} onMouseLeave={() => { setShowList(false) }}>{item.name}</ul>
                            ))}
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );
}

export default DropDownOnHover