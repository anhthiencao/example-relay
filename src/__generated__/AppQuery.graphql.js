/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPhotoSection_photo$ref = any;
type ListPostSection_post$ref = any;
type ListTodoSection_todo$ref = any;
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
export type AppQueryVariables = {|
  options?: ?PageQueryOptions
|};
export type AppQueryResponse = {|
  +posts: ?{|
    +$fragmentRefs: ListPostSection_post$ref
  |},
  +todos: ?{|
    +$fragmentRefs: ListTodoSection_todo$ref
  |},
  +photos: ?{|
    +$fragmentRefs: ListPhotoSection_photo$ref
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $options: PageQueryOptions
) {
  posts(options: $options) {
    ...ListPostSection_post
  }
  todos(options: $options) {
    ...ListTodoSection_todo
  }
  photos(options: $options) {
    ...ListPhotoSection_photo
  }
}

fragment ListPhotoSection_photo on PhotosPage {
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

fragment ListPostSection_post on PostsPage {
  data {
    id
    title
    body
  }
  meta {
    totalCount
  }
}

fragment ListTodoSection_todo on TodosPage {
  data {
    id
    title
    completed
  }
  meta {
    totalCount
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
v4 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostsPage",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ListPostSection_post"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodosPage",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ListTodoSection_todo"
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ListPhotoSection_photo"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          },
          (v4/*: any*/)
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Album",
                "kind": "LinkedField",
                "name": "album",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef19940b2aa07aaa1ae92b116a9df4b7",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $options: PageQueryOptions\n) {\n  posts(options: $options) {\n    ...ListPostSection_post\n  }\n  todos(options: $options) {\n    ...ListTodoSection_todo\n  }\n  photos(options: $options) {\n    ...ListPhotoSection_photo\n  }\n}\n\nfragment ListPhotoSection_photo on PhotosPage {\n  data {\n    id\n    title\n    url\n    album {\n      id\n    }\n  }\n  meta {\n    totalCount\n  }\n}\n\nfragment ListPostSection_post on PostsPage {\n  data {\n    id\n    title\n    body\n  }\n  meta {\n    totalCount\n  }\n}\n\nfragment ListTodoSection_todo on TodosPage {\n  data {\n    id\n    title\n    completed\n  }\n  meta {\n    totalCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2814298d7cda21c1078c699fbb2953e';

module.exports = node;
