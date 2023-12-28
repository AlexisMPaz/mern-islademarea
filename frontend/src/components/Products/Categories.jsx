
const Categories = ({ selectedCategory, onCategoryClick }) => {
    return (
        <div className="container mb-3">
            <button
                className={`btn link ${!selectedCategory ? 'active' : ''}`}
                onClick={() => onCategoryClick(null)}
            >
                Todos
            </button>
            <button
                className={`btn link ${selectedCategory === 'armas' ? 'active' : ''}`}
                onClick={() => onCategoryClick('armas')}
            >
                Armas
            </button>
            <button
                className={`btn link ${selectedCategory === 'armaduras' ? 'active' : ''}`}
                onClick={() => onCategoryClick('armaduras')}
            >
                Armaduras
            </button>
            <button
                className={`btn link ${selectedCategory === 'accesorios' ? 'active' : ''}`}
                onClick={() => onCategoryClick('accesorios')}
            >
                Accesorios
            </button>
        </div>
    );
};

export default Categories;