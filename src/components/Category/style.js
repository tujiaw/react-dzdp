const Style = {}

Style.root = {
  padding: 10,
  backgroundColor: '#fff',
}

Style.bottom = {
  display: 'flex',
  justifyContent: 'center',
}

Style.circleList = {
  listStyle: 'none',
  margin: 10,
  padding: 0,
}

Style.circle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  float: 'left',
  margin: '0px 5px',
}

Style.selectedCircle = {
  ...Style.circle,
  backgroundColor: 'rgb(233, 32, 61)',
}

Style.unselectedCircle = {
  ...Style.circle,
  backgroundColor: '#ccc',
}

Style.imageList = {
  width: '100%',
  height: 'auto',
  textAlign: 'center',
  margin: 0,
  padding: 0,
}

Style.image = {
  display: 'block',
  listStyle: 'none',
  width: '20%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50px auto',
  backgroundPosition: 'top center',
  textAlign: 'center',
  paddingTop: 50,
  color: '#666',
  fontSize: 14,
  float: 'left',
}

export default Style