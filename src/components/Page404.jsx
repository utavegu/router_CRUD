import React from 'react'
import {Link} from 'react-router-dom';

export default function Page404() {
  return (
    <>
      <p>Поздравляю, искатель, ты очутился на секретной странице =)</p>
      <Link className="button" to="/">Вернуться на главную</Link>
    </>
  )
}
