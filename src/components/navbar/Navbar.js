import { h } from 'preact'

const Navbar = () => {
  return (
    <nav>
      <div className={'container text-center'} layout={'normal'}>
        <div className={'row'}>
          <div className={'column'}>
            <div className={'logo'}>
              <img src={'https://careers.shopee.co.id/techampionship/static/image/brand/shopee/orange.png'} alt={'logo'} />
            </div>
          </div>
          <div className={'column'}>
            <ul className={'menus'}>
              <li className={'siren'}>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
