module.exports = {
    generate: function(operationName, variables, query) {
        return [{
            operationName: operationName,
            variables: variables,
            query: query
        }];
    }
}
