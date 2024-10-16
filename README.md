# Toast

Simple toast message

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/darainfo/@daracl%2Ftoast/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/@daracl%2Ftoast.svg)](https://img.shields.io/npm/v/@daracl%2Ftoast)
[![npm](https://img.shields.io/npm/dt/@daracl%2Ftoast)](https://github.com/darainfo/daracl.toast/releases)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@daracl%2Ftoast)](https://bundlephobia.com/package/@daracl%2Ftoast)


## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Internet Explorer](https://raw.githubusercontent.com/alrra/browser-logos/main/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)  
--- | --- | --- | --- | --- |  --- | 
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |   ie 11 > |


<p>
<img src="https://github.com/darainfo/daracl.toast/blob/main/demo.gif?raw=true"/>
</p>



# build
```
npm run build

```

# 사용방법
```
Daracl.toast.create({ items: [{ text: '한글임 <br/>asdfwef' }],  style: 'success', duration: 3, position: { vertical: 'top', horizontal: 'left' } })
Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', '한글임한글임한글임ㄴㄴㄴㄴ'], style: 'primary', duration: 10, position: { vertical: 'top', horizontal: 'center' } })
var toastObj = Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], keepInstance: true, style: 'secondary', duration: 3, position: { vertical: 'top', horizontal: 'right' } })

Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'warning', duration: 10, position: { vertical: 'middle', horizontal: 'left' } })
Daracl.toast.create({ items: [{ text: 'awseawefawefawefaweff <br/>asdfwef'}, 'test'], style: 'success', duration: 5, position: { vertical: 'middle', horizontal: 'center' } })
Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'info', duration: 10, position: { vertical: 'middle', horizontal: 'right' } })

Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'danger', duration: 10, position: { vertical: 'bottom', horizontal: 'left' } })
Daracl.toast.create({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'success', duration: 10, position: { vertical: 'bottom', horizontal: 'center' } })
Daracl.toast.create({ items: [{ text: 'awseawefawefawefaweff <br/>asdfwef', title: 'title', duration:3 }, '한글임한글임한글'], style: 'success', duration: 5000, position: { vertical: 'bottom', horizontal: 'right' } })

```
  

# toast 옵션
| key | 설명 | 기본값 | 옵션값 |
|-----|------|-----|-----|
| duration |  유지 시간(단위 초) |  3 |  |
| width |  넓이 |  '' |  |
| position |   위치 |   vertical: 'top' <br> horizontal: 'right'   |  top, middle, bottom <br>  left, center, right
| enableCloseButton |  닫기 버튼 활성화여부 |  true |  |
| style |  백그라운드 스타일 |  'success' | 'primary', 'secondary' , 'info' , 'success' , 'warning' , 'danger' |
| textColor |  글자 색 |  '#000000' | |
| enableProgress |  프로그래스 바 사용여부 |  true |  |
| keepInstance |  show 가 끝나도 toast 객체를 유지 <br> toast 객체 하나 생성해서 계속 사용할 경우 사용 |  false | 
  


# toast item 옵션
| key | 설명 | 기본값 | 옵션값 |
|-----|------|-----|-----|
| title |  제목 |  '' |  |
| enableCloseButton |  닫기 버튼 활성화여부 |  true |  |
| style |  백그라운드 스타일 |  'success' | 'primary', 'secondary' , 'info' , 'success' , 'warning' , 'danger' |
| textColor |  글자 색 |  '#000000' | |
| enableProgress |  프로그래스 바 사용여부 |  true | |

```