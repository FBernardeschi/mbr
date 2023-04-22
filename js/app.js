let msg = document.querySelectorAll('.msg');

function showMsg(msg) {
    let i = 0;
    msg.forEach(el => {
        i++;
        let time = 3500 * (i+0.5);
        setTimeout(() => {
            el.classList.add('show');
        }, time, el);

    });
};

let msgText = [
    ['dima', 'Мбр сколько?'],
    ['dasha', '1к'],
    ['dima', 'Хули так много?'],
    ['dasha', 'среднерыночная цена'],
    ['dima', 'Ладно касарь, сосёшь и показываешь пизду, ок?'],
    ['dasha', 'у меня не брито'],
    ['dima', 'Тогда 700'],
    ['dasha', '900'],
    ['dima', '750'],
    ['dasha', '🤝'],
    ['dima', 'Подруга есть?'],
    ['dasha', 'с подругой 3к'],
    ['sis', 'Кайфьян появляется в чате'],
    ['dima', 'Привет'],
    ['tanay', 'фу, я не буду у него'],
    ['dima', 'Почему?'],
    ['tanay', 'ты козявками питаешься'],
    ['dima', 'Я веган'],
    ['tanay', 'ты хачик'],
    ['sis', 'чурка вышел(а) из чата']
];
// showMsg(msg);
let wrapper = document.querySelector('.wrapper');

i = 0;
msgText.forEach(el => {
    i++;
    setTimeout(() => {
        let element = document.createElement('div');
        element.className = 'msg show-animation ' + el[0];
        element.textContent = el[1];
        wrapper.appendChild(element);
        wrapper.scrollTop = wrapper.scrollHeight;
    }, 3300 * i);
})
