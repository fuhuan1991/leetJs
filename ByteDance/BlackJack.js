function f (cards, X) {
    const counter = {
        total: 0,
        safe: 0,
    };
    const hand = cards.map((card) => {
        if (card === 'J' || card === 'Q' || card === 'K') {
            return 10;
        } else if (card === 'A') {
            return 1;
        } else {
            return parseInt(card);
        }
    });
    const deck = {};
    for (let i = 1; i < 10; i++) {
        deck[i] = 4;
    }
    deck[10] = 16;
    hand.forEach(card => {
        deck[card]--;
    });

    takeCard(deck, hand, X, counter, 1);
    console.log(counter)
    return counter.safe / counter.total;
}   

function takeCard (deck, hand, next, counter, possiblities) {
    if (next === 0) {
        const sum = hand.reduce((acc, cur) => acc + cur);
        if (sum <= 21) {
            counter.safe += possiblities;
        }
        counter.total += possiblities;
    } else { 
        for (let v = 1; v <= 10; v++) {
            if (deck[v] > 0) {
                deck[v]--;
                hand.push(parseInt(v));
                takeCard(deck, hand, next-1, counter, possiblities * (deck[v]+1));
                hand.pop();
                deck[v] ++;
            }
        }
    }
}

console.log(f(['K', '8'], 2))