exports.handler = async function(event, context) {
    if (!context.clientContext || !context.clientContext.user) {
        return {
            statusCode: 401,
            body: 'User not authenticated'
        };
    }
    return {
        statusCode: 200,
        body: 'Your secure data'
    };
};
