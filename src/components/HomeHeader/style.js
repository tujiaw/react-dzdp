const Style = {}
Style.root = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgb(233, 32, 61)',
  padding: '10px',
  color: '#fff',
  fontSize: '16px',
  height: 30,
  flexShrink: 0,
}

Style.left = {
  width: 55,
  textAlign: 'left',
  margin: '0px 5px',
}

Style.right = {
  width: 35,
  paddingRight: 8,
  textAlign: 'right'
}

Style.link = {
  textDecoration: 'none',
  color: '#fff'
}

export default Style