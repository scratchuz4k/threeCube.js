import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default function useThree() {
  const scene = new THREE.Scene();
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 20;
  const canvas = document.getElementById("webgl");


  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  ambientLight.castShadow = true;
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.castShadow = true;
  spotLight.position.set(0, 64, 32);
  scene.add(spotLight);


  const addCubes = (x, y, z) => {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial(0xfffff);
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(x, y, z)
    scene.add(boxMesh);
  }

  const controls = new OrbitControls(camera, renderer.domElement);

  const stats = Stats();
  document.body.appendChild(stats.dom);

  const onMouseMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children)

    for (let i = 0; i < intersects.length; i++) {
      if (intersects[0].object.material.color != 0xff0000) {
        intersects[0].object.material.color.set(0xff0000)
      } else {
        intersects[0].object.material.color.set(0xfffff)
      }

    }

  }

  const animate = () => {
    stats.update();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  return {
    addCubes,
    animate,
    onMouseMove
  };
}
