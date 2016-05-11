function Events(description, money, mood) {
    this.description = description;
    this.money = {
    industry : money[0],
    agriculture: money[1],
    consumerServices: money[2],
    infrastructure : money[3],
    education : money[4],
    tourism : money[5],
    ecology : money[6]
    }
    this.mood = {
    industry : mood[0],
    agriculture: mood[1],
    consumerServices: mood[2],
    infrastructure : mood[3],
    education : mood[4],
    tourism : mood[5],
    ecology : mood[6]
    }

}
var randomEvents = [{
    description: {},
    industry: {},
    agriculture: {},
    consumerServices: {},
    infrastructure: {},
    education: {},
    tourism: {},
    ecology: {}
}];
//ecology sector
randomEvents[0].ecology.REC01 = new Events("Water pollution increases", [0, -0.04, -0.02, 0, 0, -0.04, -0.06], [0, -1, 0, 0, 0, 0, -1]);
randomEvents[0].ecology.REC02 = new Events("Water pollution decreases", [0, 0.04, 0.02, 0, 0, 0.04, 0.06], [0, 1, 0, 0, 0, 0, 1]);
randomEvents[0].ecology.REC03 = new Events("Wildlife poaching rises", [0, 0, 0, 0, -0.04, -0.06, -0.06], [0, 0, 0, 0, -1, -1, -1]);
randomEvents[0].ecology.REC04 = new Events("Wildlife poaching falls", [0, 0, 0, 0, 0.04, 0.06, 0.06], [0, 0, 0, 0, 1, 1, 1]);
randomEvents[0].ecology.REC05 = new Events("Illegal logging rises", [0, 0, 0, 0, -0.04, -0.06, -0.06], [0, 0, 0, 0, -1, -1, -1]);
randomEvents[0].ecology.REC06 = new Events("Illegal logging falls", [0, 0, 0, 0, 0.04, 0.06, 0.06], [0, 0, 0, 0, 1, 1, 1]);
randomEvents[0].ecology.REC07 = new Events("Longer rainy season", [0, 0.04, 0, -0.04, 0, -0.06, 0.06], [0, 1, 0, 0, 0, -1, 1]);
randomEvents[0].ecology.REC08 = new Events("Prolonged flooding", [-0.06, -0.06, 0, -0.06, -0.02, -0.06, 0.02], [0, -1, 0, -1, 0, -1, 0]);
randomEvents[0].ecology.REC09 = new Events("Massive floods", [-0.06, -0.06, -0.06, -0.06, 0, -0.06, -0.06], [-1, -1, -1, -1, 0, -1, -1]);
randomEvents[0].ecology.REC10 = new Events("Heatwave", [-0.04, -0.04, 0, -0.04, 0, 0.04, -0.02], [0, 0, 0, 0, 0, 1, 0]);
randomEvents[0].ecology.REC11 = new Events("Drought", [-0.06, -0.06, -0.02, -0.06, -0.02, -0.02, -0.06], [-1, -1, 0, 0, 0, -1]);
randomEvents[0].ecology.REC12 = new Events("Severe drought", [-0.06, -0.06, -0.06, -0.06, -0.06, -0.02, -0.06], [-1, -1, -1, -1, -1, 0, -1]);
randomEvents[0].ecology.REC13 = new Events("Wildfire", [0, -0.04, 0, -0.04, 0, -0.04, -0.04], [0, 0, 0, 0, 0, -1, -1]);
randomEvents[0].ecology.REC14 = new Events("Massive wildfire", [0, -0.06, 0, -0.06, 0, -0.06, -0.06], [0, -1, 0, -1, 0, -1, -1]);
randomEvents[0].ecology.REC15 = new Events("Earthquake", [-0.06, -0.06, -0.02, -0.06, 0, -0.06, -0.02], [-1, -1, 0, -1, 0, -1, 0]);
randomEvents[0].ecology.REC16 = new Events("Promising medicinal plant discovered", [0, 0, 0, 0, 0.06, 0.06, 0.06], [0, 0, 0, 0, 1, 1, 1]);
randomEvents[0].ecology.REC17 = new Events("Amazing animal species discovered", [0, 0, 0, 0, 0.06, 0.06, 0.06], [0, 0, 0, 0, 1, 1, 1]);
randomEvents[0].ecology.REC18 = new Events("National parks on \"The best in Southeast Asia\" list", [0, 0, 0, 0, 0, 0.02, 0.02], [0, 0, 0, 0, 0, 0, 1]);
randomEvents[0].ecology.REC19 = new Events("National parks on \"The best in Asia\" list", [0, 0, 0, 0, 0, 0.04, 0.04], [0, 0, 0, 0, 0, 1, 1]);
randomEvents[0].ecology.REC20 = new Events("National parks on \"The best in the world\" list", [0, 0, 0, 0, 0.02, 0.06, 0.06], [0, 0, 0, 0, 0, 1, 1]);
randomEvents[0].ecology.REC21 = new Events("Beaches on \"The best in Southeast Asia\" list", [0, 0, 0, 0, 0, 0.02, 0.02], [0, 0, 0, 0, 0, 0, 1]);
randomEvents[0].ecology.REC22 = new Events("Beaches on \"The best in Asia\" list", [0, 0, 0, 0, 0, 0.04, 0.04], [0, 0, 0, 0, 0, 1, 1]);
randomEvents[0].ecology.REC23 = new Events("Beaches on \"The best in the world\" list", [0, 0, 0, 0, 0.02, 0.06, 0.06], [0, 0, 0, 0, 0, 1, 1]);
randomEvents[0].ecology.REC24 = new Events("Record number of visitors in national parks", [0, 0, 0, 0, 0.04, 0.06, -0.04], [0, 0, 0, 0, 1, 1, -1]);
randomEvents[0].ecology.REC25 = new Events("National grant for botanical research", [0, 0, 0, 0, 0.04, 0, 0.04], [0, 0, 0, 0, 1, 0, 1]);
randomEvents[0].ecology.REC26 = new Events("International grant for botanical research", [0, 0, 0, 0, 0.06, 0.02, 0.06], [0, 0, 0, 0, 1, 0, 1]);
randomEvents[0].ecology.REC27 = new Events("National grant for wildlife research", [0, 0, 0, 0, 0.04, 0, 0.04], [0, 0, 0, 0, 1, 0, 1]);
randomEvents[0].ecology.REC28 = new Events("International grant for wildlife research", [0, 0, 0, 0, 0.06, 0.02, 0.06], [0, 0, 0, 0, 1, 0, 1]);
randomEvents[0].ecology.REC29 = new Events("National grant for marine wildlife research", [0, 0, 0, 0, 0.04, 0, 0.04], [0, 0, 0, 0, 1, 0, 1]);
randomEvents[0].ecology.REC30 = new Events("International grant for marine wildlife research", [0, 0, 0, 0, 0.06, 0.02, 0.06], [0, 0, 0, 0, 1, 0, 1]);

