/// <reference path='require.d.ts' />

/**
 * JavaScript dependencies.
 */

var getWindow = require('get-window');

/**
 * Returns a `Range` instance from the given Window or Document instance.
 * Defaults to index `0`, but you may specify another index if desired.
 *
 * @param {Window|Document} doc - Window or Document instance to get the
 *   current selection Range from.
 * @return {Range} returns a Range instance, or `null` if there's no
 *   current selection.
 * @public
 */

function currentRange (doc: any, index?: number): Range {
  var win: Window = getWindow(doc);
  var sel: Selection = win.getSelection();
  index |= 0;
  if (sel.rangeCount <= index) return null;
  return sel.getRangeAt(index);
}

export = currentRange;
