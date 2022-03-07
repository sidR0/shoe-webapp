import './CardContainer.css';
import Card from './Card.js';

let cardArray = [];

class CardData {
    constructor(picture, brandName, availableSizes, price, type, subType) {
        this.picture = picture;
        this.brandName = brandName;
        this.availableSizes = availableSizes;
        this.price = price;
        this.type = type;
        this.subType = subType;
    }
}

function giveArrayRange(start, end, except) {
    let array = [];
    if (!except) {
        except = [];
    }
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array.filter((item) => !except.includes(item));
};

cardArray.push(new CardData("shoe1.png", "Balenciaga", giveArrayRange(35, 49, [38]), 770, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe2.png", "Tom Ford", giveArrayRange(35, 49), 965, "Sneakers", "Party Sneaker"));
cardArray.push(new CardData("shoe3.png", "Neil Barrett", giveArrayRange(35, 49), 295, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe4.png", "Emporio Armani", giveArrayRange(35, 49), 110, "Sneakers", "Athletic Sneaker"));
cardArray.push(new CardData("shoe5.jpg", "Reebok", giveArrayRange(35, 49), 270, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe6.jpg", "Puma", giveArrayRange(35, 49), 370, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe7.jpg", "Nike", giveArrayRange(35, 49), 470, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe8.jpg", "Adidas", giveArrayRange(35, 49), 850, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe9.jpg", "Balenciaga", giveArrayRange(35, 49), 100, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe10.jpg", "Tom Ford", giveArrayRange(35, 49), 299, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe11.jpg", "Neil Barrett", giveArrayRange(35, 49), 670, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe12.jpg", "Emporio Armani", giveArrayRange(35, 49), 200, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe13.jpg", "Reebok", giveArrayRange(35, 49), 100, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe14.jpg", "Puma", giveArrayRange(35, 49), 120, "Sneakers", "High Speed Sneaker"));
cardArray.push(new CardData("shoe15.jpg", "Adidas", giveArrayRange(35, 49), 110, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe16.jpg", "Tom Ford", giveArrayRange(35, 49), 950, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe17.jpg", "Emporio Armani", giveArrayRange(35, 879), 770, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe18.jpg", "Reebok", giveArrayRange(35, 49), 980, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe19.jpg", "Adidas", giveArrayRange(35, 49), 100, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe20.jpg", "Emporio Armani", giveArrayRange(35, 49), 70, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe21.jpg", "Nike", giveArrayRange(35, 49), 110, "FlipFlops", "High Speed Sneaker"));
cardArray.push(new CardData("shoe22.jpg", "Tom Ford", giveArrayRange(35, 49), 50, "Formal", "High Speed Sneaker"));
cardArray.push(new CardData("shoe23.jpg", "Tom Ford", giveArrayRange(35, 49), 10, "Formal", "High Speed Sneaker"));
cardArray.push(new CardData("shoe24.jpg", "Balenciaga", giveArrayRange(35, 49), 220, "Formal", "High Speed Sneaker"));
cardArray.push(new CardData("shoe25.jpg", "Woodland", giveArrayRange(35, 49), 400, "Formal", "High Speed Sneaker"));

function CardContainer() {

    function categoryFilter(array, categoryArray) {

        function isInSelectedCategory(cardDataItem) {
            if (categoryArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => isInSelectedCategory(item));
    }

    function sizeFilter(array, selectedSizeArray) {

        function willFitUser(cardDataItem) {
            if (selectedSizeArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => willFitUser(item));
    }

    function priceFilter(array, maxPrice) {

        function isInPriceRange(cardDataItem) {
            if (maxPrice <= cardDataItem.price) {
                return true;
            }
        }

        return array.filter((item) => isInPriceRange(item));
    }

    return (
        <div className="card-container">
            {categoryFilter(cardArray, ["Sneakers", "FlipFlops"]).map((i) =>
                <Card cardData={i} key={i.picture} />
            )}
        </div>
    )
}

export default CardContainer;