const init = async () => {
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
  } catch(err) {
    const errorHolder = document.querySelector('#errMsg');
    errorHolder.innerHTML = `<p>${err.name}</p>`;
    console.error(err);
    return
  }
  const video = document.querySelector('video');
  video.srcObject = stream;
}

document.querySelector('#showVideo').addEventListener('click', () => {
  init()
})