const Style = {}
Style.root = {
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 16px 0px 16px',
  background: '#fff',
}

Style.top = {
  display: 'flex',
  paddingBottom: 20,
  borderBottom: '1px solid #f1f1f1',
}

Style.image = {
  maxWidth: 160,
  maxHeight: 130,
  width: '40%',
  height: '40%',
  borderRadius: 5,
}

Style.title = {
  fontSize: 24,
}

Style.subTitle = {
  fontSize: 18,
  color: '#555'
}

Style.topRight = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0px 15px 20px 15px',
  justifyContent: 'space-between'
}

Style.topMid = {
  display: 'flex'
}

Style.desc = {
  marginTop: 10,
  color: '#555',
  lineHeight: '200%'
}

Style.price = {
  marginLeft: 25,
  color: '#555',
}
export default Style