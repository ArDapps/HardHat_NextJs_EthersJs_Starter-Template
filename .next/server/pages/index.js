/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_artifacts_contracts_Token_sol_Token_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../public/artifacts/contracts/Token.sol/Token.json */ \"./public/artifacts/contracts/Token.sol/Token.json\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Home() {\n    // Staic Variables\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const contractAddress = \"0xF050F4acB88a375F41D49b8Bd4cEb692D01dab83\";\n    //Get the Toekn Name \n    const getTokenName = async ()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            let contract;\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n            console.log(window.ethereum);\n            const chainId = await provider.getNetwork();\n            console.log(chainId.chainId);\n            contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(contractAddress, _public_artifacts_contracts_Token_sol_Token_json__WEBPACK_IMPORTED_MODULE_4__.abi, provider);\n            console.log(contract.functions);\n            try {\n                const name = await contract.tokenName();\n                const fullAlert = name + \"We Are Work At Chain Id \" + chainId.chainId;\n                setMessage(fullAlert);\n            } catch (error) {\n                console.log(\"error at get name\", error);\n            }\n        } else {\n            console.log(\"Please install metamask wallet\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"HardHat and Ethers Starter Theme \"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by Bahaa Ehab Taha\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-danger\",\n                    onClick: getTokenName,\n                    children: \"Get Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5\"\n            }, void 0, false, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNHO0FBQ0U7QUFDRDtBQUNnRDtBQUVsQztBQUUvQixTQUFTTSxJQUFJLEdBQUc7SUFDN0Isa0JBQWtCO0lBRWxCLE1BQUssS0FBQ0MsT0FBTyxNQUFDQyxVQUFVLE1BQUdMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLE1BQU1NLGVBQWUsR0FBRyw0Q0FBNEM7SUFFdEUscUJBQXFCO0lBQ25CLE1BQU1DLFlBQVksR0FBRyxVQUFVO1FBQzdCLElBQUcsT0FBT0MsTUFBTSxDQUFDQyxRQUFRLEtBQUksV0FBVyxFQUFDO1lBQ3ZDLElBQUlDLFFBQVE7WUFDVixNQUFNQyxRQUFRLEdBQUcsSUFBSWIsaUVBQTZCLENBQUNVLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQ25FSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDOUIsTUFBTU8sT0FBTyxHQUFJLE1BQU1MLFFBQVEsQ0FBQ00sVUFBVSxFQUFFO1lBQzVDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQSxPQUFPLENBQUM7WUFFekJOLFFBQVEsR0FBRyxJQUFJWixtREFBZSxDQUFDUSxlQUFlLEVBQUNMLGlGQUFnQixFQUFDVSxRQUFRLENBQUM7WUFFNUVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFHTCxRQUFRLENBQUNVLFNBQVMsQ0FBQztZQUUvQixJQUFJO2dCQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNWCxRQUFRLENBQUNZLFNBQVMsRUFBRTtnQkFFdkMsTUFBTUMsU0FBUyxHQUFJRixJQUFJLEdBQUMsMEJBQTBCLEdBQUVMLE9BQU8sQ0FBQ0EsT0FBTztnQkFDbkVYLFVBQVUsQ0FBQ2tCLFNBQVMsQ0FBQzthQUNoQixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDcEJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFDUyxLQUFLLENBQUM7YUFDekM7U0FJSixNQUFJO1lBQ0RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO1NBRWhEO0tBRUo7SUFFQyxxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUV4QiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0wsa0RBQUk7O2tDQUNILDhEQUFDK0IsT0FBSztrQ0FBQyxtQ0FBaUM7Ozs7OzRCQUFRO2tDQUNoRCw4REFBQ0MsTUFBSTt3QkFBQ1IsSUFBSSxFQUFDLGFBQWE7d0JBQUNTLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzRCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ1IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7MEJBQ2xCLDRFQUFDUSxRQUFNO29CQUFDUixTQUFTLEVBQUMsZ0JBQWdCO29CQUFDUyxPQUFPLEVBQUU1QixZQUFZOzhCQUFFLGFBQVc7Ozs7O3dCQUFTOzs7OztvQkFDMUU7MEJBQ04sOERBQUM2QixJQUFFOzBCQUFFaEMsT0FBTzs7Ozs7b0JBQU07MEJBRWxCLDhEQUFDcUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7Ozs7O29CQUNkOzs7Ozs7WUFFRixDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhYmlJbnRlcmZhY2UgIGZyb20gJy4vLi4vcHVibGljL2FydGlmYWN0cy9jb250cmFjdHMvVG9rZW4uc29sL1Rva2VuLmpzb24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gU3RhaWMgVmFyaWFibGVzXG5cbiAgY29uc3RbbWVzc2FnZSxzZXRNZXNzYWdlXT0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweEYwNTBGNGFjQjg4YTM3NUY0MUQ0OWI4QmQ0Y0ViNjkyRDAxZGFiODNcIlxuXG4vL0dldCB0aGUgVG9la24gTmFtZSBcbiAgY29uc3QgZ2V0VG9rZW5OYW1lID0gYXN5bmMgKCk9PntcbiAgICBpZih0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PVwidW5kZWZpbmVkXCIpe1xuICAgICAgbGV0IGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5ldGhlcmV1bSlcbiAgICAgIGNvbnN0IGNoYWluSWQgPSAgYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICBjb25zb2xlLmxvZyhjaGFpbklkLmNoYWluSWQpXG4gICAgXG4gICAgICAgICBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLGFiaUludGVyZmFjZS5hYmkscHJvdmlkZXIpXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCAgY29udHJhY3QuZnVuY3Rpb25zKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgY29udHJhY3QudG9rZW5OYW1lKCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZnVsbEFsZXJ0ID0gIG5hbWUrXCJXZSBBcmUgV29yayBBdCBDaGFpbiBJZCBcIiArY2hhaW5JZC5jaGFpbklkXG4gICAgICAgICAgICBzZXRNZXNzYWdlKGZ1bGxBbGVydClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBhdCBnZXQgbmFtZVwiLGVycm9yKVxuICAgICAgICB9XG5cblxuXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2sgd2FsbGV0XCIpXG5cbiAgICB9XG5cbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFyZEhhdCBhbmQgRXRoZXJzIFN0YXJ0ZXIgVGhlbWUgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBCYWhhYSBFaGFiIFRhaGFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01Jz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJyBvbkNsaWNrPXtnZXRUb2tlbk5hbWV9PkdldCBNZXNzYWdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01Jz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhYmlJbnRlcmZhY2UiLCJzdHlsZXMiLCJIb21lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjb250cmFjdEFkZHJlc3MiLCJnZXRUb2tlbk5hbWUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwiY2hhaW5JZCIsImdldE5ldHdvcmsiLCJDb250cmFjdCIsImFiaSIsImZ1bmN0aW9ucyIsIm5hbWUiLCJ0b2tlbk5hbWUiLCJmdWxsQWxlcnQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./public/artifacts/contracts/Token.sol/Token.json":
/*!*********************************************************!*\
  !*** ./public/artifacts/contracts/Token.sol/Token.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Token","sourceName":"contracts/Token.sol","abi":[{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526040518060600160405280603181526020016103866031913960009080519060200190610032929190610045565b5034801561003f57600080fd5b50610149565b82805461005190610117565b90600052602060002090601f01602090048101928261007357600085556100ba565b82601f1061008c57805160ff19168380011785556100ba565b828001600101855582156100ba579182015b828111156100b957825182559160200191906001019061009e565b5b5090506100c791906100cb565b5090565b5b808211156100e45760008160009055506001016100cc565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061012f57607f821691505b60208210811415610143576101426100e8565b5b50919050565b61022e806101586000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636c02a93114610030575b600080fd5b61003861004e565b6040516100459190610175565b60405180910390f35b6000805461005b906101c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610087906101c6565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101165780820151818401526020810190506100fb565b83811115610125576000848401525b50505050565b6000601f19601f8301169050919050565b6000610147826100dc565b61015181856100e7565b93506101618185602086016100f8565b61016a8161012b565b840191505092915050565b6000602082019050818103600083015261018f818461013c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806101de57607f821691505b602082108114156101f2576101f1610197565b5b5091905056fea2646970667358221220acb40d0953465ca266764a961d6a905c89c6e865218f02d108dbd7db088f9bc864736f6c6343000809003341724461707073205374616e646572205468656d6520486172646861742d6574686572736a73202d206e657874206a7320","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80636c02a93114610030575b600080fd5b61003861004e565b6040516100459190610175565b60405180910390f35b6000805461005b906101c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610087906101c6565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101165780820151818401526020810190506100fb565b83811115610125576000848401525b50505050565b6000601f19601f8301169050919050565b6000610147826100dc565b61015181856100e7565b93506101618185602086016100f8565b61016a8161012b565b840191505092915050565b6000602082019050818103600083015261018f818461013c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806101de57607f821691505b602082108114156101f2576101f1610197565b5b5091905056fea2646970667358221220acb40d0953465ca266764a961d6a905c89c6e865218f02d108dbd7db088f9bc864736f6c63430008090033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();