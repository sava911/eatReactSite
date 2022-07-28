import React from 'react'

function Categories() {
  const [state, setstate] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickLi = (index) => {
    setstate(index)
  }
  return (
    <div className="categories">
      <ul>

        {
          categories.map((value, i) => (
            <li key={i} onClick={() => onClickLi(i)} className={state === i ? 'active' : ''}> {value} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories