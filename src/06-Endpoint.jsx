import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjb6tlepe0cmz0134psktyyg4'
  })
})

export { client }
