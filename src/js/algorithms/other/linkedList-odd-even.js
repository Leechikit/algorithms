function linkedListOddEvent(linkedList) {
    let head = linkedList.getHead();
    let point = head;
    let last = head;
    let lastIndex = 0;
    let index = 0;
    while (last.next) {
        last = last.next;
        lastIndex++;
    }
    while (index <= lastIndex && point.next) {
        // linkedList.toString();
        // 偶数
        if (index % 2 == 0) {

            // 奇数
        } else {
            const nextNode = point.next;
            point.next = nextNode.next;
            nextNode.next = null;
            last.next = nextNode;
            last = nextNode;
            linkedList.toString();

        }
        index++;
    }
    function change(node1, node2) {

    }
}

module.exports = linkedListOddEvent;