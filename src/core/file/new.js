const New = () => {
    var scene = document.querySelector('a-scene');

    if (scene.hasLoaded) {
        clear();
    } else {
        scene.addEventListener('loaded', run);
    }

    function clear () {
        scene.clear();
    }
};
export default New;