function Stack() {
	let items = [];
	/**
	 * 添加元素到栈顶
	 *
	 */
	this.push = (item) => {
		items.push(item);
	};
	/**
	 * 移除并返回栈顶元素
	 *
	 */
	this.pop = () => {
		return items.pop();
	};
	/**
	 * 返回栈顶元素
	 *
	 */
	this.peek = () => {
		return items[items.length - 1];
	};
	/**
	 * 检查栈是否为空
	 *
	 */
	this.isEmpty = () => {
		return items.length === 0;
	};
	/**
	 * 移除栈中所有元素
	 *
	 */
	this.clear = () => {
		items = [];
	};
	/**
	 * 返回栈中元素个数
	 *
	 */
	this.size = () => {
		return items.length;
	};
	/**
	 * 以字符串显示栈中所有内容
	 *
	 */
	this.print = () => {
		console.log(items.toString());
	};
}

export default Stack;