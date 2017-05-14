function Node(elem) {
	this.elem = elem;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	// 双向链表的头结点，初始化为NULL
	let head = null;
	//双向链表的尾结点，初始化为NULL
	let tail = null;
	// 双向链表长度
	let length = 0;
	/**
	 * 添加元素到双向链表尾部
	 *
	 */
	this.append = (elem) => {
		// 创建新节点
		let node = new Node(elem);
		// 头部节点为空
		if (head === null) {
			head = node;
		} else {
			// 当前节点
			let current = head;
			// 循环直到最后一个节点
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			node.prev = current;
		}
		tail = node;
		length++;
	};
	/**
	 * 向双向链表中某个位置插入元素
	 *
	 */
	this.insert = (elem, pos) => {
		if (pos >= 0 && pos <= length) {
			// 创建新节点
			let node = new Node(elem);
			// 当前节点
			let current = head;
			// 插入第一个
			if (pos === 0) {
				if (head === null) {
					head = node;
					tail = node;
				} else {
					current.prev = node;
					node.next = current;
					head = node;
				}
				// 插入最后一个
			} else if (pos === length) {
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			} else {
				// 前一个元节点
				let previous = null;
				while (pos-- > 0) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.prev = previous;
				node.next = current;
				current.prev = node;
			}
			length++;
		}
	};
	/**
	 * 移除双向链表中某个位置的元素
	 *
	 */
	this.removeAt = (pos) => {
		if (pos >= 0 && pos < length) {
			// 当前节点
			let current = head;
			// 移除第一个节点
			if (pos === 0) {
				head = current.next;
				// 若只有一个节点
				if (length == 1) {
					tail = null;
				}
				// 移除最后一个节点
			} else if (pos === length - 1) {
				current = tail;
				tail = current.prev;
				tail.next = null;
			} else {
				// 前一个元节点
				let previous = null;
				while (pos-- > 0) {
					previous = current.prev;
					current = current.next;
				}
				previous.next = current;
				current.prev = previous;
			}
		}
		length--;
	};
	/**
	 * 获取双向链表的头部
	 *
	 */
	this.showHead = () => {
		return head;
	};
	/**
	 * 获取双向链表长度
	 *
	 */
	this.showLength = () => {
		return length;
	};
	/**
	 * 获取双向链表尾部
	 *
	 */
	this.showTail = () => {
		return tail;
	};
	/**
	 * 将链表所有内容以字符串输出
	 *
	 */
	this.toString = () => {
		let arr = [];
		// 当前节点
		let current = head;
		// 遍历所有节点
		while (current) {
			arr.push(current.elem);
			current = current.next;
		}
		console.log(arr.toString());
	};
}

export default DoublyLinkedList;