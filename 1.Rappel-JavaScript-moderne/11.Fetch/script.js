fetch("https://jsonplaceholder.typicode.com/users")
.then ( response => {
  console.log(response);
  if(!response.ok) {
    throw new Error(`An error occured HTTP error code :  ${response.status}`);
  }
  return response.json();
})
.then ( data => {
  console.log(data);
})
.catch(e => {
  console.log(e);
})