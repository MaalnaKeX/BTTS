const main = document.getElementsByTagName('main');

function changeMain(tab) {
    if (tab == 'info') {
        main.innerHTML = 'info_html';
    } else if (tab == 'matek') {
        main.innerHTML = 'mat_html';
    } else if (tab == 'fizika') {
        main.innerHTML = 'fiz_html';
    } else if (tab == 'tori') {
        main.innerHTML = 'tor_html';
    } else if (tab == 'magyar') {
        main.innerHTML = 'magy_html';
    } else if (tab == 'angol') {
        main.innerHTML = 'ang_html';
    } else if (tab == 'nemet') {
        main.innerHTML = 'nem_html';
    }
}