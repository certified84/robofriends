
const Scroll = (props) => {
    console.log(props);
  return (
    <div style={ScrollStyle}>
        {props.children}
    </div>
  );
}

const ScrollStyle = {
    overflowY: 'scroll',
    border: '1px solid black',
    height: '800px',
}

export default Scroll;