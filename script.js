function volume_sphere() {
   
  	event.preventDefault();
	
    const radius = MyForm.radius.value;

    // Calculate the volume of the sphere
     const volume = (4 / 3) * Math.PI * radius*radius*radius;

    // Display the volume in the "volume" input field
    let volumes = document.getElementById('volume');
	volumes.value = volume;
   
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
