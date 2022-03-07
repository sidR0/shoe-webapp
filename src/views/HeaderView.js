import './HeaderView.css';
import BrandView from './BrandView';
import SearchView from './SearchView';

function HeaderView() {
  return (
    <div className="header-view">
      <BrandView></BrandView>
      <SearchView></SearchView>
    </div>
  );
}

export default HeaderView;