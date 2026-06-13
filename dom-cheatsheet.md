# 📋 Шпаргалка по DOM

## 🔍 Поиск элементов

```javascript
document.querySelector('.class')      // первый по CSS-селектору
document.querySelector('#id')         // по id
document.querySelector('button')      // по тегу
document.querySelectorAll('.item')    // ВСЕ совпадения → NodeList (можно forEach)

// Поиск ВНУТРИ элемента (не по всей странице!)
element.querySelector('.deleteBtn')   // ищет только внутри element
```

> ⚠️ В селектор передаём `.class` и `#id` с точкой/решёткой,
> а в `classList.add('text')` — БЕЗ точки.

---

## 🛠️ Создание и вставка

```javascript
const el = document.createElement('li');   // создать элемент

parent.append(el);        // вставить В КОНЕЦ родителя (можно текст и узлы)
parent.prepend(el);       // вставить В НАЧАЛО
parent.appendChild(el);   // старый аналог append (только узлы)

el.remove();              // удалить сам элемент
parent.removeChild(el);   // удалить потомка (старый способ)
```

---

## ✏️ Содержимое

```javascript
el.textContent = 'Привет';          // только текст (безопасно)
el.innerHTML = '<b>Привет</b>';     // HTML внутри (ОСТОРОЖНО: перезаписывает!)
el.innerHTML += '<span>+</span>';   // ДОБАВИТЬ к существующему (+=)

el.value                            // значение input/textarea
input.value = '';                   // очистить поле
```

> ⚠️ `innerHTML =` затирает всё содержимое. Чтобы добавить — используй `+=`
> или лучше `append` / `createElement`.

---

## 🎨 Классы и стили

```javascript
el.classList.add('active')       // добавить класс
el.classList.remove('active')    // убрать
el.classList.toggle('active')    // есть → убрать, нет → добавить
el.classList.contains('active')  // true / false

el.style.color = 'red';          // инлайн-стиль
el.style.display = 'none';       // скрыть
```

---

## 🎯 Атрибуты

```javascript
el.getAttribute('href')              // прочитать
el.setAttribute('href', '#')         // установить
el.removeAttribute('disabled')       // удалить
el.id = 'main';                      // частые атрибуты — напрямую
el.dataset.userId                    // data-user-id="..." → dataset.userId
```

---

## ⚡ События

```javascript
el.addEventListener('click', (event) => {
    console.log(event.target);   // элемент, на котором сработало
    event.preventDefault();      // отменить действие по умолчанию
});

el.removeEventListener('click', handler);  // отписаться (нужна ИМЕНОВАННАЯ функция)
```

**Частые события:**

| Событие     | Когда срабатывает                  |
|-------------|------------------------------------|
| `click`     | клик мышью                         |
| `input`     | ввод в поле (на каждый символ)     |
| `change`    | поле потеряло фокус после изменения|
| `submit`    | отправка формы                     |
| `keydown`   | нажатие клавиши                    |
| `mouseover` | навели курсор                      |

---

## 🌳 Навигация по дереву

```javascript
el.parentElement       // родитель
el.children            // дети (HTMLCollection)
el.firstElementChild   // первый ребёнок
el.lastElementChild    // последний
el.nextElementSibling  // следующий сосед
```

---

## 🔁 Перебор найденных элементов

```javascript
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.classList.add('done');
});
```

---

## 💡 Частые ошибки (из твоей практики)

```javascript
// ❌ точка в classList
el.classList.add('.text');
// ✅
el.classList.add('text');

// ❌ глобальный поиск вместо поиска внутри элемента
const btn = document.querySelector('#deleteBtn');  // берёт ПЕРВЫЙ на странице
// ✅ ищем внутри конкретного li
const btn = newItem.querySelector('.deleteBtn');

// ❌ querySelector до вставки в DOM
const btn = document.querySelector('#del');  // элемента ещё нет
ul.append(newItem);
// ✅ сначала вставить, потом искать (или искать через newItem)
ul.append(newItem);
const btn = newItem.querySelector('.del');

// ❌ id для множества одинаковых элементов
'<button id="deleteBtn">'   // id должен быть УНИКАЛЬНЫМ
// ✅ class
'<button class="deleteBtn">'
```
