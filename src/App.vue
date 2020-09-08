<template>
  <div id="app">
    <ais-instant-search
      :searchClient="searchClient"
      indexName="instant_search"
    >
      <ais-search-box />
      <ais-hits>
        <template v-slot:item="{item}">
          <ais-highlight
            :hit="item"
            attribute="name"
          />
        </template>
      </ais-hits>
      <ais-configure :hits-per-page.camel="5">
        <template v-slot="data">
          {{ data }}
        </template>
      </ais-configure>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisHighlight,
  AisConfigure,
} from 'vue-instantsearch/src/widgets';
// import like this is possible too
// import AisSearchBox from "vue-instantsearch/src/components/SearchBox";

export default {
  name: 'App',
  data() {
    return {
      searchClient: algoliasearch(
        'latency',
        '6be0576ff61c053d5f9a3225e2a90f76'
      ),
    };
  },
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisHits,
    AisHighlight,
    AisConfigure,
  },
};
</script>
