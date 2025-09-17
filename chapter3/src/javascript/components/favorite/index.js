const starImageSourceMap = {
    thumbUpEmpty : 'src/assets/images/icon_thumbs_up.png',
    thumbUpFull : 'src/assets/images/icon_thumbs_up_filled.png',
    heartEmpty : 'src/assets/images/icon_heart.png',
    heartFull : 'src/assets/images/icon_heart_filled.png'
};

class Favorite{
    constructor() {
        this.thumbUpButton = document.querySelector('.icon-thumb-up');
        this.heartButton = document.querySelector('.icon-heart');
        this.isThumbUp = false;
        this.isHeart = false;

    }
    init(){
        this.thumbUpButton.addEventListener('click', () => this.toggleThumbUp());
        this.heartButton.addEventListener('click', () => this.toggleHeart());
    }

    toggleThumbUp(){
        console.log('toggleThumbUp');
        this.isThumbUp = !this.isThumbUp;
        this.thumbUpButton.src = this.isThumbUp ? starImageSourceMap.thumbUpFull : starImageSourceMap.thumbUpEmpty;
    }
    toggleHeart(){
        this.isHeart = !this.isHeart;
        this.heartButton.src = this.isHeart ? starImageSourceMap.heartFull : starImageSourceMap.heartEmpty;
    }
}

export default Favorite;