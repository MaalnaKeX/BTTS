function init(){
    const content = document.getElementById("content");
    const title = document.getElementById("title");
};

window.onload = init;

function changeMain(tab, obj) {
    // if (tab == 'info') {
    //     main.innerHTML = 'info_html';
    // } else if (tab == 'matek') {
    //     main.innerHTML = 'mat_html';
    // } else if (tab == 'fizika') {
    //     main.innerHTML = 'fiz_html';
    // } else if (tab == 'tori') {
    //     main.innerHTML = 'tor_html';
    // } else if (tab == 'magyar') {
    //     main.innerHTML = 'magy_html';
    // } else if (tab == 'angol') {
    //     main.innerHTML = 'ang_html';
    // } else if (tab == 'nemet') {
    //     main.innerHTML = 'nem_html';
    // }
    title.innerHTML = obj.innerHTML;
    console.log(tab);
}