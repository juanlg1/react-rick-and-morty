import NavigationLink from './NavigationLink'

const Navbar = () => {

  const pages = ['character']
  return (
    <header className='bg-slate-700 py-2 px-10 text-white flex justify-between items-center'>
      <div>
        Rick y morty
      </div>
      <ul className='flex gap-4'>
        {pages.map((page) => {
          return (
            <NavigationLink
              key={page}
              to={page}
              text={page}
            />
          )
        })}
      </ul>
    </header>
  )
}

export default Navbar
