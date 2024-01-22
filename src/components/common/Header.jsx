import PropTypes from 'prop-types';
import Logo from '../../assets/icons/store.svg';
import Search from '../../assets/icons/search.svg';
import Cart from '../../assets/icons/cart.svg';

function Header({ categoryNames }) {
  return (
    <header className="w-screen min-h-20 bg-slate-100">
      <div className="py-2 px-6 min-h-14 h-max items-center gap-x-10 gap-y-4 flex flex-col md:flex-row">
        <div className="min-w-fit flex gap-10 items-center">
          <img src={Logo} className="h-10 w-auto"></img>
          <h1 className="text-xl -ml-9">store</h1>
        </div>
        <form className="w-full box-border py-0.5 px-2 flex items-center gap-2 border-black rounded-md border-2">
          <button
            className="h-6 w-6"
            style={{ backgroundImage: `url(${Search})` }}
          ></button>
          <input
            type="text"
            className="w-full px-2 bg-slate-100 outline-none"
            placeholder="Search"
          ></input>
        </form>
        <div className="pb-1 md:pb-0 min-w-fit flex gap-x-10 gap-y-2 flex-wrap justify-center items-center">
          <a className="min-w-fit underline-black">Sign In</a>
          <a className="min-w-fit underline-black">Orders & Returns</a>
          <a className="min-w-fit underline-black">Find a Store</a>
          <a
            style={{ backgroundImage: `url(${Cart})` }}
            className="w-10 h-10 bg-no-repeat bg-center min-w-fit darken bg-slate-100 hover:bg-slate-200 rounded-full"
          ></a>
        </div>
      </div>
      {categoryNames.length > 0 && (
        <div className="px-4 py-2 bg-black flex gap-x-10 gap-y-2 flex-wrap justify-evenly items-center">
          {categoryNames.map((categoryName) => (
            <a
              key={categoryName}
              className="min-w-fit text-white underline-white capitalize"
            >
              {categoryName}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  categoryNames: PropTypes.array,
};

export default Header;