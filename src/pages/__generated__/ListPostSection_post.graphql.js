/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPostSection_post$ref: FragmentReference;
declare export opaque type ListPostSection_post$fragmentType: ListPostSection_post$ref;
export type ListPostSection_post = {|
  +data: ?$ReadOnlyArray<?{|
    +id: ?string,
    +title: ?string,
    +body: ?string,
  |}>,
  +meta: ?{|
    +totalCount: ?number
  |},
  +$refType: ListPostSection_post$ref,
|};
export type ListPostSection_post$data = ListPostSection_post;
export type ListPostSection_post$key = {
  +$data?: ListPostSection_post$data,
  +$fragmentRefs: ListPostSection_post$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListPostSection_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
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
          "name": "body",
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
  "type": "PostsPage",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2ce9f3f011cc07de0af330363ba03ae5';

module.exports = node;
