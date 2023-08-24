

const axios = require('axios');

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;
    const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    let parsedBody;

    try {
        parsedBody = JSON.parse(event.body);
    } catch (e) {
        return {
            statusCode: 400,
            body: "Invalid JSON body"
        };
    }

    const salesRep = parsedBody.salesRep;

    const config = {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await axios.post(URL, { fields: { "SalesRep": salesRep } }, config); // Only sending the salesRep field
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to add to Airtable" })
        };
    }
};
