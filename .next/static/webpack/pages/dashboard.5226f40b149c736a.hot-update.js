"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/molecles/dashboard/components/activity.tsx":
/*!***************************************************************!*\
  !*** ./components/molecles/dashboard/components/activity.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var components_atoms_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/atoms/flex */ \"./components/atoms/flex.tsx\");\n/* harmony import */ var components_atoms_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms/link */ \"./components/atoms/link.tsx\");\n/* harmony import */ var components_atoms_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms/text */ \"./components/atoms/text.tsx\");\n// import Flex from \"components/atoms/flex\";\n// import Link from \"components/atoms/link\";\n// import Text from \"components/atoms/text\";\n// import React from \"react\";\n// import { FaEye, FaEyeSlash, FaStar } from \"react-icons/fa\";\n// import { MdOutlineArrowRightAlt } from \"react-icons/md\";\n// import styled from \"styled-components\";\n// const ActivityCard = styled.div`\n//   background: #fff;\n//   border-radius: 16px;\n//   padding: 1.5rem;\n//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n//   display: flex;\n//   flex-direction: column;\n//   gap: 1rem;\n// `;\n// const ActivityStats = styled.div`\n//   display: flex;\n//   align-items: center;\n//   justify-content: space-between;\n//   gap: 2rem;\n// `;\n// const EarningsCard = styled.div`\n//   display: flex;\n//   flex-direction: column;\n//   justify-content: space-between;\n//   padding: 20px;\n//   border-radius: 12px;\n//   background: linear-gradient(135deg, #19013b, #00c4f4);\n//   color: white;\n//   width: 300px; /* Adjust as needed */\n//   height: 150px;\n//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n//   border-radius: 12px;\n//   transition: transform 0.2s;\n//   &:hover {\n//     transform: scale(1.02);\n//   background: linear-gradient(135deg, #00c4f4, #19013b);\n//   }\n//   @media (max-width: 768px) {\n//     width: 100%;\n//   }\n// `;\n// const TitleWrapper = styled.div`\n//   display: flex;\n//   align-items: center;\n//   gap: 8px;\n//   h3 {\n//     font-size: 1rem;\n//     font-weight: 600;\n//     margin: 0;\n//   }\n// `;\n// const Box = styled.div`\n//   background: white;\n//   width: 32px;\n//   height: 32px;\n//   border-radius: 8px;\n//   display: flex;\n//   align-items: center;\n//   justify-content: center;\n//   svg {\n//     color: #19013b; \n//     font-size: 1.5rem;\n//   }\n// `;\n// const Activity = () => {\n//   return (\n//     <ActivityCard>\n//       <Flex gap=\"1rem\" justify=\"center\" align=\"center\" >\n//         <Text type=\"h4\" text=\"Your Earnings\" color=\"#19013b\" styles={{textWrap: \"nowrap\"}} />\n//         <Flex justify=\"flex-start\">\n//             <Link href=\"\">\n//         <FaEyeSlash />\n//             </Link>\n//             <Link href=\"\">\n//         <FaEye />\n//             </Link>\n//         </Flex>\n//       </Flex>\n//       <ActivityStats>\n//       <EarningsCard>\n//       <Flex justify=\"flex-start\" gap=\"1rem\" align=\"center\">\n//         <Box>\n//           <FaStar />\n//         </Box>\n//         <TitleWrapper>\n//           <Text text=\"Sales Commission\" type=\"h5\" margin={0} weight={600} />\n//         </TitleWrapper>\n//       </Flex>\n//       <Flex align=\"center\" justify=\"space-between\" margin=\"15px 0 0 0\">\n//         <Text type=\"h4\" text=\"1,193.83\" color=\"#fff\" />\n//         <MdOutlineArrowRightAlt size={30} />\n//       </Flex>\n//     </EarningsCard>\n//     <EarningsCard>\n//       <Flex justify=\"flex-start\" gap=\"1rem\" align=\"center\">\n//         <Box>\n//           <FaStar />\n//         </Box>\n//         <TitleWrapper>\n//           <Text text=\"Wealthverse Wallet\" type=\"h5\" margin={0} weight={600} />\n//         </TitleWrapper>\n//       </Flex>\n//       <Flex align=\"center\" justify=\"space-between\" margin=\"15px 0 0 0\">\n//         <Text type=\"h4\" text=\"1,193.83\" color=\"#fff\" />\n//         <MdOutlineArrowRightAlt size={30} />\n//       </Flex>\n//     </EarningsCard>\n//     <EarningsCard>\n//       <Flex justify=\"flex-start\" gap=\"1rem\" align=\"center\">\n//         <Box>\n//           <FaStar />\n//         </Box>\n//         <TitleWrapper>\n//           <Text text=\"Game Earnings\" type=\"h5\" margin={0} weight={600} />\n//         </TitleWrapper>\n//       </Flex>\n//       <Flex align=\"center\" justify=\"space-between\" margin=\"15px 0 0 0\">\n//         <Text type=\"h4\" text=\"1,193.83\" color=\"#fff\" />\n//         <MdOutlineArrowRightAlt size={30} />\n//       </Flex>\n//     </EarningsCard>\n//       </ActivityStats>\n//     </ActivityCard>\n//   );\n// };\n// export default Activity;\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #fff;\\n  border-radius: 16px;\\n  padding: 1.5rem;\\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 2rem;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 20px;\\n  border-radius: 12px;\\n  background: linear-gradient(135deg, #19013b, #00c4f4);\\n  color: white;\\n  width: 300px;\\n  height: 150px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n  transition: transform 0.2s;\\n\\n  &:hover {\\n    transform: scale(1.02);\\n    background: linear-gradient(135deg, #00c4f4, #19013b);\\n  }\\n\\n  @media (max-width: 768px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n\\n  h3 {\\n    font-size: 1rem;\\n    font-weight: 600;\\n    margin: 0;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: white;\\n  width: 32px;\\n  height: 32px;\\n  border-radius: 8px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  svg {\\n    color: #19013b;\\n    font-size: 1.5rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Styled Components\nconst ActivityCard = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = ActivityCard;\nconst ActivityStats = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = ActivityStats;\nconst EarningsCard = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = EarningsCard;\nconst TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = TitleWrapper;\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = Box;\nconst earningsData = [\n    {\n        id: 1,\n        title: \"Sales Commission\",\n        amount: \"1,193.83\"\n    },\n    {\n        id: 2,\n        title: \"Wealthverse Wallet\",\n        amount: \"1,193.83\"\n    },\n    {\n        id: 3,\n        title: \"Game Earnings\",\n        amount: \"1,193.83\"\n    }\n];\nconst Activity = ()=>{\n    _s();\n    // State for visibility toggle\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    // Toggle visibility function\n    const toggleVisibility = ()=>{\n        setIsVisible((prev)=>!prev);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ActivityCard, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                gap: \"1rem\",\n                justify: \"center\",\n                align: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        type: \"h4\",\n                        text: \"Your Earnings\",\n                        color: \"#19013b\",\n                        styles: {\n                            textWrap: \"nowrap\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                        lineNumber: 258,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        justify: \"flex-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"#\",\n                            onClick: toggleVisibility,\n                            children: isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEye, {}, void 0, false, {\n                                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                lineNumber: 262,\n                                columnNumber: 26\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEyeSlash, {}, void 0, false, {\n                                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                lineNumber: 262,\n                                columnNumber: 38\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                            lineNumber: 261,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                        lineNumber: 259,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                lineNumber: 257,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ActivityStats, {\n                children: earningsData.map((earning)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EarningsCard, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                justify: \"flex-start\",\n                                gap: \"1rem\",\n                                align: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaStar, {}, void 0, false, {\n                                            fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                            lineNumber: 274,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                        lineNumber: 273,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TitleWrapper, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            text: earning.title,\n                                            type: \"h5\",\n                                            margin: 0,\n                                            weight: 600\n                                        }, void 0, false, {\n                                            fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                            lineNumber: 277,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                        lineNumber: 276,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                lineNumber: 272,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_flex__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                align: \"center\",\n                                justify: \"space-between\",\n                                margin: \"15px 0 0 0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_atoms_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        type: \"h4\",\n                                        text: isVisible ? earning.amount : \"****\",\n                                        color: \"#fff\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                        lineNumber: 282,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineArrowRightAlt, {\n                                        size: 30\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                        lineNumber: 287,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                                lineNumber: 281,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, earning.id, true, {\n                        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                        lineNumber: 271,\n                        columnNumber: 5\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n                lineNumber: 268,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Desktop/wealthverse/components/molecles/dashboard/components/activity.tsx\",\n        lineNumber: 255,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Activity, \"C45KFF5iQHXNkju7O/pllv86QL4=\");\n_c5 = Activity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activity);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ActivityCard\");\n$RefreshReg$(_c1, \"ActivityStats\");\n$RefreshReg$(_c2, \"EarningsCard\");\n$RefreshReg$(_c3, \"TitleWrapper\");\n$RefreshReg$(_c4, \"Box\");\n$RefreshReg$(_c5, \"Activity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjbGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2FjdGl2aXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyw2QkFBNkI7QUFDN0IsOERBQThEO0FBQzlELDJEQUEyRDtBQUMzRCwwQ0FBMEM7QUFFMUMsbUNBQW1DO0FBQ25DLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLCtDQUErQztBQUMvQyxtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLGVBQWU7QUFDZixLQUFLO0FBR0wsb0NBQW9DO0FBQ3BDLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDLGVBQWU7QUFDZixLQUFLO0FBRUwsbUNBQW1DO0FBQ25DLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsb0NBQW9DO0FBQ3BDLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsMkRBQTJEO0FBQzNELGtCQUFrQjtBQUNsQix5Q0FBeUM7QUFDekMsbUJBQW1CO0FBQ25CLDhDQUE4QztBQUM5Qyx5QkFBeUI7QUFDekIsZ0NBQWdDO0FBRWhDLGNBQWM7QUFDZCw4QkFBOEI7QUFDOUIsMkRBQTJEO0FBQzNELE1BQU07QUFFTixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0FBQ25CLE1BQU07QUFDTixLQUFLO0FBRUwsbUNBQW1DO0FBQ25DLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsY0FBYztBQUVkLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixNQUFNO0FBQ04sS0FBSztBQUVMLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFFN0IsVUFBVTtBQUNWLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFD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Z0NBQWFELEtBQUk7Z0NBQU9FLE9BQU07O2tEQUMxQyw4REFBQ1o7a0RBQ0MsNEVBQUNWLGtEQUFNQTs7Ozs7Ozs7OztrREFFVCw4REFBQ1M7a0RBQ0MsNEVBQUNMLDZEQUFJQTs0Q0FBQ29CLE1BQU1PLFFBQVFsQixLQUFLOzRDQUFFVSxNQUFLOzRDQUFLUyxRQUFROzRDQUFHQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJNUQsOERBQUMvQiw2REFBSUE7Z0NBQUNvQixPQUFNO2dDQUFTRCxTQUFRO2dDQUFnQlcsUUFBTzs7a0RBQ2xELDhEQUFDNUIsNkRBQUlBO3dDQUNIbUIsTUFBSzt3Q0FDTEMsTUFBTVIsWUFBWWUsUUFBUWpCLE1BQU0sR0FBRyxNQUFNO3dDQUN6Q1csT0FBTTs7Ozs7O2tEQUVSLDhEQUFDeEIsa0VBQXNCQTt3Q0FBQ2lDLE1BQU07Ozs7Ozs7Ozs7Ozs7dUJBaEJmSCxRQUFRbkIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQXVCakM7R0FqRE1HO01BQUFBO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9sZWNsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYWN0aXZpdHkudHN4P2QyMDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEZsZXggZnJvbSBcImNvbXBvbmVudHMvYXRvbXMvZmxleFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvYXRvbXMvbGlua1wiO1xuLy8gaW1wb3J0IFRleHQgZnJvbSBcImNvbXBvbmVudHMvYXRvbXMvdGV4dFwiO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgRmFFeWUsIEZhRXllU2xhc2gsIEZhU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuLy8gaW1wb3J0IHsgTWRPdXRsaW5lQXJyb3dSaWdodEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gY29uc3QgQWN0aXZpdHlDYXJkID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgYm9yZGVyLXJhZGl1czogMTZweDtcbi8vICAgcGFkZGluZzogMS41cmVtO1xuLy8gICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgZ2FwOiAxcmVtO1xuLy8gYDtcblxuXG4vLyBjb25zdCBBY3Rpdml0eVN0YXRzID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBnYXA6IDJyZW07XG4vLyBgO1xuXG4vLyBjb25zdCBFYXJuaW5nc0NhcmQgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxOTAxM2IsICMwMGM0ZjQpO1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIHdpZHRoOiAzMDBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuLy8gICBoZWlnaHQ6IDE1MHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcblxuLy8gICAmOmhvdmVyIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBjNGY0LCAjMTkwMTNiKTtcbi8vICAgfVxuXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICB9XG4vLyBgO1xuXG4vLyBjb25zdCBUaXRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBnYXA6IDhweDtcblxuLy8gICBoMyB7XG4vLyAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICB9XG4vLyBgO1xuXG4vLyBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgd2lkdGg6IDMycHg7XG4vLyAgIGhlaWdodDogMzJweDtcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICBzdmcge1xuLy8gICAgIGNvbG9yOiAjMTkwMTNiOyBcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vICAgfVxuLy8gYDtcblxuXG5cbi8vIGNvbnN0IEFjdGl2aXR5ID0gKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxBY3Rpdml0eUNhcmQ+XG4vLyAgICAgICA8RmxleCBnYXA9XCIxcmVtXCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgPlxuLy8gICAgICAgICA8VGV4dCB0eXBlPVwiaDRcIiB0ZXh0PVwiWW91ciBFYXJuaW5nc1wiIGNvbG9yPVwiIzE5MDEzYlwiIHN0eWxlcz17e3RleHRXcmFwOiBcIm5vd3JhcFwifX0gLz5cbi8vICAgICAgICAgPEZsZXgganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cbi8vICAgICAgICAgPEZhRXllU2xhc2ggLz5cbi8vICAgICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cbi8vICAgICAgICAgPEZhRXllIC8+XG4vLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvRmxleD5cbi8vICAgICAgIDwvRmxleD5cblxuLy8gICAgICAgPEFjdGl2aXR5U3RhdHM+XG4vLyAgICAgICA8RWFybmluZ3NDYXJkPlxuLy8gICAgICAgPEZsZXgganVzdGlmeT1cImZsZXgtc3RhcnRcIiBnYXA9XCIxcmVtXCIgYWxpZ249XCJjZW50ZXJcIj5cbi8vICAgICAgICAgPEJveD5cbi8vICAgICAgICAgICA8RmFTdGFyIC8+XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICA8VGl0bGVXcmFwcGVyPlxuLy8gICAgICAgICAgIDxUZXh0IHRleHQ9XCJTYWxlcyBDb21taXNzaW9uXCIgdHlwZT1cImg1XCIgbWFyZ2luPXswfSB3ZWlnaHQ9ezYwMH0gLz5cbi8vICAgICAgICAgPC9UaXRsZVdyYXBwZXI+XG4vLyAgICAgICA8L0ZsZXg+XG5cbi8vICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBtYXJnaW49XCIxNXB4IDAgMCAwXCI+XG4vLyAgICAgICAgIDxUZXh0IHR5cGU9XCJoNFwiIHRleHQ9XCIxLDE5My44M1wiIGNvbG9yPVwiI2ZmZlwiIC8+XG4vLyAgICAgICAgIDxNZE91dGxpbmVBcnJvd1JpZ2h0QWx0IHNpemU9ezMwfSAvPlxuLy8gICAgICAgPC9GbGV4PlxuLy8gICAgIDwvRWFybmluZ3NDYXJkPlxuXG4vLyAgICAgPEVhcm5pbmdzQ2FyZD5cbi8vICAgICAgIDxGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgZ2FwPVwiMXJlbVwiIGFsaWduPVwiY2VudGVyXCI+XG4vLyAgICAgICAgIDxCb3g+XG4vLyAgICAgICAgICAgPEZhU3RhciAvPlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICAgICAgPFRpdGxlV3JhcHBlcj5cbi8vICAgICAgICAgICA8VGV4dCB0ZXh0PVwiV2VhbHRodmVyc2UgV2FsbGV0XCIgdHlwZT1cImg1XCIgbWFyZ2luPXswfSB3ZWlnaHQ9ezYwMH0gLz5cbi8vICAgICAgICAgPC9UaXRsZVdyYXBwZXI+XG4vLyAgICAgICA8L0ZsZXg+XG5cbi8vICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBtYXJnaW49XCIxNXB4IDAgMCAwXCI+XG4vLyAgICAgICAgIDxUZXh0IHR5cGU9XCJoNFwiIHRleHQ9XCIxLDE5My44M1wiIGNvbG9yPVwiI2ZmZlwiIC8+XG4vLyAgICAgICAgIDxNZE91dGxpbmVBcnJvd1JpZ2h0QWx0IHNpemU9ezMwfSAvPlxuLy8gICAgICAgPC9GbGV4PlxuLy8gICAgIDwvRWFybmluZ3NDYXJkPlxuXG4vLyAgICAgPEVhcm5pbmdzQ2FyZD5cbi8vICAgICAgIDxGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgZ2FwPVwiMXJlbVwiIGFsaWduPVwiY2VudGVyXCI+XG4vLyAgICAgICAgIDxCb3g+XG4vLyAgICAgICAgICAgPEZhU3RhciAvPlxuLy8gICAgICAgICA8L0JveD5cbi8vICAgICAgICAgPFRpdGxlV3JhcHBlcj5cbi8vICAgICAgICAgICA8VGV4dCB0ZXh0PVwiR2FtZSBFYXJuaW5nc1wiIHR5cGU9XCJoNVwiIG1hcmdpbj17MH0gd2VpZ2h0PXs2MDB9IC8+XG4vLyAgICAgICAgIDwvVGl0bGVXcmFwcGVyPlxuLy8gICAgICAgPC9GbGV4PlxuXG4vLyAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgbWFyZ2luPVwiMTVweCAwIDAgMFwiPlxuLy8gICAgICAgICA8VGV4dCB0eXBlPVwiaDRcIiB0ZXh0PVwiMSwxOTMuODNcIiBjb2xvcj1cIiNmZmZcIiAvPlxuLy8gICAgICAgICA8TWRPdXRsaW5lQXJyb3dSaWdodEFsdCBzaXplPXszMH0gLz5cbi8vICAgICAgIDwvRmxleD5cbi8vICAgICA8L0Vhcm5pbmdzQ2FyZD5cbi8vICAgICAgIDwvQWN0aXZpdHlTdGF0cz5cblxuLy8gICAgIDwvQWN0aXZpdHlDYXJkPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZhRXllLCBGYUV5ZVNsYXNoLCBGYVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IE1kT3V0bGluZUFycm93UmlnaHRBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBGbGV4IGZyb20gXCJjb21wb25lbnRzL2F0b21zL2ZsZXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJjb21wb25lbnRzL2F0b21zL2xpbmtcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJjb21wb25lbnRzL2F0b21zL3RleHRcIjtcblxuLy8gU3R5bGVkIENvbXBvbmVudHNcbmNvbnN0IEFjdGl2aXR5Q2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbmA7XG5cbmNvbnN0IEFjdGl2aXR5U3RhdHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMnJlbTtcbmA7XG5cbmNvbnN0IEVhcm5pbmdzQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5MDEzYiwgIzAwYzRmNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGM0ZjQsICMxOTAxM2IpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHN2ZyB7XG4gICAgY29sb3I6ICMxOTAxM2I7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbmA7XG5cbmNvbnN0IGVhcm5pbmdzRGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIlNhbGVzIENvbW1pc3Npb25cIixcbiAgICAgIGFtb3VudDogXCIxLDE5My44M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJXZWFsdGh2ZXJzZSBXYWxsZXRcIixcbiAgICAgIGFtb3VudDogXCIxLDE5My44M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICB0aXRsZTogXCJHYW1lIEVhcm5pbmdzXCIsXG4gICAgICBhbW91bnQ6IFwiMSwxOTMuODNcIixcbiAgICB9LFxuICBdO1xuXG5jb25zdCBBY3Rpdml0eSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgZm9yIHZpc2liaWxpdHkgdG9nZ2xlXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBUb2dnbGUgdmlzaWJpbGl0eSBmdW5jdGlvblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIHNldElzVmlzaWJsZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFjdGl2aXR5Q2FyZD5cbiAgICAgIHsvKiBIZWFkZXIgU2VjdGlvbiAqL31cbiAgICAgIDxGbGV4IGdhcD1cIjFyZW1cIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRleHQgdHlwZT1cImg0XCIgdGV4dD1cIllvdXIgRWFybmluZ3NcIiBjb2xvcj1cIiMxOTAxM2JcIiBzdHlsZXM9e3sgdGV4dFdyYXA6IFwibm93cmFwXCIgfX0gLz5cbiAgICAgICAgPEZsZXgganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICB7LyogRXllIEljb24gZm9yIFRvZ2dsaW5nICovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgb25DbGljaz17dG9nZ2xlVmlzaWJpbGl0eX0+XG4gICAgICAgICAgICB7aXNWaXNpYmxlID8gPEZhRXllIC8+IDogPEZhRXllU2xhc2ggLz59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIHsvKiBFYXJuaW5ncyBTZWN0aW9uICovfVxuICAgICAgPEFjdGl2aXR5U3RhdHM+XG4gICAgICAgIFxuICAgICAgICB7ZWFybmluZ3NEYXRhLm1hcCgoZWFybmluZykgPT4gKFxuICAgIDxFYXJuaW5nc0NhcmQga2V5PXtlYXJuaW5nLmlkfT5cbiAgICAgIDxGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgZ2FwPVwiMXJlbVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRpdGxlV3JhcHBlcj5cbiAgICAgICAgICA8VGV4dCB0ZXh0PXtlYXJuaW5nLnRpdGxlfSB0eXBlPVwiaDVcIiBtYXJnaW49ezB9IHdlaWdodD17NjAwfSAvPlxuICAgICAgICA8L1RpdGxlV3JhcHBlcj5cbiAgICAgIDwvRmxleD5cblxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIG1hcmdpbj1cIjE1cHggMCAwIDBcIj5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0eXBlPVwiaDRcIlxuICAgICAgICAgIHRleHQ9e2lzVmlzaWJsZSA/IGVhcm5pbmcuYW1vdW50IDogXCIqKioqXCJ9IC8vIFNob3cgYmFsYW5jZSBvciAqKioqXG4gICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgICAgPE1kT3V0bGluZUFycm93UmlnaHRBbHQgc2l6ZT17MzB9IC8+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9FYXJuaW5nc0NhcmQ+XG4gICkpfVxuICAgICAgPC9BY3Rpdml0eVN0YXRzPlxuICAgIDwvQWN0aXZpdHlDYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkZhRXllIiwiRmFFeWVTbGFzaCIsIkZhU3RhciIsIk1kT3V0bGluZUFycm93UmlnaHRBbHQiLCJGbGV4IiwiTGluayIsIlRleHQiLCJBY3Rpdml0eUNhcmQiLCJkaXYiLCJBY3Rpdml0eVN0YXRzIiwiRWFybmluZ3NDYXJkIiwiVGl0bGVXcmFwcGVyIiwiQm94IiwiZWFybmluZ3NEYXRhIiwiaWQiLCJ0aXRsZSIsImFtb3VudCIsIkFjdGl2aXR5IiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsInByZXYiLCJnYXAiLCJqdXN0aWZ5IiwiYWxpZ24iLCJ0eXBlIiwidGV4dCIsImNvbG9yIiwic3R5bGVzIiwidGV4dFdyYXAiLCJocmVmIiwib25DbGljayIsIm1hcCIsImVhcm5pbmciLCJtYXJnaW4iLCJ3ZWlnaHQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecles/dashboard/components/activity.tsx\n"));

/***/ })

});