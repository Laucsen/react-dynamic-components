/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

var convertData = function (structure, data) {
    var parsedStructure = JSON.parse(structure);
    var parsedData = JSON.parse(data);
    // Validate
    console.log(parsedStructure);
    return {
        structure: parsedStructure,
        data: parsedData,
    };
};
//# sourceMappingURL=data.js.map

var Core = function (_a) {
    var structure = _a.structure, data = _a.data;
    var _b = useState({}), state = _b[0], setState = _b[1];
    useEffect(function () {
        try {
            var validaData = convertData(structure, data);
            setState(validaData);
        }
        catch (err) {
            console.log(err);
        }
    }, [structure, data]);
    console.log(state);
    return React.createElement("div", null, "AAA");
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

// Compute the size of a column and return a CSS width line.
var getWidthGrid = function (value) {
    var width = (value / 12) * 100;
    return "width: " + width + "%;";
};
//# sourceMappingURL=utils.js.map

var Column = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ", "\n  }\n"], ["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ", "\n  }\n"])), function (_a) {
    var mobile = _a.mobile;
    return mobile && getWidthGrid(mobile);
}, function (_a) {
    var tablet = _a.tablet;
    return tablet && getWidthGrid(tablet);
}, function (_a) {
    var desktop = _a.desktop;
    return desktop && getWidthGrid(desktop);
});
var templateObject_1;
//# sourceMappingURL=Column.js.map

var Container = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"], ["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"])));
var templateObject_1$1;
//# sourceMappingURL=Container.js.map

var Row = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"], ["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"])));
var templateObject_1$2;
//# sourceMappingURL=Row.js.map

export default Core;
export { Column, Container, Row };
