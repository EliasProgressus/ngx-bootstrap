/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isNumeric } from './isNumeric';
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */
export function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach((prop) => {
        let /** @type {?} */ unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0U3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL3NldFN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7OztBQUV4QyxNQUFNLG9CQUFvQixPQUFvQixFQUFFLE1BQVcsRUFBRSxRQUFvQjtJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1FBQ3hDLHFCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O1FBRWQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2I7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7WUFFbkUsTUFBTSxDQUFDO1NBQ1I7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXHJcbiAqL1xyXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4vaXNOdW1lcmljJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlczogYW55LCByZW5kZXJlcj86IFJlbmRlcmVyMikge1xyXG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XHJcbiAgICBsZXQgdW5pdCA9ICcnO1xyXG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXHJcbiAgICBpZiAoWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT0gLTEgJiZcclxuICAgICAgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcclxuICAgICAgdW5pdCA9ICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbmRlcmVyKSB7XHJcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsIHByb3AsIGAke1N0cmluZyhzdHlsZXNbcHJvcF0pfSR7dW5pdH1gKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gU3RyaW5nKHN0eWxlc1twcm9wXSkgKyB1bml0O1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==