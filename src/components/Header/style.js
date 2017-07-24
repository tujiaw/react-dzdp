const Style = {}
Style.root = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgb(233, 32, 61)',
  padding: '10px',
  color: '#fff',
  fontSize: '16px',
  lineHeight: 1,
}

Style.left = {
  width: 55,
  textAlign: 'left',
  margin: '0px 5px',
}

Style.mid = {
  display: 'flex',
  flex: 1,
}

Style.right = {
  width: 35,
  paddingRight: 8,
  textAlign: 'right'
}

Style.iconSearch = {
  position: 'relative',
  left: 22,
  top: 4,
  color: '#ccc',
  visibility: ''
}

Style.input = {
  display: 'flex',
  flex: 1,
  backgroundColor: '#fff',
  borderRadius: 15,
  overflow: 'hidden',
  padding: 5,
  paddingLeft: 25,
  border: 0,
  outline: 0,
}

export default Style