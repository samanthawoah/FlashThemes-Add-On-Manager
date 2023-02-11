var category = 'themes';
var option = 'all';
var installed;
var json = {};

function manageAddon(action, id) {
    switch (action) {
        case 'install': {
            
            break;
        }
        case 'uninstall': {
            
            break;
        }
    }
}

function showContent(view) {
    $('#content').attr('class', 'on');
    $(`#${option}`).attr('class', '');
    $(`#${view}`).attr('class', 'on');
    option = view;
    if (view == 'browse') {
        
    }
}

function switchCategory(cat) {
    $(`#${category}`).attr('class', '');
    $(`#${cat}`).attr('class', 'on');
    category = cat;
    installed = JSON.parse(window.localStorage.getItem(cat));
    showContent('all');
}

$('a').on('click', (e) => {
    var id = $(e.target).attr('id');
    switch (id) {
        case 'themes':
        case 'plugins': {
            switchCategory(id)
            break;
        }
        case 'all':
        case 'enabled':
        case 'disabled':
        case 'browse': {
            showContent(id)
            break;
        }
        case 'install':
        case 'enable':
        case 'disable':
        case 'uninstall': {
            manageAddon(id, $(e.target).parents(2).attr('id'));
            break;
        }
    }
})

switchCategory('themes');