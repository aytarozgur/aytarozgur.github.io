import{html,PolymerElement,FlattenedNodesObserver,Polymer,Base,dom}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{isIOS,isWindows,isMac}from"chrome://resources/js/cr.m.js";import{ZoomBehavior}from"chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/browser_api.js";export{BrowserApi,ZoomBehavior}from"chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/browser_api.js";import{loadTimeData}from"chrome://resources/js/load_time_data.m.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$6=html`<custom-style>
  <style is="custom-style" css-build="shadow">html {
  --google-red-100-rgb: 244, 199, 195;  
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; 
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; 
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;
}

</style>
</custom-style>
`;template$6.setAttribute("style","display: none;");document.head.appendChild(template$6.content);const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<custom-style>\n<style is="custom-style" css-build="shadow">html {\n  --google-blue-50-rgb: 232, 240, 254;  \n    --google-blue-50: rgb(var(--google-blue-50-rgb));\n    --google-blue-100-rgb: 210, 227, 252;  \n    --google-blue-100: rgb(var(--google-blue-100-rgb));\n    --google-blue-200-rgb: 174, 203, 250;  \n    --google-blue-200: rgb(var(--google-blue-200-rgb));\n    --google-blue-300-rgb: 138, 180, 248;  \n    --google-blue-300: rgb(var(--google-blue-300-rgb));\n    --google-blue-400-rgb: 102, 157, 246;  \n    --google-blue-400: rgb(var(--google-blue-400-rgb));\n    --google-blue-500-rgb: 66, 133, 244;  \n    --google-blue-500: rgb(var(--google-blue-500-rgb));\n    --google-blue-600-rgb: 26, 115, 232;  \n    --google-blue-600: rgb(var(--google-blue-600-rgb));\n    --google-blue-700-rgb: 25, 103, 210;  \n    --google-blue-700: rgb(var(--google-blue-700-rgb));\n\n    --google-green-50-rgb: 230, 244, 234;  \n    --google-green-50: rgb(var(--google-green-50-rgb));\n    --google-green-300-rgb: 129, 201, 149;  \n    --google-green-300: rgb(var(--google-green-300-rgb));\n    --google-green-400-rgb: 91, 185, 116;  \n    --google-green-400: rgb(var(--google-green-400-rgb));\n    --google-green-500-rgb: 52, 168, 83;  \n    --google-green-500: rgb(var(--google-green-500-rgb));\n    --google-green-600-rgb: 30, 142, 62;  \n    --google-green-600: rgb(var(--google-green-600-rgb));\n    --google-green-700-rgb: 24, 128, 56;  \n    --google-green-700: rgb(var(--google-green-700-rgb));\n\n    --google-grey-50-rgb: 248, 249, 250;  \n    --google-grey-50: rgb(var(--google-grey-50-rgb));\n    --google-grey-100-rgb: 241, 243, 244;  \n    --google-grey-100: rgb(var(--google-grey-100-rgb));\n    --google-grey-200-rgb: 232, 234, 237;  \n    --google-grey-200: rgb(var(--google-grey-200-rgb));\n    --google-grey-300-rgb: 218, 220, 224;  \n    --google-grey-300: rgb(var(--google-grey-300-rgb));\n    --google-grey-400-rgb: 189, 193, 198;  \n    --google-grey-400: rgb(var(--google-grey-400-rgb));\n    --google-grey-500-rgb: 154, 160, 166;  \n    --google-grey-500: rgb(var(--google-grey-500-rgb));\n    --google-grey-600-rgb: 128, 134, 139;  \n    --google-grey-600: rgb(var(--google-grey-600-rgb));\n    --google-grey-700-rgb: 95, 99, 104;  \n    --google-grey-700: rgb(var(--google-grey-700-rgb));\n    --google-grey-800-rgb: 60, 64, 67;  \n    --google-grey-800: rgb(var(--google-grey-800-rgb));\n    --google-grey-900-rgb: 32, 33, 36;  \n    --google-grey-900: rgb(var(--google-grey-900-rgb));\n    \n    --google-grey-900-white-4-percent: #292a2d;\n\n    --google-red-300-rgb: 242, 139, 130;  \n    --google-red-300: rgb(var(--google-red-300-rgb));\n    --google-red-500-rgb: 234, 67, 53;  \n    --google-red-500: rgb(var(--google-red-500-rgb));\n    --google-red-600-rgb: 217, 48, 37;  \n    --google-red-600: rgb(var(--google-red-600-rgb));\n\n    --google-yellow-50-rgb: 254, 247, 224;  \n    --google-yellow-50: rgb(var(--google-yellow-50-rgb));\n    --google-yellow-300-rgb: 253, 214, 51;  \n    --google-yellow-300: rgb(var(--google-yellow-300-rgb));\n    --google-yellow-400-rgb: 252, 201, 52;  \n    --google-yellow-400: rgb(var(--google-yellow-400-rgb));\n    --google-yellow-500-rgb: 251, 188, 4;  \n    --google-yellow-500: rgb(var(--google-yellow-500-rgb));\n\n    --cr-primary-text-color: var(--google-grey-900);\n    --cr-secondary-text-color: var(--google-grey-700);\n\n    --cr-card-background-color: white;\n    --cr-card-shadow-color-rgb: var(--google-grey-800-rgb);\n\n    --cr-elevation-1: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 2px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 1px 3px 1px;\n    --cr-elevation-2: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 2px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 2px 6px 2px;\n    --cr-elevation-3: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 3px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 4px 8px 3px;\n    --cr-elevation-4: rgba(var(--cr-card-shadow-color-rgb), .3) 0 2px 3px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 6px 10px 4px;\n    --cr-elevation-5: rgba(var(--cr-card-shadow-color-rgb), .3) 0 4px 4px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 8px 12px 6px;\n\n    --cr-card-shadow: var(--cr-elevation-2);\n\n    --cr-checked-color: var(--google-blue-600);\n    --cr-focused-item-color: var(--google-grey-300);\n    --cr-form-field-label-color: var(--google-grey-700);\n    --cr-hairline-rgb: 0, 0, 0;\n    --cr-iph-anchor-highlight-color: rgba(var(--google-blue-600-rgb), 0.1);\n    --cr-link-color: var(--google-blue-700);\n    --cr-menu-background-color: white;\n    --cr-menu-background-focus-color: var(--google-grey-400);\n    --cr-menu-shadow: 0 2px 6px var(--paper-grey-500);\n    --cr-separator-color: rgba(0, 0, 0, .06);\n    --cr-title-text-color: rgb(90, 90, 90);\n    --cr-toolbar-background-color: white;\n\n    --cr-hover-background-color: rgba(var(--google-grey-900-rgb), .1);\n    --cr-active-background-color: rgba(var(--google-grey-900-rgb), .16);\n    --cr-focus-outline-color: rgba(var(--google-blue-600-rgb), .4);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml {\n  --cr-primary-text-color: var(--google-grey-200);\n      --cr-secondary-text-color: var(--google-grey-500);\n\n      --cr-card-background-color: var(--google-grey-900-white-4-percent);\n      --cr-card-shadow-color-rgb: 0, 0, 0;\n\n      --cr-checked-color: var(--google-blue-300);\n      --cr-focused-item-color: var(--google-grey-800);\n      --cr-form-field-label-color: var(--dark-secondary-color);\n      --cr-hairline-rgb: 255, 255, 255;\n      --cr-iph-anchor-highlight-color: rgba(var(--google-grey-100-rgb), 0.1);\n      --cr-link-color: var(--google-blue-300);\n      --cr-menu-background-color: var(--google-grey-900);\n      --cr-menu-background-focus-color: var(--google-grey-700);\n      --cr-menu-background-sheen: rgba(255, 255, 255, .06);  \n      --cr-menu-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0,\n                        rgba(0, 0, 0, .15) 0 3px 6px 2px;\n      --cr-separator-color: rgba(255, 255, 255, .1);\n      --cr-title-text-color: var(--cr-primary-text-color);\n      --cr-toolbar-background-color: var(--google-grey-900-white-4-percent);\n\n      --cr-hover-background-color: rgba(255, 255, 255, .1);\n      --cr-active-background-color: rgba(var(--google-grey-200-rgb), .16);\n      --cr-focus-outline-color: rgba(var(--google-blue-300-rgb), .4);\n}\n\n}\n\nhtml {\n  --cr-button-edge-spacing: 12px;\n    --cr-button-height: 32px;\n\n    \n    --cr-controlled-by-spacing: 24px;\n\n    \n    --cr-default-input-max-width: 264px;\n\n    \n    --cr-icon-ripple-size: 36px;\n    --cr-icon-ripple-padding: 8px;\n\n    --cr-icon-size: 20px;\n\n    --cr-icon-button-margin-start: 16px;\n\n    \n    --cr-icon-ripple-margin: calc(var(--cr-icon-ripple-padding) * -1);\n\n    \n    \n    --cr-section-min-height: 48px;\n    --cr-section-two-line-min-height: 64px;\n\n    --cr-section-padding: 20px;\n    --cr-section-vertical-padding: 12px;\n    --cr-section-indent-width: 40px;\n    --cr-section-indent-padding: calc(\n        var(--cr-section-padding) + var(--cr-section-indent-width));\n\n    --cr-section-vertical-margin: 21px;\n\n    --cr-centered-card-max-width: 680px;\n    --cr-centered-card-width-percentage: 0.96;\n\n    --cr-hairline: 1px solid rgba(var(--cr-hairline-rgb), .14);\n\n    --cr-separator-height: 1px;\n    --cr-separator-line: var(--cr-separator-height) solid\n        var(--cr-separator-color);\n\n    --cr-toolbar-overlay-animation-duration: 150ms;\n    --cr-toolbar-height: 56px;\n\n    --cr-container-shadow-height: 6px;\n    --cr-container-shadow-margin: calc(-1 * var(--cr-container-shadow-height));\n\n    --cr-container-shadow-max-opacity: 1;\n\n    \n    --cr-card-border-radius: 8px;\n    --cr-disabled-opacity: .38;\n    --cr-form-field-bottom-spacing: 16px;\n    --cr-form-field-label-font-size: .625rem;\n    --cr-form-field-label-height: 1em;\n    --cr-form-field-label-line-height: 1em;\n}\n\n</style>\n</custom-style>\n`;document.head.appendChild($_documentContainer$1.content);// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached$1(message){assert$1(false,message||"Unreachable code hit")}function assertInstanceof(value,type,message){if(!(value instanceof type)){assertNotReached$1(message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;const onEvent=function(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()};doc.addEventListener("keydown",onEvent.bind(this,true),true);doc.addEventListener("mousedown",onEvent.bind(this,false),true);this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{constructor(){this.listeners_=[]}add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}// Copyright (c) 2012 The Chromium Authors. All rights reserved.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function listenOnce(target,eventNames,callback){if(!Array.isArray(eventNames)){eventNames=eventNames.split(/ +/)}const removeAllAndCallCallback=function(event){eventNames.forEach((function(eventName){target.removeEventListener(eventName,removeAllAndCallCallback,false)}));return callback(event)};eventNames.forEach((function(eventName){target.addEventListener(eventName,removeAllAndCallCallback,false)}))}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}// Copyright 2014 The Chromium Authors. All rights reserved.
class FocusRow{constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate;this.eventTracker=new EventTracker}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){if(element.getFocusableElement){return element.getFocusableElement()}return element}addItem(type,selectorOrElement){assert$1(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(sampleElement){return assert$1(this.getFirstFocusable())}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(opt_type){const element=this.getFocusableElements().find((el=>!opt_type||el.getAttribute("focus-type")===opt_type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(FocusRow.ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(FocusRow.ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}if(!e.currentTarget.disabled){e.currentTarget.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert$1(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}FocusRow.ACTIVE_CLASS="focus-row-active";// Copyright 2017 The Chromium Authors. All rights reserved.
let hideInk=false;assert$1(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);const focusWithoutInk=function(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}assert$1(document===toFocus.ownerDocument);const{noink:noink}=toFocus;toFocus.noink=true;toFocus.focus();toFocus.noink=noink};function getTemplate$c(){return html`<!--_html_template_start_--><style>
      :host dialog {
        background-color: var(--cr-menu-background-color);
        border: none;
        border-radius: 4px;
        box-shadow: var(--cr-menu-shadow);
        margin: 0;
        min-width: 128px;
        outline: none;
        padding: 0;
        position: absolute;
      }

      :host dialog::backdrop {
        background-color: transparent;
      }

      :host ::slotted(.dropdown-item) {
        -webkit-tap-highlight-color: transparent;
        background: none;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        color: var(--cr-primary-text-color);
        font: inherit;
        min-height: 32px;
        padding: 0 24px;
        text-align: start;
        user-select: none;
        width: 100%;
      }

      :host ::slotted(.dropdown-item:not([hidden])) {
        align-items: center;
        display: flex;
      }

      :host ::slotted(.dropdown-item[disabled]) {
        opacity: var(--cr-action-menu-disabled-item-opacity, 0.65);
      }

      :host ::slotted(.dropdown-item:not([disabled])) {
        cursor: pointer;
      }

      :host ::slotted(.dropdown-item:focus) {
        background-color: var(--cr-menu-background-focus-color);
        outline: none;
      }

      .item-wrapper {
        background: var(--cr-menu-background-sheen);
        outline: none;
        padding: 8px 0;
      }
    </style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}// Copyright 2016 The Chromium Authors. All rights reserved.
var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends PolymerElement{constructor(){super(...arguments);this.boundClose_=null;this.contentObserver_=null;this.resizeObserver_=null;this.hasMousemoveListener_=false;this.anchorElement_=null;this.lastConfig_=null}static get is(){return"cr-action-menu"}static get template(){return getTemplate$c()}static get properties(){return{accessibilityLabel:String,autoReposition:{type:Boolean,value:false},open:{type:Boolean,notify:true,value:false},roleDescription:String}}ready(){super.ready();this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDialog(){return this.$.dialog}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.contentObserver_){this.contentObserver_.disconnect();this.contentObserver_=null}if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire_("close")}onClick_(e){if(e.target===this){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire_("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));(item||this.$.wrapper).focus()}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert$1(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()}close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){focusWithoutInk(assert$1(this.anchorElement_));this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.$.wrapper.focus()}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{firstSelectableItem.focus()}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);this.contentObserver_=new FlattenedNodesObserver(this.$.contentNode,(info=>{info.addedNodes.forEach((node=>{if(node.classList&&node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}))}));if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire_("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DisplayAnnotationsAction;(function(DisplayAnnotationsAction){DisplayAnnotationsAction["DISPLAY_ANNOTATIONS"]="display-annotations";DisplayAnnotationsAction["HIDE_ANNOTATIONS"]="hide-annotations"})(DisplayAnnotationsAction||(DisplayAnnotationsAction={}));var FittingType;(function(FittingType){FittingType["NONE"]="none";FittingType["FIT_TO_PAGE"]="fit-to-page";FittingType["FIT_TO_WIDTH"]="fit-to-width";FittingType["FIT_TO_HEIGHT"]="fit-to-height"})(FittingType||(FittingType={}));var SaveRequestType;(function(SaveRequestType){SaveRequestType[SaveRequestType["ANNOTATION"]=0]="ANNOTATION";SaveRequestType[SaveRequestType["ORIGINAL"]=1]="ORIGINAL";SaveRequestType[SaveRequestType["EDITED"]=2]="EDITED"})(SaveRequestType||(SaveRequestType={}));// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertNotReached(message="Unreachable code hit"){assert(false,message)}// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NativeEventTarget=self["EventTarget"];// Copyright 2016 The Chromium Authors. All rights reserved.
var PromiseResolver=class{constructor(){this.resolve_;this.reject_;this.isFulfilled_=false;this.promise_=new Promise(((resolve,reject)=>{this.resolve_=resolution=>{resolve(resolution);this.isFulfilled_=true};this.reject_=reason=>{reject(reason);this.isFulfilled_=true}}))}get isFulfilled(){return this.isFulfilled_}set isFulfilled(i){assertNotReached$1()}get promise(){return this.promise_}set promise(p){assertNotReached$1()}get resolve(){return this.resolve_}set resolve(r){assertNotReached$1()}get reject(){return this.reject_}set reject(s){assertNotReached$1()}};// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class GestureDetector{constructor(element){this.pinchStartEvent_=null;this.lastTouchTouchesCount_=0;this.lastEvent_=null;this.isPresentationMode_=false;this.accumulatedWheelScale_=null;this.wheelEndTimeout_=null;this.eventTarget_=new EventTarget;this.element_=element;this.element_.addEventListener("touchstart",this.onTouchStart_.bind(this),{passive:true});const boundOnTouch=this.onTouch_.bind(this);this.element_.addEventListener("touchmove",boundOnTouch,{passive:true});this.element_.addEventListener("touchend",boundOnTouch,{passive:true});this.element_.addEventListener("touchcancel",boundOnTouch,{passive:true});this.element_.addEventListener("wheel",this.onWheel_.bind(this),{passive:false});document.addEventListener("contextmenu",this.handleContextMenuEvent_.bind(this))}setPresentationMode(enabled){this.isPresentationMode_=enabled}getEventTarget(){return this.eventTarget_}wasTwoFingerTouch(){return this.lastTouchTouchesCount_===2}notify_(type,detail){const clientRect=this.element_.getBoundingClientRect();detail.center={x:detail.center.x-clientRect.x,y:detail.center.y-clientRect.y};this.eventTarget_.dispatchEvent(new CustomEvent(type,{detail:detail}))}onTouchStart_(event){this.lastTouchTouchesCount_=event.touches.length;if(!this.wasTwoFingerTouch()){return}this.pinchStartEvent_=event;this.lastEvent_=event;this.notify_("pinchstart",{center:center(event)})}onTouch_(event){if(!this.pinchStartEvent_){return}const lastEvent=this.lastEvent_;if(event.touches.length<2||lastEvent.touches.length!==event.touches.length){const startScaleRatio=pinchScaleRatio(lastEvent,this.pinchStartEvent_);this.pinchStartEvent_=null;this.lastEvent_=null;this.notify_("pinchend",{startScaleRatio:startScaleRatio,center:center(lastEvent)});return}const scaleRatio=pinchScaleRatio(event,lastEvent);const startScaleRatio=pinchScaleRatio(event,this.pinchStartEvent_);this.notify_("pinchupdate",{scaleRatio:scaleRatio,direction:scaleRatio>1?"in":"out",startScaleRatio:startScaleRatio,center:center(event)});this.lastEvent_=event}onWheel_(event){if(!event.ctrlKey){if(this.isPresentationMode_){this.notify_("wheel",{center:{x:event.clientX,y:event.clientY},direction:event.deltaY>0?"down":"up"})}return}event.preventDefault();if(this.isPresentationMode_){return}const wheelScale=Math.exp(-event.deltaY/100);const scale=Math.min(1.25,Math.max(.75,wheelScale));const position={x:event.clientX,y:event.clientY};if(this.accumulatedWheelScale_==null){this.accumulatedWheelScale_=1;this.notify_("pinchstart",{center:position})}this.accumulatedWheelScale_*=scale;this.notify_("pinchupdate",{scaleRatio:scale,direction:scale>1?"in":"out",startScaleRatio:this.accumulatedWheelScale_,center:position});if(this.wheelEndTimeout_!=null){window.clearTimeout(this.wheelEndTimeout_);this.wheelEndTimeout_=null}const gestureEndDelayMs=100;const endEvent={startScaleRatio:this.accumulatedWheelScale_,center:position};this.wheelEndTimeout_=window.setTimeout((()=>{this.notify_("pinchend",endEvent);this.wheelEndTimeout_=null;this.accumulatedWheelScale_=null}),gestureEndDelayMs)}handleContextMenuEvent_(e){const capabilities=e.sourceCapabilities;if(capabilities&&capabilities.firesTouchEvents&&!this.wasTwoFingerTouch()){e.preventDefault()}}}function pinchScaleRatio(event,prevEvent){const distance1=distance$1(prevEvent);const distance2=distance$1(event);return distance1===0?null:distance2/distance1}function distance$1(event){const touch1=event.touches[0];const touch2=event.touches[1];const dx=touch1.clientX-touch2.clientX;const dy=touch1.clientY-touch2.clientY;return Math.sqrt(dx*dx+dy*dy)}function center(event){const touch1=event.touches[0];const touch2=event.touches[1];return{x:(touch1.clientX+touch2.clientX)/2,y:(touch1.clientY+touch2.clientY)/2}}// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SWIPE_TIMER_INTERVAL_MS=200;const SWIPE_X_DIST_MIN=150;const SWIPE_Y_DIST_MAX=100;var SwipeDirection;(function(SwipeDirection){SwipeDirection[SwipeDirection["RIGHT_TO_LEFT"]=0]="RIGHT_TO_LEFT";SwipeDirection[SwipeDirection["LEFT_TO_RIGHT"]=1]="LEFT_TO_RIGHT"})(SwipeDirection||(SwipeDirection={}));class SwipeDetector{constructor(element){this.isPresentationMode_=false;this.swipeStartEvent_=null;this.elapsedTimeForTesting_=null;this.eventTarget_=new EventTarget;this.element_=element;this.element_.addEventListener("touchstart",this.onTouchStart_.bind(this),{passive:true});this.element_.addEventListener("touchend",this.onTouchEnd_.bind(this),{passive:true});this.element_.addEventListener("touchcancel",(()=>this.onTouchCancel_()),{passive:true})}setElapsedTimerForTesting(time){this.elapsedTimeForTesting_=time}setPresentationMode(enabled){this.isPresentationMode_=enabled}getPresentationModeForTesting(){return this.isPresentationMode_}getEventTarget(){return this.eventTarget_}notify_(direction){this.eventTarget_.dispatchEvent(new CustomEvent("swipe",{detail:direction}))}onTouchStart_(event){if(!this.isPresentationMode_){return}if(event.touches.length!==1||this.swipeStartEvent_){this.swipeStartEvent_=null;return}this.swipeStartEvent_=event;return}onTouchCancel_(){if(!this.isPresentationMode_||!this.swipeStartEvent_){return}this.swipeStartEvent_=null}onTouchEnd_(event){if(!this.isPresentationMode_||!this.swipeStartEvent_){return}if(event.touches.length!==0||this.swipeStartEvent_.touches.length!==1){return}const elapsedTime=this.elapsedTimeForTesting_?this.elapsedTimeForTesting_:event.timeStamp-this.swipeStartEvent_.timeStamp;const swipeStartObj=this.swipeStartEvent_.changedTouches[0];const swipeEndObj=event.changedTouches[0];const distX=swipeEndObj.pageX-swipeStartObj.pageX;const distY=swipeEndObj.pageY-swipeStartObj.pageY;if(elapsedTime<=SWIPE_TIMER_INTERVAL_MS&&Math.abs(distX)>=SWIPE_X_DIST_MIN&&Math.abs(distY)<=SWIPE_Y_DIST_MAX){const direction=distX>0?SwipeDirection.LEFT_TO_RIGHT:SwipeDirection.RIGHT_TO_LEFT;this.notify_(direction)}this.swipeStartEvent_=null}}// Copyright 2015 The Chromium Authors. All rights reserved.
const MIN_ZOOM_DELTA=.01;function floatingPointEquals(a,b){return Math.abs(a-b)<=MIN_ZOOM_DELTA}class ZoomManager{constructor(getViewportZoomCallback,initialZoom){this.eventTarget_=new NativeEventTarget;this.browserZoom=initialZoom;this.getViewportZoom=getViewportZoomCallback}getEventTarget(){return this.eventTarget_}static create(zoomBehavior,getViewportZoom,setBrowserZoomFunction,initialZoom){switch(zoomBehavior){case ZoomBehavior.MANAGE:return new ActiveZoomManager(getViewportZoom,setBrowserZoomFunction,initialZoom);case ZoomBehavior.PROPAGATE_PARENT:return new EmbeddedZoomManager(getViewportZoom,initialZoom);default:return new InactiveZoomManager(getViewportZoom,initialZoom)}}applyBrowserZoom(internalZoom){return this.browserZoom*internalZoom}internalZoomComponent(totalZoom){return totalZoom/this.browserZoom}}class InactiveZoomManager extends ZoomManager{onBrowserZoomChange(_newZoom){}onPdfZoomChange(){}}class ActiveZoomManager extends ZoomManager{constructor(getViewportZoom,setBrowserZoomFunction,initialZoom){super(getViewportZoom,initialZoom);this.changingBrowserZoom_=null;this.setBrowserZoomFunction_=setBrowserZoomFunction}onBrowserZoomChange(newZoom){if(this.changingBrowserZoom_){return}if(floatingPointEquals(this.browserZoom,newZoom)){return}this.browserZoom=newZoom;this.getEventTarget().dispatchEvent(new CustomEvent("set-zoom",{detail:newZoom}))}onPdfZoomChange(){if(this.changingBrowserZoom_){return}const viewportZoom=this.getViewportZoom();if(floatingPointEquals(this.browserZoom,viewportZoom)){return}this.changingBrowserZoom_=this.setBrowserZoomFunction_(viewportZoom).then((()=>{this.browserZoom=viewportZoom;this.changingBrowserZoom_=null;this.onPdfZoomChange()}))}applyBrowserZoom(internalZoom){return internalZoom}internalZoomComponent(totalZoom){return totalZoom}}class EmbeddedZoomManager extends ZoomManager{onBrowserZoomChange(newZoom){const oldZoom=this.browserZoom;this.browserZoom=newZoom;this.getEventTarget().dispatchEvent(new CustomEvent("update-zoom-from-browser",{detail:oldZoom}))}onPdfZoomChange(){}}// Copyright 2014 The Chromium Authors. All rights reserved.
function getIntersectionArea(rect1,rect2){const left=Math.max(rect1.x,rect2.x);const top=Math.max(rect1.y,rect2.y);const right=Math.min(rect1.x+rect1.width,rect2.x+rect2.width);const bottom=Math.min(rect1.y+rect1.height,rect2.y+rect2.height);if(left>=right||top>=bottom){return 0}return(right-left)*(bottom-top)}function vectorDelta(p1,p2){return{x:p2.x-p1.x,y:p2.y-p1.y}}class Viewport{constructor(container,sizer,content,scrollbarWidth,defaultZoom){this.allowedToChangeZoom_=false;this.internalZoom_=1;this.presetZoomFactors_=[];this.zoomManager_=null;this.documentDimensions_=null;this.pageDimensions_=[];this.fittingType_=FittingType.NONE;this.prevScale_=1;this.smoothScrolling_=false;this.pinchPhase_=PinchPhase.NONE;this.pinchPanVector_=null;this.pinchCenter_=null;this.firstPinchCenterInFrame_=null;this.oldCenterInContent_=null;this.keepContentCentered_=false;this.tracker_=new EventTracker;this.sentPinchEvent_=false;this.fullscreenForTesting_=false;this.window_=container;this.scrollContent_=new ScrollContent(this.window_,sizer,content,scrollbarWidth);this.defaultZoom_=defaultZoom;this.viewportChangedCallback_=function(){};this.beforeZoomCallback_=function(){};this.afterZoomCallback_=function(){};this.userInitiatedCallback_=function(){};this.gestureDetector_=new GestureDetector(content);this.gestureDetector_.getEventTarget().addEventListener("pinchstart",(e=>this.onPinchStart_(e)));this.gestureDetector_.getEventTarget().addEventListener("pinchupdate",(e=>this.onPinchUpdate_(e)));this.gestureDetector_.getEventTarget().addEventListener("pinchend",(e=>this.onPinchEnd_(e)));this.gestureDetector_.getEventTarget().addEventListener("wheel",(e=>this.onWheel_(e)));this.swipeDetector_=new SwipeDetector(content);this.swipeDetector_.getEventTarget().addEventListener("swipe",(e=>this.onSwipe_(e)));this.setZoomManager(new InactiveZoomManager(this.getZoom.bind(this),1));if(this.window_===document.documentElement||!(this.window_ instanceof HTMLElement)){window.addEventListener("scroll",this.updateViewport_.bind(this));this.scrollContent_.setEventTarget(window);this.window_.scrollCallback=this.updateViewport_.bind(this);window.addEventListener("resize",this.resizeWrapper_.bind(this));this.window_.resizeCallback=this.resizeWrapper_.bind(this)}else{this.window_.addEventListener("scroll",this.updateViewport_.bind(this));this.scrollContent_.setEventTarget(this.window_);const resizeObserver=new ResizeObserver((_=>this.resizeWrapper_()));const target=this.window_.parentElement;assert(target.id==="main");resizeObserver.observe(target)}document.body.addEventListener("change-zoom",(e=>this.setZoom(e.detail.zoom)))}setPresentationMode(enabled){assert(document.fullscreenElement!==null===enabled);this.gestureDetector_.setPresentationMode(enabled);this.swipeDetector_.setPresentationMode(enabled)}setContent(content){this.scrollContent_.setContent(content)}setRemoteContent(content){this.scrollContent_.setRemoteContent(content)}syncScrollFromRemote(position){this.scrollContent_.syncScrollFromRemote(position)}ackScrollToRemote(position){this.scrollContent_.ackScrollToRemote(position)}setViewportChangedCallback(viewportChangedCallback){this.viewportChangedCallback_=viewportChangedCallback}setBeforeZoomCallback(beforeZoomCallback){this.beforeZoomCallback_=beforeZoomCallback}setAfterZoomCallback(afterZoomCallback){this.afterZoomCallback_=afterZoomCallback}setUserInitiatedCallback(userInitiatedCallback){this.userInitiatedCallback_=userInitiatedCallback}getClockwiseRotations(){const options=this.getLayoutOptions();return options?options.defaultPageOrientation:0}twoUpViewEnabled(){const options=this.getLayoutOptions();return!!options&&options.twoUpViewEnabled}clampZoom_(factor){return Math.max(this.presetZoomFactors_[0],Math.min(factor,this.presetZoomFactors_[this.presetZoomFactors_.length-1]))}setZoomFactorRange(factors){assert(factors.length!==0);this.presetZoomFactors_=factors}convertPageToScreen(page,point){const dimensions=this.getPageInsetDimensions(page);const height=dimensions.height;const width=dimensions.width;const matrix=new DOMMatrix;const rotation=this.getClockwiseRotations()*90;if(rotation===90){matrix.translateSelf(width,0)}else if(rotation===180){matrix.translateSelf(width,height)}else if(rotation===270){matrix.translateSelf(0,height)}matrix.rotateSelf(0,0,rotation);matrix.translateSelf(0,height);matrix.scaleSelf(1,-1);const pointsToPixels=96/72;const result=matrix.transformPoint(new DOMPoint(point.x*pointsToPixels,point.y*pointsToPixels));return{x:result.x+PAGE_SHADOW.left,y:result.y+PAGE_SHADOW.top}}getZoomedDocumentDimensions_(zoom){if(!this.documentDimensions_){return null}return{width:Math.round(this.documentDimensions_.width*zoom),height:Math.round(this.documentDimensions_.height*zoom)}}getDocumentDimensions(){return{width:this.documentDimensions_.width,height:this.documentDimensions_.height}}getLayoutOptions(){return this.documentDimensions_?this.documentDimensions_.layoutOptions:undefined}getViewportRect_(){const zoom=this.getZoom();if(zoom===0){return{x:0,y:0,width:0,height:0}}return{x:this.position.x/zoom,y:this.position.y/zoom,width:this.size.width/zoom,height:this.size.height/zoom}}documentNeedsScrollbars(zoom){const zoomedDimensions=this.getZoomedDocumentDimensions_(zoom);if(!zoomedDimensions){return{horizontal:false,vertical:false}}return{horizontal:zoomedDimensions.width>this.window_.offsetWidth,vertical:zoomedDimensions.height>this.window_.offsetHeight}}documentHasScrollbars(){return this.documentNeedsScrollbars(this.getZoom())}contentSizeChanged_(){const zoomedDimensions=this.getZoomedDocumentDimensions_(this.getZoom());if(zoomedDimensions){this.scrollContent_.setSize(zoomedDimensions.width,zoomedDimensions.height)}}updateViewport_(){this.viewportChangedCallback_()}resizeWrapper_(){this.userInitiatedCallback_(false);this.resize_();this.userInitiatedCallback_(true)}resize_(){if(document.fullscreenElement!==null){this.fittingType_=FittingType.FIT_TO_HEIGHT;this.window_.dispatchEvent(new CustomEvent("fitting-type-changed-for-testing"))}if(this.fittingType_===FittingType.FIT_TO_PAGE){this.fitToPageInternal_(false)}else if(this.fittingType_===FittingType.FIT_TO_WIDTH){this.fitToWidth()}else if(this.fittingType_===FittingType.FIT_TO_HEIGHT){this.fitToHeightInternal_(document.fullscreenElement!==null)}else if(this.internalZoom_===0){this.fitToNone()}else{this.updateViewport_()}}get position(){return{x:this.scrollContent_.scrollLeft,y:this.scrollContent_.scrollTop}}setPosition(position,isSmooth=false){this.scrollContent_.scrollTo(position.x,position.y,isSmooth)}get size(){return{width:this.window_.offsetWidth,height:this.window_.offsetHeight}}get contentSize(){return this.scrollContent_.size}getZoom(){return this.zoomManager_.applyBrowserZoom(this.internalZoom_)}get presetZoomFactors(){return this.presetZoomFactors_}setZoomManager(manager){this.resetTracker();this.zoomManager_=manager;this.tracker_.add(this.zoomManager_.getEventTarget(),"set-zoom",(e=>this.setZoom(e.detail)));this.tracker_.add(this.zoomManager_.getEventTarget(),"update-zoom-from-browser",this.updateZoomFromBrowserChange_.bind(this))}get pinchPhase(){return this.pinchPhase_}get pinchPanVector(){return this.pinchPanVector_}get pinchCenter(){return this.pinchCenter_}mightZoom_(f){this.beforeZoomCallback_();this.allowedToChangeZoom_=true;f();this.allowedToChangeZoom_=false;this.afterZoomCallback_();this.zoomManager_.onPdfZoomChange()}setZoomInternal_(newZoom){assert(this.allowedToChangeZoom_,"Called Viewport.setZoomInternal_ without calling "+"Viewport.mightZoom_.");let zoom=this.getZoom();const currentScrollPos={x:this.position.x/zoom,y:this.position.y/zoom};this.internalZoom_=newZoom;this.contentSizeChanged_();zoom=this.getZoom();this.setPosition({x:currentScrollPos.x*zoom,y:currentScrollPos.y*zoom})}setPinchZoomInternal_(scaleDelta,center){assert(this.allowedToChangeZoom_,"Called Viewport.setPinchZoomInternal_ without calling "+"Viewport.mightZoom_.");this.internalZoom_=this.clampZoom_(this.internalZoom_*scaleDelta);assert(this.oldCenterInContent_);const delta=vectorDelta(this.oldCenterInContent_,this.pluginToContent_(center));const zoom=this.getZoom();const currentScrollPos={x:this.position.x-delta.x*zoom,y:this.position.y-delta.y*zoom};this.contentSizeChanged_();this.setPosition(currentScrollPos)}pluginToContent_(pluginPoint){const zoom=this.getZoom();return{x:(pluginPoint.x+this.position.x)/zoom,y:(pluginPoint.y+this.position.y)/zoom}}setZoom(newZoom){this.fittingType_=FittingType.NONE;this.mightZoom_((()=>{this.setZoomInternal_(this.clampZoom_(newZoom));this.updateViewport_()}))}updateZoomFromBrowserChange_(e){const oldBrowserZoom=e.detail;this.mightZoom_((()=>{const oldZoom=oldBrowserZoom*this.internalZoom_;const currentScrollPos={x:this.position.x/oldZoom,y:this.position.y/oldZoom};this.contentSizeChanged_();const newZoom=this.getZoom();this.setPosition({x:currentScrollPos.x*newZoom,y:currentScrollPos.y*newZoom});this.updateViewport_()}))}get scrollbarWidth(){return this.scrollContent_.scrollbarWidth}get overlayScrollbarWidth(){return this.scrollContent_.overlayScrollbarWidth}get fittingType(){return this.fittingType_}getPageBottom_(index){return this.pageDimensions_[index].y+this.pageDimensions_[index].height}getPageAtY_(y){assert(y>=0);y=Math.floor(y);let min=0;let max=this.pageDimensions_.length-1;if(max===min){return min}while(max>=min){const page=min+Math.floor((max-min)/2);const top=page>0?this.getPageBottom_(page-1):0;const bottom=this.getPageBottom_(page);if(top<=y&&y<=bottom){return page}if(page===this.pageDimensions_.length-1){return page}if(top>y){max=page-1}else{min=page+1}}assertNotReached("Could not find page for Y position: "+y)}getLastPageInViewport_(viewportRect){const pageAtY=this.getPageAtY_(viewportRect.y+viewportRect.height);if(!this.twoUpViewEnabled()||pageAtY%2===1||pageAtY+1>=this.pageDimensions_.length){return pageAtY}const nextPage=this.pageDimensions_[pageAtY+1];return getIntersectionArea(viewportRect,nextPage)>0?pageAtY+1:pageAtY}isPointInsidePage(point){const zoom=this.getZoom();const size=this.size;const position=this.position;const page=this.getPageAtY_((position.y+point.y)/zoom);const pageWidth=this.pageDimensions_[page].width*zoom;const documentWidth=this.getDocumentDimensions().width*zoom;const outerWidth=Math.max(size.width,documentWidth);if(pageWidth>=outerWidth){return true}const x=point.x+position.x;const minX=(outerWidth-pageWidth)/2;const maxX=outerWidth-minX;return x>=minX&&x<=maxX}getMostVisiblePage(){const viewportRect=this.getViewportRect_();const firstVisiblePage=this.getPageAtY_(viewportRect.y);const lastPossibleVisiblePage=this.getLastPageInViewport_(viewportRect);assert(firstVisiblePage<=lastPossibleVisiblePage);if(firstVisiblePage===lastPossibleVisiblePage){return firstVisiblePage}let mostVisiblePage=firstVisiblePage;let largestIntersection=0;for(let i=firstVisiblePage;i<lastPossibleVisiblePage+1;i++){const pageArea=this.pageDimensions_[i].width*this.pageDimensions_[i].height;if(pageArea<=0){continue}const pageIntersectionArea=getIntersectionArea(this.pageDimensions_[i],viewportRect)/pageArea;if(pageIntersectionArea>largestIntersection){mostVisiblePage=i;largestIntersection=pageIntersectionArea}}return mostVisiblePage}computeFittingZoom_(pageDimensions,fitWidth,fitHeight){assert(fitWidth||fitHeight,"Invalid parameters. At least one of fitWidth and fitHeight must be "+"true.");let zoom=this.computeFittingZoomGivenDimensions_(fitWidth,fitHeight,this.window_.offsetWidth,this.window_.offsetHeight,pageDimensions.width,pageDimensions.height);const needsScrollbars=this.documentNeedsScrollbars(zoom);if(!needsScrollbars.horizontal&&!needsScrollbars.vertical){return zoom}const zoomedDimensions=this.getZoomedDocumentDimensions_(zoom);assert(zoomedDimensions!==null);const scrollbarWidth=this.scrollContent_.scrollbarWidth;if(needsScrollbars.horizontal&&zoomedDimensions.height>this.window_.offsetHeight-scrollbarWidth){needsScrollbars.vertical=true}if(needsScrollbars.vertical&&zoomedDimensions.width>this.window_.offsetWidth-scrollbarWidth){needsScrollbars.horizontal=true}const windowWithScrollbars={width:this.window_.offsetWidth,height:this.window_.offsetHeight};if(needsScrollbars.horizontal){windowWithScrollbars.height-=scrollbarWidth}if(needsScrollbars.vertical){windowWithScrollbars.width-=scrollbarWidth}zoom=this.computeFittingZoomGivenDimensions_(fitWidth,fitHeight,windowWithScrollbars.width,windowWithScrollbars.height,pageDimensions.width,pageDimensions.height);return this.zoomManager_.internalZoomComponent(zoom)}computeFittingZoomGivenDimensions_(fitWidth,fitHeight,windowWidth,windowHeight,pageWidth,pageHeight){let zoomWidth=null;let zoomHeight=null;if(fitWidth){zoomWidth=windowWidth/pageWidth}if(fitHeight){zoomHeight=windowHeight/pageHeight}let zoom;if(!fitWidth&&fitHeight){zoom=zoomHeight}else if(fitWidth&&!fitHeight){zoom=zoomWidth}else{zoom=Math.min(zoomWidth,zoomHeight)}return Math.max(zoom,0)}fitToWidth(){this.mightZoom_((()=>{this.fittingType_=FittingType.FIT_TO_WIDTH;if(!this.documentDimensions_){return}this.setZoomInternal_(this.computeFittingZoom_(this.documentDimensions_,true,false));this.updateViewport_()}))}fitToHeightInternal_(scrollToTopOfPage){this.mightZoom_((()=>{this.fittingType_=FittingType.FIT_TO_HEIGHT;if(!this.documentDimensions_){return}const page=this.getMostVisiblePage();const dimensions={width:0,height:this.pageDimensions_[page].height};this.setZoomInternal_(this.computeFittingZoom_(dimensions,false,true));if(scrollToTopOfPage){this.setPosition({x:0,y:this.pageDimensions_[page].y*this.getZoom()})}this.updateViewport_()}))}fitToHeight(){this.fitToHeightInternal_(true)}fitToPageInternal_(scrollToTopOfPage){this.mightZoom_((()=>{this.fittingType_=FittingType.FIT_TO_PAGE;if(!this.documentDimensions_){return}const page=this.getMostVisiblePage();const dimensions={width:this.documentDimensions_.width,height:this.pageDimensions_[page].height};this.setZoomInternal_(this.computeFittingZoom_(dimensions,true,true));if(scrollToTopOfPage){this.setPosition({x:0,y:this.pageDimensions_[page].y*this.getZoom()})}this.updateViewport_()}))}fitToPage(){this.fitToPageInternal_(true)}fitToNone(){this.mightZoom_((()=>{this.fittingType_=FittingType.NONE;if(!this.documentDimensions_){return}this.setZoomInternal_(Math.min(this.defaultZoom_,this.computeFittingZoom_(this.documentDimensions_,true,false)));this.updateViewport_()}))}zoomOut(){this.mightZoom_((()=>{this.fittingType_=FittingType.NONE;let nextZoom=this.presetZoomFactors_[0];for(let i=0;i<this.presetZoomFactors_.length;i++){if(this.presetZoomFactors_[i]<this.internalZoom_){nextZoom=this.presetZoomFactors_[i]}}this.setZoomInternal_(nextZoom);this.updateViewport_()}))}zoomIn(){this.mightZoom_((()=>{this.fittingType_=FittingType.NONE;const maxZoomIndex=this.presetZoomFactors_.length-1;let nextZoom=this.presetZoomFactors_[maxZoomIndex];for(let i=maxZoomIndex;i>=0;i--){if(this.presetZoomFactors_[i]>this.internalZoom_){nextZoom=this.presetZoomFactors_[i]}}this.setZoomInternal_(nextZoom);this.updateViewport_()}))}pageUpDownSpaceHandler_(e,formFieldFocused){if(formFieldFocused&&e.key===" "){this.window_.dispatchEvent(new CustomEvent("scroll-avoided-for-testing"));return}const isDown=e.key==="PageDown"||e.key===" "&&!e.shiftKey;if(this.isPagedMode_()){isDown?this.goToNextPage():this.goToPreviousPage();e.preventDefault()}else if(isCrossFrameKeyEvent(e)){const MIN_FRACTION_TO_STEP_WHEN_PAGING=.875;const scrollOffset=(isDown?1:-1)*this.size.height*MIN_FRACTION_TO_STEP_WHEN_PAGING;this.setPosition({x:this.position.x,y:this.position.y+scrollOffset},this.smoothScrolling_)}this.window_.dispatchEvent(new CustomEvent("scroll-proceeded-for-testing"))}arrowLeftRightHandler_(e,formFieldFocused){if(formFieldFocused||hasKeyModifiers(e)){return}const isRight=e.key==="ArrowRight";if(!this.documentHasScrollbars().horizontal){isRight?this.goToNextPage():this.goToPreviousPage();e.preventDefault()}else if(isCrossFrameKeyEvent(e)){const scrollOffset=(isRight?1:-1)*SCROLL_INCREMENT;this.setPosition({x:this.position.x+scrollOffset,y:this.position.y},this.smoothScrolling_)}}arrowUpDownHandler_(e,formFieldFocused){if(formFieldFocused||hasKeyModifiers(e)){return}const isDown=e.key==="ArrowDown";if(document.fullscreenElement!==null){isDown?this.goToNextPage():this.goToPreviousPage();e.preventDefault()}else if(isCrossFrameKeyEvent(e)){const scrollOffset=(isDown?1:-1)*SCROLL_INCREMENT;this.setPosition({x:this.position.x,y:this.position.y+scrollOffset})}}handleDirectionalKeyEvent(e,formFieldFocused){switch(e.key){case" ":this.pageUpDownSpaceHandler_(e,formFieldFocused);return true;case"PageUp":case"PageDown":if(hasKeyModifiers(e)){return false}this.pageUpDownSpaceHandler_(e,formFieldFocused);return true;case"ArrowLeft":case"ArrowRight":this.arrowLeftRightHandler_(e,formFieldFocused);return true;case"ArrowDown":case"ArrowUp":this.arrowUpDownHandler_(e,formFieldFocused);return true;default:return false}}goToNextPage(){const currentPage=this.getMostVisiblePage();const nextPageOffset=this.twoUpViewEnabled()&&currentPage%2===0?2:1;this.goToPage(currentPage+nextPageOffset)}goToPreviousPage(){const currentPage=this.getMostVisiblePage();let previousPageOffset=-1;if(this.twoUpViewEnabled()){previousPageOffset=currentPage%2===0?-2:-3}this.goToPage(currentPage+previousPageOffset)}goToPage(page){this.goToPageAndXY(page,0,0)}goToPageAndXY(page,x,y){this.mightZoom_((()=>{if(this.pageDimensions_.length===0){return}if(page<0){page=0}if(page>=this.pageDimensions_.length){page=this.pageDimensions_.length-1}const dimensions=this.pageDimensions_[page];const currentCoords=this.retrieveCurrentScreenCoordinates_();if(x===undefined||Number.isNaN(x)){x=currentCoords.x}if(y===undefined||Number.isNaN(y)){y=currentCoords.y}this.setPosition({x:(dimensions.x+x)*this.getZoom(),y:(dimensions.y+y)*this.getZoom()});this.updateViewport_()}))}setDocumentDimensions(documentDimensions){this.mightZoom_((()=>{const initialDimensions=!this.documentDimensions_;this.documentDimensions_=documentDimensions;if(this.documentDimensions_.layoutOptions){if(isRTL()){this.documentDimensions_.layoutOptions.direction=1}else{this.documentDimensions_.layoutOptions.direction=2}}this.pageDimensions_=this.documentDimensions_.pageDimensions;if(initialDimensions){this.setZoomInternal_(Math.min(this.defaultZoom_,this.computeFittingZoom_(this.documentDimensions_,true,false)));this.setPosition({x:0,y:0})}this.contentSizeChanged_();this.resize_()}))}getPageInsetDimensions(page){const pageDimensions=this.pageDimensions_[page];const shadow=PAGE_SHADOW;return{x:pageDimensions.x+shadow.left,y:pageDimensions.y+shadow.top,width:pageDimensions.width-shadow.left-shadow.right,height:pageDimensions.height-shadow.top-shadow.bottom}}getPageScreenRect(page){if(!this.documentDimensions_){return{x:0,y:0,width:0,height:0}}if(page>=this.pageDimensions_.length){page=this.pageDimensions_.length-1}const pageDimensions=this.pageDimensions_[page];const insetDimensions=this.getPageInsetDimensions(page);const x=(this.documentDimensions_.width-pageDimensions.width)/2+PAGE_SHADOW.left;const zoom=this.getZoom();let spaceOnLeft=(this.size.width-this.documentDimensions_.width*zoom)/2;spaceOnLeft=Math.max(spaceOnLeft,0);return{x:x*zoom+spaceOnLeft-this.scrollContent_.scrollLeft,y:insetDimensions.y*zoom-this.scrollContent_.scrollTop,width:insetDimensions.width*zoom,height:insetDimensions.height*zoom}}isPagedMode_(){return this.fittingType_===FittingType.FIT_TO_PAGE||this.fittingType_===FittingType.FIT_TO_HEIGHT}retrieveCurrentScreenCoordinates_(){const currentPage=this.getMostVisiblePage();const dimension=this.pageDimensions_[currentPage];const x=this.position.x/this.getZoom()-dimension.x;const y=this.position.y/this.getZoom()-dimension.y;return{x:x,y:y}}handleNavigateToDestination(page,x,y,zoom){if(zoom){this.setZoom(zoom)}this.goToPageAndXY(page,x,y)}setSmoothScrolling(isSmooth){this.smoothScrolling_=isSmooth}scrollTo(point){let changed=false;const newPosition=this.position;if(point.x!==undefined&&point.x!==newPosition.x){newPosition.x=point.x;changed=true}if(point.y!==undefined&&point.y!==newPosition.y){newPosition.y=point.y;changed=true}if(changed){this.setPosition(newPosition)}}scrollBy(delta){const newPosition=this.position;newPosition.x+=delta.x;newPosition.y+=delta.y;this.scrollTo(newPosition)}resetTracker(){if(this.tracker_){this.tracker_.removeAll()}}dispatchGesture(gesture){this.gestureDetector_.getEventTarget().dispatchEvent(new CustomEvent(gesture.type,{detail:gesture.detail}))}dispatchSwipe(direction){this.swipeDetector_.getEventTarget().dispatchEvent(new CustomEvent("swipe",{detail:direction}))}onPinchUpdate_(e){if(this.sentPinchEvent_){return}this.sentPinchEvent_=true;window.requestAnimationFrame((()=>{this.sentPinchEvent_=false;this.mightZoom_((()=>{const{direction:direction,center:center,startScaleRatio:startScaleRatio}=e.detail;this.pinchPhase_=direction==="out"?PinchPhase.UPDATE_ZOOM_OUT:PinchPhase.UPDATE_ZOOM_IN;const scaleDelta=startScaleRatio/this.prevScale_;if(this.firstPinchCenterInFrame_!=null){this.pinchPanVector_=vectorDelta(center,this.firstPinchCenterInFrame_)}const needsScrollbars=this.documentNeedsScrollbars(this.zoomManager_.applyBrowserZoom(this.clampZoom_(this.internalZoom_*scaleDelta)));this.pinchCenter_=center;if(!needsScrollbars.horizontal){this.pinchCenter_={x:this.window_.offsetWidth/2,y:this.window_.offsetHeight/2}}else if(this.keepContentCentered_){this.oldCenterInContent_=this.pluginToContent_(this.pinchCenter_);this.keepContentCentered_=false}this.fittingType_=FittingType.NONE;this.setPinchZoomInternal_(scaleDelta,center);this.updateViewport_();this.prevScale_=startScaleRatio}))}))}onPinchEnd_(e){window.requestAnimationFrame((()=>{this.mightZoom_((()=>{const{center:center,startScaleRatio:startScaleRatio}=e.detail;this.pinchPhase_=PinchPhase.END;const scaleDelta=startScaleRatio/this.prevScale_;this.pinchCenter_=center;this.setPinchZoomInternal_(scaleDelta,this.pinchCenter_);this.updateViewport_()}));this.pinchPhase_=PinchPhase.NONE;this.pinchPanVector_=null;this.pinchCenter_=null;this.firstPinchCenterInFrame_=null}))}onPinchStart_(e){if(document.fullscreenElement!==null){return}window.requestAnimationFrame((()=>{this.pinchPhase_=PinchPhase.START;this.prevScale_=1;this.oldCenterInContent_=this.pluginToContent_(e.detail.center);const needsScrollbars=this.documentNeedsScrollbars(this.getZoom());this.keepContentCentered_=!needsScrollbars.horizontal;this.firstPinchCenterInFrame_=e.detail.center}))}onWheel_(e){if(e.detail.direction==="down"){this.goToNextPage()}else{this.goToPreviousPage()}}getGestureDetectorForTesting(){return this.gestureDetector_}onSwipe_(e){if(document.fullscreenElement===null&&!this.fullscreenForTesting_){return}if(e.detail===SwipeDirection.RIGHT_TO_LEFT&&!isRTL()||e.detail===SwipeDirection.LEFT_TO_RIGHT&&isRTL()){this.goToNextPage()}else{this.goToPreviousPage()}}enableFullscreenForTesting(){this.fullscreenForTesting_=true}}var PinchPhase;(function(PinchPhase){PinchPhase[PinchPhase["NONE"]=0]="NONE";PinchPhase[PinchPhase["START"]=1]="START";PinchPhase[PinchPhase["UPDATE_ZOOM_OUT"]=2]="UPDATE_ZOOM_OUT";PinchPhase[PinchPhase["UPDATE_ZOOM_IN"]=3]="UPDATE_ZOOM_IN";PinchPhase[PinchPhase["END"]=4]="END"})(PinchPhase||(PinchPhase={}));const SCROLL_INCREMENT=40;function isCrossFrameKeyEvent(keyEvent){return!!keyEvent.fromPlugin||!!keyEvent.fromScriptingAPI}const PAGE_SHADOW={top:3,bottom:7,left:5,right:5};class ScrollContent{constructor(container,sizer,content,scrollbarWidth){this.target_=null;this.plugin_=null;this.width_=0;this.height_=0;this.scrollLeft_=0;this.scrollTop_=0;this.unackedScrollsToRemote_=0;this.container_=container;this.sizer_=sizer;this.content_=content;this.scrollbarWidth_=scrollbarWidth}setEventTarget(target){this.target_=target}dispatchScroll_(){this.target_&&this.target_.dispatchEvent(new Event("scroll"))}setContent(content){if(content===null){this.sizer_.style.display="none";return}this.attachContent_(content);this.sizer_.style.display="block";if(!this.plugin_){return}this.plugin_=null;this.updateSize_();this.scrollTo(this.scrollLeft_,this.scrollTop_)}setRemoteContent(content){this.attachContent_(content);const previousScrollLeft=this.scrollLeft;const previousScrollTop=this.scrollTop;this.sizer_.style.display="none";assert(!this.plugin_);this.plugin_=content;this.updateSize_();this.scrollTo(previousScrollLeft,previousScrollTop)}attachContent_(content){if(!content.parentNode){this.content_.appendChild(content)}assert(content.parentNode===this.content_)}syncScrollFromRemote(position){if(this.unackedScrollsToRemote_>0){return}if(this.scrollLeft_===position.x&&this.scrollTop_===position.y){return}this.scrollLeft_=position.x;this.scrollTop_=position.y;this.dispatchScroll_()}ackScrollToRemote(position){assert(this.unackedScrollsToRemote_>0);if(--this.unackedScrollsToRemote_===0){this.scrollLeft_=position.x;this.scrollTop_=position.y}this.dispatchScroll_()}get scrollbarWidth(){return this.scrollbarWidth_}get overlayScrollbarWidth(){let overlayScrollbarWidth=0;if(this.plugin_){overlayScrollbarWidth=this.scrollbarWidth_}return overlayScrollbarWidth}get size(){return{width:this.width_,height:this.height_}}setSize(width,height){this.width_=width;this.height_=height;this.updateSize_()}updateSize_(){if(this.plugin_){this.plugin_.postMessage({type:"updateSize",width:this.width_,height:this.height_})}else{this.sizer_.style.width=`${this.width_}px`;this.sizer_.style.height=`${this.height_}px`}}get scrollLeft(){return this.plugin_?this.scrollLeft_:this.container_.scrollLeft}get scrollTop(){return this.plugin_?this.scrollTop_:this.container_.scrollTop}scrollTo(x,y,isSmooth=false){if(this.plugin_){x=Number.isNaN(x)?0:x;y=Number.isNaN(y)?0:y;const maxX=this.maxScroll_(this.width_,this.container_.clientWidth,this.height_>this.container_.clientHeight);const maxY=this.maxScroll_(this.height_,this.container_.clientHeight,this.width_>this.container_.clientWidth);if(this.container_.dir==="rtl"){x=Math.min(Math.max(-maxX,x),0)}else{x=Math.max(0,Math.min(x,maxX))}y=Math.max(0,Math.min(y,maxY));this.scrollLeft_=x;this.scrollTop_=y;++this.unackedScrollsToRemote_;this.plugin_.postMessage({type:"syncScrollToRemote",x:this.scrollLeft_,y:this.scrollTop_,isSmooth:isSmooth})}else{this.container_.scrollTo(x,y)}}maxScroll_(maxContent,maxContainer,hasScrollbar){if(hasScrollbar){maxContainer-=this.scrollbarWidth_}return maxContent-maxContainer}}// Copyright 2019 The Chromium Authors. All rights reserved.
function createToken(){const randomBytes=new Uint8Array(16);window.crypto.getRandomValues(randomBytes);return Array.from(randomBytes,(b=>b.toString(16).padStart(2,"0"))).join("")}var PluginControllerEventType;(function(PluginControllerEventType){PluginControllerEventType["IS_ACTIVE_CHANGED"]="PluginControllerEventType.IS_ACTIVE_CHANGED";PluginControllerEventType["PLUGIN_MESSAGE"]="PluginControllerEventType.PLUGIN_MESSAGE"})(PluginControllerEventType||(PluginControllerEventType={}));class PluginController{constructor(){this.eventTarget_=new NativeEventTarget;this.isActive_=false;this.delayedMessages_=[];this.uidCounter_=1}init(plugin,viewport,getIsUserInitiatedCallback,getLoadedCallback){this.plugin_=plugin;this.plugin_.addEventListener("message",(e=>this.handlePluginMessage_(e)),false);this.plugin_.postMessage=(message,transfer)=>{this.delayedMessages_.push({message:message,transfer:transfer})};this.viewport_=viewport;this.getIsUserInitiatedCallback_=getIsUserInitiatedCallback;this.getLoadedCallback_=getLoadedCallback;this.pendingTokens_=new Map;this.requestResolverMap_=new Map;this.viewport_.setContent(this.plugin_);this.viewport_.setRemoteContent(this.plugin_)}get isActive(){return!!this.plugin_&&this.isActive_}set isActive(isActive){const wasActive=this.isActive;this.isActive_=isActive;if(this.isActive===wasActive){return}this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.IS_ACTIVE_CHANGED,{detail:this.isActive}))}createUid_(){return this.uidCounter_++}getEventTarget(){return this.eventTarget_}viewportChanged(){}redo(){}undo(){}beforeZoom(){this.postMessage_({type:"stopScrolling"});if(this.viewport_.pinchPhase===PinchPhase.START){const position=this.viewport_.position;const zoom=this.viewport_.getZoom();const pinchPhase=this.viewport_.pinchPhase;const layoutOptions=this.viewport_.getLayoutOptions();this.postMessage_({type:"viewport",userInitiated:true,zoom:zoom,layoutOptions:layoutOptions,xOffset:position.x,yOffset:position.y,pinchPhase:pinchPhase})}}afterZoom(){const position=this.viewport_.position;const zoom=this.viewport_.getZoom();const layoutOptions=this.viewport_.getLayoutOptions();const pinchVector=this.viewport_.pinchPanVector||{x:0,y:0};const pinchCenter=this.viewport_.pinchCenter||{x:0,y:0};const pinchPhase=this.viewport_.pinchPhase;this.postMessage_({type:"viewport",userInitiated:this.getIsUserInitiatedCallback_(),zoom:zoom,layoutOptions:layoutOptions,xOffset:position.x,yOffset:position.y,pinchPhase:pinchPhase,pinchX:pinchCenter.x,pinchY:pinchCenter.y,pinchVectorX:pinchVector.x,pinchVectorY:pinchVector.y})}postMessage_(message){this.plugin_.postMessage(message)}postMessageWithReply_(message){const promiseResolver=new PromiseResolver;message.messageId=`${message.type}_${this.createUid_()}`;this.requestResolverMap_.set(message.messageId,promiseResolver);this.postMessage_(message);return promiseResolver.promise}rotateClockwise(){this.postMessage_({type:"rotateClockwise"})}rotateCounterclockwise(){this.postMessage_({type:"rotateCounterclockwise"})}setDisplayAnnotations(displayAnnotations){this.postMessage_({type:"displayAnnotations",display:displayAnnotations})}setTwoUpView(enableTwoUpView){this.postMessage_({type:"setTwoUpView",enableTwoUpView:enableTwoUpView})}print(){this.postMessage_({type:"print"})}selectAll(){this.postMessage_({type:"selectAll"})}getSelectedText(){return this.postMessageWithReply_({type:"getSelectedText"})}requestThumbnail(page){return this.postMessageWithReply_({type:"getThumbnail",page:page-1})}resetPrintPreviewMode(printPreviewParams){this.postMessage_({type:"resetPrintPreviewMode",url:printPreviewParams.url,grayscale:printPreviewParams.grayscale,pageCount:printPreviewParams.modifiable?printPreviewParams.pageNumbers.length:0})}setBackgroundColor(color){this.postMessage_({type:"setBackgroundColor",color:color})}loadPreviewPage(url,index){this.postMessage_({type:"loadPreviewPage",url:url,index:index})}getPasswordComplete(password){this.postMessage_({type:"getPasswordComplete",password:password})}getNamedDestination(destination){return this.postMessageWithReply_({type:"getNamedDestination",namedDestination:destination})}setPresentationMode(enablePresentationMode){this.postMessage_({type:"setPresentationMode",enablePresentationMode:enablePresentationMode})}save(requestType){const resolver=new PromiseResolver;const newToken=createToken();this.pendingTokens_.set(newToken,resolver);this.postMessage_({type:"save",token:newToken,saveRequestType:requestType});return resolver.promise}saveAttachment(index){return this.postMessageWithReply_({type:"saveAttachment",attachmentIndex:index})}async load(_fileName,data){this.viewport_.setRemoteContent(this.plugin_);this.plugin_.postMessage({type:"loadArray",dataToLoad:data},[data]);this.plugin_.style.display="block";await this.getLoadedCallback_();this.isActive=true}unload(){this.plugin_.style.display="none";this.isActive=false}bindMessageHandler(port){assert(this.delayedMessages_!==null);assert(this.plugin_);const delayedMessages=this.delayedMessages_;this.delayedMessages_=null;this.plugin_.postMessage=port.postMessage.bind(port);port.onmessage=e=>this.handlePluginMessage_(e);for(const{message:message,transfer:transfer}of delayedMessages){this.plugin_.postMessage(message,transfer)}}handlePluginMessage_(messageEvent){const messageData=messageEvent.data;if(messageData.messageId!==undefined){const resolver=this.requestResolverMap_.get(messageData.messageId)||null;assert(resolver!==null);this.requestResolverMap_.delete(messageData.messageId);resolver.resolve(messageData);return}switch(messageData.type){case"gesture":this.viewport_.dispatchGesture(messageData.gesture);break;case"swipe":this.viewport_.dispatchSwipe(messageData.direction);break;case"goToPage":this.viewport_.goToPage(messageData.page);break;case"setScrollPosition":this.viewport_.scrollTo(messageData);break;case"scrollBy":this.viewport_.scrollBy(messageData);break;case"syncScrollFromRemote":this.viewport_.syncScrollFromRemote(messageData);break;case"ackScrollToRemote":this.viewport_.ackScrollToRemote(messageData);break;case"saveData":this.saveData_(messageData);break;case"consumeSaveToken":const resolver=this.pendingTokens_.get(messageData.token);assert(resolver);assert(this.pendingTokens_.delete(messageData.token));resolver.resolve(null);break;default:this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.PLUGIN_MESSAGE,{detail:messageData}))}}saveData_(messageData){const resolver=this.pendingTokens_.get(messageData.token);assert(resolver);assert(this.pendingTokens_.delete(messageData.token));if(!messageData.dataToSave){resolver.reject();return}const MIN_FILE_SIZE="%PDF1.0".length;const MAX_FILE_SIZE=100*1e3*1e3;const buffer=messageData.dataToSave;const bufView=new Uint8Array(buffer);assert(bufView.length<=MAX_FILE_SIZE,`File too large to be saved: ${bufView.length} bytes.`);assert(bufView.length>=MIN_FILE_SIZE);assert(String.fromCharCode(bufView[0],bufView[1],bufView[2],bufView[3])==="%PDF");resolver.resolve(messageData)}static getInstance(){return instance$1||(instance$1=new PluginController)}}let instance$1=null;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map((function(key){return metaDatas[this.type][key]}),this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`<!--css-build:shadow--><style scope="iron-icon">:host {
  align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
}

:host([hidden]) {
  display: none;
}

</style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});// Copyright 2018 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-icon-button">:host {
  --cr-icon-button-fill-color: var(--google-grey-700);
        --cr-icon-button-icon-start-offset: 0;
        --cr-icon-button-icon-size: 20px;
        --cr-icon-button-size: 36px;
        --cr-icon-button-height: var(--cr-icon-button-size);
        --cr-icon-button-transition: 150ms ease-in-out;
        --cr-icon-button-width: var(--cr-icon-button-size);
        
        -webkit-tap-highlight-color: transparent;
        border-radius: 50%;
        color: var(--cr-icon-button-stroke-color,
            var(--cr-icon-button-fill-color));
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        height: var(--cr-icon-button-height);
        margin-inline-end: var(--cr-icon-button-margin-end,
            var(--cr-icon-ripple-margin));
        margin-inline-start: var(--cr-icon-button-margin-start);
        outline: none;
        overflow: hidden;
        user-select: none;
        vertical-align: middle;
        width: var(--cr-icon-button-width);
}

:host(:hover) {
  background-color: var(--cr-icon-button-hover-background-color,
            var(--cr-hover-background-color));
}

:host(:focus-visible:focus) {
  box-shadow: inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,
            var(--cr-focus-outline-color));
}

:host(:active) {
  background-color: var(--cr-icon-button-active-background-color,
            var(--cr-active-background-color));
}

:host([disabled]) {
  cursor: initial;
        opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host(.no-overlap) {
  --cr-icon-button-margin-end: 0;
        --cr-icon-button-margin-start: 0;
}

:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])) {
  transform: scaleX(-1);
}

:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon {
  transform: scaleX(-1);
}

:host(:not([iron-icon])) #maskedImage {
  -webkit-mask-image: var(--cr-icon-image);
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: var(--cr-icon-button-icon-size);
        -webkit-transform: var(--cr-icon-image-transform, none);
        background-color: var(--cr-icon-button-fill-color);
        height: 100%;
        transition: background-color var(--cr-icon-button-transition);
        width: 100%;
}

