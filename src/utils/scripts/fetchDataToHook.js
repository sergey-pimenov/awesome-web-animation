export default ({ api, path = '', headers, callback }) => {
  fetch(`${api}${path}`, {
    headers: new Headers(headers),
  })
    .then(response => {
      if (response.status === 200) response.json().then(data => callback(data));
    });
}
