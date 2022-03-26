// JavaScript DOM string functions written by Eric Dee.

export class AUMDOMStringFunctions {
    Strings = new Array()
    _Context = new Array()

    /**
     * Stores strings as class members in a dynamic object array.
     * @param {string} stringName The string name/key.
     * @param {string} stringValue The string.
     */
    AddString(stringName, stringValue) {
        this.Strings[stringName] = stringValue
    }

    /**
     * Stores HTML elements to use as a context for retreiving strings.
     * @param {string} elementName The element name/key.
     * @param {object} elementContext The document element reference.
     */
    AddElementToItsContext(elementName, elementContext) {
        this._Context[elementName] = elementContext
    }

    /** Updates all strings pertaining to the document elements found in this._Context. */
    UpdateContextStrings() {
        this.UpdateStringsByKeyValuePair(this._Context)
    }

    /**
     * Adds strings to this.Strings from an object.
     * DEBUG?: This is only used for updating strings from this._Context via this.UpdateContextStrings above.
     * @param {any} objectToRead
     */
    UpdateStringsByKeyValuePair(objectToRead) {
        for (const [key, value] of Object.entries(objectToRead)) {
            if (value.value) {
                this.Strings[key] = value.value
            }
            else {
                this.UpdateStringsByKeyValuePair(value)
            }
        }
    }

    /**
     * Combines strings using a dynamic format.
     * @param {any} dynamicStringKey The master key. Can be an object, array, or string.
     * @param {string} decorator The filler to use between strings.
     */
    CombineStringsWithADecorator(dynamicStringKey, decorator) {
        let result
        // If dynamicStringKey is an object in this._Context, this pulls its values from this.Strings.
        if (Object.keys(this._Context).includes(dynamicStringKey)) {
            try {
                result = this.DecorateStringsFromAContextObject(dynamicStringKey, decorator);
            }
            catch (error) {
                console.warn(error)
            }
        }
        // Else if dynamicStringNames is an array or string, this uses a different flow.
        else {
            // If dynamicStringNames is an array, this pulls its values from this.Strings.
            if (dynamicStringKey.forEach) {
                try {
                    result = this.DecorateStringsFromAKeyArray(dynamicStringKey, decorator)
                }
                catch (error) {
                    console.warn(error)
                }
            }
            // Else if the dynamicStringNames is a single kvp, this pulls it from this.Strings.
            else {
                try {
                    result = this.DecorateOneString(dynamicStringKey, decorator)
                }
                catch (error) {
                    console.warn(error)
                }
            }
        }
        if (result) {
            console.log(result)
        }
        else {
            throw 'String(s) not found.'
        }
    }

    /**
     * Decorates multiple strings from an object if it is found in this._Context.
     * DEBUG?: This functions requires the key's object to exist in this._Context.
     * @param {any} objectKey The key for the object.
     * @param {any} decorator The decorator character(s) to append between strings.
     */
    DecorateStringsFromAContextObject(objectKey, decorator) {
        let combinedString = ""
        for (const name of Object.keys(this._Context[objectKey])) {
            let stringContent = this.Strings[name]
            if (stringContent === undefined) {
                throw `That object key is not in ${this.constructor.name}._Context: "${objectKey}".`
            }
            else {
                switch (stringContent) {
                    case decorator:
                        break
                    default:
                        combinedString = combinedString.concat(stringContent, decorator)
                }
            }
        }
        return combinedString
    }

    /**
     * Decorates multiple strings from an array of keys or throws an error if any of the keys aren't found.
     * DEBUG?: This function requires all keys to be valid, due to the fact that it is meant for API endpoints.
     * @param {any} keys The keys array for strings in this.Strings to decorate.
     * @param {any} decorator The decorator character(s) to append between strings.
     */
    DecorateStringsFromAKeyArray(keys, decorator) {
        let combinedString = ""
        keys.forEach((name) => {
            let stringContent = this.Strings[name]
            if (stringContent === undefined) {
                throw `This key array is not in ${this.constructor.name}.Strings: [${keys}].`
            }
            else {
                switch (stringContent) {
                    case decorator:
                        break
                    default:
                        combinedString = combinedString.concat(stringContent, decorator)
                }
            }
        })
        return combinedString
    }

    /**
     * Decorates a string from this.Strings using the concat function or throws an error if it isn't found.
     * It also prints undefined issues and errors for debugging.
     * @param {any} stringKey The string key to search for.
     * @param {any} decorator The decorator to character(s) append to the string.
     */
    DecorateOneString(stringKey, decorator) {
        let stringContent = this.Strings[stringKey]
        if (stringContent === undefined) {
            throw `This string key is not in ${this.constructor.name}.Strings: ${stringKey}.`
        }
        else {
            stringContent = stringContent.concat(decorator)
            return stringContent
        }
    }

    /** Console logs all the items in this.Strings. */
    LogStrings() {
        console.log(this.Strings)
    }

    /** Console logs all the items in this._Context. */
    LogContext() {
        console.log(this._Context)
    }
}