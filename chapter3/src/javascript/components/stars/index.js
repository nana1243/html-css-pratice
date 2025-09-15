const starImageSourceMap = {
    empty : 'src/assets/images/icon_empty_star.png',
    half : 'src/assets/images/icon_half_star.png',
    full : 'src/assets/images/icon_star.png'
};


class StarsPoint {
    constructor() {
        this.rating = 0;
        this.ratingsStars = document.querySelector('.rating__stars');
        this.stars = document.querySelectorAll('.star');
        this.starPointResetButton = document.querySelector('.icon-remove-star');
    }
    init(){
        this.stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => this.hover(index));
            star.addEventListener('click', () => this.click(index));
        });

        this.ratingsStars.addEventListener('mouseleave', () => this.reset());
    }

    setRating(rating) {
        this.rating = rating;
    }

    hover(index){
        this.stars.forEach((star, i) => {
            if (i <= index) {
                star.src = starImageSourceMap.full;
            } else {
                star.src = starImageSourceMap.empty;
            }
        });
    }
    reset(){
        console.log('reset');
        console.log('this is', this.rating)
        this.stars.forEach((star,i) => {
            if (i < this.rating) {
                star.src = starImageSourceMap.full;
            } else {
                star.src = starImageSourceMap.empty;
            }
        });
    }
    click(index){
        this.setRating(index + 1);
        this.stars.forEach((star, i) => {
            if (i < this.rating) {
                star.src = starImageSourceMap.full;
            } else {
                star.src = starImageSourceMap.empty;
            }
        });
    }
}




export default StarsPoint;