"use strict";

function removeAllChildNodes(parent: Element) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function contentWiper(element: Element) {
  removeAllChildNodes(element);
}
