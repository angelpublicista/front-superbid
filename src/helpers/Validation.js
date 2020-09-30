export const isActive = (campo) => {
    let button = document.querySelector(campo);

    if (button.classList.contains('active')) {
        return true;
    }

    return false;
}