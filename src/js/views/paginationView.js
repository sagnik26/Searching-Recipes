import View from "./view";
import icons from '../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            // console.log(btn);

            if (!btn) return;

            const goTopage = +btn.dataset.goto;
            // console.log(goTopage);

            handler(goTopage);
        });
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);

        // page 1, & there are other pages
        if (curPage === 1 && numPages > 1) {
            return `
            <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>${curPage + 1} </span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button> 
            `;
        } 

        // last page
        if (curPage === numPages && numPages > 1) {
            return `
                <button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span> ${curPage - 1} </span>
                </button>
            `;
        }

        // other page
        if (curPage < numPages) {
            return `
                <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>${curPage + 1} </span>
                    <svg class="search__icon">
                     <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button> 

                <button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span> ${curPage - 1} </span>
                </button>
            `;
        }

        // page 1, & there are no other pages
        return '';
   

    }


} 


export default new PaginationView();



