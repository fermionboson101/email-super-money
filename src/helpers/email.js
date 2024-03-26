import { checkIsEmailIdContainsWithKey } from "./storage";
import { FAV_KEY, FILTERS, READ_KEY } from "../common/constants";

export const parseEmails = (emails) => {
    const updatedEmail = emails.map((email) => ({ ...email, isFav: false, isRead: false }));
    return updatedEmail;
}

export const getEmailDetails = (emails, id) => {
    const email = emails.filter((email) => email.id == id);
    if (email.length != 0) return email[0];
    return {};
}

export const getFilteredEmails = (emails, filter) => {
    const filteredEmails = [];
    switch (filter) {
        case FILTERS.FAVOURITES: {
            emails.forEach(email => {
                const isFav = checkIsEmailIdContainsWithKey(FAV_KEY, email.id);
                if (isFav) filteredEmails.push(email);
            })
            return filteredEmails;
        }
        case FILTERS.READ: {
            emails.forEach(email => {
                const isRead = checkIsEmailIdContainsWithKey(READ_KEY, email.id);
                if (isRead) filteredEmails.push(email);
            })
            return filteredEmails;
        }
        case FILTERS.UNREAD: {
            emails.forEach(email => {
                const isRead = !checkIsEmailIdContainsWithKey(READ_KEY, email.id);
                if (isRead) filteredEmails.push(email);
            })
            return filteredEmails;
        }
        default: {
            return emails;
        }
    }
}