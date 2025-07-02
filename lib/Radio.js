"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var RadioGroup_1 = require("./RadioGroup");
var defaultColor = "#DDD";
var defaultActiveColor = '#1677FF';
var Radio = function (_a) {
    var disabled = _a.disabled, index = _a.index, value = _a.value, checked = _a.checked, _b = _a.activeColor, activeColor = _b === void 0 ? defaultActiveColor : _b, _c = _a.color, color = _c === void 0 ? defaultColor : _c, style = _a.style, children = _a.children, size = _a.size, onChange = _a.onChange;
    var context = react_1["default"].useContext(RadioGroup_1.RadioContext);
    var getStyle = function () {
        var client = size ? size : context.size;
        return {
            width: client,
            height: client,
            borderRadius: client && client / 2,
            borderWidth: context.thickness,
            borderColor: checked && activeColor ? activeColor : color
        };
    };
    var getNotStyle = function () {
        var client = size ? size : context.size;
        return {
            height: client && (client / 2),
            width: client && (client / 2),
            borderRadius: client && (client / 4),
            backgroundColor: activeColor || color
        };
    };
    return (<react_native_1.View style={{ opacity: disabled ? .4 : 1 }}>
      <react_native_1.TouchableWithoutFeedback disabled={disabled} onPress={function () { return onChange && onChange(index, value); }}>
        <react_native_1.View style={[styles.container, style]}>
          <react_native_1.View style={[styles.radio, getStyle()]}>
            {checked && <react_native_1.View style={getNotStyle()}/>}
          </react_native_1.View>
          <react_native_1.View style={styles.item}>
            {children}
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.TouchableWithoutFeedback>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        padding: 10
    },
    radio: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
exports["default"] = Radio;
