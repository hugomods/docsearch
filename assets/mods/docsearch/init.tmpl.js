import { default as params } from '@params';

docsearch({
  container: params.container,
  appId: params.app_id,
  indexName: params.index_name,
  apiKey: params.api_key,
  debug: params.debug,
});
