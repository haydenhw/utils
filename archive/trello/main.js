var Trello = require("trello");

const backlog = [
    'Control Air',
    'Control Heater',
    'Control Lamp',
    'Display sensor values',
    'Load Water / Extract Broth',
    'Set Load / Extract speed',
    'Improve Config',
    'Graph temp history',
    'Graph OD history',
    'Create, Update, Delete Reactions',
    'Add / Edit notes',
    'Add / Edit Media Desciption',
    'Style Login Screen', 
    'Style Control Screen',
    'Style Dashboard Screen',
    'Adjust read interval',
];

const key = 'e9b2d835569a0526dabb0a50b6dc3a3f';
const token = 'cbaef0502d843503f939ce69da436c53b4986748cea8c1f3d7d91113ad6ab7d2';
const trello = new Trello(key, token);

const lqBoardId = 'bS7dsRBI';
const backlogId = '5c7861e95c88bf401377b976';

const getLists = () => {
    trello.getListsOnBoard(lqBoardId, (err, result) => {
        console.log(result);
    });
}

const getCards = (listId) => {
    trello.getCardsOnList(listId, (err, result) => {
        console.log(result);
    });
}


const clearList = (listId) => {
    trello.getCardsOnList(listId, (err, cards) => {
        cards.forEach(card =>  {
            trello.deleteCard(card.id);
        });
    });
}

const addCard = (title) => {
    trello.addCard(title, null, backlogId,
        function (error, trelloCard) {
            if (error) {
                console.log('Could not add card:', error);
            }
            else {
                setTimeout(() => (console.log('hello'), 1000))
            }
        });
}

const addCardsFromList = (cards) => {
    cards.forEach(async (card) => {
        await addCard(card);
    });
}

getCards(backlogId);
// addCardsFromList(backlog);
// clearList(backlogId);