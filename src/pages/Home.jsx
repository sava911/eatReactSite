import React from 'react'
import Categories from '../components/Categories';
import Soft from '../components/Soft';
import PizzaBlok from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
export default function Home() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    fetch('https://62e1a495fa99731d75da6778.mockapi.io/item').then((res) => {
      return res.json()
    }).then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  }, [])

  return (
    <>

      <div className="content__top">
        <Categories />
        <Soft />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {

          isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <PizzaBlok key={obj.id}{...obj} />)


        }


      </div>

    </>
  )
}

