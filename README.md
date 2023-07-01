# toast.js

# 사용방법
```
new Toast({ items: [{ text: '한글임 <br/>asdfwef' }],  style: 'success', duration: 3, position: { vertical: 'top', horizontal: 'left' } })
new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', '한글임한글임한글임ㄴㄴㄴㄴ'], style: 'primary', duration: 10, position: { vertical: 'top', horizontal: 'center' } })
var toastObj = new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], keepInstance: true, style: 'secondary', duration: 3, position: { vertical: 'top', horizontal: 'right' } })

new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'warning', duration: 10, position: { vertical: 'middle', horizontal: 'left' } })
new Toast({ items: [{ text: 'awseawefawefawefaweff <br/>asdfwef'}, 'test'], style: 'success', duration: 5, position: { vertical: 'middle', horizontal: 'center' } })
new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'info', duration: 10, position: { vertical: 'middle', horizontal: 'right' } })

new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'danger', duration: 10, position: { vertical: 'bottom', horizontal: 'left' } })
new Toast({ items: ['awseawefawefawefaweff <br/>asdfwef', 'test'], style: 'success', duration: 10, position: { vertical: 'bottom', horizontal: 'center' } })
new Toast({ items: [{ text: 'awseawefawefawefaweff <br/>asdfwef', title: 'title', duration:3 }, '한글임한글임한글'], style: 'success', duration: 5000, position: { vertical: 'bottom', horizontal: 'right' } })


```