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

var formatStructureErrors = function (componentType, componentName, errors) {
    if (!errors) {
        throw new Error('Invalid error Structure');
    }
    return errors.map(function (error) {
        return {
            component: componentType,
            name: componentName,
            message: "\"" + error.dataPath + "\" " + error.message,
            schemaPath: error.schemaPath,
        };
    });
};
var errorLineTemplate = {
    data: {
        mobile: 6,
        tablet: 12,
        desktop: 12,
        component: {
            type: 'Container',
            components: [],
        },
    },
};
var errorTemplate = {
    version: 1,
    name: 'error-structure',
    title: 'Mage Sheet Structure',
    root: {
        name: 'error-grid',
        type: 'Grid',
        items: [[]],
    },
};
var getErrorsStructureAndData = function (errors) {
    var conts = errors.map(function (error) {
        var _a;
        var currentTemplate = errorLineTemplate;
        (_a = currentTemplate.data.component.components).push.apply(_a, [
            {
                type: 'Text',
                name: error.name,
            },
            {
                type: 'Text',
                name: error.name + "-component",
            },
            {
                type: 'Text',
                name: error.name + "-\u00A0schemaPath",
            },
        ]);
        return errorLineTemplate;
    });
    var structure = errorTemplate;
    structure.root.items[0] = conts;
    var data = errors.reduce(function (acc, error) {
        acc[error.name] = error.message;
        acc[error.name + "-component"] = error.component;
        acc[error.name + "-\u00A0schemaPath"] = error.schemaPath;
        return acc;
    }, {});
    return {
        structure: structure,
        data: data,
    };
};
//# sourceMappingURL=errors.js.map

var isRoot = function (structure) {
    return structure.type === undefined && structure.root !== undefined;
};
var getComponentTypeFromStructure = function (structure) {
    if (isRoot(structure)) {
        return 'RootContainer';
    }
    return structure.type;
};
var getComponentNameFromStructure = function (structure) {
    if (isRoot(structure)) {
        return 'root';
    }
    return structure.name;
};
var createStore = function () {
    var state = {
        components: {},
        structures: {},
        dataSchema: {},
        childrens: {},
    };
    var getState = function () { return Object.freeze(__assign({}, state)); };
    var registerComponent = function (name, component, componentStructureSchema, componentDataSchema, compoentChildrens) {
        if (componentDataSchema === void 0) { componentDataSchema = null; }
        if (compoentChildrens === void 0) { compoentChildrens = function () { return null; }; }
        state.components[name] = component;
        state.structures[name] = componentStructureSchema;
        state.dataSchema[name] = componentDataSchema;
        state.childrens[name] = compoentChildrens;
    };
    var build = function (structure, data) {
        var type = getComponentTypeFromStructure(structure);
        var Element = state.components[type];
        return createElement(Element, structure, data);
    };
    var validateStructure = function (structure) {
        var ajv = new Ajv();
        var componentType = getComponentTypeFromStructure(structure);
        var toAnalyze = [
            {
                currentType: componentType,
                currentStructure: structure,
            },
        ];
        while (toAnalyze.length !== 0) {
            var currentItem = toAnalyze[0];
            toAnalyze.shift();
            var structureSchema = state.structures[currentItem.currentType];
            if (!structureSchema) {
                return [
                    {
                        name: getComponentNameFromStructure(currentItem.currentStructure),
                        component: currentItem.currentType,
                        message: 'Component not Registered',
                    },
                ];
            }
            var validate = ajv.compile(structureSchema);
            var result = validate(currentItem.currentStructure);
            if (!result) {
                return formatStructureErrors(currentItem.currentType, getComponentNameFromStructure(currentItem.currentStructure), validate.errors);
            }
            var getChildrens = state.childrens[currentItem.currentType];
            var childrens = getChildrens(currentItem.currentStructure);
            if (childrens) {
                var futureAnalysis = childrens.map(function (child) {
                    return {
                        currentType: child.type,
                        currentStructure: child,
                    };
                });
                toAnalyze.push.apply(toAnalyze, futureAnalysis);
            }
        }
        return [];
    };
    return { getState: getState, registerComponent: registerComponent, build: build, validateStructure: validateStructure };
};

var globalStore = createStore();
var StoreContext = React.createContext(globalStore);
var connectController = function (Component) { return function (props) { return createContextConsumer(StoreContext, Component, props); }; };
var register = function (componentName, componentStructureSchema, componentDataSchema, compoentChildrens) {
    if (componentStructureSchema === void 0) { componentStructureSchema = {}; }
    if (componentDataSchema === void 0) { componentDataSchema = null; }
    if (compoentChildrens === void 0) { compoentChildrens = function () { return null; }; }
    return function (Component) {
        var consumerBuilder = function (props) { return createContextConsumer(StoreContext, Component, props); };
        globalStore.registerComponent(componentName, consumerBuilder, componentStructureSchema, componentDataSchema, compoentChildrens);
        return consumerBuilder;
    };
};

