
/**
 * Base object for Console log output
 */
export class ConsoleLog {

    time: string;
    output: string;

    constructor(output, time) {
        this.output = output;
        this.time = time;
    }

}