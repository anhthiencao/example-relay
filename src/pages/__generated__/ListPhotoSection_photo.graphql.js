/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPhotoSection_photo$ref: FragmentReference;
declare export opaque type ListPhotoSection_photo$fragmentType: ListPhotoSection_photo$ref;
export type ListPhotoSection_photo = {|
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
  +$refType: ListPhotoSection_photo$ref,
|};
export type ListPhotoSection_photo$data = ListPhotoSection_photo;
export type ListPhotoSection_photo$key = {
  +$data?: ListPhotoSection_photo$data,
  +$fragmentRefs: ListPhotoSection_photo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListPhotoSection_photo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Photo",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
            (v0/*: any*/)
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
  "type": "PhotosPage",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '66327c10de89a0bf358f40992529f19d';

module.exports = node;