#icon {
  align-items: center;
        border-radius: 4px;
        display: flex;
        height: 100%;
        justify-content: center;
        padding-inline-start: var(--cr-icon-button-icon-start-offset);
        
        position: relative;
        width: 100%;
}

iron-icon {
  --iron-icon-fill-color: var(--cr-icon-button-fill-color);
        --iron-icon-stroke-color: var(--cr-icon-button-stroke-color, none);
        --iron-icon-height: var(--cr-icon-button-icon-size);
        --iron-icon-width: var(--cr-icon-button-icon-size);
        transition: fill var(--cr-icon-button-transition),
            stroke var(--cr-icon-button-transition);
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-icon-button-fill-color: var(--google-grey-500);
}

}

</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`,is:"cr-icon-button",properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{blur:"onBlur_",click:"onClick_",keydown:"onKeyDown_",keyup:"onKeyUp_"},spaceKeyDown_:false,disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()},applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value)},onBlur_(){this.spaceKeyDown_=false},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg","img").forEach((child=>child.setAttribute("role","none")))}}))},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}},onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$5=html`<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="". See also http://goo.gl/Y1OdAq
      -->
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      
  </defs></svg>
</iron-iconset-svg>
<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      See http://goo.gl/Y1OdAq for instructions on adding additional icons.
      -->
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z">
      </path></g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
      </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </g>
      <g id="sync">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
        </path>
      </g>
      <g id="videocam">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$5.content);const styleMod$1=document.createElement("dom-module");styleMod$1.innerHTML=`<template>\n    <style>\n\ncr-icon-button {\n  --cr-icon-button-fill-color: var(--pdf-toolbar-text-color);\n  --cr-icon-button-focus-outline-color: var(--google-grey-500);\n  margin: 0;\n}\n\ncr-icon-button:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 50%;\n}\n\n/* Dark mode styles copied from\n   ui/webui/resources/cr_elements/shared_vars_css.html. Unfortunately there\n   seems to be no great way to share styles with the\n   "prefers-color-scheme: dark" @media query selector.\n   TODO(crbug.com/1231199): Remove these overrides when the PDF viewer\n   supports light and dark modes. */\ncr-action-menu,\nviewer-bookmark {\n  --cr-menu-background-color: var(--google-grey-900);\n  --cr-menu-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0,\n                    rgba(0, 0, 0, .15) 0 3px 6px 2px;\n  --cr-primary-text-color: var(--google-grey-200);\n  --cr-menu-background-focus-color: var(--google-grey-700);\n  --cr-menu-background-sheen: rgba(255, 255, 255, .06);\n  --cr-separator-line: var(--cr-separator-height) solid\n      rgba(255, 255, 255, .1);\n}\n    </style>\n  </template>\n`;styleMod$1.register("pdf-shared");function getTemplate$b(){return html`<!--_html_template_start_--><style include="pdf-shared">
      #item {
        align-items: flex-start;
        cursor: pointer;
        display: flex;
        padding: 5px 0;
        position: relative;
        transition: background-color 100ms ease-out;
      }

      #item:hover {
        background-color: var(--cr-menu-background-focus-color);
      }

      #item:active {
        background-color: rgba(255, 255, 255, 0.25);
      }

      #title {
        outline: none;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #title:focus-visible {
        outline: auto -webkit-focus-ring-color;
      }

      #expand-container {
        --expand-button-size: 28px;
        flex-shrink: 0;
        position: relative;
        width: var(--expand-button-size);
      }

      /* Forces #expand-container to have a height of 1 line-height. */
      #expand-container::before {
        content: '.';
        visibility: hidden;
      }

      #expand {
        --cr-icon-button-fill-color: var(--primary-text-color);
        --cr-icon-button-icon-size: 16px;
        --cr-icon-button-size: var(--expand-button-size);
        left: 0;
        margin: 0;
        position: absolute;
        /* Vertically aligns the expand icon with the first line of #title. */
        top: calc((100% - var(--cr-icon-button-size)) / 2);
        transition: transform 150ms;
      }

      :host-context([dir=rtl]) #expand {
        transform: rotate(180deg);
      }

      :host([children-shown_]) #expand {
        transform: rotate(90deg);
      }
    </style>
    <div id="item" on-click="onClick_">
      <div id="expand-container">
        <cr-icon-button id="expand" iron-icon="cr:chevron-right" aria-label="Bölüm" aria-expanded$="[[getAriaExpanded_(childrenShown_)]]" on-click="toggleChildren_"></cr-icon-button>
      </div>
      <span id="title" tabindex="0">[[bookmark.title]]</span>
    </div>
    <!-- dom-if will stamp the complex bookmark tree lazily as individual nodes
      are opened. -->
    <template is="dom-if" if="[[childrenShown_]]">
      <template is="dom-repeat" items="[[bookmark.children]]">
        <viewer-bookmark bookmark="[[item]]" depth="[[childDepth_]]">
        </viewer-bookmark>
      </template>
    </template>
<!--_html_template_end_-->`}// Copyright 2015 The Chromium Authors. All rights reserved.
const BOOKMARK_INDENT=20;var ChangePageOrigin;(function(ChangePageOrigin){ChangePageOrigin["BOOKMARK"]="bookmark";ChangePageOrigin["THUMBNAIL"]="thumbnail";ChangePageOrigin["PAGE_SELECTOR"]="pageSelector"})(ChangePageOrigin||(ChangePageOrigin={}));class ViewerBookmarkElement extends PolymerElement{static get is(){return"viewer-bookmark"}static get template(){return getTemplate$b()}static get properties(){return{bookmark:{type:Object,observer:"bookmarkChanged_"},depth:{type:Number,observer:"depthChanged_"},childDepth_:Number,childrenShown_:{type:Boolean,reflectToAttribute:true,value:false}}}ready(){super.ready();this.$.item.addEventListener("keydown",(e=>{if(e.key==="Enter"){this.onEnter_(e)}else if(e.key===" "){this.onSpace_(e)}}))}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}bookmarkChanged_(){this.$.expand.style.visibility=this.bookmark.children.length>0?"visible":"hidden"}depthChanged_(){this.childDepth_=this.depth+1;this.$.item.style.paddingInlineStart=this.depth*BOOKMARK_INDENT+"px"}onClick_(){if(this.bookmark.page!=null){if(this.bookmark.zoom!=null){this.fire_("change-zoom",{zoom:this.bookmark.zoom})}if(this.bookmark.x!=null&&this.bookmark.y!=null){this.fire_("change-page-and-xy",{page:this.bookmark.page,x:this.bookmark.x,y:this.bookmark.y,origin:ChangePageOrigin.BOOKMARK})}else{this.fire_("change-page",{page:this.bookmark.page,origin:ChangePageOrigin.BOOKMARK})}}else if(this.bookmark.uri!=null){this.fire_("navigate",{uri:this.bookmark.uri,newtab:true})}}onEnter_(e){if(e.target!==this.$.expand){this.onClick_()}}onSpace_(e){this.onClick_();e.preventDefault()}toggleChildren_(e){this.childrenShown_=!this.childrenShown_;e.stopPropagation()}getAriaExpanded_(){return this.childrenShown_?"true":"false"}}customElements.define(ViewerBookmarkElement.is,ViewerBookmarkElement);function getTemplate$a(){return html`<!--_html_template_start_--><style include="pdf-shared">
  :host {
    display: block;
    padding-inline-end: 20px;
    padding-top: 20px;
  }
</style>
<template is="dom-repeat" items="[[bookmarks]]">
  <viewer-bookmark bookmark="[[item]]" depth="0"></viewer-bookmark>
</template>
<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
class ViewerDocumentOutlineElement extends PolymerElement{static get is(){return"viewer-document-outline"}static get template(){return getTemplate$a()}static get properties(){return{bookmarks:Array}}}customElements.define(ViewerDocumentOutlineElement.is,ViewerDocumentOutlineElement);const template$4=html`<iron-iconset-svg size="24" name="pdf">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      See http://goo.gl/Y1OdAq for instructions on adding additional icons.
      -->
      <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
      <g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
      <g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
      <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
      <g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
      <g id="doc-outline"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"></path></g>
      <g id="eraser"><path d="M21.41,11.33 L13.04,20 L4.73,20 L2.58,17.86 C1.8,17.08 1.8,15.83 2.58,15.04 L13.62,3.58 C14.4,2.81 15.68,2.81 16.46,3.58 L21.41,8.51 C22.2,9.29 22.2,10.55 21.41,11.33 L21.41,11.33 Z"></path><polygon points="17.26 18 15.26 20 21.96 20 21.96 18"></polygon></g>
      <g id="fit-to-height"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 10l3.01-4.5L15 10H9zm0 4h6l-2.99 4.5L9 14zm-6 5.01h18V4.99H3v14.02z"></path></g>
      <g id="fit-to-width"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3.5 12.01L8 9v6l-4.5-2.99zM16 15V9l4.5 3.01L16 15zM3 19.01h18V4.99H3v14.02z"></path></g>
      <g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
      <g id="highlighter"><path d="M10.22,9.49 L4.31,15.49 C3.54,16.29 3.61,17.54 4.39,18.34 L0.77,22 L6.45,22 L7.19,21.25 C7.97,22.06 9.14,22.11 9.92,21.3 L15.88,15.25 L10.22,9.49 L10.22,9.49 Z"></path><path style="fill: var(--pen-tip-fill)" d="M22.68,5.49 L19.86,2.62 C19.08,1.82 17.79,1.78 17.02,2.58 L11.27,8.43 L16.93,14.18 L22.62,8.4 C23.39,7.59 23.45,6.29 22.68,5.49 L22.68,5.49 Z"></path><path style="fill: var(--pen-tip-border)" d="M18.4,3c0.3,0,0.5,0.1,0.7,0.3L22,6.2c0.4,0.4,0.4,1.1-0.1,1.5l-5,5.1l-4.3-4.3l5.1-5.2 C17.9,3.1,18.1,3,18.4,3 M18.4,2c-0.5,0-1,0.2-1.4,0.6l-5.8,5.9l5.7,5.8l5.7-5.8c0.8-0.8,0.8-2.1,0.1-2.9l-2.8-2.9 C19.5,2.2,18.9,2,18.4,2L18.4,2z"></path></g>
      <g id="marker"><polygon points="3 17.25 3 21 6.74 21 14.28 13.47 10.53 9.72"></polygon><path style="fill: var(--pen-tip-fill)" d="M18.37,3.3 L20.71,5.63 C21.1,6.02 21.11,6.66 20.72,7.05 L15.35,12.41 L11.59,8.65 L14.12,6.12 L13.39,5.39 L7.73,11.05 L6.33,9.65 L12.7,3.29 C13.09,2.9 13.74,2.91 14.12,3.3 L15.54,4.71 L16.96,3.3 C17.34,2.91 17.98,2.91 18.37,3.3 L18.37,3.3 Z"></path><path style="fill: var(--pen-tip-border)" d="M17.7,4L20,6.3L15.4,11L13,8.6l1.8-1.8l0.7-0.7l-0.7-0.7l-0.2-0.2l0.2,0.2l0.7,0.7l0.7-0.7L17.7,4 M13.4,3 c-0.3,0-0.5,0.1-0.7,0.3L6.3,9.6l1.4,1.4l5.7-5.7l0.7,0.7l-2.5,2.5l3.8,3.8L20.7,7c0.4-0.4,0.4-1,0-1.4l-2.3-2.3 C18.2,3.1,17.9,3,17.7,3S17.2,3.1,17,3.3l-1.4,1.4l-1.4-1.4C13.9,3.1,13.7,3,13.4,3L13.4,3z"></path></g>
      <g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
      <g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
      <g id="rotate-left"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"></path></g>
      <g id="rotate-right"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"></path></g>
      <g id="thumbnails"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></g>
      <g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$4.content);function getTemplate$9(){return html`<!--_html_template_start_--><style include="pdf-shared">
  :host {
    display: contents;
  }

  cr-action-menu::part(dialog) {
    position: fixed;
    top: 48px;
  }

  :host([menu-open_]) #download {
    background-color: var(--active-button-bg);
    border-radius: 50%;
  }
</style>
<cr-icon-button id="download" iron-icon="cr:file-download" on-click="onDownloadClick_" aria-label="İndir" aria-haspopup$="[[downloadHasPopup_]]" title="İndir"></cr-icon-button>
<cr-action-menu id="menu" on-open-changed="onOpenChanged_">
  <button id="download-edited" class="dropdown-item" on-click="onDownloadEditedClick_">
    Yaptığınız değişiklikler dahil
  </button>
  <button id="download-original" class="dropdown-item" on-click="onDownloadOriginalClick_">
    Yaptığınız değişiklikler hariç
  </button>
</cr-action-menu>
<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
class ViewerDownloadControlsElement extends PolymerElement{constructor(){super(...arguments);this.waitForFormFocusChange_=null}static get is(){return"viewer-download-controls"}static get template(){return getTemplate$9()}static get properties(){return{hasEdits:Boolean,hasEnteredAnnotationMode:Boolean,isFormFieldFocused:{type:Boolean,observer:"onFormFieldFocusedChanged_"},downloadHasPopup_:{type:String,computed:"computeDownloadHasPopup_(hasEdits,"+"hasEnteredAnnotationMode)"},menuOpen_:{type:Boolean,reflectToAttribute:true,value:false}}}isMenuOpen(){return this.menuOpen_}closeMenu(){this.$.menu.close()}onOpenChanged_(e){this.menuOpen_=e.detail.value}hasEditsToSave_(){return this.hasEnteredAnnotationMode||this.hasEdits}computeDownloadHasPopup_(){return this.hasEditsToSave_()?"menu":"false"}showDownloadMenu_(){this.$.menu.showAt(this.$.download,{anchorAlignmentX:AnchorAlignment.CENTER});this.dispatchEvent(new CustomEvent("download-menu-shown-for-testing",{bubbles:true,composed:true}))}onDownloadClick_(){this.waitForEdits_().then((hasEdits=>{if(hasEdits){this.showDownloadMenu_()}else{this.dispatchSaveEvent_(SaveRequestType.ORIGINAL)}}))}waitForEdits_(){if(this.hasEditsToSave_()){return Promise.resolve(true)}if(!this.isFormFieldFocused){return Promise.resolve(false)}this.waitForFormFocusChange_=new PromiseResolver;return this.waitForFormFocusChange_.promise}onFormFieldFocusedChanged_(){if(!this.waitForFormFocusChange_){return}this.waitForFormFocusChange_.resolve(this.hasEdits);this.waitForFormFocusChange_=null}dispatchSaveEvent_(type){this.dispatchEvent(new CustomEvent("save",{detail:type,bubbles:true,composed:true}))}onDownloadOriginalClick_(){this.dispatchSaveEvent_(SaveRequestType.ORIGINAL);this.$.menu.close()}onDownloadEditedClick_(){this.dispatchSaveEvent_(this.hasEnteredAnnotationMode?SaveRequestType.ANNOTATION:SaveRequestType.EDITED);this.$.menu.close()}}customElements.define(ViewerDownloadControlsElement.is,ViewerDownloadControlsElement);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>\n  <style css-build="shadow">html {\n  --iron-icon-height: 20px;\n  --iron-icon-width: 20px;\n  --viewer-icon-ink-color: rgb(189, 189, 189);\n  --viewer-pdf-toolbar-background-color: rgb(50, 54, 57);\n  --viewer-text-input-selection-color: rgba(255, 255, 255, 0.3);\n}\n\n</style>\n</custom-style>\n`;document.head.appendChild($_documentContainer.content);function getTemplate$8(){return html`<!--_html_template_start_--><style>
      /* A separate div is used because if the direction CSS property is applied
       * to the host element, any margins or paddings set by the parent will be
       * affected and be reversed. */
      #content {
        align-items: center;
        color: #fff;
        direction: ltr;
        display: flex;
        font-size: 0.81rem;
        text-align: center;

        --page-selector-spacing: 4px;
      }

      #pageSelector::selection {
        background-color: var(--viewer-text-input-selection-color);
      }

      input,
      #pagelength {
        /* --page-length-digits is set through JavaScript. 1px is added because
         * the unit 'ch' does not provide exact whole number pixels, and
         * therefore seems to have 1px-off bugginess. */
        width: calc(max(2, var(--page-length-digits)) * 1ch + 1px);
      }

      input {
        background: rgba(0, 0, 0, 0.5);
        border: none;
        color: white;
        font-family: inherit;
        line-height: inherit;
        outline: none;
        padding: 0 var(--page-selector-spacing);
        text-align: center;
      }

      #divider {
        margin: 0 var(--page-selector-spacing);
      }
    </style>
    <div id="content">
      <input part="input" type="text" id="pageSelector" value="[[pageNo]]" on-pointerup="select" on-input="onInput_" on-change="pageNoCommitted" aria-label="Sayfa numarası">
      <span id="divider">/</span>
      <span id="pagelength">[[docLength]]</span>
    </div>
<!--_html_template_end_-->`}// Copyright 2015 The Chromium Authors. All rights reserved.
class ViewerPageSelectorElement extends PolymerElement{static get is(){return"viewer-page-selector"}static get template(){return getTemplate$8()}static get properties(){return{docLength:{type:Number,value:1,observer:"docLengthChanged_"},pageNo:{type:Number,value:1}}}pageNoCommitted(){const page=parseInt(this.$.pageSelector.value,10);if(!isNaN(page)&&page<=this.docLength&&page>0){this.dispatchEvent(new CustomEvent("change-page",{detail:{page:page-1,origin:ChangePageOrigin.PAGE_SELECTOR},composed:true}))}else{this.$.pageSelector.value=this.pageNo.toString()}this.$.pageSelector.blur()}docLengthChanged_(){const numDigits=this.docLength.toString().length;this.style.setProperty("--page-length-digits",`${numDigits}`)}select(){this.$.pageSelector.select()}isActive(){return this.shadowRoot.activeElement===this.$.pageSelector}onInput_(){this.$.pageSelector.value=this.$.pageSelector.value.replace(/[^\d]/,"")}}customElements.define(ViewerPageSelectorElement.is,ViewerPageSelectorElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce((function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo}),{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map((function(keyComboString){return parseKeyComboString(keyComboString)}))}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map((function(behavior){return behavior.keyBindings}));if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach((function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}}),this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort((function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1}))}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach((function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach((function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)}),this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html`<!--css-build:shadow--><style scope="paper-ripple">:host {
  bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        
        transform: translate3d(0, 0, 0);
}

.ripple {
  background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
}

.ripple, :host(.circle) {
  border-radius: 50%;
}

</style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",(function(){this.__showRipple(e)}),1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach((ripple=>{ripple.remove()}));this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",(function(){this.__hideRipple()}),1)},__hideRipple:function(){Promise.all(this.ripples.map((function(ripple){return new Promise((function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}}))}))).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};const template$3=document.createElement("template");template$3.innerHTML=`<dom-module id="cr-hidden-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-hidden-style">[hidden], :host([hidden]) {\n  display: none !important;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$3.content.cloneNode(true));// Copyright 2019 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="cr-button">:host {
  --active-shadow-rgb: var(--google-grey-800-rgb);
        --active-shadow-action-rgb: var(--google-blue-500-rgb);
        --bg-action: var(--google-blue-600);
        --border-color: var(--google-grey-300);
        --disabled-bg-action: var(--google-grey-100);
        --disabled-bg: white;
        --disabled-border-color: var(--google-grey-100);
        --disabled-text-color: var(--google-grey-600);
        --focus-shadow-color: rgba(var(--google-blue-600-rgb), .4);
        --hover-bg-action: rgba(var(--google-blue-600-rgb), .9);
        --hover-bg-color: rgba(var(--google-blue-500-rgb), .04);
        --hover-border-color: var(--google-blue-100);
        --hover-shadow-action-rgb: var(--google-blue-500-rgb);
        --ink-color-action: white;
        
        --ink-color: var(--google-blue-600);
        --ripple-opacity-action: .32;
        --ripple-opacity: .1;
        --text-color-action: white;
        --text-color: var(--google-blue-600);
}

