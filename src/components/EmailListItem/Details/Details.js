import { memo } from "react";
import { Date } from "../../../common/components/Date";

import "./styles.css";
export const Details = memo(({ from, subject, shortDesc, date, isFav }) => {
    return <summary className="info">
        <div className="from-container">
            <span>From:</span> <span>{from}</span>
        </div>
        <div className="subject-container">
            <span>Subject:</span> <span>{subject}</span>
        </div>
        <div className="desc-container"> {shortDesc} </div>
        <div className="bottom-container">
            <Date date={date} />
            {isFav && <div className="fav">Favrioute</div>}
        </div>
    </summary>
});