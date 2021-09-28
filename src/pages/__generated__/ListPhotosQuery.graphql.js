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
export type ListPhotosQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type ListPhotosQueryResponse = {|
  +photos: ?{|
    +data: ?$ReadOnlyArray<?{|
      +id: ?string,
      +title: ?string,
      +url: ?string,
      +album: ?{|
        +id: ?string
      |},
    |}>,
    +meta: ?{|
      +totalCount: ?number
    |},
  |}
|};
export type ListPhotosQuery = {|
  variables: ListPhotosQueryVariables,
  response: ListPhotosQueryResponse,
|};
*/


/*
query ListPhotosQuery(
  $options: PageQueryOptions
) {
  photos(options: $options) {
    data {
      id
      title
      url
      album {
        id
      }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
            "name": "url",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Album",
            "kind": "LinkedField",
            "name": "album",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
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
    "name": "ListPhotosQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListPhotosQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3fbe15d85e2d77e20a3113c2644b3a9c",
    "id": null,
    "metadata": {},
    "name": "ListPhotosQuery",
    "operationKind": "query",
    "text": "query ListPhotosQuery(\n  $options: PageQueryOptions\n) {\n  photos(options: $options) {\n    data {\n      id\n      title\n      url\n      album {\n        id\n      }\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6bec6b2a6cb5db38f6ccf304bddb041';

module.exports = node;
