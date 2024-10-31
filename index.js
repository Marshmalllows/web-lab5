function subheaderSidebarFooterSwapContent() {
    const subheader = document.getElementsByClassName('sub-header')[0];
    const footer = document.getElementsByClassName('sidebar-footer')[0];
    const temp = subheader.innerHTML;
    subheader.innerHTML = footer.innerHTML;
    footer.innerHTML = temp;
}

function parallelogramArea() {
    let side = 5;
    let height = 4;
    let area = side * height;
    const text = document.getElementsByClassName('text')[0];
    text.insertAdjacentHTML('beforeend', "<br>Площа паралелограма: " + area.toString());
}

function processNumber(number) {
    const digits = number.toString().split('');
    let largest = digits[0];
    for (let i = 1; i < digits.length; i++) {
        if (digits[i] > largest) {
            largest = digits[i];
        }
    }
    document.cookie = "digit=" + largest + "; path=/";
    alert("Найбільша цифра у вашому числі: " + largest + "\nЦифру збережено в пряниках!");
}

function getCookieDigit() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === "digit") {
            return parseInt(cookieValue);
        }
    }
    return null;
}

function deleteCookieDigit() {
    document.cookie = "digit=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

const form = document.getElementById('Form-Number');

if (getCookieDigit() === null) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const number = Number(document.getElementById('number').value);
        processNumber(number);
    });
} else {
    alert("Число збережене в пряниках: " + getCookieDigit() + "\nПісля натискання кнопки \"Ок\" пряник буде " +
        "видалено, а форма стане доступною лише після оновлення сторінки");
    deleteCookieDigit();
    form.style.display = "none";
}

const radios = document.getElementById('Radios');
const leftSidebar = document.getElementsByClassName('left-sidebar')[0];
const rightSidebar = document.getElementsByClassName('sidebar')[0];
const text = document.getElementsByClassName('text')[0];

const selectedOption = JSON.parse(localStorage.getItem('options'));
if (selectedOption) {
    const radio = document.querySelector(`input[name="options"][value="${selectedOption}"]`);
    if (radio) {
        radio.checked = true;
        mouseEvents(document.querySelector('input[name="options"]:checked').value);
    }
}

radios.addEventListener('change', function() {
    const choice = document.querySelector('input[name="options"]:checked').value;
    localStorage.setItem('options', JSON.stringify(choice));
    mouseEvents(choice);
});

function mouseEvents(choice) {
    switch (choice) {
        case 'left-bar':
            leftSidebar.addEventListener('mouseout', mouseOut);
            leftSidebar.addEventListener('mouseover', mouseOver);
            text.removeEventListener('mouseout', mouseOut);
            rightSidebar.removeEventListener('mouseout', mouseOut);
            text.style.textAlign = 'left';
            rightSidebar.style.textAlign = 'left';
            break;
        case 'right-bar':
            rightSidebar.addEventListener('mouseout', mouseOut);
            rightSidebar.addEventListener('mouseover', mouseOver);
            text.removeEventListener('mouseout', mouseOut);
            leftSidebar.removeEventListener('mouseout', mouseOut);
            text.style.textAlign = 'left';
            leftSidebar.style.textAlign = 'left';
            break;
        case 'contents':
            text.addEventListener('mouseout', mouseOut);
            text.addEventListener('mouseover', mouseOver);
            leftSidebar.removeEventListener('mouseout', mouseOut);
            rightSidebar.removeEventListener('mouseout', mouseOut);
            leftSidebar.style.textAlign = 'left';
            rightSidebar.style.textAlign = 'left';
            break;
    }
}

function mouseOut(event) {
    event.currentTarget.style.textAlign = 'right';
}

function mouseOver(event) {
    event.currentTarget.style.textAlign = 'left';
}

const selector = document.getElementById('SelectItem');
const textForm = document.getElementById('TextForm');

textForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const value = document.getElementById('textInput').value;
    processTextList(value);
});

function processTextList(text) {
    if (!selector.value){
        alert("Будь ласка, оберіть елемент для додавання!")
        return;
    }

    let storedItems = JSON.parse(localStorage.getItem('orderedList')) || [];
    storedItems.push(text);
    localStorage.setItem('orderedList', JSON.stringify(storedItems));

    const blockNumber = parseInt(selector.value.charAt(selector.value.length - 1));
    const list = document.getElementById(`list${blockNumber}`);
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
}

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('orderedList');
});