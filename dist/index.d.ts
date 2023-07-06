/**
 * Toast message 모듈
 */
export class Toast {
    static setOptions(options: any): void;
    constructor(options: any);
    options: any;
    viewItemCount: number;
    toastWrapperElement: HTMLDivElement;
    /**
     * add toast item
     * @param {*} item
     */
    addItem(item: any): void;
    /**
     * show toast message
     * @param {*} viewItems
     * @returns
     */
    show: (viewItems: any) => this;
    /**
     * toast hide
     * @param {*} toast
     */
    hide(toast: any): void;
    /**
     * toast destroy
     */
    destroy: () => void;
}
