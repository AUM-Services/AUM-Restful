'use strict';
import { default as JSONFormatter } from '../src/index';
describe('null', function () {
    it('should render "null"', function () {
        var formatter = new JSONFormatter(null);
        var el = formatter.render();
        expect(el.textContent).toContain('null');
    });
});
describe('undefined', function () {
    it('should render "undefined"', function () {
        var formatter = new JSONFormatter(undefined);
        expect(formatter.render().textContent).toContain('undefined');
    });
});
describe('object function constructor', function () {
    it('should output "Format"', function () {
        function Format() {
        }
        var obj = new Format();
        var formatter = new JSONFormatter(obj);
        expect(formatter['constructorName']).toEqual('Format');
    });
    it('should output "BrokenFormat"', function () {
        var failConstructor = 'function BrokenFormat() {Object.assign(}';
        var funcNameRegex = /function ([^(]*)/;
        var results = (funcNameRegex).exec(failConstructor.toString());
        expect(results[1]).toEqual('BrokenFormat');
    });
});
describe('function', function () {
    it('should render the function', function () {
        var formatter = new JSONFormatter(function add(a, b) {
            return a + b;
        });
        var elementText = formatter.render().textContent;
        expect(elementText).toContain('function');
        expect(elementText).toContain('add');
        expect(elementText).toContain('(a, b)');
        expect(elementText.trim().match(/function\s[^\(]*\([^\)]*\)\s*(.*)/)[1]).toEqual('{…}');
    });
});
describe('string', function () {
    it('should render "Hello World!"', function () {
        var formatter = new JSONFormatter('Hello World!');
        expect(formatter.render().textContent).toContain('Hello World');
    });
});
describe('date string', function () {
    var formatter = new JSONFormatter(new Date(0).toString());
    it('should render "' + (new Date(0)).toString() + '"', function () {
        expect(formatter.render().textContent).toContain('"' + (new Date(0)).toString() + '"');
    });
    it('should assing date class to date string', function () {
        var formatter = new JSONFormatter('2015-12-05T18:58:53.727Z');
        expect(formatter.render().querySelector('.json-formatter-date')).not.toBeNull();
    });
});
describe('date', function () {
    var date = new Date();
    var formatter = new JSONFormatter(date);
    it('should assing date class to date string', function () {
        expect(formatter.render().querySelector('.json-formatter-date')).not.toBeNull();
    });
    it('should render "' + date.toJSON() + '" if useToJSON is true', function () {
        expect(formatter.render().textContent).toContain('"' + date.toJSON() + '"');
    });
    it('should render "No properties" if useToJSON is false', function () {
        var formatter = new JSONFormatter(date, 1, { useToJSON: false });
        expect(formatter.render().textContent).toContain('Date');
    });
});
describe('url string', function () {
    var formatter = new JSONFormatter('https://example.com');
    it('should render "https://example.com"', function () {
        expect(formatter.render().textContent).toContain('"https://example.com"');
    });
    it('should make a link and add class "url"', function () {
        expect(formatter.render().querySelector('a.json-formatter-url')).not.toEqual(null);
    });
});
describe('object with empty property', function () {
    var formatter = new JSONFormatter({ '': true });
    it('should render true', function () {
        expect(formatter.render().querySelector('.json-formatter-boolean').textContent).toEqual('true');
    });
});
describe('openAtDepth after rendering', function () {
    var formatter = new JSONFormatter({ depth1: { depth2: { depth3: { depth4: 21 } } } }, Infinity, {
        animateOpen: false,
        animateClose: false
    });
    var element = formatter.render();
    it('should open at depth 1', function () {
        formatter.openAtDepth();
        expect(element.outerHTML).toContain('depth1');
        expect(element.outerHTML).not.toContain('depth2');
        expect(element.outerHTML).not.toContain('depth3');
        expect(element.outerHTML).not.toContain('depth4');
    });
    it('should collapses all', function () {
        formatter.openAtDepth(0);
        expect(element.outerHTML).not.toContain('depth1');
    });
    it('should expand all', function () {
        formatter.openAtDepth(Infinity);
        expect(element.outerHTML).toContain('depth1');
        expect(element.outerHTML).toContain('depth2');
        expect(element.outerHTML).toContain('depth3');
        expect(element.outerHTML).toContain('depth4');
        expect(element.outerHTML).toContain('21');
    });
});
describe('openAtDepth before any rendering', function () {
    var formatter = new JSONFormatter({ depth1: { depth2: { depth3: { depth4: 21 } } } }, Infinity, {
        animateOpen: false,
        animateClose: false
    });
    it('should open at depth 1', function () {
        formatter.openAtDepth();
        var element = formatter.render();
        expect(element.outerHTML).toContain('depth1');
        expect(element.outerHTML).not.toContain('depth2');
        expect(element.outerHTML).not.toContain('depth3');
        expect(element.outerHTML).not.toContain('depth4');
    });
});
describe('toggleOpen after rendering', function () {
    it('should toggle', function () {
        var formatter = new JSONFormatter({ depth1: { depth2: { depth3: { depth4: 21 } } } }, Infinity, {
            animateOpen: false,
            animateClose: false
        });
        var element = formatter.render();
        expect(element.outerHTML).toContain('Object');
        expect(element.outerHTML).toContain('depth1');
        formatter.toggleOpen();
        expect(element.outerHTML).toContain('Object');
        expect(element.outerHTML).not.toContain('depth1');
        expect(element.outerHTML).not.toContain('depth2');
        expect(element.outerHTML).not.toContain('depth3');
        expect(element.outerHTML).not.toContain('depth4');
    });
});
describe('toggleOpen before any rendering', function () {
    it('should toggle', function () {
        var formatter = new JSONFormatter({ depth1: { depth2: { depth3: { depth4: 21 } } } }, Infinity, {
            animateOpen: false,
            animateClose: false
        });
        formatter.toggleOpen();
        var element = formatter.render();
        expect(element.outerHTML).toContain('Object');
        expect(element.outerHTML).not.toContain('depth1');
        expect(element.outerHTML).not.toContain('depth2');
        expect(element.outerHTML).not.toContain('depth3');
        expect(element.outerHTML).not.toContain('depth4');
    });
});
//# sourceMappingURL=spec.js.map