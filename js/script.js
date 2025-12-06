const items = document.querySelectorAll('.item');
let dragged = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {
    item.addEventListener('pointerdown', e => {
        dragged = item;

        const rect = item.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        item.style.position = 'absolute';
        item.style.zIndex = '999';

        item.setPointerCapture(e.pointerId);

        item.addEventListener('pointermove', handleMove);
        item.addEventListener('pointerup', handleUp);
    });
});

function handleMove(e) {
    dragged.style.left = `${e.clientX - offsetX}px`;
    dragged.style.top = `${e.clientY - offsetY}px`;
}

function handleUp(e) {
    dragged.releasePointerCapture(e.pointerId);

    // detect which list you dropped on
    const lists = document.querySelectorAll('.list');

    lists.forEach(list => {
        const rect = list.getBoundingClientRect();

        const inside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        if (inside) {
            list.appendChild(dragged);
        }
    });

    // reset positioning
    dragged.style.position = '';
    dragged.style.left = '';
    dragged.style.top = '';
    dragged.style.zIndex = '';

    dragged.removeEventListener('pointermove', handleMove);
    dragged.removeEventListener('pointerup', handleUp);

    dragged = null;
}
