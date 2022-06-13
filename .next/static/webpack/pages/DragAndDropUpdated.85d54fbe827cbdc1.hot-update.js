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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdatedComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/DragStyles/drag.module.css */ \"./styles/DragStyles/drag.module.css\");\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nfunction UpdatedComponent(param) {\n    var clicked = param.clicked, setClicked = param.setClicked, setComponents = param.setComponents, component1 = param.component, components = param.components, STATIC = param.STATIC;\n    var calculateX = function calculateX(event, component, estatic) {\n        if (event.pageX + component.width / 2 >= event.view.innerWidth) {\n            return event.view.innerWidth - component.width;\n        } else if (event.pageX - component.width / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                    //left side of static elements\n                    if (event.pageX + component.width / 2 >= element.x && component.x + 5 <= element.x + element.width && event.pageY + component.height / 2 >= element.y + 5 && event.pageY - component.height / 2 <= element.y + element.height - 5) {\n                        console.log(\"INSIDE\");\n                    // return element.x - component.width\n                    } else //right side of static elements\n                    if (event.pageX - component.width / 2 <= element.x + element.width && event.pageX + component.width / 2 >= element.x + 5) {\n                        return element.x + element.width;\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageX - component.width / 2;\n    };\n    var calculateY = function calculateY(event, component, estatic) {\n        if (event.pageY + component.height / 2 >= event.view.innerHeight) {\n            return event.view.innerHeight - component.height;\n        } else if (event.pageY - component.height / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                //Top side of static Components\n                // if ((event.pageY + component.height / 2 >= element.y) && (component.y + 1 <= element.y + element.height) && (event.pageX + component.width / 2 >= element.x + 1) && (event.pageX - component.width / 2 <= element.x + element.width - 1)) {\n                //     return element.y - component.height\n                // }\n                // else\n                // //Bottom side of static components\n                //     if ((event.pageY - component.height / 2 <= element.y + element.height) && (component.y - 10 >= element.y) && (event.pageX + component.width / 2 >= element.x + 1) && (event.pageX - component.width / 2 <= element.x + element.width - 1)) {\n                //         return element.y + element.height\n                //     }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageY - component.height / 2;\n    };\n    var calculatePosition = function calculatePosition(event) {\n        if (clicked) {\n            setComponents(components.reduce(function(acc, e) {\n                e.id !== component1.id ? acc.push(e) : acc.push(_objectSpread({}, e, {\n                    x: calculateX(event, component1, STATIC),\n                    y: calculateY(event, component1, STATIC)\n                }));\n                return acc;\n            }, []));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            top: component1.y,\n            left: component1.x,\n            height: component1.height,\n            width: component1.width\n        },\n        className: (_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default().component),\n        onMouseMove: function(event) {\n            return calculatePosition(event);\n        },\n        onMouseDown: function(e) {\n            e.stopPropagation();\n            if (e.pageX >= component1.x && e.pageX <= component1.x + component1.width && e.pageY >= component1.y && e.pageY <= component1.y + component1.height) {\n                setClicked(true);\n            }\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\swipe_book_2022\\\\Components\\\\DragAndDropComponents\\\\UpdatedComponent.js\",\n        lineNumber: 67,\n        columnNumber: 13\n    }, this);\n}; /*\r\n\r\n// X CHECKS\r\n\r\n    // if (((event.pageX + component.width / 2 >= element.x) && (event.pageX + component.width / 2 <= element.x + element.width)) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //     return element.x - component.width\r\n    // }\r\n    // else\r\n    //     if ((event.pageX - component.width / 2 <= element.x + element.width) && (event.pageX + component.width / 2 >= element.x + 10) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //         return element.x + element.width\r\n    //     }\r\n\r\n\r\n// Y CHECKS                \r\n    // if (((event.pageY + component.height / 2 >= element.y) && (event.pageY + component.height / 2 <= element.y + element.height)) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y - component.height\r\n    // }\r\n    // else \r\n    // if ((event.pageY - component.height / 2 <= element.y + element.height) && (event.pageY + component.height / 2 >= element.y) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y + element.height\r\n    // }\r\n*/ \n_c = UpdatedComponent;\nvar _c;\n$RefreshReg$(_c, \"UpdatedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0RyYWdBbmREcm9wQ29tcG9uZW50cy9VcGRhdGVkQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDM0I7QUFFbEIsU0FBU0UsZ0JBQWdCLENBQUMsS0FBcUUsRUFBRTtRQUFyRUMsT0FBTyxHQUFULEtBQXFFLENBQW5FQSxPQUFPLEVBQUVDLFVBQVUsR0FBckIsS0FBcUUsQ0FBMURBLFVBQVUsRUFBRUMsYUFBYSxHQUFwQyxLQUFxRSxDQUE5Q0EsYUFBYSxFQUFFQyxVQUFTLEdBQS9DLEtBQXFFLENBQS9CQSxTQUFTLEVBQUVDLFVBQVUsR0FBM0QsS0FBcUUsQ0FBcEJBLFVBQVUsRUFBRUMsTUFBTSxHQUFuRSxLQUFxRSxDQUFSQSxNQUFNO1FBQy9GQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFSixTQUFTLEVBQUVLLE9BQU8sRUFBRTtRQUMzQyxJQUFJRCxLQUFLLENBQUNFLEtBQUssR0FBR04sU0FBUyxDQUFDTyxLQUFLLEdBQUcsQ0FBQyxJQUFJSCxLQUFLLENBQUNJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO1lBQzVELE9BQU9MLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxVQUFVLEdBQUdULFNBQVMsQ0FBQ08sS0FBSztTQUNqRCxNQUFNLElBQUlILEtBQUssQ0FBQ0UsS0FBSyxHQUFHTixTQUFTLENBQUNPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQztTQUNYLE1BQU07Z0JBQ0UseUJBQWEsU0FBYixpQkFBYSxVQUFiLGNBQWE7O2dCQUFsQixRQUFLLFNBQWEsR0FBSUYsT0FBTyxxQkFBeEIsS0FBYSxJQUFiLHlCQUFhLElBQWIsS0FBYSxHQUFiLFNBQWEsZ0JBQWIseUJBQWEsUUFBYTtvQkFBMUIsSUFBTUssT0FBTyxHQUFiLEtBQWE7b0JBQ2QsOEJBQThCO29CQUM5QixJQUFJLEtB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Y2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9EcmFnQW5kRHJvcENvbXBvbmVudHMvVXBkYXRlZENvbXBvbmVudC5qcz9mMzE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9EcmFnU3R5bGVzL2RyYWcubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVkQ29tcG9uZW50KHsgY2xpY2tlZCwgc2V0Q2xpY2tlZCwgc2V0Q29tcG9uZW50cywgY29tcG9uZW50LCBjb21wb25lbnRzLCBTVEFUSUMgfSkge1xyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlWChldmVudCwgY29tcG9uZW50LCBlc3RhdGljKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBldmVudC52aWV3LmlubmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnZpZXcuaW5uZXJXaWR0aCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZXN0YXRpYykge1xyXG4gICAgICAgICAgICAgICAgLy9sZWZ0IHNpZGUgb2Ygc3RhdGljIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LngpICYmIChjb21wb25lbnQueCArIDUgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCkgJiYgKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55ICsgNSkgJiYgKGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQgLSA1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TSURFXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGVsZW1lbnQueCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcmlnaHQgc2lkZSBvZiBzdGF0aWMgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoKSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVZKGV2ZW50LCBjb21wb25lbnQsIGVzdGF0aWMpIHtcclxuICAgICAgICBpZiAoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBldmVudC52aWV3LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC52aWV3LmlubmVySGVpZ2h0IC0gY29tcG9uZW50LmhlaWdodFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVzdGF0aWMpIHtcclxuICAgICAgICAgICAgICAgIC8vVG9wIHNpZGUgb2Ygc3RhdGljIENvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgIC8vIGlmICgoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkpICYmIChjb21wb25lbnQueSArIDEgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQpICYmIChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54ICsgMSkgJiYgKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZWxlbWVudC55IC0gY29tcG9uZW50LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gLy9Cb3R0b20gc2lkZSBvZiBzdGF0aWMgY29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICgoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCkgJiYgKGNvbXBvbmVudC55IC0gMTAgPj0gZWxlbWVudC55KSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEpICYmIChldmVudC5wYWdlWCAtIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDJcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUG9zaXRpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgICBzZXRDb21wb25lbnRzKGNvbXBvbmVudHMucmVkdWNlKChhY2MsIGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuaWQgIT09IGNvbXBvbmVudC5pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2FsY3VsYXRlWChldmVudCwgY29tcG9uZW50LCBTVEFUSUMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjYWxjdWxhdGVZKGV2ZW50LCBjb21wb25lbnQsIFNUQVRJQylcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgICAgICAgICB9LCBbXSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuICg8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgdG9wOiBjb21wb25lbnQueSwgbGVmdDogY29tcG9uZW50LngsIGhlaWdodDogY29tcG9uZW50LmhlaWdodCwgd2lkdGg6IGNvbXBvbmVudC53aWR0aCB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBvbmVudH1cclxuICAgICAgICBvbk1vdXNlTW92ZT17KGV2ZW50KSA9PiBjYWxjdWxhdGVQb3NpdGlvbihldmVudCl9XHJcbiAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaWYgKGUucGFnZVggPj0gY29tcG9uZW50LnggJiYgZS5wYWdlWCA8PSAoY29tcG9uZW50LnggKyBjb21wb25lbnQud2lkdGgpXHJcbiAgICAgICAgICAgICAgICAmJiBlLnBhZ2VZID49IGNvbXBvbmVudC55ICYmIGUucGFnZVkgPD0gKGNvbXBvbmVudC55ICsgY29tcG9uZW50LmhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHNldENsaWNrZWQodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcblxyXG4gICAgPlxyXG4gICAgPC9kaXY+KVxyXG59XHJcblxyXG4vKlxyXG5cclxuLy8gWCBDSEVDS1NcclxuXHJcbiAgICAvLyBpZiAoKChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54KSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGgpKSAmJiAoKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55ICsgMTApICYmIChldmVudC5wYWdlWSAtIGNvbXBvbmVudC5oZWlnaHQgLyAyIDw9IGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0IC0gZWxlbWVudC5oZWlnaHQgLyAyKSkpIHtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudC54IC0gY29tcG9uZW50LndpZHRoXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlXHJcbiAgICAvLyAgICAgaWYgKChldmVudC5wYWdlWCAtIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCkgJiYgKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LnggKyAxMCkgJiYgKChldmVudC5wYWdlWSArIGNvbXBvbmVudC5oZWlnaHQgLyAyID49IGVsZW1lbnQueSArIDEwKSAmJiAoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCAtIGVsZW1lbnQuaGVpZ2h0IC8gMikpKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoXHJcbiAgICAvLyAgICAgfVxyXG5cclxuXHJcbi8vIFkgQ0hFQ0tTICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gaWYgKCgoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkpICYmIChldmVudC5wYWdlWSArIGNvbXBvbmVudC5oZWlnaHQgLyAyIDw9IGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0KSkgJiYgKChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPj0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCAvIDIpICYmIChldmVudC5wYWdlWCAtIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCAtIGVsZW1lbnQud2lkdGggLyAyKSkpIHtcclxuICAgIC8vICAgICByZXR1cm4gZWxlbWVudC55IC0gY29tcG9uZW50LmhlaWdodFxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSBcclxuICAgIC8vIGlmICgoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCkgJiYgKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55KSAmJiAoKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoIC8gMikgJiYgKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoIC0gZWxlbWVudC53aWR0aCAvIDIpKSkge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodFxyXG4gICAgLy8gfVxyXG4qLyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlVwZGF0ZWRDb21wb25lbnQiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsInNldENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJjb21wb25lbnRzIiwiU1RBVElDIiwiY2FsY3VsYXRlWCIsImV2ZW50IiwiZXN0YXRpYyIsInBhZ2VYIiwid2lkdGgiLCJ2aWV3IiwiaW5uZXJXaWR0aCIsImVsZW1lbnQiLCJ4IiwicGFnZVkiLCJoZWlnaHQiLCJ5IiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZVkiLCJpbm5lckhlaWdodCIsImNhbGN1bGF0ZVBvc2l0aW9uIiwicmVkdWNlIiwiYWNjIiwiZSIsImlkIiwicHVzaCIsImRpdiIsInN0eWxlIiwidG9wIiwibGVmdCIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJzdG9wUHJvcGFnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/DragAndDropComponents/UpdatedComponent.js\n");

/***/ })

});