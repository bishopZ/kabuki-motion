import $ from 'jquery';

export const IMAGE_HOVER = 'IMAGE_HOVER';
export const IMAGE_LOADED = 'IMAGE_LOADED';
export const ADD_ANIMATING_PROPERTIES = 'SET_ANIMATING_PROPERTIES';
export const ADD_ITEM_PROPERTIES = 'ADD_ITEM_PROPERTIES';
export const UPDATE_ANIMATE_PROPERTIES = 'UPDATE_ANIMATE_PROPERTIES';
export const UPDATE_WINDOW_SIZE = 'UPDATE_WINDOW_SIZE';
export const UPDATE_WHEEL = 'UPDATE_WHEEL';
export const ROUTE_CHANGE = '@@reduxReactRouter/routerDidChange';

export function imageHover(id, isHovering) {
  return {
    type: IMAGE_HOVER,
    index: id,
    hover: isHovering
  };
}

export function imageLoaded(id) {
  return {
    type: IMAGE_LOADED,
    index: id
  };
}

export function addAnimatingProperties(properties) {
  return {
    type: ADD_ANIMATING_PROPERTIES,
    props: properties
  };
}

export function addItemProperties(properties) {
  return {
    type: ADD_ITEM_PROPERTIES,
    props: properties
  };
}

export function updateAnimateProperties(itemIndex, properties) {
  return {
    type: UPDATE_ANIMATE_PROPERTIES,
    item: itemIndex,
    animates: properties
  };
}

export function updateWindowSize() {
  return {
    type: UPDATE_WINDOW_SIZE,
    height: $(window).height(),
    width: $(window).width()
  };
}

export function updateWheel(event) {
  return {
    type: UPDATE_WHEEL,
    wheel: event
  };
}

