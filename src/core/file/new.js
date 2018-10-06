import 'aframe';
const New = () => {
    var scene = document.querySelector('a-scene');

    if (scene.hasLoaded) {
        run();
    } else {
        scene.addEventListener('loaded', run);
    }

    function run () {
        var entity = scene.querySelector('a-entity');
        entity.setAttribute('material', 'color', 'red');
    }
};
export default New;