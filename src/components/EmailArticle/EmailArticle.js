import { Image } from "../../common/components/Image";
import { Date } from "../../common/components/Date";

import { saveLocalKeyVal, removeLocalKeyVal, checkIsEmailIdContainsWithKey } from "../../helpers/storage";
import { FAV_KEY } from "../../common/constants";

import "./styles.css";
import { useEffect, useState } from "react";

export const EmailArticle = ({ email, setfilteredEmails }) => {
    const [isFav, setIsFav] = useState(null);

    const toogleFav = () => {
        if (isFav) {
            removeLocalKeyVal(FAV_KEY, email.details.id);
        } else {
            saveLocalKeyVal(FAV_KEY, email.details.id);
        }
        setIsFav(checkIsEmailIdContainsWithKey(FAV_KEY, email.details.id));
        setfilteredEmails(prev => [...prev]);
    }

    useEffect(() => {
        email && setIsFav(checkIsEmailIdContainsWithKey(FAV_KEY, email.details.id));
    }, [email]);

    return email ? <div className="selected-email-container">
        <div className="selected-email-header">
            <Image name={email.details.from.name} />
            <div className="selected-email-Info">
                <div className="top-conatiner">
                    <div className="selected-email-subject">{email.details.subject}</div>
                    <div className="fav-btn-container">
                        <button className="fav-btn" onClick={toogleFav}>{isFav ? "Remove As Favrioute" : "Mark As Favrioute"}</button>
                    </div>
                </div>
                <Date date={email.details.date} />
            </div>
        </div>
        <div className="email-body" dangerouslySetInnerHTML={{ '__html': email.data.body }} />
    </div> : null;
}