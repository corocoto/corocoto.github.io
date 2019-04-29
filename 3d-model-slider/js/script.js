const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
let loader=new THREE.TextureLoader();
let controls,textureObjLoader,map,material,objLoader;

const objects=['banana.obj','raptor.obj'];
const allTextures=[
    ['banana_standard_texture.png','banana_saturation_texture.png', 'banana_cold_texture.png'],
    ['raptor_standard.png','raptor_negative.png']
];
const names=['banana','raptor'];
let currentObj=0;

const up_arrow=document.querySelector('.fa-angle-up');
const down_arrow=document.querySelector('.fa-angle-down');

//base functions for starting
settings();
loadMesh(currentObj);


up_arrow.onclick=()=>{
    removeMesh(currentObj);
    (!currentObj) ? currentObj=objects.length-1 : currentObj--;
    loadMesh(currentObj);
};

down_arrow.onclick=()=>{
    removeMesh(currentObj);
    currentObj===objects.length-1 ? currentObj=0 : currentObj++;
    loadMesh(currentObj);
};

//all settings in one function
function settings(){
    visualSettings();
    settingsWithLights();
    controlsSettings();
}
//global settings
function visualSettings(){
    loader.load('img/bg_prod.jpg' , (texture)=> scene.background = texture);
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.querySelector('.page').appendChild(renderer.domElement);
    camera.position.set(5,2,1);
}
//add lights
function settingsWithLights(){
    let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1),
        fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(7,100%,68%)'), 0.75),
        backLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(-100, 0, 100);
    fillLight.position.set(100, 0, 100);
    backLight.position.set(100, 0, -100).normalize();
    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);
}
//an event for resizing an object and viewing it from various angles
function controlsSettings() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.campingFactor = 0.25;
    controls.enableZoom = true;
}


function loadMesh(i) {
    textureObjLoader = new THREE.TextureLoader(),
        map = textureObjLoader.load(`./models/${allTextures[i][0]}`);
    material = new THREE.MeshPhongMaterial({map: map});
    objLoader = new THREE.OBJLoader();

    objLoader.load(`./models/${objects[i]}`, function (obj) {
        obj.traverse( node=>{if (node.isMesh) node.material = material});
        obj.name = names[i];
        scene.add(obj);
    });
    clearTexture();
    for (let item = 0; item < allTextures[i].length; item++) {
        document.querySelector('.color_scheme').innerHTML += `<div class="color_scheme__block" style="background: url(img/div/${allTextures[i][item]});"></div>`;
    }
    changeTexture(i);
}
//function for change current object



function changeTexture(i) {
    let colorBlocks = document.querySelectorAll('.color_scheme__block');
    colorBlocks.forEach((val) => {
        val.onclick = () => {
            let value= val.style.background,
                arr = value.split('/'),
                result=arr[arr.length-1].slice(0,-2);
            textureObjLoader.load(`./models/${result}`, function(texture){
                let mat = scene.getObjectByName( names[i], true).children[0].material;
                mat.map = texture;
                mat.needsUpdate = true;
            });
        };
    });
}

//function for remove current obj
function removeMesh(i){
    scene.remove(scene.getChildByName(names[i]));
}

//function for clear texture blocks
function clearTexture(){
    let myNode = document.querySelector('.color_scheme');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}


function render() {
    renderer.render(scene,camera);
    controls.update();
    requestAnimationFrame(render);
}
render();

window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
