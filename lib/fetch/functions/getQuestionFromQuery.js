const fetch = require("../main");
const configr = require("../../util/config")
const { randomUserAgents } = require("../../util/randomUserAgent.js")

/**
 * 
 * @param {string} pertanyaan - String kueri pertanyaan yang akan dicari
 * @param {number} jumlah - Jumlah limit hasil yang akan di return
 * @returns {Promise} Promise .then() .catch()
 */
async function getQuestion(pertanyaan, jumlah = 3) {
    return new Promise((terima, tolak) => {
        const postData = fetch.GraphQL.generate('SearchQuery', { 'query': pertanyaan, 'after': null, 'first': jumlah || 3 }, 'query SearchQuery($query: String!, $first: Int!, $after: ID) {\n  questionSearch(query: $query, first: $first, after: $after) {\n    count\n    edges {\n      node {\n        id\n        databaseId\n        author {\n          id\n          databaseId\n          isDeleted\n          nick\n          avatar {\n            thumbnailUrl\n            __typename\n          }\n          rank {\n            name\n            __typename\n          }\n          __typename\n        }\n        content\n        answers {\n          nodes {\n            thanksCount\n            ratesCount\n            rating\n            content\n            __typename\n          }\n          hasVerified\n          __typename\n        }\n        __typename\n      }\n      highlight {\n        contentFragments\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n')

        fetch.axios.post(configr.bahasa.url + '/graphql/' + configr.bahasa.code, postData, {
            headers: {
                'User-Agent': randomUserAgents(),
            }
        }).then(res => {
            return terima(res.data[0].data.questionSearch.edges)
        }).catch(tolak)
    })
}

module.exports = getQuestion;
