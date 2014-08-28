/// <reference path="require.d.ts" />
/**
* Returns a `Selection` instance from the given Window, Document or DOM
* Element instance.
*
* @param {Window|Document|Element} doc - Window, Document or DOM Element
*   instance to get the current Selection from.
* @return {Selection} returns a Selection instance, or `null` if there is
*   no current selection.
* @public
*/
declare function currentSelection(doc: any): Selection;
export = currentSelection;
