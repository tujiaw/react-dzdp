const Style = {}

Style.root = {
  display: 'flex', 
  flex: 1,
  flexDirection: 'column', 
  height: '100vh',
}

Style.contentWrap = {
  display: 'flex', 
  flexDirection: 'column',
  flex: 1
}

Style.content = {
  overflowY: 'scroll', 
}

Style.blank = {
  minHeight: 15, 
  maxHeight: 15
}

// 隐藏滚动条兼容非webkit浏览器
const isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > 0
if (!isWebkit) {
  Style.contentWrap = {
    ...Style.contentWrap,
    overflowY: 'hidden', 
    position: 'relative'
  }

  Style.content = {
    ...Style.content,
    paddingRight: 17, 
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: -17
  }
}


export default Style