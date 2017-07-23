const Style = {}

Style.root = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
}

Style.top = {
  fontSize: 16,
  fontWeight: 700,
  padding: '0px 0px 15px 15px',
  borderBottom: '1px solid #f1f1f1'
}

Style.bottom = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
}

Style.imageContainer = {
  width: '33.3%',
  height: 'auto' // 一定要指定高度，否则下面的元素会覆盖在上面
}

Style.image = {
  width: '100%',
  height: '100%'
}

export default Style