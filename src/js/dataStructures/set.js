function Set() {
	let items = {};

	/**
	 * 检测集合内是否有某个元素
	 *
	 */
	this.has = (value) => {
		return items.hasOwnProperty(value);
	}

	/**
	 * 给集合内添加某个元素
	 *
	 */
	this.add = (value) => {
		let result = false;
		// 集合中不存在则添加
		if (!items.hasOwnProperty(value)) {
			items[value] = value;
			result = true;
		}
		return result;
	}

	/**
	 * 移除集合中某个元素
	 *
	 */
	this.remove = (value) => {
		let result = false;
		// 集合中存在则移除
		if (items.hasOwnProperty(value)) {
			delete items[value];
			result = true;
		}
		return result;
	}

	/**
	 * 清空集合
	 *
	 */
	this.clear = () => {
		items = {};
	}

	/**
	 * 返回集合长度
	 *
	 */
	this.size = () => {
		//return Object.keys(items).length;
		let count = 0;
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				count++;
			}
		}
		return count;
	}

	/**
	 * 返回集合转换的数组
	 *
	 */
	this.values = () => {
		// return Object.keys(items);
		let result = [];
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				result.push(key);
			}
		}
		return result;
	}

	/**
	 * 返回两个集合的并集
	 *
	 */
	this.union = (otherSet) => {
		let set = new Set();
		let values = this.values();
		let otherValues = otherSet.values();
		for (let i = 0, len = values.length; i < len; i++) {
			set.add(values[i]);
		}
		for (let i = 0, len = otherValues.length; i < len; i++) {
			set.add(otherValues[i]);
		}
		return set;
	}

	/**
	 * 返回两个集合的交集
	 *
	 */
	this.intersection = (otherSet) => {
		let set = new Set();
		let values = this.values();
		for (let i = 0, len = values.length; i < len; i++) {
			if (otherSet.has(values[i])) {
				set.add(values[i]);
			}
		}
		return set;
	}

	/**
	 * 返回两个集合的差集
	 *
	 */
	this.difference = (otherSet) => {
		let set = new Set();
		let values = this.values();
		let otherValues = otherSet.values();
		for (let i = 0, len = values.length; i < len; i++) {
			if (!otherSet.has(values[i])) {
				set.add(values[i]);
			}
		}
		for (let i = 0, len = otherValues.length; i < len; i++) {
			if (!this.has(otherValues[i])) {
				set.add(otherValues[i]);
			}
		}
		return set;
	}

	/**
	 * 判断该集合是否为传入集合的子集
	 *
	 */
	this.subset = (otherSet) => {
		let result = true;
		if (this.size() > otherSet.size()) {
			result = false;
		} else {
			let values = this.values();
			for (let i = 0, len = values.length; i < len; i++) {
				if (!otherSet.has(values[i])) {
					result = false;
					break;
				}
			}
		}
		return result;
	}
}

export default Set;