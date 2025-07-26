
// 通用函数，用于切换显示内容
function showContent(targetId) {
    const sections = ['one', 'photo', 'label', 'me', 'bili', 'talk'];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = id === targetId ? 'block' : 'none';
        }
    });
}

// 定义各个导航对应的函数
function one() {
    showContent('one');
}

function photo() {
    showContent('photo');
}

function label() {
    showContent('label');
}

function me() {
    showContent('me');
}

function bili() {
    showContent('bili');
}

function talk() {
    showContent('talk');
}

function np(){
    open('https://baike.baidu.com/item/%E5%8D%97%E5%B9%B3%E5%B8%82/122506')
}