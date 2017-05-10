function Node(elem) {
	this.elem = elem;
	this.next = null;
}

function LinkedList() {
	// 单向链表的头结点，初始化为NULL
	let head = null;
	// 单向链表长度
	let length = 0;
	/**
	 * 添加元素到链表尾部
	 *
	 */
	this.append = (elem) => {
		// 创建新节点
		let node = new Node(elem);
		if (head == null) {
			head = node;
		} else {
			// 头部元素
			let current = head;
			// 循环直到最后一个元素
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	/**
	 * 向单向链表中某个位置插入元素
	 *
	 */
	this.insert = (elem, pos) => {
		// 位置大于等于0且小于等于链表长度才插入
		if (pos >= 0 && pos <= length) {
			// 当前节点
			let current = head;
			// 创建新节点
			let node = new Node(elem);
			if (pos === 0) {
				node.next = current;
				head = node;
			} else {
				// 前一个元素
				let previous = null;
				// 循环直到最后一个元素
				while (pos-- > 0) {
					previous = current;
					current = current.next;
				}
				previous.next = node;
				node.next = current;
			}
			length++;
		}
	};
	/**
	 * 寻找某个元素在单向链表中的位置
	 *
	 */
	this.indexOf = (elem) => {
		// 当前节点
		let current = head;
		// 位置
		let pos = -1;
		// 遍历所有节点
		while (current) {
			pos++;
			if (current.elem === elem) {
				return pos;
			}
			current = current.next;
		}
		return -1;
	};
	/**
	 * 移除给定的元素
	 *
	 */
	this.remove = (elem) => {
		/*// 当前节点
		let current = head;
		// 上一个节点
		let previous = null;
		// 遍历所有节点
		while (current) {
			if (current.elem === elem) {
				if (previous === null) {
					head = current.next;
				} else {
					previous.next = current.next;
				}
				break;
			}
			previous = current;
			current = current.next;
		}*/
		let index = this.indexOf(elem);
		this.removeAt(index);
	};
	/**
	 * 移除单向链表中某个位置的元素
	 *
	 */
	this.removeAt = (pos) => {
		// 位置大于等于0且小于等于链表长度才插入
		if (pos >= 0 && pos <= length) {
			// 当前节点
			let current = head;
			if (pos == 0) {
				head = current.next;
			} else {
				// 上一个节点
				let previous = null;
				while (pos-- > 0) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
		}
	};
	/**
	 * 获取单向链表的头部
	 *
	 */
	this.getHead = () => {
		return head;
	};
	/**
	 * 检查单向链表是否为空，为空则返回true
	 *
	 */
	this.isEmpty = () => {
		return length === 0;
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
	/**
	 * 返回单向链表长度
	 *
	 */
	this.size = () => {
		return length;
	}
}

export default LinkedList;