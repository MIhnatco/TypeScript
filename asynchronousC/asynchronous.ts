

async function fetchUserData(userId: number){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    const data = await response.json();
    return data
}

fetchUserData(1)
  .then((result) => {
    console.log('Fetched data:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });