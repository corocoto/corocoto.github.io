const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000),
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
let loader=new THREE.TextureLoader();
loader.load('img/bg_prod.jpg' , (texture)=> scene.background = texture);

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(5,2,1);
let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1);
keyLight.position.set(-100, 0, 100);
let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(7,100%,68%)'), 0.75);
fillLight.position.set(100, 0, 100);
let backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(100, 0, -100).normalize();
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

let mtlLoader=new THREE.MTLLoader();
mtlLoader.setTexturePath('./model/');
mtlLoader.setPath('./model/');
mtlLoader.load('tigre_sumatra_sketchfab.mtl', (materials)=>{
    materials.preload();
    let objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('./model/');
    objLoader.load('tigre_sumatra_sketchfab.obj', (obj)=>{
        obj.scale.set(2.5,2.5,2.5);
        scene.add(obj);
    });
});



let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping=true;
controls.campingFactor=0.25;
controls.enableZoom=true;

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
