const main = document.getElementsByTagName('main');

function changeMain(subject) {
    if (subject == 'info') {
        main.innerHTML = 'info_html';
    } else if (subject == 'matek') {
        main.innerHTML = 'mat_html';
    } else if (subject == 'fizika') {
        main.innerHTML = 'fiz_html';
    } else if (subject == 'tori') {
        main.innerHTML = 'tor_html';
    } else if (subject == 'magyar') {
        main.innerHTML = 'magy_html';
    } else if (subject == 'angol') {
        main.innerHTML = 'ang_html';
    } else if (subject == 'nemet') {
        main.innerHTML = 'nem_html';
    }
}