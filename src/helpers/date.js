export const parseDate = (date) => {
    const emaildate = new Date(date);
    const formatedDate = `${emaildate.getDate()}/${emaildate.getMonth()}/${emaildate.getFullYear()}`;
    const fomattedTime = `${emaildate.getHours() % 12}:${emaildate.getMinutes()} ${emaildate.getHours() > 12 ? "pm" : "am"}`
    const response = {formatedDate, fomattedTime};
    return response;
};
