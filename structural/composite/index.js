class Node {
    name = '';
    childNodes = null;

    constructor(name) {
        this.name = name;
        this.childNodes = [];
    }

    add(node) {
        this.childNodes.push(node);
    }

    getName() {
        return this.name;
    }

    getChildNodes() {
        return this.childNodes;
    }
}

const root = new Node('World');

const croatia = new Node('Croatia');
const germany = new Node('Germany');
const usa = new Node('USA');
root.add(croatia);
root.add(germany);
root.add(usa);

const zagreb = new Node('Zagreb');
const varazdin = new Node('Varazdin');
const split = new Node('split');
const zadar = new Node('Zadar');
croatia.add(zagreb);
croatia.add(varazdin);
croatia.add(split);
croatia.add(zadar);

const munich = new Node('Munich');
const berlin = new Node('Berlin');
const frankfurt = new Node('Frankfurt');
germany.add(munich);
germany.add(berlin);
germany.add(frankfurt);

const newYork = new Node('New York');
const washington = new Node('Washington');
const dallas = new Node('Dallas');
const losAngeles = new Node('Los Angeles');
usa.add(newYork);
usa.add(washington);
usa.add(dallas);
usa.add(losAngeles);

console.log(root.getChildNodes());
