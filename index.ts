/// <reference path='require.d.ts' />

/**
 * TypeScript dependencies.
 */

import currentSelection = require('current-selection');

/**
 * Returns a `Range` instance from the given Window, Document, DOM
 * Element or Selection instance.
 *
 * Defaults to index `0`, but you may specify another index if desired.
 *
 * @param {Window|Document|Element|Selection} doc - Window, Document, DOM element,
 *   or Selection instance to get the current selection Range from.
 * @return {Range} returns a Range instance, or `null` if there's no
 *   current selection.
 * @public
 */

function currentRange (doc: any, index?: number): Range {
  var sel: Selection = currentSelection(doc);
  index |= 0;
  if (!sel || sel.rangeCount <= index) return null;
  return sel.getRangeAt(index);
}

export = currentRange;