var Core = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    var _b = useState(null), state = _b[0], setState = _b[1];
    var _c = useState(null), errors = _c[0], setErrors = _c[1];
    useEffect(function () {
        try {
            var validaData = {
                structure: JSON.parse(structure),
                data: JSON.parse(data),
            };
            // - HOW TO VALIDATE?
            var result = store.validateStructure(validaData.structure);
            if (result.length !== 0) {
                setErrors(result);
            }
            else {
                setState(validaData);
            }
        }
        catch (err) {
            console.log('Error: ');
            console.log(err);
        }
    }, [structure, data]);
    if (errors) {
        var errorsDef = getErrorsStructureAndData(errors);
        return store.build(errorsDef.structure, errorsDef.data);
    }
    if (!state) {
        return null;
    }
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
        version: { type: 'number' },
        name: { type: 'string' },
        title: { type: 'string' },
        root: { tyoe: 'object' },
    },
    required: ['version', 'name', 'title', 'root'],
};
//# sourceMappingURL=structure.js.map

var childrens = (function (structure) {
    return [structure.root];
});
//# sourceMappingURL=childrens.js.map

var RootContainer$1 = register('RootContainer', RootStructure, null, childrens)(RootContainer);
//# sourceMappingURL=index.js.map

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

var Grid = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"], ["\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"])));
var GridContainer = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    var _b = useState({
        name: structure.name,
        type: structure.type,
    });
    return (React.createElement(Grid, null, structure.items.map(function (row, ri) {
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
        type: { type: 'string' },
        name: { type: 'string' },
        items: {
            type: 'array',
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        data: {
                            type: 'object',
                            properties: {
                                mobile: { type: 'number' },
                                tablet: { type: 'number' },
                                desktop: { type: 'number' },
                                component: { type: 'object' },
                            },
                            required: ['mobile', 'tablet', 'desktop', 'component'],
                        },
                    },
                    required: ['data'],
                },
            },
        },
    },
    required: ['type', 'name', 'items'],
};
//# sourceMappingURL=structure.js.map

var childrens$1 = (function (structure) {
    var mapped = structure.items
        .reduce(function (acc, items) {
        acc.push.apply(acc, items);
        return acc;
    }, [])
        .map(function (items) {
        return items.data.component;
    });
    return mapped;
});
//# sourceMappingURL=childrens.js.map

var Grid$1 = register('Grid', GridStructure, null, childrens$1)(GridContainer);
//# sourceMappingURL=index.js.map

var ContainerStyled = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n\n  padding: 8px;\n"], ["\n  display: flex;\n\n  padding: 8px;\n"])));
var Container$1 = function (_a) {
    var structure = _a.structure, data = _a.data, store = _a.store;
    return (React.createElement(ContainerStyled, null, structure.components.map(function (component, index) {
        return React.createElement(React.Fragment, { key: index }, store.build(component, data));
    })));
};
var templateObject_1$4;
//# sourceMappingURL=Container.js.map

var ContainerStructure = {
    properties: {
        type: { type: 'string' },
        name: { type: 'string' },
        components: {
            type: 'array',
            items: {
                type: 'object',
            },
        },
    },
    required: ['type', 'components'],
};
//# sourceMappingURL=structure.js.map

var childrens$2 = (function (structure) {
    return structure.components;
});
//# sourceMappingURL=childrens.js.map

var Container$2 = register('Container', ContainerStructure, null, childrens$2)(Container$1);
//# sourceMappingURL=index.js.map

var TextContainer = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  padding: 8px;\n"], ["\n  padding: 8px;\n"])));
var Text = function (_a) {
    var structure = _a.structure, data = _a.data;
    var state = useState({
        name: structure.name,
        type: structure.type,
    })[0];
    var name = state.name;
    return React.createElement(TextContainer, null, data[name]);
};
var templateObject_1$5;
//# sourceMappingURL=Text.js.map

var TextStructure = {
    properties: {
        type: { type: 'string' },
        name: { type: 'string' },
    },
    required: ['type', 'name'],
};
//# sourceMappingURL=structure.js.map

var Text$1 = register('Text', TextStructure)(Text);
//# sourceMappingURL=index.js.map

export default Core$1;
export { Column, Container$2 as Container, Grid$1 as Grid, RootContainer$1 as RootContainer, Row, Text$1 as Text, register };