@media (prefers-color-scheme: dark) {
:host {
  --active-bg: black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));
          --active-shadow-rgb: 0, 0, 0;
          --active-shadow-action-rgb: var(--google-blue-500-rgb);
          --bg-action: var(--google-blue-300);
          --border-color: var(--google-grey-700);
          --disabled-bg-action: var(--google-grey-800);
          
          --disabled-bg: transparent;
          --disabled-border-color: var(--google-grey-800);
          --disabled-text-color: var(--google-grey-500);
          --focus-shadow-color: rgba(var(--google-blue-300-rgb), .5);
          --hover-bg-action: var(--bg-action)
              linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));
          --hover-bg-color: rgba(var(--google-blue-300-rgb), .08);
          --ink-color-action: black;
          --ink-color: var(--google-blue-300);
          --ripple-opacity-action: .16;
          --ripple-opacity: .16;
          --text-color-action: var(--google-grey-900);
          --text-color: var(--google-blue-300);
}

}

:host {
  --paper-ripple-opacity: var(--ripple-opacity);
        -webkit-tap-highlight-color: transparent;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        box-sizing: border-box;
        color: var(--text-color);
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        font-weight: 500;
        height: var(--cr-button-height);
        justify-content: center;
        min-width: 5.14em;
        outline-width: 0;
        overflow: hidden;
        padding: 8px 16px;
        position: relative;
        user-select: none;
}

