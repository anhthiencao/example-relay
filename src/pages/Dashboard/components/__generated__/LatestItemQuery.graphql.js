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
export type LatestItemQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type LatestItemQueryResponse = {|
  +posts: ?{|
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +title: ?string,
      +body: ?string,
    |}>
  |},
  +photos: ?{|
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +title: ?string,
      +url: ?string,
    |}>
  |},
  +todos: ?{|
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +title: ?string,
      +completed: ?boolean,
    |}>
  |},
|};
export type LatestItemQuery = {|
  variables: LatestItemQueryVariables,
  response: LatestItemQueryResponse,
|};
*/


/*
query LatestItemQuery(
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
      body
    }
  }
  photos(options: $options) {
    data {
      id
      title
      url
    }
  }
  todos(options: {sort: {field: "id", order: DESC}, operators: {kind: LIKE, field: "completed", value: "true"}, paginate: {page: 1, limit: 5}}) {
    data {
      id
      title
      completed
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
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "PostsPage",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "body",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "PhotosPage",
    "kind": "LinkedField",
    "name": "photos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "options",
        "value": {
          "operators": {
            "field": "completed",
            "kind": "LIKE",
            "value": "true"
          },
          "paginate": {
            "limit": 5,
            "page": 1
          },
          "sort": {
            "field": "id",
            "order": "DESC"
          }
        }
      }
    ],
    "concreteType": "TodosPage",
    "kind": "LinkedField",
    "name": "todos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "todos(options:{\"operators\":{\"field\":\"completed\",\"kind\":\"LIKE\",\"value\":\"true\"},\"paginate\":{\"limit\":5,\"page\":1},\"sort\":{\"field\":\"id\",\"order\":\"DESC\"}})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LatestItemQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LatestItemQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f11caea6c16190fd37026e9f70506548",
    "id": null,
    "metadata": {},
    "name": "LatestItemQuery",
    "operationKind": "query",
    "text": "query LatestItemQuery(\n  $options: PageQueryOptions\n) {\n  posts(options: $options) {\n    data {\n      id\n      title\n      body\n    }\n  }\n  photos(options: $options) {\n    data {\n      id\n      title\n      url\n    }\n  }\n  todos(options: {sort: {field: \"id\", order: DESC}, operators: {kind: LIKE, field: \"completed\", value: \"true\"}, paginate: {page: 1, limit: 5}}) {\n    data {\n      id\n      title\n      completed\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8fb9fc00c30a2387371522a82dd04b9';

module.exports = node;
