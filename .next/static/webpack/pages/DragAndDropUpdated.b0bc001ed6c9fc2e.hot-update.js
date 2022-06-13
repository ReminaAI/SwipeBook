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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdatedComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/DragStyles/drag.module.css */ \"./styles/DragStyles/drag.module.css\");\n/* harmony import */ var _styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nfunction UpdatedComponent(param) {\n    var clicked = param.clicked, setClicked = param.setClicked, setComponents = param.setComponents, component1 = param.component, components = param.components, STATIC = param.STATIC;\n    var calculateX = function calculateX(event, component, estatic) {\n        if (event.pageX + component.width / 2 >= event.view.innerWidth) {\n            return event.view.innerWidth - component.width;\n        } else if (event.pageX - component.width / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                //left side of static elements\n                // if ((component.x + component.width / 2 >= element.x) && (component.x + 10 <= element.x + element.width) && (component.y + component.height / 2 >= element.y + 10) && (component.y - component.height / 2 <= element.y + element.height - 5)) {\n                //     console.log(\"LEFT\")\n                //     return element.x - component.width\n                // }\n                // else\n                //     //right side of static elements\n                //     if ((component.x - component.width / 2 <= element.x + element.width) && (component.x + component.width / 2 >= element.x + 10) && (component.y + component.height / 2 >= element.y + 10) && (component.y - component.height / 2 <= element.y + element.height - 5)) {\n                //         console.log(\"RIGHT\")\n                //         return element.x + element.width\n                //     }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageX - component.width / 2;\n    };\n    var calculateY = function calculateY(event, component, estatic) {\n        if (event.pageY + component.height / 2 >= event.view.innerHeight) {\n            return event.view.innerHeight - component.height;\n        } else if (event.pageY - component.height / 2 <= 0) {\n            return 0;\n        } else {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = estatic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var element = _step.value;\n                    //Top side of static Components\n                    if (component.y + component.height / 2 >= element.y && component.y + 10 <= element.y + element.height && component.x + component.width / 2 >= element.x + 10 && component.x - component.width / 2 <= element.x + element.width - 10) {\n                        console.log(\"TOP\");\n                        return element.y - component.height;\n                    }\n                // else\n                //     //Bottom side of static components\n                //     if ((component.y - component.height / 2 <= element.y + element.height) && (component.y - 10 >= element.y) && (component.x + component.width / 2 >= element.x + 10) && (component.x - component.width / 2 <= element.x + element.width - 10)) {\n                //         console.log(\"BOTTOM\")\n                //         return element.y + element.height\n                //     }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n        return event.pageY - component.height / 2;\n    };\n    var calculatePosition = function calculatePosition(event) {\n        if (clicked) {\n            setComponents(components.reduce(function(acc, e) {\n                e.id !== component1.id ? acc.push(e) : acc.push(_objectSpread({}, e, {\n                    x: calculateX(event, component1, STATIC),\n                    y: calculateY(event, component1, STATIC)\n                }));\n                return acc;\n            }, []));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            top: component1.y,\n            left: component1.x,\n            height: component1.height,\n            width: component1.width\n        },\n        className: (_styles_DragStyles_drag_module_css__WEBPACK_IMPORTED_MODULE_2___default().component),\n        onMouseMove: function(event) {\n            return calculatePosition(event);\n        },\n        onMouseDown: function(e) {\n            e.stopPropagation();\n            if (e.pageX >= component1.x && e.pageX <= component1.x + component1.width && e.pageY >= component1.y && e.pageY <= component1.y + component1.height) {\n                setClicked(true);\n            }\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\affei\\\\Desktop\\\\swipe_book_2022\\\\Components\\\\DragAndDropComponents\\\\UpdatedComponent.js\",\n        lineNumber: 70,\n        columnNumber: 13\n    }, this);\n}; /*\r\n\r\n// X CHECKS\r\n\r\n    // if (((event.pageX + component.width / 2 >= element.x) && (event.pageX + component.width / 2 <= element.x + element.width)) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //     return element.x - component.width\r\n    // }\r\n    // else\r\n    //     if ((event.pageX - component.width / 2 <= element.x + element.width) && (event.pageX + component.width / 2 >= element.x + 10) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {\r\n    //         return element.x + element.width\r\n    //     }\r\n\r\n\r\n// Y CHECKS                \r\n    // if (((event.pageY + component.height / 2 >= element.y) && (event.pageY + component.height / 2 <= element.y + element.height)) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y - component.height\r\n    // }\r\n    // else \r\n    // if ((event.pageY - component.height / 2 <= element.y + element.height) && (event.pageY + component.height / 2 >= element.y) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {\r\n    //     return element.y + element.height\r\n    // }\r\n*/ \n_c = UpdatedComponent;\nvar _c;\n$RefreshReg$(_c, \"UpdatedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0RyYWdBbmREcm9wQ29tcG9uZW50cy9VcGRhdGVkQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDM0I7QUFFbEIsU0FBU0UsZ0JBQWdCLENBQUMsS0FBcUUsRUFBRTtRQUFyRUMsT0FBTyxHQUFULEtBQXFFLENBQW5FQSxPQUFPLEVBQUVDLFVBQVUsR0FBckIsS0FBcUUsQ0FBMURBLFVBQVUsRUFBRUMsYUFBYSxHQUFwQyxLQUFxRSxDQUE5Q0EsYUFBYSxFQUFFQyxVQUFTLEdBQS9DLEtBQXFFLENBQS9CQSxTQUFTLEVBQUVDLFVBQVUsR0FBM0QsS0FBcUUsQ0FBcEJBLFVBQVUsRUFBRUMsTUFBTSxHQUFuRSxLQUFxRSxDQUFSQSxNQUFNO1FBQy9GQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFSixTQUFTLEVBQUVLLE9BQU8sRUFBRTtRQUMzQyxJQUFJRCxLQUFLLENBQUNFLEtBQUssR0FBR04sU0FBUyxDQUFDTyxLQUFLLEdBQUcsQ0FBQyxJQUFJSCxLQUFLLENBQUNJLElBQUksQ0FBQ0MsVUFBVSxFQUFFO1lBQzVELE9BQU9MLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxVQUFVLEdBQUdULFNBQVMsQ0FBQ08sS0FBSztTQUNqRCxNQUFNLElBQUlILEtBQUssQ0FBQ0UsS0FBSyxHQUFHTixTQUFTLENBQUNPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQztTQUNYLE1BQU07Z0JBQ0UseUJBQWEsU0FBYixpQkFBYSxVQUFiLGNBQWE7O2dCQUFsQixRQUFLLFNBQWEsR0FBSUYsT0FBTyxxQkFBeEIsS0FBYSxJQUFiLHlCQUFhLElBQWIsS0FBYSxHQUFiLFNBQWEsZ0JBQWIseUJBQWEsUUFBYTtvQkFBMUIsSUFBTUssT0FBTyxHQUFiLEtBQWE7Z0JBQ2QsOEJBQThCO2dCQUM5QixpUEFBaVA7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b0JBQ3ZDYSxDQUFDLEVBQUVKLFVBQVUsQ0FBQ1AsS0FBSyxFQUFFSixVQUFTLEVBQUVFLE1BQU0sQ0FBQztrQkFDMUMsQ0FBQztnQkFDTixPQUFPbUIsR0FBRzthQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDVjtLQUNKO0lBSUQscUJBQVEsOERBQUNJLEtBQUc7UUFDUkMsS0FBSyxFQUFFO1lBQUVDLEdBQUcsRUFBRTNCLFVBQVMsQ0FBQ2UsQ0FBQztZQUFFYSxJQUFJLEVBQUU1QixVQUFTLENBQUNnQixDQUFDO1lBQUVILE1BQU0sRUFBRWIsVUFBUyxDQUFDYSxNQUFNO1lBQUVOLEtBQUssRUFBRVAsVUFBUyxDQUFDTyxLQUFLO1NBQUU7UUFDaEdzQixTQUFTLEVBQUVuQyxxRkFBZ0I7UUFDM0JvQyxXQUFXLEVBQUUsU0FBQzFCLEtBQUs7bUJBQUtlLGlCQUFpQixDQUFDZixLQUFLLENBQUM7U0FBQTtRQUNoRDJCLFdBQVcsRUFBRSxTQUFDVCxDQUFDLEVBQUs7WUFDaEJBLENBQUMsQ0FBQ1UsZUFBZSxFQUFFO1lBQ25CLElBQUlWLENBQUMsQ0FBQ2hCLEtBQUssSUFBSU4sVUFBUyxDQUFDZ0IsQ0FBQyxJQUFJTSxDQUFDLENBQUNoQixLQUFLLElBQUtOLFVBQVMsQ0FBQ2dCLENBQUMsR0FBR2hCLFVBQVMsQ0FBQ08sS0FBSyxJQUNoRWUsQ0FBQyxDQUFDVixLQUFLLElBQUlaLFVBQVMsQ0FBQ2UsQ0FBQyxJQUFJTyxDQUFDLENBQUNWLEtBQUssSUFBS1osVUFBUyxDQUFDZSxDQUFDLEdBQUdmLFVBQVMsQ0FBQ2EsTUFBTSxFQUFHO2dCQUMxRWYsVUFBVSxDQUFDLElBQUksQ0FBQzthQUNuQjtTQUNKOzs7OztZQUdDLENBQUM7Q0FDVixFQUVEO0FBbEZ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9EcmFnQW5kRHJvcENvbXBvbmVudHMvVXBkYXRlZENvbXBvbmVudC5qcz9mMzE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9EcmFnU3R5bGVzL2RyYWcubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVkQ29tcG9uZW50KHsgY2xpY2tlZCwgc2V0Q2xpY2tlZCwgc2V0Q29tcG9uZW50cywgY29tcG9uZW50LCBjb21wb25lbnRzLCBTVEFUSUMgfSkge1xyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlWChldmVudCwgY29tcG9uZW50LCBlc3RhdGljKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBldmVudC52aWV3LmlubmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnZpZXcuaW5uZXJXaWR0aCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZXN0YXRpYykge1xyXG4gICAgICAgICAgICAgICAgLy9sZWZ0IHNpZGUgb2Ygc3RhdGljIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoKGNvbXBvbmVudC54ICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LngpICYmIChjb21wb25lbnQueCArIDEwIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGgpICYmIChjb21wb25lbnQueSArIGNvbXBvbmVudC5oZWlnaHQgLyAyID49IGVsZW1lbnQueSArIDEwKSAmJiAoY29tcG9uZW50LnkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCAtIDUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJMRUZUXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQueCAtIGNvbXBvbmVudC53aWR0aFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vcmlnaHQgc2lkZSBvZiBzdGF0aWMgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoKGNvbXBvbmVudC54IC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoKSAmJiAoY29tcG9uZW50LnggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEwKSAmJiAoY29tcG9uZW50LnkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkgKyAxMCkgJiYgKGNvbXBvbmVudC55IC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQgLSA1KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlJJR0hUXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVZKGV2ZW50LCBjb21wb25lbnQsIGVzdGF0aWMpIHtcclxuICAgICAgICBpZiAoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBldmVudC52aWV3LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC52aWV3LmlubmVySGVpZ2h0IC0gY29tcG9uZW50LmhlaWdodFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVzdGF0aWMpIHtcclxuICAgICAgICAgICAgICAgIC8vVG9wIHNpZGUgb2Ygc3RhdGljIENvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgIGlmICgoY29tcG9uZW50LnkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkpICYmIChjb21wb25lbnQueSArIDEwIDw9IGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0KSAmJiAoY29tcG9uZW50LnggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEwKSAmJiAoY29tcG9uZW50LnggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLSAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPUFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnkgLSBjb21wb25lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy9Cb3R0b20gc2lkZSBvZiBzdGF0aWMgY29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICgoY29tcG9uZW50LnkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMiA8PSBlbGVtZW50LnkgKyBlbGVtZW50LmhlaWdodCkgJiYgKGNvbXBvbmVudC55IC0gMTAgPj0gZWxlbWVudC55KSAmJiAoY29tcG9uZW50LnggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEwKSAmJiAoY29tcG9uZW50LnggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLSAxMCkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJCT1RUT01cIilcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXZlbnQucGFnZVkgLSBjb21wb25lbnQuaGVpZ2h0IC8gMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQb3NpdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHNldENvbXBvbmVudHMoY29tcG9uZW50cy5yZWR1Y2UoKGFjYywgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5pZCAhPT0gY29tcG9uZW50LmlkID9cclxuICAgICAgICAgICAgICAgICAgICBhY2MucHVzaChlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjYWxjdWxhdGVYKGV2ZW50LCBjb21wb25lbnQsIFNUQVRJQyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNhbGN1bGF0ZVkoZXZlbnQsIGNvbXBvbmVudCwgU1RBVElDKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjXHJcbiAgICAgICAgICAgIH0sIFtdKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKDxkaXZcclxuICAgICAgICBzdHlsZT17eyB0b3A6IGNvbXBvbmVudC55LCBsZWZ0OiBjb21wb25lbnQueCwgaGVpZ2h0OiBjb21wb25lbnQuaGVpZ2h0LCB3aWR0aDogY29tcG9uZW50LndpZHRoIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29tcG9uZW50fVxyXG4gICAgICAgIG9uTW91c2VNb3ZlPXsoZXZlbnQpID0+IGNhbGN1bGF0ZVBvc2l0aW9uKGV2ZW50KX1cclxuICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBpZiAoZS5wYWdlWCA+PSBjb21wb25lbnQueCAmJiBlLnBhZ2VYIDw9IChjb21wb25lbnQueCArIGNvbXBvbmVudC53aWR0aClcclxuICAgICAgICAgICAgICAgICYmIGUucGFnZVkgPj0gY29tcG9uZW50LnkgJiYgZS5wYWdlWSA8PSAoY29tcG9uZW50LnkgKyBjb21wb25lbnQuaGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2xpY2tlZCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICA+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbi8qXHJcblxyXG4vLyBYIENIRUNLU1xyXG5cclxuICAgIC8vIGlmICgoKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LngpICYmIChldmVudC5wYWdlWCArIGNvbXBvbmVudC53aWR0aCAvIDIgPD0gZWxlbWVudC54ICsgZWxlbWVudC53aWR0aCkpICYmICgoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkgKyAxMCkgJiYgKGV2ZW50LnBhZ2VZIC0gY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQgLSBlbGVtZW50LmhlaWdodCAvIDIpKSkge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50LnggLSBjb21wb25lbnQud2lkdGhcclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2VcclxuICAgIC8vICAgICBpZiAoKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoKSAmJiAoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIDEwKSAmJiAoKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPj0gZWxlbWVudC55ICsgMTApICYmIChldmVudC5wYWdlWSAtIGNvbXBvbmVudC5oZWlnaHQgLyAyIDw9IGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0IC0gZWxlbWVudC5oZWlnaHQgLyAyKSkpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGhcclxuICAgIC8vICAgICB9XHJcblxyXG5cclxuLy8gWSBDSEVDS1MgICAgICAgICAgICAgICAgXHJcbiAgICAvLyBpZiAoKChldmVudC5wYWdlWSArIGNvbXBvbmVudC5oZWlnaHQgLyAyID49IGVsZW1lbnQueSkgJiYgKGV2ZW50LnBhZ2VZICsgY29tcG9uZW50LmhlaWdodCAvIDIgPD0gZWxlbWVudC55ICsgZWxlbWVudC5oZWlnaHQpKSAmJiAoKGV2ZW50LnBhZ2VYICsgY29tcG9uZW50LndpZHRoIC8gMiA+PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoIC8gMikgJiYgKGV2ZW50LnBhZ2VYIC0gY29tcG9uZW50LndpZHRoIC8gMiA8PSBlbGVtZW50LnggKyBlbGVtZW50LndpZHRoIC0gZWxlbWVudC53aWR0aCAvIDIpKSkge1xyXG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50LnkgLSBjb21wb25lbnQuaGVpZ2h0XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIFxyXG4gICAgLy8gaWYgKChldmVudC5wYWdlWSAtIGNvbXBvbmVudC5oZWlnaHQgLyAyIDw9IGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0KSAmJiAoZXZlbnQucGFnZVkgKyBjb21wb25lbnQuaGVpZ2h0IC8gMiA+PSBlbGVtZW50LnkpICYmICgoZXZlbnQucGFnZVggKyBjb21wb25lbnQud2lkdGggLyAyID49IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLyAyKSAmJiAoZXZlbnQucGFnZVggLSBjb21wb25lbnQud2lkdGggLyAyIDw9IGVsZW1lbnQueCArIGVsZW1lbnQud2lkdGggLSBlbGVtZW50LndpZHRoIC8gMikpKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQueSArIGVsZW1lbnQuaGVpZ2h0XHJcbiAgICAvLyB9XHJcbiovIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiVXBkYXRlZENvbXBvbmVudCIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwic2V0Q29tcG9uZW50cyIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJTVEFUSUMiLCJjYWxjdWxhdGVYIiwiZXZlbnQiLCJlc3RhdGljIiwicGFnZVgiLCJ3aWR0aCIsInZpZXciLCJpbm5lcldpZHRoIiwiZWxlbWVudCIsImNhbGN1bGF0ZVkiLCJwYWdlWSIsImhlaWdodCIsImlubmVySGVpZ2h0IiwieSIsIngiLCJjb25zb2xlIiwibG9nIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJyZWR1Y2UiLCJhY2MiLCJlIiwiaWQiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiY2xhc3NOYW1lIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/DragAndDropComponents/UpdatedComponent.js\n");

/***/ })

});