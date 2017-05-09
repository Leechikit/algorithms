function Queue() {
	let items = [];
	/**
	 * 向队列尾部添加元素
	 *
	 */
	this.enqueue = (item) => {
		items.push(item);
	};
	/**
	 * 移除队列的第一项
	 *
	 */
	this.dequeue = () => {
		return items.shift();
	};
	/**
	 * 返回队列第一个
	 *
	 */
	this.front = () => {
		return items[0];
	}
}

export default Queue;