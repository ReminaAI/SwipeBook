"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DragAndDropUpdated",{

/***/ "./Components/DragAndDropComponents/UpdatedComponent.js":
/*!**************************************************************!*\
  !*** ./Components/DragAndDropComponents/UpdatedComponent.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdatedComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/DragStyles/drag.module.css */ \"./styles/DragStyles/drag.module.css\");\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nfunction UpdatedComponent(param) {\n    var clicked = param.clicked, setClicked = param.setClicked, setComponents = param.setComponents, component1 = param.component, components = param.components, STATIC = param.STATIC;\n    var calculateX = function calculateX(event, component, estatic) {\n        if (event.pageX + component.width / 2 >= event.view.innerWidth) {\n            return event.view.innerWidth - component.width;\n        } else if (event.pageX - component.width / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                //left side of static elements\n                // if (event.pageX + component.width / 2 >= element.x) {\n                //     return element.x - component.width\n                // }\n                // else\n                //     //right side of static elements\n                //     if ((event.pageX - component.width / 2 <= element.x + element.width) && (event.pageX + component.width / 2 >= element.x + 10)) {\n                //         return element.x + element.width\n                //     }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageX - component.width / 2;\n    };\n    var calculateY = function calculateY(event, component, estatic) {\n        if (event.pageY + component.height / 2 >= event.view.innerHeight) {\n            return event.view.innerHeight - component.height;\n        } else if (event.pageY - component.height / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                    //Top side of static Components\n                    if (event.pageY + component.height / 2 >= element.y && event.pageY - component.height / 2 <= element.y + element.height - 10 && event.pageX + component.width / 2 >= element.x) {\n                        return element.y - component.height;\n                    } else if (event.pageY - component.height / 2 <= element.y + element.height && event.pageY + component.height / 2 >= element.y + 10 && event.pageX + component.width / 2 >= element.x) {\n                        return element.y + element.height;\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageY - component.height / 2;\n    };\n    var calculatePosition = function calculatePosition(event) {\n        if (clicked) {\n            setComponents(components.reduce(function(acc, e) {\n                e.id !== component1.id ? acc.push(e) : acc.push(_objectSpread({}, e, {\n                    x: calculateX(event, component1, STATIC),\n                    y: calculateY(event, component1, STATIC)\n                }));\n                return acc;\n            }, []));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            top: component1.y,\n            left: component1.x,\n            height: component1.height,\n            width: component1.width\n        },\n        className: (_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default().component),\n        onMouseMove: function(event) {\n            return calculatePosition(event);\n        },\n        onMouseDown: function(e) {\n            e.stopPropagation();\n            if (e.pageX >= component1.x && e.pageX <= component1.x + component1.width && e.pageY >= component1.y && e.pageY <= component1.y + component1.height) {\n                setClicked(true);\n            }\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\swipe_book_2022\\\\Components\\\\DragAndDropComponents\\\\UpdatedComponent.js\",\n        lineNumber: 65,\n        columnNumber: 13\n    }, this);\n}; /*\r\n\r\n// X CHECKS\r\n\r\n    // if (((event.pageX + component.width / 2 >= element.x) && (event.pageX + component.width / 2 <= element.x + element.width)) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //     return element.x - component.width\r\n    // }\r\n    // else\r\n    //     if ((event.pageX - component.width / 2 <= element.x + element.width) && (event.pageX + component.width / 2 >= element.x + 10) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //         return element.x + element.width\r\n    //     }\r\n\r\n\r\n// Y CHECKS                \r\n    // if (((event.pageY + component.height / 2 >= element.y) && (event.pageY + component.height / 2 <= element.y + element.height)) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y - component.height\r\n    // }\r\n    // else \r\n    // if ((event.pageY - component.height / 2 <= element.y + element.height) && (event.pageY + component.height / 2 >= element.y) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y + element.height\r\n    // }\r\n*/ \n_c = UpdatedComponent;\nvar _c;\n$RefreshReg$(_c, \"UpdatedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0RyYWdBbmREcm9wQ29tcG9uZW50cy9VcGRhdGVkQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDM0I7QUFFbEIsU0FBU0UsZ0JBQWdCLENBQUMsS0FBcUUsRUFBRTtRQUFyRUMsT0FBTyxHQUFULEtBQXFFLENBQW5FQSxPQUFPLEVBQUVDLFVBQVUsR0FBckIsS0FBcUUsQ0FBMURBLFVBQVUsRUFBRUMsYUFBYSxHQUFwQyxLQUFxRSxDQUE5Q0EsYUFBYSxFQUFFQyxVQUFTLEdBQS9DLEtBQXFFLENBQS9CQSxTQUFTLEVBQUVDLFVBQVUsR0FBM0QsS0FBcUUsQ0FBcEJBLFVBQVUsRUFBRUMsTUFBTSxHQUFuRSxLQUFxRSxDQUFSQSxNQUFNO1FBQy9GQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFSixTQUFTLEVBQUVLLE9BQU8sRUFBRTtRQUMzQyxJQUFJRCxLQUFLLENBQUNFLEtBQUssR0FBR04sU0FBUyxDQUFDTyxLQUFLLEdBQUcsQ0FBQyxJQUFJSCxLQUFLLENBQUNJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO1lBQzVELE9BQU9MLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxVQUFVLEdBQUdULFNBQVMsQ0FBQ08sS0FBSztTQUNqRCxNQUFNLElBQUlILEtBQUssQ0FBQ0UsS0FBSyxHQUFHTixTQUFTLENBQUNPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQztTQUNYLE1BQU07Z0JBQ0UseUJBQWEsU0FBYixpQkFBYSxVQUFiLGNBQWE7O2dCQUFsQixRQUFLLFNBQWEsR0FBSUYsT0FBTyxxQkFBeEIsS0FBYSxJQUFiLHlCQUFhLElBQWIsS0FBYSxHQUFiLFNBQWEsZ0JBQWIseUJBQWEsUUFBYTtvQkFBMUIsSUFBTUssT0FBTyxHQUFiLEtBQWE7Z0JBQ2QsOEJBQThCO2dCQUM5Qix3REFBd0Q7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YWdBbmREcm9wQ29tcG9uZW50cy9VcGRhdGVkQ29tcG9uZW50LmpzP2YzMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0RyYWdTdHlsZXMvZHJhZy5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZWRDb21wb25lbnQoeyBjbGlja2VkLCBzZXRDbGlja2VkLCBzZXRDb21wb25lbnRzLCBjb21wb25lbnQsIGNvbXBvbmVudHMsIFNUQVRJQyB9KSB7XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVYKGV2ZW50LCBjb21wb25lbnQsIGVzdGF0aWMpIHtcclxuICAgICAgICBpZiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGV2ZW50LnZpZXcuaW5uZXJXaWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQudmlldy5pbm5lcldpZHRoIC0gY29tcG9uZW50LndpZHRoXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5wYWdlWCAtIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlc3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICAvL2xlZnQgc2lkZSBvZiBzdGF0aWMgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIC8vIGlmIChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQueCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vcmlnaHQgc2lkZSBvZiBzdGF0aWMgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoKSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMlxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlWShldmVudCwgY29tcG9uZW50LCBlc3RhdGljKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZXZlbnQudmlldy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQudmlldy5pbm5lckhlaWdodCAtIGNvbXBvbmVudC5oZWlnaHRcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlc3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICAvL1RvcCBzaWRlIG9mIHN0YXRpYyBDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55KSAmJiAoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCAtIDEwKSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC55IC0gY29tcG9uZW50LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCkgJiYgKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55ICsgMTApICYmIChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudC5wYWdlWSAtIGNvbXBvbmVudC5oZWlnaHQgLyAyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgc2V0Q29tcG9uZW50cyhjb21wb25lbnRzLnJlZHVjZSgoYWNjLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLmlkICE9PSBjb21wb25lbnQuaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKGUpIDpcclxuICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNhbGN1bGF0ZVgoZXZlbnQsIGNvbXBvbmVudCwgU1RBVElDKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY2FsY3VsYXRlWShldmVudCwgY29tcG9uZW50LCBTVEFUSUMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2NcclxuICAgICAgICAgICAgfSwgW10pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IHRvcDogY29tcG9uZW50LnksIGxlZnQ6IGNvbXBvbmVudC54LCBoZWlnaHQ6IGNvbXBvbmVudC5oZWlnaHQsIHdpZHRoOiBjb21wb25lbnQud2lkdGggfX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb21wb25lbnR9XHJcbiAgICAgICAgb25Nb3VzZU1vdmU9eyhldmVudCkgPT4gY2FsY3VsYXRlUG9zaXRpb24oZXZlbnQpfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGlmIChlLnBhZ2VYID49IGNvbXBvbmVudC54ICYmIGUucGFnZVggPD0gKGNvbXBvbmVudC54ICsgY29tcG9uZW50LndpZHRoKVxyXG4gICAgICAgICAgICAgICAgJiYgZS5wYWdlWSA+PSBjb21wb25lbnQueSAmJiBlLnBhZ2VZIDw9IChjb21wb25lbnQueSArIGNvbXBvbmVudC5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbGlja2VkKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG5cclxuICAgID5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuLypcclxuXHJcbi8vIFggQ0hFQ0tTXHJcblxyXG4gICAgLy8gaWYgKCgoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCkgJiYgKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoKSkgJiYgKChldmVudC5wYWdlWSArIGNvbXBvbmVudC5oZWlnaHQgLyAyID49IGVsZW1lbnQueSArIDEwKSAmJiAoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCAtIGVsZW1lbnQuaGVpZ2h0IC8gMikpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQueCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZVxyXG4gICAgLy8gICAgIGlmICgoZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGgpICYmIChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54ICsgMTApICYmICgoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkgKyAxMCkgJiYgKGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQgLSBlbGVtZW50LmhlaWdodCAvIDIpKSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aFxyXG4gICAgLy8gICAgIH1cclxuXHJcblxyXG4vLyBZIENIRUNLUyAgICAgICAgICAgICAgICBcclxuICAgIC8vIGlmICgoKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55KSAmJiAoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCkpICYmICgoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLyAyKSAmJiAoZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLSBlbGVtZW50LndpZHRoIC8gMikpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQueSAtIGNvbXBvbmVudC5oZWlnaHRcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2UgXHJcbiAgICAvLyBpZiAoKGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQpICYmIChldmVudC5wYWdlWSArIGNvbXBvbmVudC5oZWlnaHQgLyAyID49IGVsZW1lbnQueSkgJiYgKChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCAvIDIpICYmIChldmVudC5wYWdlWCAtIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCAtIGVsZW1lbnQud2lkdGggLyAyKSkpIHtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHRcclxuICAgIC8vIH1cclxuKi8iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJVcGRhdGVkQ29tcG9uZW50IiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJzZXRDb21wb25lbnRzIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsIlNUQVRJQyIsImNhbGN1bGF0ZVgiLCJldmVudCIsImVzdGF0aWMiLCJwYWdlWCIsIndpZHRoIiwidmlldyIsImlubmVyV2lkdGgiLCJlbGVtZW50IiwiY2FsY3VsYXRlWSIsInBhZ2VZIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ5IiwieCIsImNhbGN1bGF0ZVBvc2l0aW9uIiwicmVkdWNlIiwiYWNjIiwiZSIsImlkIiwicHVzaCIsImRpdiIsInN0eWxlIiwidG9wIiwibGVmdCIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJzdG9wUHJvcGFnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/DragAndDropComponents/UpdatedComponent.js\n");

/***/ })

});