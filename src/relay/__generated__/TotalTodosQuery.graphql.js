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
export type TotalTodosQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type TotalTodosQueryResponse = {|
  +todos: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |}
|};
export type TotalTodosQuery = {|
  variables: TotalTodosQueryVariables,
  response: TotalTodosQueryResponse,
|};
*/


/*
query TotalTodosQuery(
  $options: PageQueryOptions
) {
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "options",
        "variableName": "options"
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
    "name": "TotalTodosQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TotalTodosQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bb727c7416d736fdaeb160b90121f519",
    "id": null,
    "metadata": {},
    "name": "TotalTodosQuery",
    "operationKind": "query",
    "text": "query TotalTodosQuery(\n  $options: PageQueryOptions\n) {\n  todos(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6deea7174343965df722d16d2290e2a0';

module.exports = node;
