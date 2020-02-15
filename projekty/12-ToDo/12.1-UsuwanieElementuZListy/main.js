const removeTask = (e) => {

    // 1 sposob
    // e.target.parentNode.remove();

    // 2 sposob
    // e.target.parentNode.style.textDecoration = 'line-through';
    // e.target.remove();

    // 3 sposob
    const index = e.target.dataset.key;
    // console.log(index);
    document.querySelector(`li[data-key="${index}"]`).remove();


}

// document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));