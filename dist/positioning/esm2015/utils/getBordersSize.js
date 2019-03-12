/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
export function getBordersSize(styles, axis) {
    const /** @type {?} */ sideA = axis === 'x' ? 'Left' : 'Top';
    const /** @type {?} */ sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[`border${sideA}Width`]) +
        parseFloat(styles[`border${sideB}Width`]));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm9yZGVyc1NpemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvZ2V0Qm9yZGVyc1NpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLE1BQU0seUJBQXlCLE1BQTJCLEVBQUUsSUFBWTtJQUN0RSx1QkFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsdUJBQU0sS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRXBELE1BQU0sQ0FBQyxDQUNMLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQzFDLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgYXhpczogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcclxuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGBdKSArXHJcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGBdKVxyXG4gICk7XHJcbn1cclxuIl19