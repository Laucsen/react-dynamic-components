/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Ajv from 'ajv';
import styled from 'styled-components';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var createElement = function (Element, structure, data) { return (React.createElement(Element, { structure: structure, data: data })); };
var createContextConsumer = function (StoreContext, Component, props) { return (React.createElement(StoreContext.Consumer, null, function (store) { return React.createElement(Component, __assign({}, props, { store: store })); })); };
//# sourceMappingURL=wrappers.js.map

var formatStructureErrors = function (componentName, errors) {
    if (!errors) {
        throw new Error('Invalid error Structure');
    }
    return errors.map(function (error) {
        return {
            component: componentName,
            message: error.keyword + " " + error.message,
            schemaPath: error.schemaPath,
        };
    });
};
//# sourceMappingURL=errors.js.map

var isRoot = function (structure) {
    return structure.type === undefined && structure.root !== undefined;
};
var getComponentNameFromStructure = function (structure) {
    if (isRoot(structure)) {
        return 'RootContainer';
    }
    return structure.type;
};
var createStore = function () {
    var state = {
        components: {},
        structures: {},
    };
    var getState = function () { return Object.freeze(__assign({}, state)); };
    var registerComponent = function (name, component, componentStructureSchema) {
        state.components[name] = component;
        state.structures[name] = componentStructureSchema;
    };
    var build = function (structure, data) {
        var name = getComponentNameFromStructure(structure);
        var Element = state.components[name];
        return createElement(Element, structure, data);
    };
    var validateStructure = function (structure) {
        var componentName = getComponentNameFromStructure(structure);
        var structureSchema = state.structures[componentName];
        var ajv = new Ajv();
        var validate = ajv.compile(structureSchema);
        var result = validate(structure);
        if (!result) {
            return formatStructureErrors(componentName, validate.errors);
        }
        // TODO: Cascading. How to validate other elements.
        return [];
    };
    return { getState: getState, registerComponent: registerComponent, build: build, validateStructure: validateStructure };
};
//# sourceMappingURL=createStore.js.map

var globalStore = createStore();
var StoreContext = React.createContext(globalStore);
var connectController = function (Component) { return function (props) { return createContextConsumer(StoreContext, Component, props); }; };
var register = function (componentName, componentStructureSchema) {
    if (componentStructureSchema === void 0) { componentStructureSchema = {}; }
    return function (Component) {
        var consumerBuilder = function (props) { return createContextConsumer(StoreContext, Component, props); };
        globalStore.registerComponent(componentName, consumerBuilder, componentStructureSchema);
        return consumerBuilder;
    };
};
//# sourceMappingURL=store.js.map

var Core = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    var _b = useState(null), state = _b[0], setState = _b[1];
    useEffect(function () {
        try {
            var validaData = {
                structure: JSON.parse(structure),
                data: JSON.parse(data),
            };
            // - HOW TO VALIDATE?
            var result = store.validateStructure(validaData.structure);
            console.log(result);
            setState(validaData);
        }
        catch (err) {
            console.log('Error: ');
            console.log(err);
        }
    }, [structure, data]);
    if (!state) {
        return null;
    }
    console.log(state.structure);
    return store.build(state.structure, state.data.data);
};
var Core$1 = connectController(Core);
//# sourceMappingURL=Core.js.map

//# sourceMappingURL=index.js.map

var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var RootContainer = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    return React.createElement(Container, null, store.build(structure.root, data));
};
var templateObject_1;
//# sourceMappingURL=RootContainer.js.map

var RootStructure = {
    properties: {
        version: { type: 'string' },
    },
};
//# sourceMappingURL=structure.js.map

var RootContainer$1 = register('RootContainer', RootStructure)(RootContainer);

// Compute the size of a column and return a CSS width line.
var getWidthGrid = function (value) {
    var width = (value / 12) * 100;
    return "width: " + width + "%;";
};
//# sourceMappingURL=utils.js.map

var Column = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ", "\n  }\n"], ["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ", "\n  }\n"])), function (_a) {
    var mobile = _a.mobile;
    return mobile && getWidthGrid(mobile);
}, function (_a) {
    var tablet = _a.tablet;
    return tablet && getWidthGrid(tablet);
}, function (_a) {
    var desktop = _a.desktop;
    return desktop && getWidthGrid(desktop);
});
var templateObject_1$1;
//# sourceMappingURL=Column.js.map

var Row = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"], ["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"])));
var templateObject_1$2;
//# sourceMappingURL=Row.js.map

var Container$1 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"], ["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"])));
var GridContainer = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    var _b = useState({
        name: structure.name,
        type: structure.type,
    });
    return (React.createElement(Container$1, null, structure.items.map(function (row, ri) {
        return (React.createElement(Row, { key: ri }, row.map(function (column, ci) {
            var _a = column.data, mobile = _a.mobile, tablet = _a.tablet, desktop = _a.desktop, component = _a.component;
            return (React.createElement(Column, { mobile: mobile, tablet: tablet, desktop: desktop, key: ci }, store.build(component, data)));
        })));
    })));
};
var templateObject_1$3;
//# sourceMappingURL=Grid.js.map

var GridStructure = {
    properties: {
        smaller: {
            type: 'number',
            maximum: { $data: '1/larger' },
        },
        larger: { type: 'number' },
    },
};
//# sourceMappingURL=structure.js.map

var Grid = register('Grid', GridStructure)(GridContainer);

var Text = function (_a) {
    var structure = _a.structure, data = _a.data;
    var state = useState({
        name: structure.name,
        type: structure.type,
    })[0];
    var name = state.name;
    return React.createElement(React.Fragment, null, data[name]);
};
//# sourceMappingURL=Text.js.map

var TextStructure = {
    properties: {
        smaller: {
            type: 'number',
            maximum: { $data: '1/larger' },
        },
        larger: { type: 'number' },
    },
};
//# sourceMappingURL=structure.js.map

var Text$1 = register('Text', TextStructure)(Text);

export default Core$1;
export { Column, Grid, RootContainer$1 as RootContainer, Row, Text$1 as Text, register };