:host-context(.focus-outline-visible):host(:focus) {
  box-shadow: 0 0 0 2px var(--focus-shadow-color);
}

:host(:active) {
  background: var(--active-bg);
        box-shadow: var(--active-shadow,
            0 1px 2px 0 rgba(var(--active-shadow-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-rgb), .15));
}

:host(:hover) {
  background-color: var(--hover-bg-color);
}

@media (prefers-color-scheme: light) {
:host(:hover) {
  border-color: var(--hover-border-color);
}

}

:host(.action-button) {
  --ink-color: var(--ink-color-action);
        --paper-ripple-opacity: var(--ripple-opacity-action);
        background-color: var(--bg-action);
        border: none;
        color: var(--text-color-action);
}

:host(.action-button:active) {
  box-shadow: var(--active-shadow-action,
            0 1px 2px 0 rgba(var(--active-shadow-action-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-action-rgb), .15));
}

:host(.action-button:hover) {
  background: var(--hover-bg-action);
}

@media (prefers-color-scheme: light) {
:host(.action-button:not(:active):hover) {
  box-shadow:
              0 1px 2px 0 rgba(var(--hover-shadow-action-rgb), .3),
              0 1px 3px 1px rgba(var(--hover-shadow-action-rgb), .15);
}

}

:host([disabled]) {
  background-color: var(--disabled-bg);
        border-color: var(--disabled-border-color);
        color: var(--disabled-text-color);
        cursor: auto;
        pointer-events: none;
}

:host(.action-button[disabled]) {
  background-color: var(--disabled-bg-action);
        border-color: transparent;
}

:host(.cancel-button) {
  margin-inline-end: 8px;
}

:host(.action-button), :host(.cancel-button) {
  line-height: 154%;
}

paper-ripple {
  color: var(--ink-color);
        height: var(--paper-ripple-height);
        
        left: var(--paper-ripple-left, 0);
        top: var(--paper-ripple-top, 0);
        width: var(--paper-ripple-width);
}

</style>
    <slot></slot>
<!--_html_template_end_-->`,is:"cr-button",behaviors:[PaperRippleBehavior],properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{blur:"onBlur_",click:"onClick_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"onPointerDown_"},spaceKeyDown_:false,timeoutIds_:null,ready(){FocusOutlineManager.forDocument(document);this.timeoutIds_=new Set},detached(){this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()},setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)},disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",Boolean(this.disabled));this.applyTabIndex_()},applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value)},onBlur_(){this.spaceKeyDown_=false},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){this.lastKeyDownKey_=null;return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}},onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}},onPointerDown_(){this.ensureRipple()},_createRipple(){const ripple=PaperRippleBehavior._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}});// Copyright 2017 The Chromium Authors. All rights reserved.
const CrContainerShadowSide={TOP:"top",BOTTOM:"bottom"};const CrContainerShadowBehavior={intersectionObserver_:null,dropShadows_:null,intersectionProbes_:null,sides_:null,ready(){this.dropShadows_=new Map;this.intersectionProbes_=new Map},attached(){const hasBottomShadow=this.$.container.hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.$.container);this.$.container.prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.$.container.nextSibling);this.$.container.append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)},detached(){this.enableShadowBehavior(false)},getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.$.container,threshold:0})},enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))},showDropShadows(){assert$1(!this.intersectionObserver_);assert$1(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}};const template$2=document.createElement("template");template$2.innerHTML=`<dom-module id="cr-icons" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-icons">.icon-arrow-back {\n  --cr-icon-image: url(../images/icon_arrow_back.svg);\n}\n\n.icon-arrow-dropdown {\n  --cr-icon-image: url(../images/icon_arrow_dropdown.svg);\n}\n\n.icon-cancel {\n  --cr-icon-image: url(../images/icon_cancel.svg);\n}\n\n.icon-clear {\n  --cr-icon-image: url(../images/icon_clear.svg);\n}\n\n.icon-copy-content {\n  --cr-icon-image: url(../images/icon_copy_content.svg);\n}\n\n.icon-delete-gray {\n  --cr-icon-image: url(../images/icon_delete_gray.svg);\n}\n\n.icon-edit {\n  --cr-icon-image: url(../images/icon_edit.svg);\n}\n\n.icon-picture-delete {\n  --cr-icon-image: url(../images/icon_picture_delete.svg);\n}\n\n.icon-expand-less {\n  --cr-icon-image: url(../images/icon_expand_less.svg);\n}\n\n.icon-expand-more {\n  --cr-icon-image: url(../images/icon_expand_more.svg);\n}\n\n.icon-external {\n  --cr-icon-image: url(../images/open_in_new.svg);\n}\n\n.icon-more-vert {\n  --cr-icon-image: url(../images/icon_more_vert.svg);\n}\n\n.icon-refresh {\n  --cr-icon-image: url(../images/icon_refresh.svg);\n}\n\n.icon-search {\n  --cr-icon-image: url(../images/icon_search.svg);\n}\n\n.icon-settings {\n  --cr-icon-image: url(../images/icon_settings.svg);\n}\n\n.icon-visibility {\n  --cr-icon-image: url(../images/icon_visibility.svg);\n}\n\n.icon-visibility-off {\n  --cr-icon-image: url(../images/icon_visibility_off.svg);\n}\n\n.subpage-arrow {\n  --cr-icon-image: url(../images/arrow_right.svg);\n}\n\n.cr-icon {\n  -webkit-mask-image: var(--cr-icon-image);\n        -webkit-mask-position: center;\n        -webkit-mask-repeat: no-repeat;\n        -webkit-mask-size: var(--cr-icon-size);\n        background-color: var(--cr-icon-color, var(--google-grey-700));\n        flex-shrink: 0;\n        height: var(--cr-icon-ripple-size);\n        margin-inline-end: var(--cr-icon-ripple-margin);\n        margin-inline-start: var(--cr-icon-button-margin-start);\n        user-select: none;\n        width: var(--cr-icon-ripple-size);\n}\n\n:host-context([dir=rtl]) .cr-icon {\n  transform: scaleX(-1);\n}\n\n.cr-icon.no-overlap {\n  margin-inline-end: 0;\n        margin-inline-start: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n.cr-icon {\n  background-color: var(--cr-icon-color, var(--google-grey-500));\n}\n\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$2.content.cloneNode(true));// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="cr-dialog">dialog {
  --scroll-border-color: var(--paper-grey-300);
        --scroll-border: 1px solid var(--scroll-border-color);
        border: 0;
        border-radius: 8px;
        bottom: 50%;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.12),
                    0 16px 16px rgba(0, 0, 0, 0.24);
        color: inherit;
        max-height: initial;
        max-width: initial;
        overflow-y: hidden;
        padding: 0;
        position: absolute;
        top: 50%;
        width: var(--cr-dialog-width, 512px);
}

@media (prefers-color-scheme: dark) {
dialog {
  --scroll-border-color: var(--google-grey-700);
          background-color: var(--google-grey-900);
          
          background-image: linear-gradient(rgba(255, 255, 255, .04),
                                            rgba(255, 255, 255, .04));
}

}

dialog[open] #content-wrapper {
  display: flex;
        flex-direction: column;
        max-height: 100vh;
        overflow: auto;
}

.top-container, :host ::slotted([slot=button-container]), :host ::slotted([slot=footer]) {
  flex-shrink: 0;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
}

:host ::slotted([slot=body]) {
  color: var(--cr-secondary-text-color);
        padding: 0 var(--cr-dialog-body-padding-horizontal, 20px);
}

:host ::slotted([slot=title]) {
  color: var(--cr-primary-text-color);
        flex: 1;
        font-family: var(--cr-dialog-font-family, inherit);
        font-size: var(--cr-dialog-title-font-size, calc(15 / 13 * 100%));
        line-height: 1;
        padding-bottom: var(--cr-dialog-title-slot-padding-bottom, 16px);
        padding-inline-end:  var(--cr-dialog-title-slot-padding-end, 20px);
        padding-inline-start: var(--cr-dialog-title-slot-padding-start, 20px);
        padding-top: var(--cr-dialog-title-slot-padding-top, 20px);
}

:host ::slotted([slot=button-container]) {
  display: flex;
        justify-content: flex-end;
        padding-bottom: var(--cr-dialog-button-container-padding-bottom, 16px);
        padding-inline-end: var(--cr-dialog-button-container-padding-horizontal, 16px);
        padding-inline-start: var(--cr-dialog-button-container-padding-horizontal, 16px);
        padding-top: 24px;
}

:host ::slotted([slot=footer]) {
  border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border-top: 1px solid #dbdbdb;
        margin: 0;
        padding: 16px 20px;
}

@media (prefers-color-scheme: dark) {
:host ::slotted([slot=footer]) {
  border-top-color: var(--cr-separator-color);
}

}

.body-container {
  box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 1.375rem; 
        overflow: auto;
}

:host {
  --transparent-border: 1px solid transparent;
}

#cr-container-shadow-top {
  border-bottom: var(--cr-dialog-body-border-top,
            var(--transparent-border));
}

#cr-container-shadow-bottom {
  border-bottom: var(--cr-dialog-body-border-bottom,
            var(--transparent-border));
}

#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {
  border-bottom: var(--scroll-border);
}

.top-container {
  align-items: flex-start;
        display: flex;
        min-height: var(--cr-dialog-top-container-min-height, 31px);
}

.title-container {
  display: flex;
        flex: 1;
        outline: none;
}

#close {
  align-self: flex-start;
        margin-inline-end: 4px;
        margin-top: 4px;
}

</style>
    <!-- TODO(crbug/1139958): Remove "not chromeos" block when chromeVox issue is fixed-->
    <!--Update both "not chromeos" and "chromeos" blocks if either changes-->

    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title">
    <!-- This wrapper is necessary, such that the "pulse" animation is not
        erroneously played when the user clicks on the outer-most scrollbar. -->
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <div id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </div>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow="" part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>


