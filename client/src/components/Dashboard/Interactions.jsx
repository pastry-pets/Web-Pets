
import React/*, { useEffect }*/ from 'react';
import axios from 'axios';

const Interactions = ({ pet, refreshPet }) => {

  // useEffect(() => {
  //   axios.get('http://api.weatherapi.com/v1/current.json?key=2f49298f72354517a83162848252912&q=70112')
  //     .then((data) => { console.log(data); })
  //     .catch(err => { console.error(err); });
  // }, []);

  const incrementStats = (statName, amount) => {
    // axios.
    
  };
  
  const checkLogic = ({ target: { value }}) => {
    switch (value) {
      case 'feed':
        incrementStats('hunger', 10);
        break;
      case 'play':
        if (pet.mood > 50) {
          incrementStats('mood', 10);
        }
        break;
      case 'pet':
        incrementStats('mood', 10);
        break;
    }
  }

  return (
    <div>
      <button value='feed' onClick={ checkLogic } >Feed the cat!</button>
      <button value='play' onClick={ checkLogic } >Play with the cat!</button>
      <button value='pet' onClick={ checkLogic } >Pet the cat!</button>
    </div>
  );
};

export default Interactions;
