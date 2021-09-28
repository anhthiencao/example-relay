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
export type ListTodosQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type ListTodosQueryResponse = {|
  +todos: ?{|
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +title: ?string,
      +completed: ?boolean,
    |}>,
    +meta: ?{|
      +totalCount: ?number
    |},
  |}
|};
export type ListTodosQuery = {|
  variables: ListTodosQueryVariables,
  response: ListTodosQueryResponse,
|};
*/


/*
query ListTodosQuery(
  $options: PageQueryOptions
) {
  todos(options: $options) {
    data {
      id
      title
      completed
    }
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
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
    "name": "ListTodosQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListTodosQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "719febb838728f6e18fe1f3c9ba563c3",
    "id": null,
    "metadata": {},
    "name": "ListTodosQuery",
    "operationKind": "query",
    "text": "query ListTodosQuery(\n  $options: PageQueryOptions\n) {\n  todos(options: $options) {\n    data {\n      id\n      title\n      completed\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7103f04bcde3ae700ee0773521aca765';

module.exports = node;