<!--_html_template_end_-->`,is:"cr-dialog",behaviors:[CrContainerShadowBehavior],properties:{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}},listeners:{pointerdown:"onPointerdown_"},intersectionObserver_:null,mutationObserver_:null,boundKeydown_:null,ready(){window.addEventListener("popstate",function(){if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}.bind(this));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}},attached(){const mutationObserverCallback=function(){if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}}.bind(this);this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}},detached(){this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}},addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)},removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null},showModal(){this.$.dialog.showModal();assert$1(this.$.dialog.open);this.open=true;this.fire("cr-dialog-open")},cancel(){this.fire("cancel");this.$.dialog.close();assert$1(!this.$.dialog.open);this.open=false},close(){this.$.dialog.close("success");assert$1(!this.$.dialog.open);this.open=false},setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)},onCloseKeypress_(e){e.stopPropagation()},onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.fire("close")},onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.fire("cancel")},getNative(){return this.$.dialog},onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}},onKeydown_(e){assert$1(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()},onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()},focus(){this.$$(".title-container").focus()}});const template$1=document.createElement("template");template$1.innerHTML=`<dom-module id="cr-shared-style" assetpath="chrome://resources/">\n  <template>\n    <style include="cr-hidden-style cr-icons" scope="cr-shared-style">html, :host {\n  --scrollable-border-color: var(--google-grey-300);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml, :host {\n  --scrollable-border-color: var(--google-grey-700);\n}\n\n}\n\n[actionable] {\n  cursor: pointer;\n}\n\n.hr {\n  border-top: var(--cr-separator-line);\n}\n\niron-list.cr-separators > *:not([first]) {\n  border-top: var(--cr-separator-line);\n}\n\n[scrollable] {\n  border-color: transparent;\n        border-style: solid;\n        border-width: 1px 0;\n        overflow-y: auto;\n}\n\n[scrollable].is-scrolled {\n  border-top-color: var(--scrollable-border-color);\n}\n\n[scrollable].can-scroll:not(.scrolled-to-bottom) {\n  border-bottom-color: var(--scrollable-border-color);\n}\n\n[scrollable] iron-list > :not(.no-outline):focus, [selectable]:focus, [selectable] > :focus {\n  background-color: var(--cr-focused-item-color);\n        outline: none;\n}\n\n.scroll-container {\n  display: flex;\n        flex-direction: column;\n        min-height: 1px;\n}\n\n[selectable] > * {\n  cursor: pointer;\n}\n\n.cr-centered-card-container {\n  box-sizing: border-box;\n        display: block;\n        height: inherit;\n        margin: 0 auto;\n        max-width: var(--cr-centered-card-max-width);\n        min-width: 550px;\n        position: relative;\n        width: calc(100% * var(--cr-centered-card-width-percentage));\n}\n\n.cr-container-shadow {\n  box-shadow: inset 0 5px 6px -3px rgba(0, 0, 0, .4);\n        height: var(--cr-container-shadow-height);\n        left: 0;\n        margin: 0 0 var(--cr-container-shadow-margin);\n        opacity: 0;\n        pointer-events: none;\n        position: relative;\n        right: 0;\n        top: 0;\n        transition: opacity 500ms;\n        z-index: 1;\n}\n\n#cr-container-shadow-bottom {\n  margin-bottom: 0;\n        margin-top: var(--cr-container-shadow-margin);\n        transform: scaleY(-1);\n}\n\n#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {\n  opacity: var(--cr-container-shadow-max-opacity);\n}\n\n.cr-row {\n  align-items: center;\n        border-top: var(--cr-separator-line);\n        display: flex;\n        min-height: var(--cr-section-min-height);\n        padding: 0 var(--cr-section-padding);\n}\n\n.cr-row.first, .cr-row.continuation {\n  border-top: none;\n}\n\n.cr-row-gap {\n  padding-inline-start: 16px;\n}\n\n.cr-button-gap {\n  margin-inline-start: 8px;\n}\n\npaper-tooltip::part(tooltip) {\n  border-radius: var(--paper-tooltip-border-radius, 2px);\n        font-size: 92.31%;  \n        font-weight: 500;\n        max-width: 330px;\n        min-width: var(--paper-tooltip-min-width, 200px);\n        padding: var(--paper-tooltip-padding, 10px 8px);\n}\n\n.cr-padded-text {\n  padding-block-end: var(--cr-section-vertical-padding);\n        padding-block-start: var(--cr-section-vertical-padding);\n}\n\n.cr-title-text {\n  color: var(--cr-title-text-color);\n        font-size: 107.6923%; \n        font-weight: 500;\n}\n\n.cr-secondary-text {\n  color: var(--cr-secondary-text-color);\n        font-weight: 400;\n}\n\n.cr-form-field-label {\n  color: var(--cr-form-field-label-color);\n        display: block;\n        font-size: var(--cr-form-field-label-font-size);\n        font-weight: 500;\n        letter-spacing: .4px;\n        line-height: var(--cr-form-field-label-line-height);\n        margin-bottom: 8px;\n}\n\n.cr-vertical-tab {\n  align-items: center;\n        display: flex;\n}\n\n.cr-vertical-tab::before {\n  border-radius: 0 3px 3px 0;\n        content: '';\n        display: block;\n        flex-shrink: 0;\n        height: var(--cr-vertical-tab-height, 100%);\n        width: 4px;\n}\n\n.cr-vertical-tab.selected::before {\n  background: var(--cr-vertical-tab-selected-color, var(--cr-checked-color));\n}\n\n:host-context([dir=rtl]) .cr-vertical-tab::before {\n  transform: scaleX(-1);\n}\n\n.iph-anchor-highlight {\n  background-color: var(--cr-iph-anchor-highlight-color);\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$1.content.cloneNode(true));const template=document.createElement("template");template.innerHTML=`<dom-module id="cr-input-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-input-style">:host {\n  --cr-input-background-color: var(--google-grey-100);\n        --cr-input-color: var(--cr-primary-text-color);\n        --cr-input-error-color: var(--google-red-600);\n        --cr-input-focus-color: var(--google-blue-600);\n        display: block;\n        \n        outline: none;\n}\n\n@media (prefers-color-scheme: dark) {\n:host {\n  --cr-input-background-color: rgba(0, 0, 0, .3);\n          --cr-input-error-color: var(--google-red-300);\n          --cr-input-focus-color: var(--google-blue-300);\n}\n\n}\n\n:host([focused_]:not([readonly]):not([invalid])) #label {\n  color: var(--cr-input-focus-color);\n}\n\n#input-container {\n  border-radius: var(--cr-input-border-radius, 4px);\n        overflow: hidden;\n        position: relative;\n        width: var(--cr-input-width, 100%);\n}\n\n#inner-input-container {\n  background-color: var(--cr-input-background-color);\n        box-sizing: border-box;\n        padding: 0;\n}\n\n#input {\n  -webkit-appearance: none;\n        \n        background-color: transparent;\n        border: none;\n        box-sizing: border-box;\n        caret-color: var(--cr-input-focus-color);\n        color: var(--cr-input-color);\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        line-height: inherit;\n        min-height: var(--cr-input-min-height, auto);\n        outline: none;\n\n        \n        padding-bottom: var(--cr-input-padding-bottom, 6px);\n        padding-inline-end: var(--cr-input-padding-end, 8px);\n        padding-inline-start: var(--cr-input-padding-start, 8px);\n        padding-top: var(--cr-input-padding-top, 6px);\n\n        text-align: inherit;\n        text-overflow: ellipsis;\n        width: 100%;\n}\n\n#underline {\n  border-bottom: 2px solid var(--cr-input-focus-color);\n        border-radius: var(--cr-input-underline-border-radius, 0);\n        bottom: 0;\n        box-sizing: border-box;\n        display: var(--cr-input-underline-display);\n        height: var(--cr-input-underline-height, 0);\n        left: 0;\n        margin: auto;\n        opacity: 0;\n        position: absolute;\n        right: 0;\n        transition: opacity 120ms ease-out, width 0s linear 180ms;\n        width: 0;\n}\n\n:host([invalid]) #underline, :host([force-underline]) #underline, :host([focused_]) #underline {\n  opacity: 1;\n        transition: opacity 120ms ease-in, width 180ms ease-out;\n        width: 100%;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template.content.cloneNode(true));// Copyright 2018 The Chromium Authors. All rights reserved.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-input-style cr-shared-style" scope="cr-input">:host([disabled]) :-webkit-any(#label, #error, #input-container) {
  opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host ::slotted(cr-button[slot=suffix]) {
  margin-inline-start: var(--cr-button-edge-spacing) !important;
}

:host([invalid]) #label {
  color: var(--cr-input-error-color);
}

#input {
  border-bottom: var(--cr-input-border-bottom, none);
        letter-spacing: var(--cr-input-letter-spacing);
}

#input::placeholder {
  color: var(--cr-input-placeholder-color, var(--cr-secondary-text-color));
        letter-spacing: var(--cr-input-placeholder-letter-spacing);
}

:host([invalid]) #input {
  caret-color: var(--cr-input-error-color);
}

:host([readonly]) #input {
  opacity: var(--cr-input-readonly-opacity, 0.6);
}

:host([invalid]) #underline {
  border-color: var(--cr-input-error-color);
}

#error {
  color: var(--cr-input-error-color);
        display: var(--cr-input-error-display, block);
        font-size: var(--cr-form-field-label-font-size);
        height: var(--cr-form-field-label-height);
        line-height: var(--cr-form-field-label-line-height);
        margin: 8px 0;
        visibility: hidden;
        white-space: var(--cr-input-error-white-space);
}

:host([invalid]) #error {
  visibility: visible;
}

#row-container, #inner-input-container {
  align-items: center;
        display: flex;
        
        justify-content: space-between;
        position: relative;
}

#input[type='search']::-webkit-search-cancel-button {
  display: none;
}

:host-context([dir=rtl]) #input[type=url] {
  text-align: right;
}

#input[type=url] {
  direction: ltr;
}

</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <slot name="inline-prefix"></slot>
          <!-- Only attributes that are named inconsistently between html and js
              need to use attr$="", such as |readonly| vs .readOnly. -->
          <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
          <slot name="inline-suffix"></slot>
        </div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`,is:"cr-input",properties:{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}},ready(){assert$1(!this.hasAttribute("tabindex"))},onInputTabindexChanged_(){assert$1(this.inputTabindex===0||this.inputTabindex===-1)},onTypeChanged_(){assert$1(SUPPORTED_INPUT_TYPES.has(this.type))},get inputElement(){return this.$.input},getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder},getAriaInvalid_(invalid){return invalid?"true":"false"},onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.$$(`#${ERROR_ID}`);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}},placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}},focus(){this.focusInput()},focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true},onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}},onInputChange_(e){this.fire("change",{sourceEvent:e})},onInputFocus_(){this.focused_=true},onInputBlur_(){this.focused_=false},select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert$1(start===undefined&&end===undefined);this.inputElement.select()}},validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}});function getTemplate$7(){return html`<!--_html_template_start_--><style include="cr-shared-style">
      #password {
        margin-top: var(--cr-form-field-bottom-spacing);
      }
    </style>
    <cr-dialog id="dialog" no-cancel="" show-on-attach="">
      <div slot="title">Şifre gerekiyor</div>
      <div slot="body">
        <div id="message">Doküman şifre korumalı. Lütfen şifreyi girin.</div>
        <cr-input id="password" type="password" error-message="Hatalı parola" invalid="[[invalid]]" autofocus="">
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button id="submit" class="action-button" on-click="submit">
          Gönder
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}// Copyright 2014 The Chromium Authors. All rights reserved.
class ViewerPasswordDialogElement extends PolymerElement{static get is(){return"viewer-password-dialog"}static get template(){return getTemplate$7()}static get properties(){return{invalid:Boolean}}close(){this.$.dialog.close()}deny(){const password=this.$.password;password.disabled=false;this.$.submit.disabled=false;this.invalid=true;password.select();this.dispatchEvent(new CustomEvent("password-denied-for-testing"))}submit(){const password=this.$.password;if(password.value.length===0){return}password.disabled=true;this.$.submit.disabled=true;this.dispatchEvent(new CustomEvent("password-submitted",{detail:{password:password.value}}))}}customElements.define(ViewerPasswordDialogElement.is,ViewerPasswordDialogElement);const styleMod=document.createElement("dom-module");styleMod.innerHTML=`<template>\n    <style>\n\n#content {\n  height: 100%;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n}\n\n#plugin {\n  display: block;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n#sizer {\n  position: absolute;\n  z-index: 0;\n}\n    </style>\n  </template>\n`;styleMod.register("pdf-viewer-shared-style");function getTemplate$6(){return html`<!--_html_template_start_--><style>
  :host {
    --focus-border-color: var(--google-blue-300);
    display: block;
  }

  :host(:focus) {
    outline: none;
  }

  #thumbnail {
    align-items: center;
    display: inline-flex;
    height: 140px;
    justify-content: center;
    margin-bottom: 12px;
    margin-inline-end: auto;
    margin-inline-start: auto;
    width: 108px;
  }

  :host([is-active]) #thumbnail {
    --active-background-color: white;
    background-color: var(--active-background-color);
    box-shadow: 0 0 0 6px var(--focus-border-color);
  }

  :host(:focus-visible) #thumbnail {
    box-shadow: 0 0 0 2px var(--focus-border-color);
  }

  :host([is-active]:focus-visible) #thumbnail {
    box-shadow: 0 0 0 8px var(--focus-border-color);
  }

  canvas {
    display: block;
    opacity: 0.5;
  }

  :host([is-active]) canvas {
    opacity: 1;
  }

  :host([is-active]) canvas:hover,
  canvas:hover {
    opacity: 0.7;
  }

  #pageNumber {
    line-height: 1;
  }
</style>
<div id="thumbnail" on-click="onClick_"></div>
<div id="pageNumber">[[pageNumber]]</div>
<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
const PORTRAIT_WIDTH=108;const LANDSCAPE_WIDTH=140;const PAINTED_ATTRIBUTE="painted";class ViewerThumbnailElement extends PolymerElement{constructor(){super();this.addEventListener("keydown",this.onKeydown_)}static get is(){return"viewer-thumbnail"}static get template(){return getTemplate$6()}static get properties(){return{clockwiseRotations:{type:Number,value:0,observer:"clockwiseRotationsChanged_"},isActive:{type:Boolean,observer:"isActiveChanged_",reflectToAttribute:true},pageNumber:Number}}set image(imageData){let canvas=this.getCanvas_();if(!canvas){canvas=document.createElement("canvas");canvas.oncontextmenu=e=>e.preventDefault();this.$.thumbnail.appendChild(canvas)}canvas.width=imageData.width;canvas.height=imageData.height;this.styleCanvas_();const ctx=canvas.getContext("2d");ctx.putImageData(imageData,0,0)}clearImage(){if(!this.isPainted()){return}const canvas=this.getCanvas_();if(canvas){canvas.remove()}this.removeAttribute(PAINTED_ATTRIBUTE)}getClickTarget(){return this.$.thumbnail}clockwiseRotationsChanged_(){if(this.getCanvas_()){this.styleCanvas_()}}getCanvas_(){return this.shadowRoot.querySelector("canvas")}getThumbnailCssSize_(rotated){const canvas=this.getCanvas_();const isPortrait=canvas.width<canvas.height!==rotated;const orientedWidth=rotated?canvas.height:canvas.width;const orientedHeight=rotated?canvas.width:canvas.height;const cssWidth=Math.min(isPortrait?PORTRAIT_WIDTH:LANDSCAPE_WIDTH,Math.trunc(orientedWidth/window.devicePixelRatio));const scale=cssWidth/orientedWidth;const cssHeight=Math.trunc(orientedHeight*scale);return{width:cssWidth,height:cssHeight}}focusAndScroll(){this.scrollIntoView({block:"nearest"});this.focus({preventScroll:true})}isPainted(){return this.hasAttribute(PAINTED_ATTRIBUTE)}setPainted(){this.toggleAttribute(PAINTED_ATTRIBUTE,true)}isActiveChanged_(){if(this.isActive){this.scrollIntoView({block:"nearest"})}}focusThumbnailNext_(){if(this.nextElementSibling&&this.nextElementSibling.matches("viewer-thumbnail")){this.nextElementSibling.focusAndScroll()}}focusThumbnailPrev_(){if(this.previousElementSibling&&this.previousElementSibling.matches("viewer-thumbnail")){this.previousElementSibling.focusAndScroll()}}onClick_(){this.dispatchEvent(new CustomEvent("change-page",{detail:{page:this.pageNumber-1,origin:ChangePageOrigin.THUMBNAIL},bubbles:true,composed:true}))}onKeydown_(e){switch(e.key){case"ArrowDown":e.preventDefault();this.focusThumbnailNext_();break;case"ArrowUp":e.preventDefault();this.focusThumbnailPrev_();break;case"Enter":case" ":e.preventDefault();this.onClick_();break}}styleCanvas_(){assert(this.clockwiseRotations>=0&&this.clockwiseRotations<4);const canvas=this.getCanvas_();const div=this.shadowRoot.querySelector("#thumbnail");const degreesRotated=this.clockwiseRotations*90;canvas.style.transform=`rotate(${degreesRotated}deg)`;const rotated=this.clockwiseRotations%2!==0;const cssSize=this.getThumbnailCssSize_(rotated);div.style.width=`${cssSize.width}px`;div.style.height=`${cssSize.height}px`;canvas.style.width=`${rotated?cssSize.height:cssSize.width}px`;canvas.style.height=`${rotated?cssSize.width:cssSize.height}px`}}customElements.define(ViewerThumbnailElement.is,ViewerThumbnailElement);function getTemplate$5(){return html`<!--_html_template_start_--><style>
  :host(:focus) {
    outline: none;
  }

  #thumbnails {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding-bottom: 24px;
    padding-inline-end: var(--viewer-thumbnail-bar-padding-inline-end);
    text-align: center;
  }

  viewer-thumbnail {
    padding-top: 24px;
  }
</style>
<div id="thumbnails" hidden$="[[!isPluginActive_]]">
  <template is="dom-repeat" items="[[pageNumbers_]]" on-dom-change="onDomChange_">
    <viewer-thumbnail tabindex="0" role="button" aria-label$="[[getAriaLabel_(item)]]" clockwise-rotations="[[clockwiseRotations]]" is-active="[[isActivePage_(item, activePage)]]" page-number="[[item]]">
    </viewer-thumbnail>
  </template>
