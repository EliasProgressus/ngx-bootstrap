/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
export function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy1mbGFncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7SUFFRSxNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsS0FBSztRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsZUFBZSxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxLQUFLO0tBQ3ZCLENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLDBCQUEwQixNQUF5QjtJQUN2RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO0tBQ3BDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZywgRGF0ZVBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk6IERhdGVQYXJzaW5nRmxhZ3Mge1xyXG4gIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cclxuICByZXR1cm4ge1xyXG4gICAgZW1wdHk6IGZhbHNlLFxyXG4gICAgdW51c2VkVG9rZW5zOiBbXSxcclxuICAgIHVudXNlZElucHV0OiBbXSxcclxuICAgIG92ZXJmbG93OiAtMixcclxuICAgIGNoYXJzTGVmdE92ZXI6IDAsXHJcbiAgICBudWxsSW5wdXQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZE1vbnRoOiBudWxsLFxyXG4gICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXHJcbiAgICB1c2VySW52YWxpZGF0ZWQ6IGZhbHNlLFxyXG4gICAgaXNvOiBmYWxzZSxcclxuICAgIHBhcnNlZERhdGVQYXJ0czogW10sXHJcbiAgICBtZXJpZGllbTogbnVsbCxcclxuICAgIHJmYzI4MjI6IGZhbHNlLFxyXG4gICAgd2Vla2RheU1pc21hdGNoOiBmYWxzZVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nRmxhZ3Mge1xyXG4gIGlmIChjb25maWcuX3BmID09IG51bGwpIHtcclxuICAgIGNvbmZpZy5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLl9wZjtcclxufVxyXG4iXX0=