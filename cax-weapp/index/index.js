import cax from '../cax/index'

Page({
  onLoad: function (options) {
    const info = wx.getSystemInfoSync()
    const stage = new cax.Stage(info.windowWidth, info.windowHeight, 'myCanvas', this)

    const button = new cax.Button({ width: 100, height: 40, text: "I am button!" }) 
    button.y = 0
    button.x = 0
    stage.add(button)
    button.on('tap', () => {
      console.log('rect touchend')
    })

    const sprite = new cax.Sprite({
      framerate:  8,
      imgs: ['https://midu.studio515.cn/dino.png'],
      frames: [
        // x, y, width, height, originX, originY ,imageIndex
        [1, 1, 204, 142],
        [207 , 1, 204, 142],
        [413 , 1, 204, 142],
        [619, 1, 204, 142],
        [825, 1, 204, 142],
        [1031 , 1, 204, 142],
        [1237 , 1, 204, 142],
        [1443 , 1, 204, 142],
      ],
      animations: {
        walk: {
          frames: [0, 1,2,3,4,5,6,7]
        }
      },
      playOnce: false,
      currentAnimation: 'walk',
      animationEnd: function () {
        // console.log("end")
      }
    })
  

    sprite.x = 50
    sprite.width = 204
    sprite.height = 142
    sprite.y = 50
    stage.add(sprite)
    sprite.on('tap', () => {
      console.log(' 触碰了恐龙 ')
    })
    
    setInterval(function () {
      stage.update()
    }, 16)

  }
})
