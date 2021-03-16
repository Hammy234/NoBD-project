import React, { useState, useEffect } from 'react';
import GameList from './GameList'
import axios from 'axios'
import './app.css'

const url = "https://api.rawg.io/api/games?key=97e9846305f44e45af7de6998a3d016c";


function App() {
  const [games, setGames] = useState([])
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false)
  const [section, setSection] = useState('all');

  useEffect(() => {
      setLoading(true)
      axios.get(url).then(res => {
        setLoading(false)
        setGames(res.data.results)
     })
  }, [])

  const filteredGames = games.filter( game => {
    if(section === "all"){
      return true;
    } else if (section === "wishList") {
      return wishlist.includes( game.id );
    } else {
      return false;
    }
  });
  
  const addToWishlist = (gameId) => {
    if(!wishlist.includes( gameId) ){
      setWishlist([...wishlist, gameId]);
    }
  }
    
  const removeFromWishlist = (gameId) => {
    setWishlist( wishlist.filter( id => id !== gameId))
  }

  if (loading) return "loading..."
    return (
      <>
        <button onClick={() => setSection('all')} >All Games ({games.length})</button>
        <button onClick={() => setSection('wishList')} >Wishlist ({wishlist.length})</button>
        
        <GameList
          wishlist={wishlist}
          games={filteredGames}
          onAddToWishlist={addToWishlist}
          onRemoveFromWishlist={removeFromWishlist} />
      </>
  );
}


export default App;
