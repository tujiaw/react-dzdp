const Style = {}
Style.root = {
  display: 'flex',
  flexDirection: 'column',
}

Style.inputWrap = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  position: 'relative'
}

Style.icon = {
  left: 10,
  width: 20,
  color: 'rgb(233, 32, 61)',
  position: 'absolute',
}

Style.input = {
  display: 'flex',
  flex: 1,
  height: 28,
  paddingLeft: 30,
  border: 0,
  outline: 0,
  borderRadius: 3,
}

Style.codeInput = {
  ...Style.input,
  paddingRight: 80,
}

Style.sendCodeButton = {
  position: 'absolute',
  right: 0,
  border: 0,
  outline: 0,
  background: 'transparent',
  color: 'rgb(233, 32, 61)',
}

Style.loginButton = {
  marginTop: 5,
  height: 28,
  border: 0,
  borderRadius: 3,
  color: '#fff',
  background: 'rgb(233, 32, 61)',
}

export default Style