</div>
<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
class ViewerThumbnailBarElement extends PolymerElement{constructor(){super();this.pluginController_=PluginController.getInstance();this.tracker_=new EventTracker;this.inTest=false;this.isPluginActive_=this.pluginController_.isActive;this.tracker_.add(this.pluginController_.getEventTarget(),PluginControllerEventType.IS_ACTIVE_CHANGED,(e=>this.isPluginActive_=e.detail))}static get is(){return"viewer-thumbnail-bar"}static get template(){return getTemplate$5()}static get properties(){return{activePage:{type:Number,observer:"activePageChanged_"},clockwiseRotations:Number,docLength:Number,isPluginActive_:Boolean,pageNumbers_:{type:Array,computed:"computePageNumbers_(docLength)"}}}ready(){super.ready();this.addEventListener("focus",this.onFocus_);this.addEventListener("keydown",this.onKeydown_);const thumbnailsDiv=this.$.thumbnails;this.intersectionObserver_=new IntersectionObserver((entries=>{entries.forEach((entry=>{const thumbnail=entry.target;if(!entry.isIntersecting){thumbnail.clearImage();return}if(thumbnail.isPainted()){return}thumbnail.setPainted();if(!this.isPluginActive_||this.inTest){return}this.pluginController_.requestThumbnail(thumbnail.pageNumber).then((response=>{const array=new Uint8ClampedArray(response.imageData);const imageData=new ImageData(array,response.width);thumbnail.image=imageData}))}))}),{root:thumbnailsDiv,rootMargin:"500% 0% 100%"});FocusOutlineManager.forDocument(document)}activePageChanged_(){if(this.shadowRoot.activeElement){this.getThumbnailForPage(this.activePage).focusAndScroll()}}clickThumbnailForPage(pageNumber){const thumbnail=this.getThumbnailForPage(pageNumber);if(!thumbnail){return}thumbnail.getClickTarget().click()}getThumbnailForPage(pageNumber){return this.shadowRoot.querySelector(`viewer-thumbnail:nth-child(${pageNumber})`)}computePageNumbers_(){return Array.from({length:this.docLength},((_,i)=>i+1))}getAriaLabel_(pageNumber){return loadTimeData.getStringF("thumbnailPageAriaLabel",pageNumber)}isActivePage_(page){return this.activePage===page}onDomChange_(){this.shadowRoot.querySelectorAll("viewer-thumbnail").forEach((thumbnail=>{this.intersectionObserver_.observe(thumbnail)}))}onFocus_(){const focusOutlineManager=FocusOutlineManager.forDocument(document);if(!focusOutlineManager.visible){return}const activeThumbnail=this.shadowRoot.querySelector("viewer-thumbnail[is-active]");if(activeThumbnail){activeThumbnail.focus();return}const firstThumbnail=this.shadowRoot.querySelector("viewer-thumbnail");if(!firstThumbnail){return}firstThumbnail.focus()}onKeydown_(e){if(e.key==="Tab"){if(e.shiftKey){this.focus();return}this.shadowRoot.querySelector("viewer-thumbnail:last-of-type").focus({preventScroll:true})}else if(e.key==="ArrowRight"){e.preventDefault();this.clickThumbnailForPage(this.activePage+1)}else if(e.key==="ArrowLeft"){e.preventDefault();this.clickThumbnailForPage(this.activePage-1)}}}customElements.define(ViewerThumbnailBarElement.is,ViewerThumbnailBarElement);// Copyright 2017 The Chromium Authors. All rights reserved.
function recordFitTo(fittingType){if(fittingType===FittingType.FIT_TO_PAGE){record(UserAction.FIT_TO_PAGE)}else if(fittingType===FittingType.FIT_TO_WIDTH){record(UserAction.FIT_TO_WIDTH)}}function record(action){if(!chrome.metricsPrivate){return}if(!actionsMetric){actionsMetric={metricName:"PDF.Actions",type:chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,min:1,max:UserAction.NUMBER_OF_ACTIONS,buckets:UserAction.NUMBER_OF_ACTIONS+1}}chrome.metricsPrivate.recordValue(actionsMetric,action);if(firstMap.has(action)){const firstAction=firstMap.get(action);if(!firstActionRecorded.has(firstAction)){chrome.metricsPrivate.recordValue(actionsMetric,firstAction);firstActionRecorded.add(firstAction)}}}function resetForTesting(){firstActionRecorded.clear();actionsMetric=null}let actionsMetric=null;const firstActionRecorded=new Set;var UserAction;(function(UserAction){UserAction[UserAction["DOCUMENT_OPENED"]=0]="DOCUMENT_OPENED";UserAction[UserAction["ROTATE_FIRST"]=1]="ROTATE_FIRST";UserAction[UserAction["ROTATE"]=2]="ROTATE";UserAction[UserAction["FIT_TO_WIDTH_FIRST"]=3]="FIT_TO_WIDTH_FIRST";UserAction[UserAction["FIT_TO_WIDTH"]=4]="FIT_TO_WIDTH";UserAction[UserAction["FIT_TO_PAGE_FIRST"]=5]="FIT_TO_PAGE_FIRST";UserAction[UserAction["FIT_TO_PAGE"]=6]="FIT_TO_PAGE";UserAction[UserAction["FOLLOW_BOOKMARK_FIRST"]=9]="FOLLOW_BOOKMARK_FIRST";UserAction[UserAction["FOLLOW_BOOKMARK"]=10]="FOLLOW_BOOKMARK";UserAction[UserAction["PAGE_SELECTOR_NAVIGATE_FIRST"]=11]="PAGE_SELECTOR_NAVIGATE_FIRST";UserAction[UserAction["PAGE_SELECTOR_NAVIGATE"]=12]="PAGE_SELECTOR_NAVIGATE";UserAction[UserAction["SAVE_FIRST"]=13]="SAVE_FIRST";UserAction[UserAction["SAVE"]=14]="SAVE";UserAction[UserAction["SAVE_WITH_ANNOTATION_FIRST"]=15]="SAVE_WITH_ANNOTATION_FIRST";UserAction[UserAction["SAVE_WITH_ANNOTATION"]=16]="SAVE_WITH_ANNOTATION";UserAction[UserAction["PRINT_FIRST"]=17]="PRINT_FIRST";UserAction[UserAction["PRINT"]=18]="PRINT";UserAction[UserAction["ENTER_ANNOTATION_MODE_FIRST"]=19]="ENTER_ANNOTATION_MODE_FIRST";UserAction[UserAction["ENTER_ANNOTATION_MODE"]=20]="ENTER_ANNOTATION_MODE";UserAction[UserAction["EXIT_ANNOTATION_MODE_FIRST"]=21]="EXIT_ANNOTATION_MODE_FIRST";UserAction[UserAction["EXIT_ANNOTATION_MODE"]=22]="EXIT_ANNOTATION_MODE";UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN_FIRST"]=23]="ANNOTATE_STROKE_TOOL_PEN_FIRST";UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN"]=24]="ANNOTATE_STROKE_TOOL_PEN";UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER_FIRST"]=25]="ANNOTATE_STROKE_TOOL_ERASER_FIRST";UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER"]=26]="ANNOTATE_STROKE_TOOL_ERASER";UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST"]=27]="ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST";UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER"]=28]="ANNOTATE_STROKE_TOOL_HIGHLIGHTER";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH_FIRST"]=29]="ANNOTATE_STROKE_DEVICE_TOUCH_FIRST";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH"]=30]="ANNOTATE_STROKE_DEVICE_TOUCH";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE_FIRST"]=31]="ANNOTATE_STROKE_DEVICE_MOUSE_FIRST";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE"]=32]="ANNOTATE_STROKE_DEVICE_MOUSE";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN_FIRST"]=33]="ANNOTATE_STROKE_DEVICE_PEN_FIRST";UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN"]=34]="ANNOTATE_STROKE_DEVICE_PEN";UserAction[UserAction["TWO_UP_VIEW_ENABLE_FIRST"]=35]="TWO_UP_VIEW_ENABLE_FIRST";UserAction[UserAction["TWO_UP_VIEW_ENABLE"]=36]="TWO_UP_VIEW_ENABLE";UserAction[UserAction["TWO_UP_VIEW_DISABLE_FIRST"]=37]="TWO_UP_VIEW_DISABLE_FIRST";UserAction[UserAction["TWO_UP_VIEW_DISABLE"]=38]="TWO_UP_VIEW_DISABLE";UserAction[UserAction["ZOOM_IN_FIRST"]=39]="ZOOM_IN_FIRST";UserAction[UserAction["ZOOM_IN"]=40]="ZOOM_IN";UserAction[UserAction["ZOOM_OUT_FIRST"]=41]="ZOOM_OUT_FIRST";UserAction[UserAction["ZOOM_OUT"]=42]="ZOOM_OUT";UserAction[UserAction["ZOOM_CUSTOM_FIRST"]=43]="ZOOM_CUSTOM_FIRST";UserAction[UserAction["ZOOM_CUSTOM"]=44]="ZOOM_CUSTOM";UserAction[UserAction["THUMBNAIL_NAVIGATE_FIRST"]=45]="THUMBNAIL_NAVIGATE_FIRST";UserAction[UserAction["THUMBNAIL_NAVIGATE"]=46]="THUMBNAIL_NAVIGATE";UserAction[UserAction["SAVE_ORIGINAL_ONLY_FIRST"]=47]="SAVE_ORIGINAL_ONLY_FIRST";UserAction[UserAction["SAVE_ORIGINAL_ONLY"]=48]="SAVE_ORIGINAL_ONLY";UserAction[UserAction["SAVE_ORIGINAL_FIRST"]=49]="SAVE_ORIGINAL_FIRST";UserAction[UserAction["SAVE_ORIGINAL"]=50]="SAVE_ORIGINAL";UserAction[UserAction["SAVE_EDITED_FIRST"]=51]="SAVE_EDITED_FIRST";UserAction[UserAction["SAVE_EDITED"]=52]="SAVE_EDITED";UserAction[UserAction["TOGGLE_SIDENAV_FIRST"]=53]="TOGGLE_SIDENAV_FIRST";UserAction[UserAction["TOGGLE_SIDENAV"]=54]="TOGGLE_SIDENAV";UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS_FIRST"]=55]="SELECT_SIDENAV_THUMBNAILS_FIRST";UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS"]=56]="SELECT_SIDENAV_THUMBNAILS";UserAction[UserAction["SELECT_SIDENAV_OUTLINE_FIRST"]=57]="SELECT_SIDENAV_OUTLINE_FIRST";UserAction[UserAction["SELECT_SIDENAV_OUTLINE"]=58]="SELECT_SIDENAV_OUTLINE";UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS_FIRST"]=59]="TOGGLE_DISPLAY_ANNOTATIONS_FIRST";UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS"]=60]="TOGGLE_DISPLAY_ANNOTATIONS";UserAction[UserAction["PRESENT_FIRST"]=61]="PRESENT_FIRST";UserAction[UserAction["PRESENT"]=62]="PRESENT";UserAction[UserAction["PROPERTIES_FIRST"]=63]="PROPERTIES_FIRST";UserAction[UserAction["PROPERTIES"]=64]="PROPERTIES";UserAction[UserAction["NUMBER_OF_ACTIONS"]=65]="NUMBER_OF_ACTIONS"})(UserAction||(UserAction={}));function createFirstMap(){const entries=Object.entries(UserAction).filter((x=>Number.isInteger(x[1]))).sort(((a,b)=>a[1]-b[1]));const entriesWithFirst=entries.slice(1,entries.length-1);const map=new Map;for(let i=0;i<entriesWithFirst.length;i+=2){map.set(entriesWithFirst[i+1][1],entriesWithFirst[i][1])}return map}const firstMap=createFirstMap();function getTemplate$4(){return html`<!--_html_template_start_--><style include="pdf-shared cr-hidden-style cr-shared-style">
  :host {
    --sidenav-selected-tab-color: var(--google-blue-300);
    background-color: var(--viewer-pdf-toolbar-background-color);
    display: flex;
    height: 100%;
    min-width: var(--viewer-pdf-sidenav-width);
    overflow: hidden;
    width: var(--viewer-pdf-sidenav-width);
  }

  #icons {
    display: flex;
    flex-direction: column;
    min-width: 64px;
  }

  /* These are dummy styles currently - replace with real content. */
  #content {
    color: white;
    flex: 1;
    overflow-x: hidden;
  }

  #icons:not([hidden]) + #content {
    --viewer-thumbnail-bar-padding-inline-end: 28px;
  }

  .selected cr-icon-button {
    --cr-icon-button-fill-color: var(--sidenav-selected-tab-color);
  }

  .button-wrapper {
    --button-wrapper-height: 36px;
    --button-wrapper-margin: 12px;
    --button-wrapper-total-height: calc(
        var(--button-wrapper-height) + var(--button-wrapper-margin));
    align-items: center;
    display: flex;
    height: var(--button-wrapper-height);
    margin: var(--button-wrapper-margin) 0;
    width: 100%;
  }

  .cr-vertical-tab {
    --cr-vertical-tab-selected-color: var(--sidenav-selected-tab-color);
  }

  .cr-vertical-tab::before {
    transform: translateY(var(--button-wrapper-total-height));
    transition: transform 250ms cubic-bezier(.4, 0, .2, 1);
  }

  .cr-vertical-tab.selected + .cr-vertical-tab::before {
    transform: translateY(calc(-1 * var(--button-wrapper-total-height)));
  }

  .cr-vertical-tab.selected::before {
    transform: translateY(0);
  }

  cr-icon-button {
    margin: 0 auto;
  }
</style>
<div id="icons" hidden$="[[!bookmarks.length]]">
  <div class$="
      button-wrapper cr-vertical-tab [[thumbnailButtonClass_(thumbnailView_)]]">
    <cr-icon-button iron-icon="pdf:thumbnails" role="tab" title="Küçük resimler" aria-label="Küçük resimler" aria-selected$="[[getAriaSelectedThumbnails_(thumbnailView_)]]" on-click="onThumbnailClick_">
    </cr-icon-button>
  </div>
  <div class$="
      button-wrapper cr-vertical-tab [[outlineButtonClass_(thumbnailView_)]]">
    <cr-icon-button iron-icon="pdf:doc-outline" role="tab" title="Dokümanın ana hatları" aria-label="Dokümanın ana hatları" aria-selected$="[[getAriaSelectedOutline_(thumbnailView_)]]" on-click="onOutlineClick_">
    </cr-icon-button>
  </div>
</div>
<div id="content">
  <viewer-thumbnail-bar id="thumbnail-bar" tabindex="0" hidden="[[!thumbnailView_]]" active-page="[[activePage]]" clockwise-rotations="[[clockwiseRotations]]" doc-length="[[docLength]]">
  </viewer-thumbnail-bar>
  <viewer-document-outline id="outline" hidden="[[thumbnailView_]]" bookmarks="[[bookmarks]]">
  </viewer-document-outline>
</div>
<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
class ViewerPdfSidenavElement extends PolymerElement{static get is(){return"viewer-pdf-sidenav"}static get template(){return getTemplate$4()}static get properties(){return{activePage:Number,bookmarks:{type:Array,value:()=>[]},clockwiseRotations:Number,docLength:Number,thumbnailView_:{type:Boolean,value:true}}}onThumbnailClick_(){record(UserAction.SELECT_SIDENAV_THUMBNAILS);this.thumbnailView_=true}onOutlineClick_(){record(UserAction.SELECT_SIDENAV_OUTLINE);this.thumbnailView_=false}outlineButtonClass_(){return this.thumbnailView_?"":"selected"}thumbnailButtonClass_(){return this.thumbnailView_?"selected":""}getAriaSelectedThumbnails_(){return this.thumbnailView_?"true":"false"}getAriaSelectedOutline_(){return this.thumbnailView_?"false":"true"}}customElements.define(ViewerPdfSidenavElement.is,ViewerPdfSidenavElement);function getTemplate$3(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  :host {
    --break-padding: 8px;
  }

  cr-dialog::part(dialog) {
    width: fit-content;
  }

  table {
    border-spacing: 0;
  }

  .break > td {
    --break-color: var(--google-grey-300);
    border-bottom: 1px solid var(--break-color);
    padding-bottom: var(--break-padding);
  }


  .break + tr > td {
    padding-top: var(--break-padding);
  }

  .name {
    color: var(--cr-primary-text-color);
    padding-inline-end: 12px;
    vertical-align: top;
  }

  .value {
    color: var(--cr-secondary-text-color);
    max-width: 300px;
    min-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #keywords {
    white-space: normal;
  }
</style>
<cr-dialog id="dialog" show-on-attach="">
  <div slot="title">Doküman özellikleri</div>
  <div slot="body">
    <table>
      <tbody><tr>
        <td class="name">Dosya adı:</td>
        <td class="value" id="file-name">[[fileName]]</td>
      </tr>
      <tr class="break">
        <td class="name">Dosya boyutu:</td>
        <td class="value" id="file-size">[[documentMetadata.fileSize]]</td>
      </tr>
      <tr>
        <td class="name">Başlık:</td>
        <td class="value" id="title">
          [[getOrPlaceholder_(documentMetadata.title)]]
        </td>
      </tr>
      <tr>
        <td class="name">Yazar:</td>
        <td class="value" id="author">
          [[getOrPlaceholder_(documentMetadata.author)]]
        </td>
      </tr>
      <tr>
        <td class="name">Konu:</td>
        <td class="value" id="subject">
          [[getOrPlaceholder_(documentMetadata.subject)]]
        </td>
      </tr>
      <tr>
        <td class="name">Anahtar kelimeler:</td>
        <td class="value" id="keywords">
          [[getOrPlaceholder_(documentMetadata.keywords)]]
        </td>
      </tr>
      <tr>
        <td class="name">Oluşturma tarihi:</td>
        <td class="value" id="created">
          [[getOrPlaceholder_(documentMetadata.creationDate)]]
        </td>
      </tr>
      <tr>
        <td class="name">Değiştirilme tarihi:</td>
        <td class="value" id="modified">
          [[getOrPlaceholder_(documentMetadata.modDate)]]
        </td>
      </tr>
      <tr class="break">
        <td class="name">Uygulama:</td>
        <td class="value" id="application">
          [[getOrPlaceholder_(documentMetadata.creator)]]
        </td>
      </tr>
      <tr>
        <td class="name">PDF üreticisi:</td>
        <td class="value" id="pdf-producer">
          [[getOrPlaceholder_(documentMetadata.producer)]]
        </td>
      </tr>
      <tr>
        <td class="name">PDF sürümü:</td>
        <td class="value" id="pdf-version">
          [[getOrPlaceholder_(documentMetadata.version)]]
        </td>
      </tr>
      <tr>
        <td class="name">Sayfa sayısı:</td>
        <td class="value" id="page-count">[[pageCount]]</td>
      </tr>
      <tr class="break">
        <td class="name">Sayfa boyutu:</td>
        <td class="value" id="page-size">
          [[getOrPlaceholder_(documentMetadata.pageSize)]]
        </td>
      </tr>
      <tr>
        <td class="name">Hızlı web görüntüleme:</td>
        <td class="value" id="fast-web-view">
          [[getFastWebViewValue_('Evet',
              'Hayır',
              documentMetadata.linearized)]]
        </td>
      </tr>
    </tbody></table>
  </div>
  <div slot="button-container">
    <cr-button id="close" class="action-button" on-click="onClickClose_">
      Kapat
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}// Copyright 2021 The Chromium Authors. All rights reserved.
class ViewerPropertiesDialogElement extends PolymerElement{static get is(){return"viewer-properties-dialog"}static get template(){return getTemplate$3()}static get properties(){return{documentMetadata:Object,fileName:String,pageCount:Number}}getFastWebViewValue_(yesLabel,noLabel,linearized){return linearized?yesLabel:noLabel}getOrPlaceholder_(value){return value||"-"}onClickClose_(){this.$.dialog.close()}}customElements.define(ViewerPropertiesDialogElement.is,ViewerPropertiesDialogElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronRangeBehavior={properties:{value:{type:Number,value:0,notify:true,reflectToAttribute:true},min:{type:Number,value:0,notify:true},max:{type:Number,value:100,notify:true},step:{type:Number,value:1,notify:true},ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:["_update(value, min, max, step)"],_calcRatio:function(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function(value){value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`<!--css-build:shadow--><style scope="paper-progress">:host {
  display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
}

:host([hidden]), [hidden] {
  display: none !important;
}

#progressContainer {
  position: relative;
}

#progressContainer, .indeterminate::after {
  height: var(--paper-progress-height, 4px);
}

#primaryProgress, #secondaryProgress, .indeterminate::after {
  position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
}

#progressContainer, .indeterminate::after {
  background: var(--paper-progress-container-color, var(--google-grey-300));
}

:host(.transiting) #primaryProgress, :host(.transiting) #secondaryProgress {
  transition-property: transform;

        
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        
        transition-delay: var(--paper-progress-transition-delay, 0s);
}

#primaryProgress, #secondaryProgress {
  transform-origin: left center;
        transform: scaleX(0);
        will-change: transform;
}

#primaryProgress {
  background: var(--paper-progress-active-color, var(--google-green-500));
}

#secondaryProgress {
  background: var(--paper-progress-secondary-color, var(--google-green-100));
}

:host([disabled]) #primaryProgress {
  background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
}

:host([disabled]) #secondaryProgress {
  background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
}

:host(:not([disabled])) #primaryProgress.indeterminate {
  transform-origin: right center;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
}

:host(:not([disabled])) #primaryProgress.indeterminate::after {
  content: "";
        transform-origin: center center;

        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
}

@keyframes indeterminate-bar {
0% {
  transform: scaleX(1) translateX(-100%);
}

50% {
  transform: scaleX(1) translateX(0%);
}

75% {
  transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
}

100% {
  transform: scaleX(0) translateX(0%);
}

}

@keyframes indeterminate-splitter {
0% {
  transform: scaleX(.75) translateX(-125%);
}

30% {
  transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
}

90% {
  transform: scaleX(.75) translateX(125%);
}

100% {
  transform: scaleX(.75) translateX(125%);
}

}

