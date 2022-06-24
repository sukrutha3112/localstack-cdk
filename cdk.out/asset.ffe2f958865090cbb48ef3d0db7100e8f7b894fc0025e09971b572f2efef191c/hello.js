exports.handler = function(event, context, callback){
    return {
        statusCode: 200,
        header: {'Content-Type': 'text/plain'},
        body: 'Hello - LAMBDA CDK'

    };
   
}