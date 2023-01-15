import { BagState } from "../context/BagContext"

const Navbar = ({ setOrderModal }) => {

  const { state } = BagState()
  console.log(state)
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__left'>
          <div className='navbar__hamburger'>
            <img src='hamburgermenu.svg' />
          </div>
          <div className='navbar__logo'>
            <img src='cavalogo.svg' />
          </div>
          <div className='navbar__links'>
            <div>Menu</div>
            <div>Gifting</div>
            <div>Rewards</div>
            <div>Catering</div>
            <div>Locations</div>
          </div>
      </div>
      <div className='navbar__right'>
        <div className='navbar__signin'>
          <img src='user.svg'></img>
          <div>Sign In</div>
        </div>
        <div className='navbar__bag' onClick={() => setOrderModal(true)}>
          <img src='bag.svg'></img>
          <div>{state.bag.length}</div>
        </div>
        <div className='navbar__order'>Order</div>
      </div>
      </div>
    </div>
  )
}

export default Navbar