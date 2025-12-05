const navLists = document.querySelectorAll('nav-lists');
const navList = document.querySelectorAll('nav-list');
const navList1 = document.getElementById('nav-list-1')
const navList2 = document.getElementById('nav-list-2')

// const navListBtn = document.querySelectorAll('nav-list-btn');

function dragList() {
    // navListBtn.forEach(Btn => {
    //     Btn.addEventListener('drag', () => {
            navLists.forEach(list => {
                list.addEventListener('dragstart', e => {
                    console.log('Dragging item', e.target)
                });
            });
    //     });
    // });
}

dragList()

