export default class PrintQueryModel{
    action: string;
    printDataType : string;
    data?: any;

    constructor(action: string, printDataType: string) {
        this.action = action;
        this.printDataType = printDataType;
    }
}
