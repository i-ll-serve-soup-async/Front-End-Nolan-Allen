import React from 'react';

function Home(props) {
  const routeToMenu = e => {
    e.preventDefault();
    props.history.push('./item-list');
  }

  return (
    <div>
      <button onClick={routeToMenu}>Order Now!</button>
    </div>
  )
}

export default Home;