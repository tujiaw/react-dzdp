const Style = {}
Style.root = {
  backgroundColor: '#fff',
}

Style.item = {
  display: 'flex',
  marginLeft: 20,
  marginRight: 20,
  paddingBottom: 10,
  paddingTop: 10,
  borderBottom: '1px solid #ccc',
}

Style.right = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginLeft: 10,
  marginBottom: 10,
  justifyContent: 'space-between',
}

Style.rightTop = {
  display: 'flex',
  justifyContent: 'space-between',
}

Style.rightBottom = {
  display: 'flex',
  justifyContent: 'space-between',
}

Style.image = {
  width: 120,
  height: 100,
  borderRadius: 5,
}

Style.title = {
  fontSize: 22,
  fontWeight: 550
}

Style.subtitle = {
  fontSize: 17,
  color: '#555'
}

Style.price = {
  fontSize: 25,
  color: 'rgb(233, 32, 61)',
  fontWeight: 600,
}

Style.distance = {
  color: '#555'
}

Style.number = {
  color: '#555'
}

export default Style