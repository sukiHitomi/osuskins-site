// folders
const folderLinks = document.querySelectorAll('.folder-link');

if (folderLinks.length > 0) {
    for (let index = 0; index < folderLinks.length; index++) {
        const folderLink = folderLinks[index];
        folderLink.addEventListener("click", function (e) {
            const folderName = folderLink.getAttribute('href').replace('#', '');
            const currentFolder = document.getElementById(folderName);
            folderOpen(currentFolder);
            e.preventDefault();
        });
    }
}

function folderOpen (currentFolder) {
    if (currentFolder) {
        const folderActive = document.querySelector('.folder.open');
        currentFolder.classList.add('open');
        currentFolder.addEventListener('click', function (e) {
            if (!e.target.closest('.folder-container')) {
                folderClose(e.target.closest('.folder'));
            }
        });
    }
}

function folderClose (folderActive) {
    folderActive.classList.remove('open');
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const folderActive = document.querySelector('.folder.open');
        folderClose(folderActive);
    }
});

// search
document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let blocks = document.querySelectorAll('.block');
    let searchItems = document.querySelectorAll('.skinname');
    let noresults = document.querySelector('.noresults');
    if (val != '') {
        blocks.forEach(function(block) {
            searchItems.forEach(function(item) {
                if (block.innerText.search(RegExp(val,"gi")) == -1) {
                    block.classList.add('hide');
                } else {
                    block.classList.remove('hide');
                }
            });
        });
    } else {
        blocks.forEach(function(block) {
            searchItems.forEach(function(item) {
                block.classList.remove('hide');
            });
        });
    };
    if ($('.hide').length >= blocks.length + 1) {
        noresults.classList.remove('hide')
    } else {
        noresults.classList.add('hide')
    }
    console.log($('.hide').length)
}