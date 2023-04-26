const List = () => {
  const list = [{
    id : 1,
    name : "Rafael",
    idade : 23
  },
  {
    id : 2,
    name : "Pedro",
    idade : 21
  },
  {
    id : 3,
    name : "Maria",
    idade : 26
  },
  {
    id : 4,
    name : "Cleide",
    idade : 19
  }

]
  return (
    <ul>
      {
        list.map((aluno)=> (
          <li key={aluno.id}>
            ID: {aluno.id} | {aluno.name} - {aluno.idade} anos
          </li>
        ))
      }
    </ul>
  )
}

export default List