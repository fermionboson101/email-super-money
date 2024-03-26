export const getEmails = async (pageNo) => {
    try {
        const response = await fetch(`https://flipkart-email-mock.vercel.app/?page=${pageNo}`);
        const emails = await response.json();
        return emails;
    } catch (e) {
        console.log(e);
        alert(e);
    }
}

export const getEmail = async (emailId) => {
    try {
        const response = await fetch(`https://flipkart-email-mock.vercel.app/?id=${emailId}`);
        const email = await response.json();
        return email;
    } catch (e) {
        console.log(e);
        alert(e);
    }
}