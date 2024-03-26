
import { EmailList, EmailArticle } from "../../components";

import { getEmail } from "../../apis/email";

import { getEmailDetails } from "../../helpers/email";

import { useCallback, useState } from "react";

import { READ_KEY } from "../../common/constants";

import "./styles.css";

import { saveLocalKeyVal } from "../../helpers/storage";

export const Inbox = ({ emails, setfilteredEmails }) => {
    const [selectedEmailInfo, setSelectedEmailInfo] = useState(null);

    const fetchSelectedEmails = async (id) => {
        try {
            const response = await getEmail(id);
            const emailDetails = getEmailDetails(emails, id);
            setSelectedEmailInfo({ data: response, details: emailDetails });
        } catch (e) { }
    }

    const onClickEmailItem = (id) => {
        fetchSelectedEmails(id);
        saveLocalKeyVal(READ_KEY, id);
    };

    return <div className="email-layout-container">
        <EmailList onClickEmailItem={onClickEmailItem} emails={emails} />
        <EmailArticle email={selectedEmailInfo} setfilteredEmails={setfilteredEmails}/>
    </div>
}
