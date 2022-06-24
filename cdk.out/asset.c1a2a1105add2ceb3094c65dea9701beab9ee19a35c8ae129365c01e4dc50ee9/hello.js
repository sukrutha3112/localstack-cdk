exports.handler = async function(event, context, callback){
    return {
        statusCode: 200,
        headers: {'Content-Type': 'text/plain'},
        body: `Hello lambda cdk ${JSON.stringify(event, null, 2)}`
        
         
    };
   
};