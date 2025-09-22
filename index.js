// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevents page reload

const { useEffect, use } = require("react");

//     const name = document.getElementById('name').value;
//     const pass = document.getElementById('pass').value;

//     // Handle the form data (e.g., log it or send to server)
//     console.log('Name:', name);
//     console.log('Password:', pass);
// });
const formData = new FormData();
formData.append('name', 'John');
formData.append('pass', '12345');

// useEffect(() => {
//     fetch('url', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             // handle response data
//             console.log(data);
//         })
//         .catch(error => {
//             // handle error
//             console.error(error);
//         });
// }, []);

useEffect(()=>{
  fetch('url',{
    method:'POST',
    body: formData
  })
  .then(Response=>Response.json())
  .then(data=>{
    console.log(data)

  })
   .catch(console.error);
},[])