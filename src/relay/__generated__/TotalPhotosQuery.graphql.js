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
export type TotalPhotosQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type TotalPhotosQueryResponse = {|
  +photos: ?{|
    +meta: ?{|
      +totalCount: ?number
    |}
  |}
|};
export type TotalPhotosQuery = {|
  variables: TotalPhotosQueryVariables,
  response: TotalPhotosQueryResponse,
|};
*/


/*
query TotalPhotosQuery(
  $options: PageQueryOptions
) {
  photos(options: $options) {
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
    "concreteType": "PhotosPage",
    "kind": "LinkedField",
    "name": "photos",
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
    "name": "TotalPhotosQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TotalPhotosQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1b685425d4f56e7deb6728dc53963fa6",
    "id": null,
    "metadata": {},
    "name": "TotalPhotosQuery",
    "operationKind": "query",
    "text": "query TotalPhotosQuery(\n  $options: PageQueryOptions\n) {\n  photos(options: $options) {\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3fdf0e1d9ee2dee26c993a3154162306';

module.exports = node;
