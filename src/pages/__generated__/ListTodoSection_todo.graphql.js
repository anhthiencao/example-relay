/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListTodoSection_todo$ref: FragmentReference;
declare export opaque type ListTodoSection_todo$fragmentType: ListTodoSection_todo$ref;
export type ListTodoSection_todo = {|
  +data: ?$ReadOnlyArray<?{|
    +id: ?string,
    +title: ?string,
    +completed: ?boolean,
  |}>,
  +meta: ?{|
    +totalCount: ?number
  |},
  +$refType: ListTodoSection_todo$ref,
|};
export type ListTodoSection_todo$data = ListTodoSection_todo;
export type ListTodoSection_todo$key = {
  +$data?: ListTodoSection_todo$data,
  +$fragmentRefs: ListTodoSection_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListTodoSection_todo",
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
  "type": "TodosPage",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'be2713c4117bbd79330a69b10db9b997';

module.exports = node;
