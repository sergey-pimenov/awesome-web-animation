export default ({ api, path = '', headers, callback }) => {
  fetch(`${api}${path}`, {
    headers: new Headers(headers),
  })
    .then((response) => {
      if (response.status !== 200) {  
        console.log('ERRRROR!!!111123123');  
        return;  
      }

      response.json().then(data => callback(data));  
    })
}