</style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[IronRangeBehavior],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:true},indeterminate:{type:Boolean,value:false,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(indeterminate){this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function(secondaryRatio){return secondaryRatio===0}});function getTemplate$2(){return html`<!--_html_template_start_--><style include="pdf-shared">
  :host {
    --viewer-pdf-toolbar-height: 56px;
    box-shadow:
        0 -2px 8px rgba(0, 0, 0, 0.09),
        0 4px 8px rgba(0, 0, 0, 0.06),
        0 1px 2px rgba(0, 0, 0, 0.3),
        0 2px 6px rgba(0, 0, 0, 0.15);
    position: relative;
  }

  :host([more-menu-open_]) #more {
    background-color: var(--active-button-bg);
    border-radius: 50%;
  }

  #toolbar {
    align-items: center;
    background-color: var(--viewer-pdf-toolbar-background-color);
    color: white;
    display: flex;
    height: var(--viewer-pdf-toolbar-height);
    padding: 0 16px;
  }

  #title {
    font-size: 0.87rem;
    font-weight: 500;
    margin-inline-start: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #actionMenuTrigger {
    margin-inline-end: 6px;
  }

  #start {
    align-items: center;
    display: flex;
    overflow: hidden;
    padding-inline-end: 20px;
  }

  #start,
  #end {
    flex: 1;
  }

  #center {
    align-items: center;
    display: flex;
  }

  #end {
    display: flex;
    justify-content: flex-end;
    padding-inline-start: 20px;
    text-align: end;
    white-space: nowrap;
  }

  .vertical-separator {
    background: rgba(255, 255, 255, 0.3);
    height: 15px;
    width: 1px;
  }

  #zoom-controls {
    align-items: center;
    display: flex;
    padding: 0 4px;
  }

  #zoom-controls input::selection {
    background-color: var(--viewer-text-input-selection-color);
  }

  @media(max-width: 600px) {
    #title,
    #zoom-controls input {
      display: none;
    }
  }

  @media(max-width: 500px) {
    #start,
    #fit {
      display: none;
    }
  }

  @media(max-width: 420px) {
    #center {
      display: none;
    }

    #end {
      padding-inline-start: initial;
      text-align: center;
    }
  }

  viewer-page-selector {
    display: inline-flex;
    height: 36px; /* Matching default --cr-icon-button-size */
    margin-inline-end: 20px;
  }

  viewer-page-selector::part(input),
  input {
    max-height: var(--viewer-pdf-toolbar-height);
  }

  input {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    caret-color: currentColor;
    color: inherit;
    font-family: inherit;
    line-height: inherit;
    margin: 0 4px;
    outline: none;
    padding: 0 4px;
    text-align: center;
    width: 5ch;
  }

  #fit {
    margin-inline-start: 12px;
  }

  paper-progress {
    --paper-progress-active-color: var(--google-blue-300);
    --paper-progress-container-color: transparent;
    --paper-progress-height: 3px;
    bottom: 0;
    position: absolute;
    width: 100%;
  }

  paper-progress,
  #center,
  #end {
    transition: opacity 100ms cubic-bezier(0, 0, 0.2, 1);
  }

  paper-progress,
  :host([loading_]) #menuButton,
  :host([loading_]) #center,
  :host([loading_]) #end {
    opacity: 0;
    /* Ensure UI is not interactable while hidden */
    visibility: hidden;
  }

  :host([loading_]) paper-progress,
  #menuButton,
  #center,
  #end {
    opacity: 1;
    visibility: visible;
  }



   #print,
   #more {
     margin-inline-start: 4px;
   }

  .dropdown-item {
    padding-inline-end: 16px;
    padding-inline-start: 12px;
  }

  .check-container {
    margin-inline-end: 12px;
    width: 16px;
  }

  cr-action-menu hr {
    border: none;
    border-top: var(--cr-separator-line);
  }
</style>
<div id="toolbar">
  <div id="start">
    <cr-icon-button id="sidenavToggle" iron-icon="cr20:menu" title="Menü" aria-label="Menü" aria-expanded$="[[getAriaExpanded_(sidenavCollapsed)]]" on-click="onSidenavToggleClick_">
    </cr-icon-button>
    <span id="title">[[docTitle]]</span>
  </div>
  <div id="center">
    <viewer-page-selector doc-length="[[docLength]]" page-no="[[pageNo]]">
    </viewer-page-selector>
    <span class="vertical-separator"></span>
    <span id="zoom-controls">
      <cr-icon-button iron-icon="pdf:remove" title="Uzaklaştır" disabled="[[isAtMinimumZoom_(zoomBounds.min, viewportZoomPercent_)]]" aria-label="Uzaklaştır" on-click="onZoomOutClick_">
      </cr-icon-button>
      <input type="text" value="100%" aria-label="Yakınlaştırma düzeyi" on-change="onZoomChange_" on-pointerup="onZoomInputPointerup_" on-blur="onZoomChange_">
      
      <cr-icon-button iron-icon="pdf:add" title="Yakınlaştır" disabled="[[isAtMaximumZoom_(zoomBounds.max, viewportZoomPercent_)]]" aria-label="Yakınlaştır" on-click="onZoomInClick_">
      </cr-icon-button>
    </span>
    <span class="vertical-separator"></span>
    <cr-icon-button id="fit" iron-icon="[[fitToButtonIcon_]]" title="[[getFitToButtonTooltip_('Sayfaya sığdır',
                                        'Genişliğe sığdır',
                                        fittingType_)]]" aria-label="[[getFitToButtonTooltip_('Sayfaya sığdır',
                                             'Genişliğe sığdır',
                                             fittingType_)]]" on-click="onFitToButtonClick_">
    </cr-icon-button>
    <cr-icon-button iron-icon="pdf:rotate-left" dir="ltr" aria-label="Saat yönünün tersine döndür" title="Saat yönünün tersine döndür" on-click="onRotateClick_">
    </cr-icon-button>
  </div>
  <div id="end">
  
    <viewer-download-controls id="downloads" has-edits="[[hasEdits]]" has-entered-annotation-mode="[[hasEnteredAnnotationMode]]" is-form-field-focused="[[isFormFieldFocused]]">
    </viewer-download-controls>
    <cr-icon-button id="print" iron-icon="cr:print" hidden="[[!printingEnabled]]" title="Yazdır" aria-label="Yazdır" on-click="onPrintClick_">
    </cr-icon-button>
    <cr-icon-button id="more" iron-icon="cr:more-vert" title="Diğer işlemler" aria-label="Diğer işlemler" on-click="onMoreClick_"></cr-icon-button>
  </div>
</div>
<paper-progress id="progress" value="[[loadProgress]]" hidden="[[!loading_]]">
</paper-progress>

<cr-action-menu id="menu" on-open-changed="onMoreOpenChanged_">
  <button id="two-page-view-button" class="dropdown-item" on-click="toggleTwoPageViewClick_" role="checkbox" aria-checked="[[getTwoPageViewAriaChecked_(twoUpViewEnabled)]]">
    <span class="check-container">
      <iron-icon icon="pdf:check" hidden="[[!twoUpViewEnabled]]"></iron-icon>
    </span>
    İki sayfalı görünüm
  </button>

  <button id="show-annotations-button" class="dropdown-item" on-click="toggleDisplayAnnotations_" role="checkbox" aria-checked="[[getShowAnnotationsAriaChecked_(displayAnnotations_)]]">
    <span class="check-container">
      <iron-icon icon="pdf:check" hidden="[[!displayAnnotations_]]"></iron-icon>
    </span>
    Ek Açıklamalar
  </button>

  <hr>

  <button id="present-button" class="dropdown-item" on-click="onPresentClick_">
    <span class="check-container" aria-hidden="true"></span>
    Sunum
  </button>

  <button id="properties-button" class="dropdown-item" on-click="onPropertiesClick_">
    <span class="check-container" aria-hidden="true"></span>
    Doküman özellikleri
  </button>
</cr-action-menu>



<!--_html_template_end_-->`}// Copyright 2020 The Chromium Authors. All rights reserved.
class ViewerToolbarElement extends PolymerElement{constructor(){super(...arguments);this.sidenavCollapsed=false;this.displayAnnotations_=true;this.fittingType_=FittingType.FIT_TO_PAGE;this.moreMenuOpen_=false;this.loading_=true}static get is(){return"viewer-toolbar"}static get template(){return getTemplate$2()}static get properties(){return{docTitle:String,docLength:Number,hasEdits:Boolean,hasEnteredAnnotationMode:Boolean,isFormFieldFocused:Boolean,loadProgress:{type:Number,observer:"loadProgressChanged_"},loading_:{type:Boolean,reflectToAttribute:true},pageNo:Number,pdfAnnotationsEnabled:Boolean,printingEnabled:Boolean,rotated:Boolean,viewportZoom:Number,zoomBounds:Object,sidenavCollapsed:Boolean,twoUpViewEnabled:Boolean,moreMenuOpen_:{type:Boolean,reflectToAttribute:true},fittingType_:Number,fitToButtonIcon_:{type:String,computed:"computeFitToButtonIcon_(fittingType_)"},viewportZoomPercent_:{type:Number,computed:"computeViewportZoomPercent_(viewportZoom)",observer:"viewportZoomPercentChanged_"}}}onSidenavToggleClick_(){record(UserAction.TOGGLE_SIDENAV);this.dispatchEvent(new CustomEvent("sidenav-toggle-click"))}computeFitToButtonIcon_(){return this.fittingType_===FittingType.FIT_TO_PAGE?"pdf:fit-to-height":"pdf:fit-to-width"}computeViewportZoomPercent_(){return Math.round(100*this.viewportZoom)}getFitToButtonTooltip_(fitToPageTooltip,fitToWidthTooltip){return this.fittingType_===FittingType.FIT_TO_PAGE?fitToPageTooltip:fitToWidthTooltip}loadProgressChanged_(){this.loading_=this.loadProgress<100}viewportZoomPercentChanged_(){this.getZoomInput_().value=`${this.viewportZoomPercent_}%`}onPrintClick_(){this.dispatchEvent(new CustomEvent("print"))}onRotateClick_(){this.dispatchEvent(new CustomEvent("rotate-left"))}toggleDisplayAnnotations_(){record(UserAction.TOGGLE_DISPLAY_ANNOTATIONS);this.displayAnnotations_=!this.displayAnnotations_;this.dispatchEvent(new CustomEvent("display-annotations-changed",{detail:this.displayAnnotations_}));this.$.menu.close()}onPresentClick_(){record(UserAction.PRESENT);this.$.menu.close();this.dispatchEvent(new CustomEvent("present-click"))}onPropertiesClick_(){record(UserAction.PROPERTIES);this.$.menu.close();this.dispatchEvent(new CustomEvent("properties-click"))}getSinglePageAriaChecked_(checked){return checked?"false":"true"}getTwoPageViewAriaChecked_(checked){return checked?"true":"false"}getShowAnnotationsAriaChecked_(checked){return checked?"true":"false"}getAriaExpanded_(){return this.sidenavCollapsed?"false":"true"}toggleTwoPageViewClick_(){const newTwoUpViewEnabled=!this.twoUpViewEnabled;this.dispatchEvent(new CustomEvent("two-up-view-changed",{detail:newTwoUpViewEnabled}));this.$.menu.close()}onZoomInClick_(){this.dispatchEvent(new CustomEvent("zoom-in"))}onZoomOutClick_(){this.dispatchEvent(new CustomEvent("zoom-out"))}forceFit(fittingType){this.fittingType_=fittingType===FittingType.FIT_TO_WIDTH?FittingType.FIT_TO_PAGE:FittingType.FIT_TO_WIDTH}fitToggle(){const newState=this.fittingType_===FittingType.FIT_TO_PAGE?FittingType.FIT_TO_WIDTH:FittingType.FIT_TO_PAGE;this.dispatchEvent(new CustomEvent("fit-to-changed",{detail:this.fittingType_}));this.fittingType_=newState}onFitToButtonClick_(){this.fitToggle()}getZoomInput_(){return this.shadowRoot.querySelector("#zoom-controls input")}onZoomChange_(){const input=this.getZoomInput_();let value=Number.parseInt(input.value,10);value=Math.max(Math.min(value,this.zoomBounds.max),this.zoomBounds.min);if(this.sendZoomChanged_(value)){return}const zoomString=`${this.viewportZoomPercent_}%`;input.value=zoomString}sendZoomChanged_(value){if(Number.isNaN(value)){return false}if(Math.abs(this.viewportZoom*100-value)<.5){return false}this.dispatchEvent(new CustomEvent("zoom-changed",{detail:value}));return true}onZoomInputPointerup_(e){e.target.select()}onMoreClick_(){const anchor=this.shadowRoot.querySelector("#more");this.$.menu.showAt(anchor,{anchorAlignmentX:AnchorAlignment.CENTER,anchorAlignmentY:AnchorAlignment.AFTER_END,noOffset:true})}onMoreOpenChanged_(e){this.moreMenuOpen_=e.detail.value}isAtMinimumZoom_(){return this.zoomBounds!==undefined&&this.viewportZoomPercent_===this.zoomBounds.min}isAtMaximumZoom_(){return this.zoomBounds!==undefined&&this.viewportZoomPercent_===this.zoomBounds.max}}customElements.define(ViewerToolbarElement.is,ViewerToolbarElement);// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class NavigatorDelegateImpl{constructor(browserApi){this.browserApi_=browserApi}navigateInCurrentTab(url){this.browserApi_.navigateInCurrentTab(url)}navigateInNewTab(url,active){if(chrome.tabs){chrome.tabs.create({url:url,active:active})}else{window.open(url)}}navigateInNewWindow(url){if(chrome.windows){chrome.windows.create({url:url})}else{window.open(url,"_blank")}}}class PdfNavigator{constructor(originalUrl,viewport,paramsParser,navigatorDelegate){this.originalUrl_=null;try{this.originalUrl_=new URL(originalUrl)}catch(err){console.warn("Invalid original URL")}this.viewport_=viewport;this.paramsParser_=paramsParser;this.navigatorDelegate_=navigatorDelegate}navigate(urlString,disposition){if(urlString.length===0){return Promise.resolve()}if(urlString[0]==="#"&&this.originalUrl_){const newUrl=new URL(this.originalUrl_.href);newUrl.hash=urlString;urlString=newUrl.href}if(!urlString.includes("://")&&!urlString.includes("mailto:")){urlString=this.guessUrlWithoutScheme_(urlString)}let url=null;try{url=new URL(urlString)}catch(err){return Promise.reject(err)}if(!this.isValidUrl_(url)){return Promise.resolve()}let whenDone=Promise.resolve();switch(disposition){case WindowOpenDisposition.CURRENT_TAB:whenDone=this.paramsParser_.getViewportFromUrlParams(url.href).then(this.onViewportReceived_.bind(this));break;case WindowOpenDisposition.NEW_BACKGROUND_TAB:this.navigatorDelegate_.navigateInNewTab(url.href,false);break;case WindowOpenDisposition.NEW_FOREGROUND_TAB:this.navigatorDelegate_.navigateInNewTab(url.href,true);break;case WindowOpenDisposition.NEW_WINDOW:this.navigatorDelegate_.navigateInNewWindow(url.href);break;case WindowOpenDisposition.SAVE_TO_DISK:whenDone=this.paramsParser_.getViewportFromUrlParams(url.href).then(this.onViewportReceived_.bind(this));break}return whenDone}onViewportReceived_(viewportPosition){let newUrl=null;try{newUrl=new URL(viewportPosition.url)}catch(err){}const pageNumber=viewportPosition.page;if(pageNumber!==undefined&&this.originalUrl_&&newUrl&&this.originalUrl_.origin===newUrl.origin&&this.originalUrl_.pathname===newUrl.pathname){this.viewport_.goToPage(pageNumber)}else{this.navigatorDelegate_.navigateInCurrentTab(viewportPosition.url)}}isValidUrl_(url){const validSchemes=["http:","https:","ftp:","file:","mailto:"];if(!validSchemes.includes(url.protocol)){return false}if(url.protocol==="file:"&&this.originalUrl_&&this.originalUrl_.protocol!=="file:"){return false}return true}guessUrlWithoutScheme_(url){if(!this.originalUrl_||this.originalUrl_.protocol==="mailto:"||!this.isValidUrl_(this.originalUrl_)){return url}if(url.startsWith("/")){return this.originalUrl_.origin+url}if(url.startsWith("\\")){url="./"+url}if(!url.startsWith(".")){const domainSeparatorIndex=url.indexOf("/");const domainName=domainSeparatorIndex===-1?url:url.substr(0,domainSeparatorIndex);const domainDotCount=(domainName.match(/\./g)||[]).length;if(domainDotCount>=2){return"http://"+url}}return new URL(url,this.originalUrl_.href).href}}var WindowOpenDisposition;(function(WindowOpenDisposition){WindowOpenDisposition[WindowOpenDisposition["CURRENT_TAB"]=1]="CURRENT_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_FOREGROUND_TAB"]=3]="NEW_FOREGROUND_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_BACKGROUND_TAB"]=4]="NEW_BACKGROUND_TAB";WindowOpenDisposition[WindowOpenDisposition["NEW_WINDOW"]=6]="NEW_WINDOW";WindowOpenDisposition[WindowOpenDisposition["SAVE_TO_DISK"]=7]="SAVE_TO_DISK"})(WindowOpenDisposition||(WindowOpenDisposition={}));Object.assign(window,{PdfNavigator:PdfNavigator,WindowOpenDisposition:WindowOpenDisposition});// Copyright 2014 The Chromium Authors. All rights reserved.
class OpenPdfParamsParser{constructor(getNamedDestinationCallback){this.getNamedDestinationCallback_=getNamedDestinationCallback}calculateRectZoomLevel_(size){if(size.height===0||size.width===0){return 0}assert(this.viewportDimensions_);return Math.min(this.viewportDimensions_.height/size.height,this.viewportDimensions_.width/size.width)}parseZoomParam_(paramValue){const paramValueSplit=paramValue.split(",");if(paramValueSplit.length!==1&&paramValueSplit.length!==3){return{}}const zoomFactor=parseFloat(paramValueSplit[0])/100;if(Number.isNaN(zoomFactor)){return{}}if(paramValueSplit.length===1){return{zoom:zoomFactor}}const position={x:parseFloat(paramValueSplit[1]),y:parseFloat(paramValueSplit[2])};return{position:position,zoom:zoomFactor}}parseViewParam_(paramValue){const viewModeComponents=paramValue.toLowerCase().split(",");if(viewModeComponents.length<1){return{}}const params={};const viewMode=viewModeComponents[0];let acceptsPositionParam;if(viewMode==="fit"){params["view"]=FittingType.FIT_TO_PAGE;acceptsPositionParam=false}else if(viewMode==="fith"){params["view"]=FittingType.FIT_TO_WIDTH;acceptsPositionParam=true}else if(viewMode==="fitv"){params["view"]=FittingType.FIT_TO_HEIGHT;acceptsPositionParam=true}if(!acceptsPositionParam||viewModeComponents.length<2){return params}const position=parseFloat(viewModeComponents[1]);if(!Number.isNaN(position)){params["viewPosition"]=position}return params}parseNameddestViewParam_(paramValue){const viewModeComponents=paramValue.toLowerCase().split(",");const viewMode=viewModeComponents[0];const params={};if(viewMode==="xyz"&&viewModeComponents.length===4){const x=parseFloat(viewModeComponents[1]);const y=parseFloat(viewModeComponents[2]);const zoom=parseFloat(viewModeComponents[3]);assert(zoom!==0);if(!Number.isNaN(zoom)){params["zoom"]=zoom}if(!Number.isNaN(x)||!Number.isNaN(y)){params["position"]={x:x,y:y}}return params}if(viewMode==="fitr"&&viewModeComponents.length===5){assert(this.viewportDimensions_!==undefined);let x1=parseFloat(viewModeComponents[1]);let y1=parseFloat(viewModeComponents[2]);let x2=parseFloat(viewModeComponents[3]);let y2=parseFloat(viewModeComponents[4]);if(!Number.isNaN(x1)&&!Number.isNaN(y1)&&!Number.isNaN(x2)&&!Number.isNaN(y2)){if(x1>x2){[x1,x2]=[x2,x1]}if(y1>y2){[y1,y2]=[y2,y1]}const rectSize={width:x2-x1,height:y2-y1};params["position"]={x:x1,y:y1};const zoom=this.calculateRectZoomLevel_(rectSize);if(zoom!==0){params["zoom"]=zoom}}return params}return this.parseViewParam_(paramValue)}parseUrlParams_(url){const hash=new URL(url).hash;const params=new URLSearchParams(hash.substring(1));if(Array.from(params).length===1){const key=Array.from(params.keys())[0];if(params.get(key)===""){params.append("nameddest",key);params.delete(key)}}return params}setViewportDimensions(dimensions){this.viewportDimensions_=dimensions}shouldShowToolbar(url){return this.parseUrlParams_(url).get("toolbar")!=="0"}async getViewportFromUrlParams(url){const params={url:url};const urlParams=this.parseUrlParams_(url);if(urlParams.has("page")){const pageNumber=parseInt(urlParams.get("page"),10);if(!Number.isNaN(pageNumber)&&pageNumber>0){params["page"]=pageNumber-1}}if(urlParams.has("view")){Object.assign(params,this.parseViewParam_(urlParams.get("view")))}if(urlParams.has("zoom")){Object.assign(params,this.parseZoomParam_(urlParams.get("zoom")))}if(params.page===undefined&&urlParams.has("nameddest")){const data=await this.getNamedDestinationCallback_(urlParams.get("nameddest"));if(data.pageNumber!==-1){params.page=data.pageNumber}if(data.namedDestinationView){Object.assign(params,this.parseNameddestViewParam_(data.namedDestinationView))}return params}return Promise.resolve(params)}}// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function deserializeKeyEvent(dict){const e=new KeyboardEvent("keydown",{bubbles:true,cancelable:true,key:dict.key,code:dict.code,keyCode:dict.keyCode,shiftKey:dict.shiftKey,ctrlKey:dict.ctrlKey,altKey:dict.altKey,metaKey:dict.metaKey});return e}function serializeKeyEvent(event){return{keyCode:event.keyCode,code:event.code,key:event.key,shiftKey:event.shiftKey,ctrlKey:event.ctrlKey,altKey:event.altKey,metaKey:event.metaKey}}var LoadState;(function(LoadState){LoadState["LOADING"]="loading";LoadState["SUCCESS"]="success";LoadState["FAILED"]="failed"})(LoadState||(LoadState={}));class PDFScriptingAPI{constructor(window,plugin){this.loadState_=LoadState.LOADING;this.pendingScriptingMessages_=[];this.setPlugin(plugin);window.addEventListener("message",(event=>{if(event.origin!=="chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai"&&event.origin!=="chrome://print"){console.error("Received message that was not from the extension: "+event);return}switch(event.data.type){case"viewport":const viewportData=event.data;if(this.viewportChangedCallback_){this.viewportChangedCallback_(viewportData.pageX,viewportData.pageY,viewportData.pageWidth,viewportData.viewportWidth,viewportData.viewportHeight)}break;case"documentLoaded":{const data=event.data;this.loadState_=data.load_state;if(this.loadCompleteCallback_){this.loadCompleteCallback_(this.loadState_===LoadState.SUCCESS)}break}case"getSelectedTextReply":{const data=event.data;if(this.selectedTextCallback_){this.selectedTextCallback_(data.selectedText);this.selectedTextCallback_=null}break}case"sendKeyEvent":if(this.keyEventCallback_){this.keyEventCallback_(deserializeKeyEvent(event.data.keyEvent))}break}}),false)}sendMessage_(message){if(this.plugin_){this.plugin_.postMessage(message,"*")}else{this.pendingScriptingMessages_.push(message)}}setPlugin(plugin){this.plugin_=plugin;if(this.plugin_){this.sendMessage_({type:"initialize"});while(this.pendingScriptingMessages_.length>0){this.sendMessage_(this.pendingScriptingMessages_.shift())}}}setViewportChangedCallback(callback){this.viewportChangedCallback_=callback}setLoadCompleteCallback(callback){this.loadCompleteCallback_=callback;if(this.loadState_!==LoadState.LOADING&&this.loadCompleteCallback_){this.loadCompleteCallback_(this.loadState_===LoadState.SUCCESS)}}setKeyEventCallback(callback){this.keyEventCallback_=callback}resetPrintPreviewMode(url,grayscale,pageNumbers,modifiable){this.loadState_=LoadState.LOADING;this.sendMessage_({type:"resetPrintPreviewMode",url:url,grayscale:grayscale,pageNumbers:pageNumbers,modifiable:modifiable})}hideToolbar(){this.sendMessage_({type:"hideToolbar"})}loadPreviewPage(url,index){this.sendMessage_({type:"loadPreviewPage",url:url,index:index})}darkModeChanged(darkMode){this.sendMessage_({type:"darkModeChanged",darkMode:darkMode})}selectAll(){this.sendMessage_({type:"selectAll"})}getSelectedText(callback){if(this.selectedTextCallback_){return false}this.selectedTextCallback_=callback;this.sendMessage_({type:"getSelectedText"});return true}print(){this.sendMessage_({type:"print"})}sendKeyEvent(keyEvent){this.sendMessage_({type:"sendKeyEvent",keyEvent:serializeKeyEvent(keyEvent)})}scrollPosition(scrollX,scrollY){this.sendMessage_({type:"scrollPosition",x:scrollX,y:scrollY})}}function getTemplate$1(){return html`<!--_html_template_start_--><style include="cr-hidden-style"></style>
    <cr-dialog id="dialog" no-cancel="" show-on-attach="">
      <div slot="title">Hata</div>
      <div slot="body">PDF dokümanı yüklenemedi.</div>
      <div slot="button-container" hidden$="[[!reloadFn]]">
        <cr-button class="action-button" on-click="onReload_">
          Yeniden Yükle
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`}// Copyright 2014 The Chromium Authors. All rights reserved.
class ViewerErrorDialogElement extends PolymerElement{static get is(){return"viewer-error-dialog"}static get template(){return getTemplate$1()}static get properties(){return{reloadFn:Function}}onReload_(){if(this.reloadFn){this.reloadFn()}}}customElements.define(ViewerErrorDialogElement.is,ViewerErrorDialogElement);// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LocalStorageProxyImpl{getItem(key){return window.localStorage.getItem(key)}setItem(key,value){window.localStorage.setItem(key,value)}static getInstance(){return instance||(instance=new LocalStorageProxyImpl)}}let instance=null;function getTemplate(){return html`<!--_html_template_start_--><style include="pdf-viewer-shared-style cr-hidden-style">
  :host {
    --viewer-pdf-sidenav-width: 300px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  viewer-pdf-sidenav,
  viewer-toolbar {
    --pdf-toolbar-text-color: rgb(241, 241, 241);
  }

  viewer-toolbar {
    --active-button-bg: rgba(255, 255, 255, 0.24);
    z-index: 1;
  }

  @media(max-width: 200px),
  (max-height: 250px) {
    viewer-toolbar {
      display: none;
    }
  }

  #sidenav-container {
    overflow: hidden;
    transition: transform 250ms cubic-bezier(.6, 0, 0, 1), visibility 250ms;
    visibility: visible;
    width: var(--viewer-pdf-sidenav-width);
  }

  #sidenav-container.floating {
    bottom: 0;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  #sidenav-container[closed] {
    transform: translateX(-100%);
    transition: transform 200ms cubic-bezier(.6, 0, 0, 1),
        visibility 200ms, width 0ms 200ms;
    visibility: hidden;
    width: 0;
  }

  :host-context([dir='rtl']) #sidenav-container[closed] {
    transform: translateX(100%);
  }

  @media(max-width: 500px),
  (max-height: 250px) {
    #sidenav-container {
      display: none;
    }
  }

  #content-focus-rectangle {
    border: 2px solid var(--google-grey-500);
    border-radius: 2px;
    box-sizing: border-box;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  viewer-ink-host {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  #container {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  #plugin {
    position: initial;
  }

  #content {
    height: 100%;
    left: 0;
    position: sticky;
    top: 0;
    z-index: initial;
  }

  #sizer {
    top: 0;
    width: 100%;
    z-index: initial;
  }

  /* #main and #scroller are intentionally different elements so that a
   * ResizeObserver can be used on #main without triggering
   * "ResizeObserver loop limit exceeded".
   */
  #main {
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  #scroller {
    /* TODO(crbug.com/1158670): Fix the plugin to properly support RTL painting
     * of PDF contents, such that content is aligned to the top-right corner.
     * Until then force LTR even in RTL languages, so scrolling of the content
     * can originate in the top-left corner, consistent with the expectations of
     * the plugin.
     */
    direction: ltr;
    height: 100%;
    overflow: auto;
    position: relative;
  }

  /* Hide scrollbars when in Presentation mode. */
  #scroller:fullscreen {
    overflow: hidden;
  }
</style>

<viewer-toolbar id="toolbar" annotation-mode="[[annotationMode_]]" doc-title="[[title_]]" doc-length="[[docLength_]]" page-no="[[pageNo_]]" load-progress="[[loadProgress_]]" has-edits="[[hasEdits_]]" has-entered-annotation-mode="[[hasEnteredAnnotationMode_]]" printing-enabled="[[printingEnabled_]]" rotated="[[isRotated_(clockwiseRotations_)]]" is-form-field-focused="[[isFormFieldFocused_]]" sidenav-collapsed="[[sidenavCollapsed_]]" two-up-view-enabled="[[twoUpViewEnabled_]]" viewport-zoom="[[viewportZoom_]]" zoom-bounds="[[zoomBounds_]]" on-change-page="onChangePage_" on-display-annotations-changed="onDisplayAnnotationsChanged_" on-fit-to-changed="onFitToChanged" on-present-click="onPresentClick_" on-properties-click="onPropertiesClick_" on-annotation-mode-dialog-confirmed="onResetView_" on-sidenav-toggle-click="onSidenavToggleClick_" on-two-up-view-changed="onTwoUpViewChanged_" on-zoom-changed="onZoomChanged" on-zoom-in="onZoomIn" on-zoom-out="onZoomOut" on-rotate-left="rotateCounterclockwise" on-print="onPrint_" on-save="onToolbarSave_" hidden="">
</viewer-toolbar>

<div id="container">
  <div id="sidenav-container" closed$="[[sidenavCollapsed_]]" hidden$="[[!toolbarEnabled_]]">
    <viewer-pdf-sidenav id="sidenav" active-page="[[pageNo_]]" bookmarks="[[bookmarks_]]" clockwise-rotations="[[clockwiseRotations_]]" doc-length="[[docLength_]]" on-change-page="onChangePage_" on-change-page-and-xy="onChangePageAndXy_" on-navigate="onNavigate_">
    </viewer-pdf-sidenav>
  </div>
  <div id="main">
    <div id="scroller">
      <div id="sizer"></div>
      <div id="content"></div>
    </div>
    <div id="content-focus-rectangle" hidden$="[[!documentHasFocus_]]"></div>
  </div>
</div>

<template is="dom-if" if="[[showErrorDialog]]" on-dom-change="onErrorDialog_">
  <viewer-error-dialog id="error-dialog"></viewer-error-dialog>
</template>

<template is="dom-if" if="[[showPasswordDialog_]]" restamp="">
  <viewer-password-dialog id="password-dialog" on-close="onPasswordDialogClose_" on-password-submitted="onPasswordSubmitted_">
  </viewer-password-dialog>
</template>

<template is="dom-if" if="[[showPropertiesDialog_]]" restamp="">
  <viewer-properties-dialog id="properties-dialog" document-metadata="[[documentMetadata_]]" file-name="[[fileName_]]" page-count="[[docLength_]]" on-close="onPropertiesDialogClose_">
  </viewer-properties-dialog>
