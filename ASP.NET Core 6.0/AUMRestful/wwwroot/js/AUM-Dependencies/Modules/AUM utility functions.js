// For threading / async. Not yet implemented.

export class AUMUtilityFunctions {
    static CatchWarn(functionParameter, args, context) {
        try {
            return functionParameter(args, context)
        }
        catch (error) {
            console.warn(error)
        }
    }

    static CatchError(functionParameter, args, context) {
        try {
            return functionParameter(args, context)
        }
        catch (error) {
            console.error(error)
        }
    }
}