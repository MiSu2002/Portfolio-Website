import * as THREE from 'three';
import React from 'react';

class ThreeScene extends React.Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.6, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // make the background transparent
    this.mount.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 2);
    scene.add(light);

    setTimeout(() => {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshPhongMaterial({ color: 0x00feee, transparent: true, opacity: 0.3 });
      const cube1 = new THREE.Mesh(geometry, material);
      cube1.position.z = -2.5; // move the cube further away from the camera
      cube1.position.y = 0.35;
      scene.add(cube1);

      const animate = function () {
        requestAnimationFrame(animate);
        cube1.rotation.x += 0.005;
        cube1.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
      animate();
    }, 2030);

    window.addEventListener("resize", function () {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    // explicitly remove the second canvas element
  const canvasElements = this.mount.getElementsByTagName("canvas");
  if (canvasElements.length > 1) {
    this.mount.removeChild(canvasElements[1]);
  }
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default ThreeScene;