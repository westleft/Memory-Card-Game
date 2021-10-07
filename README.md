# Memory Card Game 
<img src="https://img.shields.io/badge/JavaScript-exercise-yellow">　<img src="https://img.shields.io/badge/CSS-exercise-blue">

遊戲連結：[點我](https://westleft.github.io/Memory-Card-Game/)

![](https://i.imgur.com/KlO6ekE.png)

## 關於遊戲
* 生命值7，超過7次則重製遊戲
* 翻牌後不可再次點選卡片
## 隨機產生牌組

```js
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};
```

## CSS 3D效果
```css
/* 外層 */
section {
    perspective: 800px;
}
/* 內層 */
.card {
    transform-style: preserve-3d;
    transition: all 2s cubic-bezier(0.075, 0.885, 0.32, 1.275);
}
```
關於3D效果可以參考[此篇](https://wcc723.github.io/css/2016/01/24/css-3d/) <br>
遊戲中的翻牌效果使用`cubic-bezier`貝茲曲線
