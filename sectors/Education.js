function Events(description, money, mood) {
    this.description = description;
    this.money = {
        industry: money[0],
        agriculture: money[1],
        consumerServices: money[2],
        infrastructure: money[3],
        education: money[4],
        tourism: money[5],
        ecology: money[6]
    }
    this.mood = {
        industry: mood[0],
        agriculture: mood[1],
        consumerServices: mood[2],
        infrastructure: mood[3],
        education: mood[4],
        tourism: mood[5],
        ecology: mood[6]
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
randomEvents[0].eudcation.RED01("Local goverment supports primary schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED02("Goverment supports primary schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED03("International grant for primary schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED04("Primary schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED05("Primary school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED06("Primary schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED07("Local goverment supports middle schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED08("Goverment supports middle schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED09("International grant for middle schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED10("Middle schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED11("Middle school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED12("Middle schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED13("Local goverment supports secondary schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED14("Goverment supports secondary schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED15("International grant for secondary schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED16("Secondary schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED17("Secondary school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED18("Secondary schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED19("Local goverment supports vocational schools " [0.02, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED20("Goverment supports vocational schools " [0.04, 0, 0, 0, 0.04, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED21("International grant for vocational schools " [0.06, 0, 0, 0, 0.06, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED22("Vocational schools overcrowded " [-0.02, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED23("Vocational school teachers on strike " [-0.04, 0, 0, 0, -0.04, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED24("Vocational schools understaffed " [-0.06, 0, 0, 0, -0.06, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED25("Goverment supports universities " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED26("International grant for universities " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED27("Univerities overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED28("Universities staff on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED29("Universities understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED30("Business supports technical education " [0.06, 0.04, 0, 0.06, 0.06, 0, 0], [1, 0, 0, 1, 1, 0, 0]);
