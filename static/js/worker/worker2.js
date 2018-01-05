addEventListener('message', function (msg) {
  const arr = msg.data
  postMessage(quickSort(arr))
}, false)

function quickSort (arr) {
  let left = []
  let right = []
  if (arr.length < 2) {
    return arr
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([arr[0]], quickSort(right))
}
