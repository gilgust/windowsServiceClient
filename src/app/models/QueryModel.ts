export default class QueryModel{
    action: string;
    data?: any;

    constructor(action: string) {
        this.action = action;
    }
}

export enum PrintDataType {
  Check = 1,
  Invoice = 2
}
