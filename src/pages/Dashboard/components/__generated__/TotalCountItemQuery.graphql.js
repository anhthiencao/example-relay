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
export type TotalCountItemQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type TotalCountItemQueryResponse = {|
  +posts: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |},
  +photos: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |},
  +todos: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |},
|};
export type TotalCountItemQuery = {|
  variables: TotalCountItemQueryVariables,
  response: TotalCountItemQueryResponse,
|};
*/


/*
query TotalCountItemQuery(
  $options: PageQueryOptions
) {
  posts(options: $options) {
    meta {
      totalCount
    }
  }
  photos(options: $options) {
    meta {
      totalCount
    }
  }
  todos(options: $options) {
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
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = [
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
v3 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "PostsPage",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "PhotosPage",
    "kind": "LinkedField",
    "name": "photos",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "TodosPage",
    "kind": "LinkedField",
    "name": "todos",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TotalCountItemQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TotalCountItemQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2a83c62453492828ea694da96a4349a3",
    "id": null,
    "metadata": {},
    "name": "TotalCountItemQuery",
    "operationKind": "query",
    "text": "query TotalCountItemQuery(\n  $options: PageQueryOptions\n) {\n  posts(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n  photos(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n  todos(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8fa13fac144c2829381ba43c6ef23a1e';

module.exports = node;
