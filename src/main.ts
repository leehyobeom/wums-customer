import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  cache,
  uri: "http://gql.wums.link/graphql",
  // uri: "http://localhost:30002/graphql",
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})
loadFonts()
createApp(App)
  .use(apolloProvider)
  .use(router)
  .use(vuetify)
  .mount('#app')
