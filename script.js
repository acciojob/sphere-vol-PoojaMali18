function volume_sphere() {
   
  	event.preventDefault();
	let volumes = document.getElementById('volume');
    const radius = MyForm.radius.value;
     const volume = (4 / 3) * Math.PI * radius*radius*radius;
  
	volumes.value = volume;
   
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