</template>
<!--_html_template_end_-->`}// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewportScroller{constructor(viewport,plugin,window){this.mousemoveCallback_=null;this.timerId_=null;this.scrollVelocity_=null;this.lastFrameTime_=0;this.viewport_=viewport;this.plugin_=plugin;this.window_=window}startDragScrollTimer_(){if(this.timerId_!==null){return}this.timerId_=this.window_.setInterval(this.dragScrollPage_.bind(this),DRAG_TIMER_INTERVAL_MS);this.lastFrameTime_=Date.now()}stopDragScrollTimer_(){if(this.timerId_===null){return}this.window_.clearInterval(this.timerId_);this.timerId_=null;this.lastFrameTime_=0}dragScrollPage_(){const position=this.viewport_.position;const currentFrameTime=Date.now();const timeAdjustment=(currentFrameTime-this.lastFrameTime_)/DRAG_TIMER_INTERVAL_MS;position.y+=this.scrollVelocity_.y*timeAdjustment;position.x+=this.scrollVelocity_.x*timeAdjustment;this.viewport_.setPosition(position);this.lastFrameTime_=currentFrameTime}calculateVelocity_(event){const x=Math.min(Math.max(-event.offsetX,event.offsetX-this.plugin_.offsetWidth,0),MAX_DRAG_SCROLL_DISTANCE)*Math.sign(event.offsetX);const y=Math.min(Math.max(-event.offsetY,event.offsetY-this.plugin_.offsetHeight,0),MAX_DRAG_SCROLL_DISTANCE)*Math.sign(event.offsetY);return{x:x,y:y}}onMousemove_(event){this.scrollVelocity_=this.calculateVelocity_(event);if(!this.scrollVelocity_.x&&!this.scrollVelocity_.y){this.stopDragScrollTimer_()}else if(!this.timerId_){this.startDragScrollTimer_()}}setEnableScrolling(isSelecting){if(isSelecting){if(!this.mousemoveCallback_){this.mousemoveCallback_=this.onMousemove_.bind(this)}this.plugin_.addEventListener("mousemove",this.mousemoveCallback_,false)}else{this.stopDragScrollTimer_();if(this.mousemoveCallback_){this.plugin_.removeEventListener("mousemove",this.mousemoveCallback_,false)}}}}const DRAG_TIMER_INTERVAL_MS=100;const MAX_DRAG_SCROLL_DISTANCE=100;// Copyright 2013 The Chromium Authors. All rights reserved.
function getScrollbarWidth(){const div=document.createElement("div");div.style.visibility="hidden";div.style.overflow="scroll";div.style.width="50px";div.style.height="50px";div.style.position="absolute";document.body.appendChild(div);const result=div.offsetWidth-div.clientWidth;div.parentNode.removeChild(div);return result}class PDFViewerBaseElement extends PolymerElement{constructor(){super(...arguments);this.browserApi=null;this.currentController=null;this.documentDimensions=null;this.isUserInitiatedEvent=true;this.lastViewportPosition=null;this.originalUrl="";this.paramsParser=null;this.tracker=new EventTracker;this.viewportScroller=null;this.delayedScriptingMessages_=[];this.initialLoadComplete_=false;this.loaded_=null;this.loadState_=LoadState.LOADING;this.overrideSendScriptingMessageForTest_=false;this.parentOrigin_=null;this.parentWindow_=null;this.plugin_=null;this.viewport_=null;this.zoomManager_=null}static get properties(){return{showErrorDialog:{type:Boolean,value:false},strings:Object}}isNewUiEnabled(){return true}createPlugin_(){const plugin=document.createElement("embed");plugin.id="plugin";plugin.type="application/x-google-chrome-pdf";plugin.setAttribute("original-url",this.originalUrl);plugin.setAttribute("src",this.browserApi.getStreamInfo().streamUrl);plugin.setAttribute("background-color",this.getBackgroundColor().toString());const javascript=this.browserApi.getStreamInfo().javascript||"block";plugin.setAttribute("javascript",javascript);if(this.browserApi.getStreamInfo().embedded){plugin.setAttribute("top-level-url",this.browserApi.getStreamInfo().tabUrl)}else{plugin.toggleAttribute("full-frame",true)}if(this.isNewUiEnabled()){plugin.toggleAttribute("pdf-viewer-update-enabled",true)}const attributesForLoading={backgroundColor:this.getBackgroundColor(),allowJavascript:javascript==="allow"};if(chrome.mimeHandlerPrivate&&chrome.mimeHandlerPrivate.setPdfPluginAttributes){chrome.mimeHandlerPrivate.setPdfPluginAttributes(attributesForLoading)}return plugin}initInternal(browserApi,scroller,sizer,content){this.browserApi=browserApi;this.originalUrl=this.browserApi.getStreamInfo().originalUrl;record(UserAction.DOCUMENT_OPENED);this.paramsParser=new OpenPdfParamsParser((destination=>PluginController.getInstance().getNamedDestination(destination)));const defaultZoom=this.browserApi.getZoomBehavior()===ZoomBehavior.MANAGE?this.browserApi.getDefaultZoom():1;this.viewport_=new Viewport(scroller,sizer,content,getScrollbarWidth(),defaultZoom);this.viewport_.setViewportChangedCallback((()=>this.viewportChanged_()));this.viewport_.setBeforeZoomCallback((()=>this.currentController.beforeZoom()));this.viewport_.setAfterZoomCallback((()=>{this.currentController.afterZoom();this.afterZoom(this.viewport_.getZoom())}));this.viewport_.setUserInitiatedCallback((userInitiated=>this.setUserInitiated_(userInitiated)));window.addEventListener("beforeunload",(()=>this.resetTrackers_()));window.addEventListener("message",(message=>{this.handleScriptingMessage(message)}),false);this.plugin_=this.createPlugin_();const pluginController=PluginController.getInstance();pluginController.init(this.plugin_,this.viewport_,(()=>this.isUserInitiatedEvent),(()=>this.loaded));pluginController.isActive=true;this.currentController=pluginController;this.tracker.add(pluginController.getEventTarget(),PluginControllerEventType.PLUGIN_MESSAGE,(e=>this.handlePluginMessage(e)));document.body.addEventListener("change-page-and-xy",(e=>{const point=this.viewport_.convertPageToScreen(e.detail.page,e.detail);this.viewport_.goToPageAndXY(e.detail.page,point.x,point.y)}));document.addEventListener("keydown",this.handleKeyEvent.bind(this));this.zoomManager_=ZoomManager.create(this.browserApi.getZoomBehavior(),(()=>this.viewport_.getZoom()),(zoom=>this.browserApi.setZoom(zoom)),this.browserApi.getInitialZoom());this.viewport_.setZoomManager(this.zoomManager_);this.browserApi.addZoomEventListener((zoom=>this.zoomManager_.onBrowserZoomChange(zoom)));this.viewportScroller=new ViewportScroller(this.viewport_,this.plugin_,window);chrome.resourcesPrivate.getStrings(chrome.resourcesPrivate.Component.PDF,(strings=>this.handleStrings(strings)))}updateProgress(progress){if(progress===-1){this.showErrorDialog=true;this.viewport_.setContent(null);this.setLoadState(LoadState.FAILED);this.sendDocumentLoadedMessage()}else if(progress===100){if(this.lastViewportPosition){this.viewport_.setPosition(this.lastViewportPosition)}this.paramsParser.getViewportFromUrlParams(this.originalUrl).then((params=>this.handleURLParams_(params)));this.setLoadState(LoadState.SUCCESS);this.sendDocumentLoadedMessage();while(this.delayedScriptingMessages_.length>0){this.handleScriptingMessage(this.delayedScriptingMessages_.shift())}}else{this.setLoadState(LoadState.LOADING)}}readyToSendLoadMessage(){return true}sendDocumentLoadedMessage(){if(this.loadState_===LoadState.LOADING||!this.readyToSendLoadMessage()){return}this.sendScriptingMessage({type:"documentLoaded",load_state:this.loadState_})}viewportChanged_(){if(!this.documentDimensions){return}this.updateUIForViewportChange();const visiblePage=this.viewport_.getMostVisiblePage();const visiblePageDimensions=this.viewport_.getPageScreenRect(visiblePage);const size=this.viewport_.size;this.paramsParser.setViewportDimensions(size);this.sendScriptingMessage({type:"viewport",pageX:visiblePageDimensions.x,pageY:visiblePageDimensions.y,pageWidth:visiblePageDimensions.width,viewportWidth:size.width,viewportHeight:size.height})}handleScriptingMessage(message){if(message.data.type==="connect"){const token=message.data.token;if(token===this.browserApi.getStreamInfo().streamUrl){PluginController.getInstance().bindMessageHandler(message.ports[0])}else{this.dispatchEvent(new CustomEvent("connection-denied-for-testing"))}return true}if(this.parentWindow_!==message.source){this.parentWindow_=message.source;this.parentOrigin_=message.origin;if(this.loadState_!==LoadState.LOADING){this.sendDocumentLoadedMessage()}}return false}delayScriptingMessage(message){if(this.loadState_!==LoadState.SUCCESS){this.delayedScriptingMessages_.push(message);return true}return false}setDocumentDimensions(documentDimensions){this.documentDimensions=documentDimensions;this.isUserInitiatedEvent=false;this.viewport_.setDocumentDimensions(this.documentDimensions);this.paramsParser.setViewportDimensions(this.viewport_.size);this.isUserInitiatedEvent=true}get loaded(){return this.loaded_?this.loaded_.promise:null}get viewport(){assert(this.viewport_);return this.viewport_}setLoadState(loadState){if(this.loadState_===loadState){return}assert(loadState===LoadState.LOADING||this.loadState_===LoadState.LOADING);this.loadState_=loadState;if(!this.initialLoadComplete_){this.initialLoadComplete_=true;return}if(loadState===LoadState.SUCCESS){this.loaded_.resolve()}else if(loadState===LoadState.FAILED){this.loaded_.reject()}else{this.loaded_=new PromiseResolver}}handleStrings(strings){if(!strings){return}loadTimeData.data=strings;const presetZoomFactors=JSON.parse(loadTimeData.getString("presetZoomFactors"));this.viewport_.setZoomFactorRange(presetZoomFactors);this.strings=strings}handleURLParams_(params){if(params.zoom){this.viewport_.setZoom(params.zoom)}if(params.position){this.viewport_.goToPageAndXY(params.page?params.page:0,params.position.x,params.position.y)}else if(params.page){this.viewport_.goToPage(params.page)}if(params.view){this.isUserInitiatedEvent=false;this.updateViewportFit(params.view);this.forceFit(params.view);if(params.viewPosition){const zoomedPositionShift=params.viewPosition*this.viewport_.getZoom();const currentViewportPosition=this.viewport_.position;if(params.view===FittingType.FIT_TO_WIDTH){currentViewportPosition.y+=zoomedPositionShift}else if(params.view===FittingType.FIT_TO_HEIGHT){currentViewportPosition.x+=zoomedPositionShift}this.viewport_.setPosition(currentViewportPosition)}this.isUserInitiatedEvent=true}}setUserInitiated_(userInitiated){assert(this.isUserInitiatedEvent!==userInitiated);this.isUserInitiatedEvent=userInitiated}overrideSendScriptingMessageForTest(){this.overrideSendScriptingMessageForTest_=true}sendScriptingMessage(message){if(this.parentWindow_&&this.parentOrigin_){let targetOrigin;if(this.parentOrigin_===window.location.origin){targetOrigin=this.parentOrigin_}else if(message.type==="documentLoaded"||message.type==="passwordPrompted"){targetOrigin="*"}else{targetOrigin=this.originalUrl}try{this.parentWindow_.postMessage(message,targetOrigin)}catch(ok){}}}updateViewportFit(fittingType){if(fittingType===FittingType.FIT_TO_PAGE){this.viewport_.fitToPage()}else if(fittingType===FittingType.FIT_TO_WIDTH){this.viewport_.fitToWidth()}else if(fittingType===FittingType.FIT_TO_HEIGHT){this.viewport_.fitToHeight()}}onFitToChanged(e){this.updateViewportFit(e.detail);recordFitTo(e.detail)}onZoomIn(){this.viewport_.zoomIn();record(UserAction.ZOOM_IN)}onZoomChanged(e){this.viewport_.setZoom(e.detail/100);record(UserAction.ZOOM_CUSTOM)}onZoomOut(){this.viewport_.zoomOut();record(UserAction.ZOOM_OUT)}handleSelectedTextReply(message){if(this.overrideSendScriptingMessageForTest_){this.overrideSendScriptingMessageForTest_=false;try{this.sendScriptingMessage(message)}finally{this.parentWindow_.postMessage("flush","*")}return}this.sendScriptingMessage(message)}rotateClockwise(){record(UserAction.ROTATE);this.currentController.rotateClockwise()}rotateCounterclockwise(){record(UserAction.ROTATE);this.currentController.rotateCounterclockwise()}resetTrackers_(){this.viewport_.resetTracker();if(this.tracker){this.tracker.removeAll()}}}// Copyright 2020 The Chromium Authors. All rights reserved.
function hasCtrlModifier(e){let hasModifier=e.ctrlKey;return hasModifier}function shouldIgnoreKeyEvents(){const activeElement=getDeepActiveElement();assert(activeElement);return activeElement.isContentEditable||activeElement.tagName==="INPUT"&&activeElement.type!=="radio"||activeElement.tagName==="TEXTAREA"}// Copyright 2013 The Chromium Authors. All rights reserved.
function getFilenameFromURL(url){const mainUrl=url.split(/#|\?/)[0];const components=mainUrl.split(/\/|\\/);const filename=components[components.length-1];try{return decodeURIComponent(filename)}catch(e){if(e instanceof URIError){return filename}throw e}}function eventToPromise(event,target){return new Promise((resolve=>listenOnce(target,event,(_e=>resolve()))))}const LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY="sidenavCollapsed";const BACKGROUND_COLOR=4283586137;class PDFViewerElement extends PDFViewerBaseElement{constructor(){super();this.beepCount=0;this.navigator_=null;this.pluginController_=null;this.sidenavRestoreState_=false;this.toolbarEnabled_=false;this.sidenavCollapsed_=Boolean(Number.parseInt(LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY),10))}static get is(){return"pdf-viewer"}static get template(){return getTemplate()}static get properties(){return{annotationAvailable_:{type:Boolean,computed:"computeAnnotationAvailable_("+"hadPassword_, clockwiseRotations_, canSerializeDocument_,"+"twoUpViewEnabled_)"},annotationMode_:{type:Boolean,value:false},attachments_:{type:Array,value:()=>[]},bookmarks_:{type:Array,value:()=>[]},canSerializeDocument_:{type:Boolean,value:false},clockwiseRotations_:{type:Number,value:0},docLength_:Number,documentHasFocus_:{type:Boolean,value:false},documentMetadata_:{type:Object,value:()=>{}},fileName_:String,hadPassword_:{type:Boolean,value:false},hasEdits_:{type:Boolean,value:false},hasEnteredAnnotationMode_:{type:Boolean,value:false},isFormFieldFocused_:{type:Boolean,value:false},loadProgress_:Number,pageNo_:Number,pdfAnnotationsEnabled_:{type:Boolean,value:false},printingEnabled_:{type:Boolean,value:false},showPasswordDialog_:{type:Boolean,value:false},showPropertiesDialog_:{type:Boolean,value:false},sidenavCollapsed_:{type:Boolean,value:false},title_:String,twoUpViewEnabled_:{type:Boolean,value:false},viewportZoom_:{type:Number,value:1},zoomBounds_:{type:Object,value:()=>({min:0,max:0})}}}getBackgroundColor(){return BACKGROUND_COLOR}init(browserApi){this.initInternal(browserApi,this.$.scroller,this.$.sizer,this.$.content);this.pluginController_=PluginController.getInstance();this.fileName_=getFilenameFromURL(this.originalUrl);this.title_=this.fileName_;assert(this.paramsParser);this.toolbarEnabled_=this.paramsParser.shouldShowToolbar(this.originalUrl);if(this.toolbarEnabled_){this.$.toolbar.hidden=false}this.navigator_=new PdfNavigator(this.originalUrl,this.viewport,this.paramsParser,new NavigatorDelegateImpl(browserApi));if(chrome.mimeHandlerPrivate&&chrome.mimeHandlerPrivate.onSave){chrome.mimeHandlerPrivate.onSave.addListener(this.onSave_.bind(this))}}handleKeyEvent(e){if(shouldIgnoreKeyEvents()||e.defaultPrevented){return}if(this.viewport.handleDirectionalKeyEvent(e,this.isFormFieldFocused_)){return}if(document.fullscreenElement!==null){if(hasCtrlModifier(e)&&(e.key==="="||e.key==="-"||e.key==="+")){e.preventDefault()}return}switch(e.key){case"a":if(hasCtrlModifier(e)){this.pluginController_.selectAll();e.preventDefault()}return;case"[":if(e.ctrlKey){this.rotateCounterclockwise()}return;case"]":if(e.ctrlKey){this.rotateClockwise()}return}this.handleToolbarKeyEvent_(e)}handleToolbarKeyEvent_(e){if(e.key==="\\"&&e.ctrlKey){this.$.toolbar.fitToggle()}}onDisplayAnnotationsChanged_(e){assert(this.currentController);this.currentController.setDisplayAnnotations(e.detail)}onPresentClick_(){const scroller=this.$.scroller;Promise.all([eventToPromise("fullscreenchange",scroller),scroller.requestFullscreen()]).then((()=>{this.forceFit(FittingType.FIT_TO_HEIGHT);this.viewport.setPresentationMode(true);this.pluginController_.setPresentationMode(true);eventToPromise("fullscreenchange",scroller).then((()=>{assert(document.fullscreenElement===null);this.viewport.setPresentationMode(false);this.pluginController_.setPresentationMode(false);this.shadowRoot.querySelector("embed").focus()}))}))}onPropertiesClick_(){assert(!this.showPropertiesDialog_);this.showPropertiesDialog_=true}onPropertiesDialogClose_(){assert(this.showPropertiesDialog_);this.showPropertiesDialog_=false}onTwoUpViewChanged_(e){const twoUpViewEnabled=e.detail;assert(this.currentController);this.currentController.setTwoUpView(twoUpViewEnabled);record(twoUpViewEnabled?UserAction.TWO_UP_VIEW_ENABLE:UserAction.TWO_UP_VIEW_DISABLE)}goToPageAndXY_(origin,page,message){this.viewport.goToPageAndXY(page,message.x,message.y);if(origin===ChangePageOrigin.BOOKMARK){record(UserAction.FOLLOW_BOOKMARK)}}get bookmarks(){return this.bookmarks_}setLoadState(loadState){super.setLoadState(loadState);if(loadState===LoadState.FAILED){this.closePasswordDialog_()}}updateProgress(progress){if(this.toolbarEnabled_){this.loadProgress_=progress}super.updateProgress(progress)}onErrorDialog_(){if(!chrome.tabs||this.browserApi.getStreamInfo().tabId===-1){return}const errorDialog=this.shadowRoot.querySelector("#error-dialog");errorDialog.reloadFn=()=>{chrome.tabs.reload(this.browserApi.getStreamInfo().tabId)}}closePasswordDialog_(){const passwordDialog=this.shadowRoot.querySelector("#password-dialog");if(passwordDialog){passwordDialog.close()}}onPasswordDialogClose_(){this.showPasswordDialog_=false}onPasswordSubmitted_(event){this.pluginController_.getPasswordComplete(event.detail.password)}updateUIForViewportChange(){this.clockwiseRotations_=this.viewport.getClockwiseRotations();this.pageNo_=this.viewport.getMostVisiblePage()+1;this.twoUpViewEnabled_=this.viewport.twoUpViewEnabled();assert(this.currentController);this.currentController.viewportChanged()}handleStrings(strings){super.handleStrings(strings);this.pdfAnnotationsEnabled_=loadTimeData.getBoolean("pdfAnnotationsEnabled");this.printingEnabled_=loadTimeData.getBoolean("printingEnabled");const presetZoomFactors=this.viewport.presetZoomFactors;this.zoomBounds_.min=Math.round(presetZoomFactors[0]*100);this.zoomBounds_.max=Math.round(presetZoomFactors[presetZoomFactors.length-1]*100)}handleScriptingMessage(message){if(super.handleScriptingMessage(message)){return true}if(this.delayScriptingMessage(message)){return true}switch(message.data.type.toString()){case"getSelectedText":this.pluginController_.getSelectedText().then(this.handleSelectedTextReply.bind(this));break;case"print":this.pluginController_.print();break;case"selectAll":this.pluginController_.selectAll();break;default:return false}return true}handlePluginMessage(e){const data=e.detail;switch(data.type.toString()){case"attachments":const attachmentsData=data;this.setAttachments_(attachmentsData.attachmentsData);return;case"beep":this.handleBeep_();return;case"bookmarks":const bookmarksData=data;this.setBookmarks_(bookmarksData.bookmarksData);return;case"documentDimensions":this.setDocumentDimensions(data);return;case"email":const emailData=data;const href="mailto:"+emailData.to+"?cc="+emailData.cc+"&bcc="+emailData.bcc+"&subject="+emailData.subject+"&body="+emailData.body;this.handleNavigate_(href,WindowOpenDisposition.CURRENT_TAB);return;case"getPassword":this.handlePasswordRequest_();return;case"loadProgress":const progressData=data;this.updateProgress(progressData.progress);return;case"navigate":const navigateData=data;this.handleNavigate_(navigateData.url,navigateData.disposition);return;case"navigateToDestination":const destinationData=data;this.viewport.handleNavigateToDestination(destinationData.page,destinationData.x,destinationData.y,destinationData.zoom);return;case"metadata":const metadataData=data;this.setDocumentMetadata_(metadataData.metadataData);return;case"setIsEditing":this.hasEdits_=true;return;case"setIsSelecting":const selectingData=data;this.viewportScroller.setEnableScrolling(selectingData.isSelecting);return;case"setSmoothScrolling":this.viewport.setSmoothScrolling(data.smoothScrolling);return;case"formFocusChange":const focusedData=data;this.isFormFieldFocused_=focusedData.focused;return;case"touchSelectionOccurred":this.sendScriptingMessage({type:"touchSelectionOccurred"});return;case"documentFocusChanged":const hasFocusData=data;this.documentHasFocus_=hasFocusData.hasFocus;return;case"sendKeyEvent":const keyEventData=data;const keyEvent=deserializeKeyEvent(keyEventData.keyEvent);keyEvent.fromPlugin=true;this.handleKeyEvent(keyEvent);return}assertNotReached("Unknown message type received: "+data.type)}forceFit(view){this.$.toolbar.forceFit(view)}afterZoom(viewportZoom){this.viewportZoom_=viewportZoom}setDocumentDimensions(documentDimensions){super.setDocumentDimensions(documentDimensions);this.closePasswordDialog_();if(this.toolbarEnabled_){this.docLength_=this.documentDimensions.pageDimensions.length}}handleBeep_(){this.beepCount+=1}handlePasswordRequest_(){if(!this.showPasswordDialog_){this.showPasswordDialog_=true;this.sendScriptingMessage({type:"passwordPrompted"})}else{const passwordDialog=this.shadowRoot.querySelector("#password-dialog");assert(passwordDialog);passwordDialog.deny()}}handleNavigate_(url,disposition){this.navigator_.navigate(url,disposition)}setAttachments_(attachments){this.attachments_=attachments}setBookmarks_(bookmarks){this.bookmarks_=bookmarks}setDocumentMetadata_(metadata){this.documentMetadata_=metadata;this.title_=this.documentMetadata_.title||this.fileName_;document.title=this.title_;this.canSerializeDocument_=this.documentMetadata_.canSerializeDocument}async onSaveAttachment_(e){const index=e.detail;const size=this.attachments_[index].size;assert(size!==-1);let dataArray=[];if(size!==0){assert(this.currentController);const result=await this.currentController.saveAttachment(index);const MAX_FILE_SIZE=100*1e3*1e3;const bufView=new Uint8Array(result.dataToSave);assert(bufView.length<=MAX_FILE_SIZE,`File too large to be saved: ${bufView.length} bytes.`);assert(bufView.length===size,`Received attachment size does not match its expected value: ${size} bytes.`);dataArray=[result.dataToSave]}const blob=new Blob(dataArray);const fileName=this.attachments_[index].name;chrome.fileSystem.chooseEntry({type:"saveFile",suggestedName:fileName},(entry=>{if(chrome.runtime.lastError){if(chrome.runtime.lastError.message!=="User cancelled"){console.error("chrome.fileSystem.chooseEntry failed: "+chrome.runtime.lastError.message)}return}entry.createWriter((writer=>{writer.write(blob);chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(false)}))}))}async onSave_(streamUrl){if(streamUrl!==this.browserApi.getStreamInfo().streamUrl){return}let saveMode;if(this.hasEnteredAnnotationMode_){saveMode=SaveRequestType.ANNOTATION}else if(this.hasEdits_){saveMode=SaveRequestType.EDITED}else{saveMode=SaveRequestType.ORIGINAL}this.save_(saveMode)}onToolbarSave_(e){this.save_(e.detail)}onChangePage_(e){this.viewport.goToPage(e.detail.page);if(e.detail.origin===ChangePageOrigin.BOOKMARK){record(UserAction.FOLLOW_BOOKMARK)}else if(e.detail.origin===ChangePageOrigin.PAGE_SELECTOR){record(UserAction.PAGE_SELECTOR_NAVIGATE)}else if(e.detail.origin===ChangePageOrigin.THUMBNAIL){record(UserAction.THUMBNAIL_NAVIGATE)}}onChangePageAndXy_(e){const point=this.viewport.convertPageToScreen(e.detail.page,e.detail);this.goToPageAndXY_(e.detail.origin,e.detail.page,point)}onNavigate_(e){const disposition=e.detail.newtab?WindowOpenDisposition.NEW_BACKGROUND_TAB:WindowOpenDisposition.CURRENT_TAB;this.navigator_.navigate(e.detail.uri,disposition)}onSidenavToggleClick_(){this.sidenavCollapsed_=!this.sidenavCollapsed_;const container=this.shadowRoot.querySelector("#sidenav-container");if(!this.sidenavCollapsed_){container.classList.add("floating");container.addEventListener("transitionend",(()=>{container.classList.remove("floating")}),{once:true})}LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY,(this.sidenavCollapsed_?1:0).toString())}async save_(requestType){this.recordSaveMetrics_(requestType);let result=null;assert(this.currentController);if(requestType!==SaveRequestType.ORIGINAL||!this.annotationMode_){result=await this.currentController.save(requestType)}if(result==null){return}let fileName=result.fileName;if(!fileName.toLowerCase().endsWith(".pdf")){fileName=fileName+".pdf"}const blob=new Blob([result.dataToSave],{type:"application/pdf"});chrome.fileSystem.chooseEntry({type:"saveFile",accepts:[{description:"*.pdf",extensions:["pdf"]}],suggestedName:fileName},(entry=>{if(chrome.runtime.lastError){if(chrome.runtime.lastError.message!=="User cancelled"){console.error("chrome.fileSystem.chooseEntry failed: "+chrome.runtime.lastError.message)}return}entry.createWriter((writer=>{writer.write(blob);chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(false)}))}))}recordSaveMetrics_(requestType){record(UserAction.SAVE);switch(requestType){case SaveRequestType.ANNOTATION:record(UserAction.SAVE_WITH_ANNOTATION);break;case SaveRequestType.ORIGINAL:record(this.hasEdits_?UserAction.SAVE_ORIGINAL:UserAction.SAVE_ORIGINAL_ONLY);break;case SaveRequestType.EDITED:record(UserAction.SAVE_EDITED);break}}async onPrint_(){record(UserAction.PRINT);assert(this.currentController);this.currentController.print()}computeAnnotationAvailable_(){return this.canSerializeDocument_&&!this.hadPassword_}isRotated_(){return this.clockwiseRotations_!==0}}customElements.define(PDFViewerElement.is,PDFViewerElement);export{ChangePageOrigin,CrActionMenuElement,FittingType,GestureDetector,OpenPdfParamsParser,PAGE_SHADOW,PAINTED_ATTRIBUTE,PDFScriptingAPI,PDFViewerBaseElement,PDFViewerElement,PdfNavigator,PluginController,SaveRequestType,SwipeDetector,SwipeDirection,UserAction,ViewerBookmarkElement,ViewerDocumentOutlineElement,ViewerDownloadControlsElement,ViewerPageSelectorElement,ViewerPasswordDialogElement,ViewerPdfSidenavElement,ViewerPropertiesDialogElement,ViewerThumbnailBarElement,ViewerThumbnailElement,ViewerToolbarElement,Viewport,ViewportScroller,WindowOpenDisposition,ZoomManager,getFilenameFromURL,record,recordFitTo,resetForTesting,shouldIgnoreKeyEvents};