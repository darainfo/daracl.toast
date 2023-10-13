var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  Toast: () => Toast
});
module.exports = __toCommonJS(src_exports);
var toastIdx = 0;
var styleClassMap = {
  primary: "primary",
  secondary: "secondary",
  info: "info",
  success: "success",
  warning: "warning",
  danger: "danger"
};
var defaultToastItem = {
  title: "",
  // 제목
  text: "",
  // 내용
  enableCloseButton: true,
  // 닫기 버튼 활성화여부
  style: "success",
  //  백그라운드 색깔.  | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  textColor: "#000000",
  // 글자 색
  enableProgress: true
  //  프로그래스 바 사용여부.
};
var defaultOptions = {
  duration: 3,
  // 유지 시간  초
  width: "",
  // toast width
  position: {
    // toast 위치
    vertical: "top",
    // top, middle, bottom
    horizontal: "right"
    // left, center, right
  },
  enableCloseButton: true,
  //  닫기 버튼 활성화 여부
  zIndex: 1e4,
  // css z-index
  style: "success",
  //  백그라운드 색깔.  | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  textColor: "#000000",
  // 글자 색
  enableProgress: false,
  //  프로그래스 바 사용여부.
  items: "",
  keepInstance: false
  // show 가 끝나도 toast 객체를 유지. toast 객체 하나 생성해서 계속 사용할 경우 사용
};
function toastHiddenElement() {
  if (document.getElementById("daraToastHidden") == null) {
    document.querySelector("body")?.insertAdjacentHTML(
      "beforeend",
      `<div id="daraToastHidden" class="dara-toast-hidden"></div>`
    );
  }
  return document.getElementById("daraToastHidden");
}
var Toast = class {
  constructor(options) {
    this.options = Object.assign({}, defaultOptions, options);
    toastIdx += 1;
    this.viewItemCount = 0;
    const position = this.options.position;
    const toastWrapperElement = document.createElement("div");
    toastWrapperElement.className = `dara-toast-wrapper ${position.vertical} ${position.horizontal} dt-${toastIdx}`;
    toastWrapperElement.style = `width:${this.options.width};z-index:${this.options.zIndex};`;
    toastHiddenElement().appendChild(toastWrapperElement);
    this.toastWrapperElement = toastWrapperElement;
    this.show(this.options.items);
  }
  static setOptions(options) {
    defaultOptions = Object.assign({}, defaultOptions, options);
  }
  /**
   * add toast item
   * @param {*} item
   */
  addItem(item) {
    const enableHeader = item.title ? true : false;
    const toast = document.createElement("div");
    const style = item.style ? item.style : this.options.style;
    const styleClass = styleClassMap[style] ?? styleClassMap.success;
    toast.className = `dara-toast ${styleClass} ${enableHeader ? `header-mode` : ""}`;
    this.viewItemCount += 1;
    let toastHtml = `
            ${enableHeader ? `<div class="toast-header" style="color:${item.textColor};" >${item.title}</div>` : ""}
            <div class="toast-body">
                <div class="toast-content" style="color:${item.textColor};" >${item.text}</div>
            </div>
            ${item.enableCloseButton ? '<span class="toast-close">\xD7</span>' : ""}
            ${item.enableProgress ? `<div class="progress-bar" style="animation: progressAnimation ${item.duration}s;"></div>` : ""}
        `;
    toast.innerHTML = toastHtml;
    if (this.options.position.vertical === "top") {
      this.toastWrapperElement.insertAdjacentElement("afterbegin", toast);
    } else {
      this.toastWrapperElement.appendChild(toast);
    }
    toast.timer = setTimeout(() => this.hide(toast), item.duration * 1e3);
    toast.querySelector(".toast-close").addEventListener("click", () => {
      if (toast.timer)
        clearTimeout(toast.timer);
      this.hide(toast);
    });
  }
  /**
   * show toast message
   * @param {*} viewItems
   * @returns
   */
  show = (viewItems) => {
    if (typeof viewItems === "undefined") {
      return;
    }
    let items = [];
    if (typeof viewItems === "string") {
      items.push(viewItems);
    } else if (Array.isArray(viewItems)) {
      items = viewItems;
    } else {
      items.push(viewItems);
    }
    const enableCloseButton = this.options.enableCloseButton;
    const enableProgress = this.options.enableProgress;
    const duration = this.options.duration;
    const textColor = this.options.textColor;
    items.forEach((item) => {
      let viewItem;
      if (typeof item === "string") {
        viewItem = { text: item };
      } else {
        viewItem = item;
      }
      viewItem.enableCloseButton = typeof viewItem.enableCloseButton === "undefined" ? enableCloseButton : viewItem.enableCloseButton;
      viewItem.enableProgress = typeof viewItem.enableProgress === "undefined" ? enableProgress : viewItem.enableProgress;
      viewItem.duration = typeof viewItem.duration === "undefined" ? duration : viewItem.duration;
      viewItem.textColor = typeof viewItem.textColor === "undefined" ? textColor : viewItem.textColor;
      this.addItem(Object.assign({}, defaultToastItem, viewItem));
    });
    return this;
  };
  /**
   * toast hide
   * @param {*} toast
   */
  hide(toast) {
    this.viewItemCount -= 1;
    toast.classList.add("hide");
    if (toast.timeoutId)
      clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
    if (this.options.keepInstance === false && this.viewItemCount < 1) {
      this.destroy();
    }
  }
  /**
   * toast destroy
   */
  destroy = () => {
    this.toastWrapperElement.remove();
  };
};
//# sourceMappingURL=index.cjs.map
