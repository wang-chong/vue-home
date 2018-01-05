let count = 0
addEventListener('message', function (msg) {
  setInterval(() => {
    count++
    postMessage(count)
  }, 1000)
}, false)
