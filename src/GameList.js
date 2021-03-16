import React from 'react'
import { css } from '@emotion/css';

const gamesListCss = css`
    margin:auto;
    display:flex;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`

const gameCss = (image) => css`
    height: 200px;
    width: 150px;
    background-color: black;
    margin:10px;
    padding:10px;
    display:inline-block;
    vertical-align:top;
    color: white;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    text-shadow: 1px 1px rgba(255, 255 ,255, 0.6);
    color: black;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
        width: 100%;
        box-sizing: border-box;
        text-align:center;
        padding: 10px;
        cursor:pointer;
        font-weight: bold;
    }
`
  
export default function GameList({games, wishlist, onAddToWishlist, onRemoveFromWishlist}) {
    return (
        
        <section className={gamesListCss}>
            {games.map(game => {
                const isInWishlist = wishlist.includes(game.id);
                return <article className={gameCss(game.background_image)} key={game.id}>
                    <header>{game.name}</header>
                    {isInWishlist 
                        ? <button onClick={() => onRemoveFromWishlist(game.id)}>Remove From Wishlist</button>
                        : <button onClick={() => onAddToWishlist(game.id)}>Add To Wishlist</button>
                    }
                </article>
            })}
        </section>
    )
}
