let toastIdx = 0;

const defaultToastItem = {
    title: ''
    , text: ''
    , enableCloseButton: true
    , style: 'success'
    , textColor: '#000000'
    , textAlign: 'left'
    , enableProgress: true
};

let defaultOptions = {
    duration: 3      // 유지 시간  초
    , width: ''    // toast width
    , position: {
        vertical: 'top'    // top, middle, bottom
        , horizontal: 'right' // left, center, right
    }          // toast 위치
    , allowClose: false     // 닫기 버튼 여부
    , style: 'success'    //  백그라운드 색깔.
    , textColor: '#000000'  // 글자 색
    , enableCloseButton: true //  닫기 버튼 활성화 여부
    , enableProgress: true //  프로그래스 바 사용여부.
    , align: 'left'                 // 글자 위치 정렬.
    , items: ''
    , keepInstance: false // show 가 끝나도 toast 객체를 유지. toast 객체 하나 생성해서 계속 사용할 경우 사용  
}

function toastHiddenElement() {
    if (document.getElementById('daraToastHidden') == null) {
        document.querySelector('body')?.insertAdjacentHTML('beforeend', `<div id="daraToastHidden" class="dara-toast-hidden"></div>`);
    }

    return document.getElementById('daraToastHidden');
}

/**
 * Toast message 모듈
 */
export class Toast {

    constructor(options) {
        this.options = Object.assign({}, defaultOptions, options);
        toastIdx += 1;

        this.viewItemCount = 0;
        const position = this.options.position;

        const toastWrapperElement = document.createElement("div");
        toastWrapperElement.className = `dara-toast-wrapper ${position.vertical} ${position.horizontal} dt-${toastIdx}`;
        toastWrapperElement.style = `width:${this.options.width};`;
        toastHiddenElement().appendChild(toastWrapperElement)
        this.toastWrapperElement = toastWrapperElement;
        this.show(this.options.items);
    }
    /**
     * add toast item
     * @param {*} item 
     */
    addItem(item) {
        const enableHeader = item.title ? true : false;
        const toast = document.createElement("div");
        toast.className = `dara-toast ${this.options.style} ${enableHeader ? `header-mode` : ''}`;
        this.viewItemCount += 1;

        let toastHtml = `
            ${enableHeader ? `<div class="toast-header">${item.title}</div>` : ''}
            <div class="toast-body">
                <div class="toast-content">${item.text}</div>
            </div>
            ${item.enableCloseButton ? '<span class="toast-close">×</span>' : ''}
            ${item.enableProgress ? `<div class="progress-bar" style="animation: progressAnimation ${item.duration}s;"></div>` : ''}
        `;


        toast.innerHTML = toastHtml;

        if (this.options.position.vertical === 'top') {
            this.toastWrapperElement.insertAdjacentElement('afterbegin', toast); //prepend toast element 
        } else {
            this.toastWrapperElement.appendChild(toast); // Append the toast element
        }

        toast.timer = setTimeout(() => this.hide(toast), item.duration * 1000);

        toast.querySelector('.toast-close').addEventListener('click', () => {
            if (toast.timer) clearTimeout(toast.timer);
            this.hide(toast);
        });
    }

    /**
     * show toast message
     * @param {*} viewItems 
     * @returns 
     */
    show = (viewItems) => {

        if (typeof viewItems === 'undefined') {
            return;
        }

        let items = [];

        if (typeof viewItems === 'string') {
            items.push(viewItems);
        } else if (Array.isArray(viewItems)) {
            items = viewItems;
        } else {
            items.push(viewItems);
        }

        const enableCloseButton = this.options.enableCloseButton;
        const enableProgress = this.options.enableProgress;
        const duration = this.options.duration;
        items.forEach(item => {
            let viewItem;
            if (typeof item === 'string') {
                viewItem = { text: item };
            } else {
                viewItem = item;
            }

            viewItem.enableCloseButton = typeof viewItem.enableCloseButton === 'undefined' ? enableCloseButton : viewItem.enableCloseButton;
            viewItem.enableProgress = typeof viewItem.enableProgress === 'undefined' ? enableProgress : viewItem.enableProgress;
            viewItem.duration = typeof viewItem.duration === 'undefined' ? duration : viewItem.duration;

            this.addItem(Object.assign({}, defaultToastItem, viewItem));
        })

        return this;
    }

    /**
     * toast hide
     * @param {*} toast 
     */
    hide(toast) {
        this.viewItemCount -= 1;
        toast.classList.add("hide");
        if (toast.timeoutId) clearTimeout(toast.timeoutId);
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
    }
}
