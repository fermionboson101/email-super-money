import { EmailListItem } from "../EmailListItem";
import "./styles.css";

export const EmailList = ({ emails, onClickEmailItem}) => {
    return <ul className="emails-container">
        {emails.map(email => {
            return <EmailListItem data={email} key={email.id} onClickEmailItem={onClickEmailItem} />
        })}
    </ul>;
    }
