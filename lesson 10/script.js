'use strict';

// Создать класс options +
// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign +
// ·        Он должен содержать метод, создающий новый div на странице, +
// записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров +
// ·        Создать новый объект через класс + 
// ·        Вызвать его метод и получить элемент на странице +

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
      this.elm = document.createElement('div');
    }
    newDiv(style, text) {
        let txt = document.createTextNode(text);
        this.elm.appendChild(txt);  
        this.elm.style.cssText = `height:${this.height}px; width:${this.width}px; 
            background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align:${this.textAlign};` + style;
        document.body.appendChild(this.elm);
      }
  }

  let element = new Options('100', '300', 'orange', '15', 'center');
  element.newDiv("background-color:pink;", 'testing');
  element.newDiv("text-align: left;", 'added');