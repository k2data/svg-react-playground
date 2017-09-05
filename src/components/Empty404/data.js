const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let arr = []
for (let i = 0; i < 64; i++) {
  arr.push({
    text: alphabet[Math.floor(Math.random() * 26)],
    index: i
  })
}
arr[12].text = '4'
arr[13].text = '0'
arr[14].text = '4'

arr[26].text = 'P'
arr[27].text = 'A'
arr[28].text = 'G'
arr[29].text = 'E'
arr[33].text = 'N'
arr[34].text = 'O'
arr[35].text = 'T'

arr[56].text = 'F'
arr[57].text = 'O'
arr[58].text = 'U'
arr[59].text = 'N'
arr[60].text = 'D'

arr[12].flag = true
arr[13].flag = true
arr[14].flag = true

arr[26].flag = true
arr[27].flag = true
arr[28].flag = true
arr[29].flag = true
arr[33].flag = true
arr[34].flag = true
arr[35].flag = true

arr[56].flag = true
arr[57].flag = true
arr[58].flag = true
arr[59].flag = true
arr[60].flag = true

export default arr
