/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OperatorKindEnum = "GTE" | "LIKE" | "LTE" | "NE" | "%future added value";
export type SortOrderEnum = "ASC" | "DESC" | "%future added value";
export type PageQueryOptions = {|
  paginate?: ?PaginateOptions,
  slice?: ?SliceOptions,
  sort?: ?$ReadOnlyArray<?SortOptions>,
  operators?: ?$ReadOnlyArray<?OperatorOptions>,
  search?: ?SearchOptions,
|};
export type PaginateOptions = {|
  page?: ?number,
  limit?: ?number,
|};
export type SliceOptions = {|
  start?: ?number,
  end?: ?number,
  limit?: ?number,
|};
export type SortOptions = {|
  field?: ?string,
  order?: ?SortOrderEnum,
|};
export type OperatorOptions = {|
  kind?: ?OperatorKindEnum,
  field?: ?string,
  value?: ?string,
|};
export type SearchOptions = {|
  q?: ?string
|};
export type TotalPostsQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type TotalPostsQueryResponse = {|
  +posts: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |}
|};
export type TotalPostsQuery = {|
  variables: TotalPostsQueryVariables,
  response: TotalPostsQueryResponse,
|};
*/


/*
query TotalPostsQuery(
  $options: PageQueryOptions
) {
  posts(options: $options) {
    meta {
      totalCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "options",
        "variableName": "options"
      }
    ],
    "concreteType": "PostsPage",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PageMetadata",
        "kind": "LinkedField",
        "name": "meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TotalPostsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TotalPostsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "56f942dfea17f8d1b951d04971bb6b6c",
    "id": null,
    "metadata": {},
    "name": "TotalPostsQuery",
    "operationKind": "query",
    "text": "query TotalPostsQuery(\n  $options: PageQueryOptions\n) {\n  posts(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ff7f345144010c2fe6d12c056dc2f857';

module.exports = node;
