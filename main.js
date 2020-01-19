let scene, camera, renderer, stars, starGeo ="coucou";
var containerInner = document.querySelector('#innerCanvas');

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
  // renderer.domElement.width = containerInner.clientWidth;
  // renderer.domElement.height = containerInner.clientHeight;
  renderer.domElement.style.width = containerInner.clientWidth + "px";
  renderer.domElement.style.height = containerInner.clientHeight + "px";
  document.querySelector('#innerCanvas').appendChild(renderer.domElement);
  console.log(window.innerWidth, window.innerHeight);
  console.log (containerInner.clientWidth, containerInner.clientHeight);
  console.log (containerInner.offsetWidth, containerInner.offsetHeight);
console.dir(renderer.domElement);

  starGeo = new THREE.Geometry();
  for (let i = 0; i < 6000; i++) {
    star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.01;
    starGeo.vertices.push(star);
  }

  let sprite = new THREE.TextureLoader().load('star.png');
  let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  window.addEventListener( "resize", onWindowResize, false );
  animate();
}

function onWindowResize(){

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.width = containerInner.clientWidth + "px";
  renderer.domElement.style.height = containerInner.clientHeight + "px";

}

function animate() {
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.y += 0.002;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
