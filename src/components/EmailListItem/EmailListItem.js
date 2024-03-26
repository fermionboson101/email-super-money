import { Image } from "../../common/components/Image";

import { checkIsEmailIdContainsWithKey } from "../../helpers/storage";
import { FAV_KEY } from "../../common/constants";
import { Details } from "./Details";

import "./styles.css";

export const EmailListItem = ({ data, onClickEmailItem }) => {
    return <li className="item-container" onClick={() => onClickEmailItem(data.id)} >
        <Image name={data.from.name} />
        <Details
            from={`${data.from.name} ${data.from.email}`}
            subject={data.subject}
            shortDesc={data.short_description}
            isFav={checkIsEmailIdContainsWithKey(FAV_KEY, data.id)}
            date={data.date} />
    </li>
}