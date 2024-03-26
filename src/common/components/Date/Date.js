import { parseDate } from "../../../helpers/date";

export const Date = ({ date }) => {
    const parsedDate = parseDate(date);
    return <time> {`${parsedDate.formatedDate}  ${parsedDate.fomattedTime}`} </time>;
};