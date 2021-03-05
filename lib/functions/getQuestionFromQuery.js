const fetch = require("../main");
const configr = require("../../util/config")

async function getQuestion(pertanyaan, jumlah) {
    console.log(configr.bahasa.url + '/graphql/' + configr.bahasa.code)
    return new Promise((terima, tolak) => {
        const postData = fetch.GraphQL.generate('SearchQuery', { 'query': pertanyaan, 'after': null, 'first': jumlah || 3 }, 'query SearchQuery($query: String!, $first: Int!, $after: ID) {\n  questionSearch(query: $query, first: $first, after: $after) {\n    count\n    edges {\n      node {\n        id\n        databaseId\n        author {\n          id\n          databaseId\n          isDeleted\n          nick\n          avatar {\n            thumbnailUrl\n            __typename\n          }\n          rank {\n            name\n            __typename\n          }\n          __typename\n        }\n        content\n        answers {\n          nodes {\n            thanksCount\n            ratesCount\n            rating\n            content\n            __typename\n          }\n          hasVerified\n          __typename\n        }\n        __typename\n      }\n      highlight {\n        contentFragments\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n')

        fetch.axios.post(configr.bahasa.url + '/graphql/' + configr.bahasa.code, postData, {
            headers: {
                'User-Agent': "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
            }
        }).then(res => {
            console.log(JSON.stringify(res.data[0].data.questionSearch.edges[0].node, null, 2))
            return terima(res.data[0].data.questionSearch.edges[0].node)
        }).catch(tolak)
    })
}

module.exports = getQuestion;
