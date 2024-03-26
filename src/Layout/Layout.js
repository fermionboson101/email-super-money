import { useCallback, useEffect, useState } from "react";
import { Filters } from "../common/components/Filters";

import { Inbox } from "../pages/Inbox";

import { getEmails } from "../apis/email";

import { getFilteredEmails } from "../helpers/email";
import "./styles.css";

const FILTERS = {
    UNREAD: "Unread",
    READ: "Read",
    FAVOURITES: "Favourites",
}

export const Layout = () => {
    const [allEmails, setAllEmails] = useState([]);
    const [appliedFilter, setAppliedFilter] = useState(null);
    const [filteredEmails, setfilteredEmails] = useState([]);

    const fetchEmails = async (pageNo) => {
        try {
            const response = await getEmails(pageNo);
            setAllEmails(response.list);
            setfilteredEmails(response.list);
        } catch (e) { }
    }

    const onFilterClick = useCallback((filter) => {
        const filteredEmails = getFilteredEmails(allEmails, filter);
        setAppliedFilter(filter);
        setfilteredEmails(filteredEmails);
    }, [allEmails]);

    useEffect(() => {
        fetchEmails(1);
    }, []);

    return <div className="layout">
        <Filters filterList={FILTERS} appliedFilter={appliedFilter} onFilterClick={onFilterClick} />
        <Inbox emails={filteredEmails} setfilteredEmails={setfilteredEmails}/>
    </div >
}
