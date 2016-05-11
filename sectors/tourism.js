function Events(description,money,mood) {
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
//tourism sector
randomEvents[0].tourism.RT01 = new Events("Number of active leisure travellers increases", [0, 0, 0.02, 0, 0, 0.04, -0.02],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT02 = new Events("Number of active leisure travellers decreases", [0, 0, -0.02, 0, 0, -0.04, 0.02],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT03 = new Events("Number of business travellers increases", [0.06, 0.04, 0.04, 0.06, 0, 0.04, 0],[1,0,0,1,0,0,0]);
randomEvents[0].tourism.RT04 = new Events("Number of business travellers decreases", [-0.06, -0.06, -0.04, -0.06, 0, -0.04, 0],[-1,0,0,-1,0,0,0]);
randomEvents[0].tourism.RT05 = new Events(" Number of young travellers increases", [0, 0, 0.02, 0, 0.04, 0.04, 0],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT06 = new Events("Number of young travellers decreases", [0, 0, -0.02, 0, -0.02, -0.04, 0],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT07 = new Events("Number of senior travellers increases", [0, 0, 0.06, 0, 0, 0.04, 0],[0,0,1,0,0,0,0]);
randomEvents[0].tourism.RT08 = new Events("Number of senior travellers decreases", [0, 0, -0.06, 0, 0, -0.04, 0],[0,0,-1,0,0,0,0]);
randomEvents[0].tourism.RT09 = new Events("Number of foodie travellers increases", [0, 0, 0.06, 0, 0, 0.04, 0],[0,0,1,0,0,0,0]);
randomEvents[0].tourism.RT10 = new Events("Number of foodie travellers decreases", [0, 0, -0.06, 0, 0, -0.04, 0],[0,0,-1,0,0,0,0]);
randomEvents[0].tourism.RT11 = new Events("Number of tourists travelling with families increases", [0, 0, 0.06, 0, 0.02, 0.04, 0],[0,0,1,0,0,0,0]);
randomEvents[0].tourism.RT12 = new Events("Number of tourists travelling with families decreases", [0, 0, -0.06, 0, -0.02, -0.04, 0],[0,0,-1,0,0,0,0]);
randomEvents[0].tourism.RT13 = new Events("Regional markets rise", [0.04, 0.04, 0.02, 0.02, 0, 0.02, 0],[1,0,0,0,0,1,0]);
randomEvents[0].tourism.RT14 = new Events("Regional markets boom", [0.06, 0.06, 0.04, 0.04, 0, 0.04, 0],[1,1,0,0,0,1,0]);
randomEvents[0].tourism.RT15 = new Events("Regional markets fall", [-0.04, -0.04, -0.02, -0.02, 0, -0.02, 0],[-1,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT16 = new Events("Regional markets crash", [-0.06, -0.06, -0.04, -0.04, 0, -0.04, 0],[-1,-1,0,0,0,-1,0]);
randomEvents[0].tourism.RT17 = new Events("Global markets rise", [0.06, 0.04, 0.04, 0.04, 0.04, 0.04, 0],[1,1,1,0,0,1,0]);
randomEvents[0].tourism.RT18 = new Events("Global markets boom", [0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0],[1,1,1,1,1,1,1]);
randomEvents[0].tourism.RT19 = new Events("Global markets fall", [-0.06, -0.04, -0.04, -0.04, -0.04, -0.04, 0],[-1,-1,-1,0,0,-1,0]);
randomEvents[0].tourism.RT20 = new Events("Global markets crash,-0.06,-0.06,-0.06", [-0.06, -0.06, -0.06, 0],[-1,-1,-1,-1,-1,-1,-1]);
randomEvents[0].tourism.RT21 = new Events("Number of international flights increases", [0, 0, 0.04, 0.02, 0, 0.06, -0.04],[0,0,0,0,0,1,0]);
randomEvents[0].tourism.RT22 = new Events("Number of international flights decreases", [0, 0, -0.04, -0.02, 0, -0.06, 0.04],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT23 = new Events("Local safety warnings", [0, 0, 0, 0, 0, -0.02, 0],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT24 = new Events("Regional safety warnings", [0, 0, 0, 0, 0, -0.04, 0],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT25 = new Events("International safety warnings", [0, 0, 0, 0, 0, -0.06, 0],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT26 = new Events("Local virus outbreak", [0, 0, 0, 0, 0, -0.02, 0],[0,0,0,0,0,0,0]);
randomEvents[0].tourism.RT27 = new Events("Regional virus outbreak", [0, 0, 0, 0, 0, -0.04, 0],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT28 = new Events("International virus outbreak", [0, 0, 0, 0, 0, -0.06, 0],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT29 = new Events("Vulcano eruption affects air travel", [0, 0, 0, 0, 0, -0.04, 0.02],[0,0,0,0,0,-1,0]);
randomEvents[0].tourism.RT30 = new Events("Vulcano eruption disrupts air travel", [0, 0, 0, 0, 0, -0.06, 0.04],[0,0,0,0,0,-1,0]);
