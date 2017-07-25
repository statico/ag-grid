// Type definitions for ag-grid v12.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { GridOptions } from "./entities/gridOptions";
import { IFrameworkFactory } from "./interfaces/iFrameworkFactory";
export interface GridParams {
    globalEventListener?: Function;
    $scope?: any;
    $compile?: any;
    quickFilterOnScope?: any;
    frameworkFactory?: IFrameworkFactory;
    seedBeanInstances?: {
        [key: string]: any;
    };
}
export declare class Grid {
    private context;
    private static enterpriseBeans;
    private static frameworkBeans;
    private static RowModelClasses;
    static setEnterpriseBeans(enterpriseBeans: any[], rowModelClasses: any): void;
    static setFrameworkBeans(frameworkBeans: any[]): void;
    constructor(eGridDiv: HTMLElement, gridOptions: GridOptions, params?: GridParams);
    private setColumnsAndData();
    private dispatchGridReadyEvent(gridOptions);
    private getRowModelClass(gridOptions);
    destroy(): void;
}
