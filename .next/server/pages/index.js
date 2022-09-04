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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_artifacts_contracts_Token_sol_Token_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../public/artifacts/contracts/Token.sol/Token.json */ \"./public/artifacts/contracts/Token.sol/Token.json\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Home() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    //0xC10CD24f0C36B7583F997137BF5424145cC3fbB3\n    const getTokenName = async ()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            let contract;\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n            console.log(window.ethereum);\n            const chainId = await provider.getNetwork();\n            console.log(chainId.chainId);\n            contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(contractAddress, _public_artifacts_contracts_Token_sol_Token_json__WEBPACK_IMPORTED_MODULE_4__.abi, provider);\n            console.log(contract.functions);\n            try {\n                const name = await contract.tokenName();\n                const fullAlert = name + \"We Are Work At Chain Id \" + chainId.chainId;\n                setMessage(fullAlert);\n            } catch (error) {\n                console.log(\"error at get name\", error);\n            }\n        } else {\n            console.log(\"Please install metamask wallet\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"HardHat and Ethers Starter Theme \"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by Bahaa Ehab Taha\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-danger\",\n                    onClick: getTokenName,\n                    children: \"Get Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mrbebo/Documents/GitHub/HardHat_NextJs_EthersJs_Starter-Template/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNHO0FBQ0U7QUFDRDtBQUNnRDtBQUVsQztBQUUvQixTQUFTTSxJQUFJLEdBQUc7SUFDN0IsTUFBSyxLQUFDQyxPQUFPLE1BQUNDLFVBQVUsTUFBR0wsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdkMsTUFBTU0sZUFBZSxHQUFHLDRDQUE0QztJQUN0RSw0Q0FBNEM7SUFDMUMsTUFBTUMsWUFBWSxHQUFHLFVBQVU7UUFDN0IsSUFBRyxPQUFPQyxNQUFNLENBQUNDLFFBQVEsS0FBSSxXQUFXLEVBQUM7WUFDdkMsSUFBSUMsUUFBUTtZQUNWLE1BQU1DLFFBQVEsR0FBRyxJQUFJYixpRUFBNkIsQ0FBQ1UsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDbkVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUM5QixNQUFNTyxPQUFPLEdBQUksTUFBTUwsUUFBUSxDQUFDTSxVQUFVLEVBQUU7WUFDNUNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUNBLE9BQU8sQ0FBQztZQUV6Qk4sUUFBUSxHQUFHLElBQUlaLG1EQUFlLENBQUNRLGVBQWUsRUFBQ0wsaUZBQWdCLEVBQUNVLFFBQVEsQ0FBQztZQUU1RUcsT0FBTyxDQUFDQyxHQUFHLENBQUdMLFFBQVEsQ0FBQ1UsU0FBUyxDQUFDO1lBRS9CLElBQUk7Z0JBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1YLFFBQVEsQ0FBQ1ksU0FBUyxFQUFFO2dCQUV2QyxNQUFNQyxTQUFTLEdBQUlGLElBQUksR0FBQywwQkFBMEIsR0FBRUwsT0FBTyxDQUFDQSxPQUFPO2dCQUNuRVgsVUFBVSxDQUFDa0IsU0FBUyxDQUFDO2FBQ2hCLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNwQlYsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUNTLEtBQUssQ0FBQzthQUN6QztTQUlKLE1BQUk7WUFDRFYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7U0FFaEQ7S0FFSjtJQUNDLHFCQUNFLDhEQUFDVSxLQUFHO1FBQUNDLFNBQVMsRUFBRXhCLDBFQUFnQjs7MEJBQzlCLDhEQUFDTCxrREFBSTs7a0NBQ0gsOERBQUMrQixPQUFLO2tDQUFDLG1DQUFpQzs7Ozs7NEJBQVE7a0NBQ2hELDhEQUFDQyxNQUFJO3dCQUFDUixJQUFJLEVBQUMsYUFBYTt3QkFBQ1MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NEJBQUc7a0NBQ2xFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUNQLDhEQUFDUixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsS0FBSzswQkFDbEIsNEVBQUNRLFFBQU07b0JBQUNSLFNBQVMsRUFBQyxnQkFBZ0I7b0JBQUNTLE9BQU8sRUFBRTVCLFlBQVk7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Ozs7O29CQUMxRTswQkFDTiw4REFBQzZCLElBQUU7MEJBQUVoQyxPQUFPOzs7OztvQkFBTTs7Ozs7O1lBRWQsQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYWJpSW50ZXJmYWNlICBmcm9tICcuLy4uL3B1YmxpYy9hcnRpZmFjdHMvY29udHJhY3RzL1Rva2VuLnNvbC9Ub2tlbi5qc29uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0W21lc3NhZ2Usc2V0TWVzc2FnZV09IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCJcbi8vMHhDMTBDRDI0ZjBDMzZCNzU4M0Y5OTcxMzdCRjU0MjQxNDVjQzNmYkIzXG4gIGNvbnN0IGdldFRva2VuTmFtZSA9IGFzeW5jICgpPT57XG4gICAgaWYodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT1cInVuZGVmaW5lZFwiKXtcbiAgICAgIGxldCBjb250cmFjdFxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuZXRoZXJldW0pXG4gICAgICBjb25zdCBjaGFpbklkID0gIGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKVxuICAgICAgY29uc29sZS5sb2coY2hhaW5JZC5jaGFpbklkKVxuICAgIFxuICAgICAgICAgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcyxhYmlJbnRlcmZhY2UuYWJpLHByb3ZpZGVyKVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyggIGNvbnRyYWN0LmZ1bmN0aW9ucylcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuTmFtZSgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxBbGVydCA9ICBuYW1lK1wiV2UgQXJlIFdvcmsgQXQgQ2hhaW4gSWQgXCIgK2NoYWluSWQuY2hhaW5JZFxuICAgICAgICAgICAgc2V0TWVzc2FnZShmdWxsQWxlcnQpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgYXQgZ2V0IG5hbWVcIixlcnJvcilcbiAgICAgICAgfVxuXG5cblxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrIHdhbGxldFwiKVxuXG4gICAgfVxuXG59XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IYXJkSGF0IGFuZCBFdGhlcnMgU3RhcnRlciBUaGVtZSA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IEJhaGFhIEVoYWIgVGFoYVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTUnPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInIG9uQ2xpY2s9e2dldFRva2VuTmFtZX0+R2V0IE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzPnttZXNzYWdlfTwvaDM+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFiaUludGVyZmFjZSIsInN0eWxlcyIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNvbnRyYWN0QWRkcmVzcyIsImdldFRva2VuTmFtZSIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsIkNvbnRyYWN0IiwiYWJpIiwiZnVuY3Rpb25zIiwibmFtZSIsInRva2VuTmFtZSIsImZ1bGxBbGVydCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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