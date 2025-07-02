"use strict";
exports.__esModule = true;
exports.RadioContext = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Radio_1 = require("./Radio");
var defaultSize = 20;
var defaultThickness = 3;
var defaultColor = "#DDD";
var defaultActiveColor = '#1677FF';
exports.RadioContext = react_1["default"].createContext(null);
var RadioGroup = function (_a) {
    var activeKey = _a.activeKey, _b = _a.size, size = _b === void 0 ? defaultSize : _b, _c = _a.thickness, thickness = _c === void 0 ? defaultThickness : _c, _d = _a.color, color = _d === void 0 ? defaultColor : _d, _e = _a.activeColor, activeColor = _e === void 0 ? defaultActiveColor : _e, children = _a.children, style = _a.style, onChange = _a.onChange;
    var _f = react_1["default"].useState(activeKey || 0), index = _f[0], setIndex = _f[1];
    var prevSelected = activeKey;
    var selectPress = function (i, value) {
        setIndex(i);
        onChange && onChange(i, value);
    };
    var RadioDom = function () {
        var template = react_1["default"].Children.map(children, function (radio, i) {
            var checked = index === i;
            return (<Radio_1["default"] {...radio.props} index={index} color={color} activeColor={activeColor} checked={checked} onChange={function () { return selectPress(i, radio.value); }}>
          {radio.props.children}
        </Radio_1["default"]>);
        });
        return template;
    };
    react_1["default"].useEffect(function () {
        if (index !== prevSelected) {
            prevSelected = activeKey;
            setIndex(activeKey || 0);
        }
    }, [activeKey]);
    return (<exports.RadioContext.Provider value={{ size: size, thickness: thickness, color: color, activeColor: activeColor }}>
      <react_native_1.View style={style}>
        {RadioDom()}
      </react_native_1.View>
    </exports.RadioContext.Provider>);
};
exports["default"] = RadioGroup;
