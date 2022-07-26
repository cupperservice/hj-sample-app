const imageThumbnail = require('image-thumbnail');
const fs = require('fs')

const options = {
  width: 100,
  height: 100,
}

imageThumbnail('public/images/inei.png', options)
    .then(thumbnail => {
      console.log(thumbnail)
      fs.writeFile('public/thumbnail/inei.png', thumbnail, err => {
        if (err) {
          console.log(err)
        } else {
          console.log('done')
        }
      })
    })
    .catch(err => console.error(err));
