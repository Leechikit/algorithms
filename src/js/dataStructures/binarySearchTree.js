function Node(key) {
	this.key = key;
	// 左子节点
	this.left = null;
	// 右子节点
	this.right = null;
}

function BinarySearchTree() {
	// 根节点
	let root = null;
	/**
	 * 向树中插入一个新节点
	 *
	 */
	this.insert = (key) => {
		// 创建新节点
		let node = new Node(key);
		// 根节点为空则把新节点传入根节点
		if (root == null) {
			root = node;
		} else {
			insertNode(root, node);
		}
		// 递归插入新节点
		function insertNode(node, newNode) {
			// 新节点键值小于父节点键值，插入父节点左边
			if (newNode.key < node.key) {
				//父节点左子节点为空，则新节点插入到父节点左子节点
				if (node.left == null) {
					node.left = newNode;
				} else {
					insertNode(node.left, newNode);
				}
				// 新节点键值大于等于父节点键值，插入父节点右边
			} else {
				//父节点右子节点为空，则新节点插入到父节点右子节点
				if (node.right == null) {
					node.right = newNode;
				} else {
					insertNode(node.right, newNode);
				}
			}
		}
	};
	/**
	 * 通过中序遍历方式，遍历所有节点
	 *
	 */
	this.inOrderTraverse = (callback) => {
		if (typeof callback !== "function") {
			throw new TypeError(callback + ' is not a function')
		}
		inOrderTraverseNode(root);
		// 递归遍历
		function inOrderTraverseNode(node) {
			// 节点不为空
			if (node != null) {
				// 左子节点不为空
				if (node.left != null) {
					inOrderTraverseNode(node.left);
				}
				callback(node.key);
				// 右子节点不为空
				if (node.right != null) {
					inOrderTraverseNode(node.right);
				}
			}
		}
	};
	/**
	 * 通过先序遍历方式，遍历所有节点
	 *
	 */
	this.preOrderTranverse = (callback) => {
		if (typeof callback !== "function") {
			throw new TypeError(callback + ' is not a function')
		}
		preOrderTranverseNode(root);
		// 递归遍历
		function preOrderTranverseNode(node) {
			// 节点不为空
			if (node != null) {
				callback(node.key);
				// 左子节点不为空
				if (node.left != null) {
					preOrderTranverseNode(node.left);
				}
				// 右子节点不为空
				if (node.right != null) {
					preOrderTranverseNode(node.right);
				}
			}
		}
	};
	/**
	 * 通过后序遍历方式，遍历所有节点
	 *
	 */
	this.postOrderTranverse = (callback) => {
		if (typeof callback !== "function") {
			throw new TypeError(callback + ' is not a function')
		}
		postOrderTranverseNode(root);
		// 递归遍历
		function postOrderTranverseNode(node) {
			// 节点不为空
			if (node != null) {
				// 左子节点不为空
				if (node.left != null) {
					postOrderTranverseNode(node.left);
				}
				// 右子节点不为空
				if (node.right != null) {
					postOrderTranverseNode(node.right);
				}
				callback(node.key);
			}
		}
	};
	/**
	 * 返回树中最小的值
	 *
	 */
	this.min = () => {
		// 二叉树特点：最左侧为最小值
		let node = root;
		// 节点不为空且左子节点不为空，则把左子节点赋值给当前节点
		while (node && node.left != null) {
			node = node.left;
		}
		return node && node.key || null;
	};
	/**
	 * 返回树中最大的值
	 *
	 */
	this.max = () => {
		// 二叉树特点：最右侧为最大值
		let node = root;
		// 节点不为空且右子节点不为空，则把右子节点赋值给当前节点
		while (node && node.right != null) {
			node = node.right;
		}
		return node && node.key || null;
	};
	/**
	 * 搜索某个值，在树中则返回true
	 *
	 */
	this.search = (key) => {
		let result = false;
		searchNode(root);
		return result;

		function searchNode(node) {
			// 节点为空
			if (node == null) {
				return;
				// 当前节点键值大于搜索的值，到左子节点继续搜索
			} else if (node.key > key) {
				searchNode(node.left);
				// 当前节点键值小于搜索的值，到右子节点继续搜索
			} else if (node.key < key) {
				searchNode(node.right);
				// 当前节点键值等于搜索的值
			} else {
				result = true;
			}
		}
	};
	/**
	 * 从树中移除某个键
	 *
	 */
	this.remove = (key) => {
		let result = null;
		root = removeNode(root, key);
		return result;

		function removeNode(node, key) {
			// 节点为空
			if (node == null) {
				return;
				// 当前节点键值大于搜索的值，到左子节点继续搜索
			} else if (node.key > key) {
				node.left = removeNode(node.left, key);
				// 当前节点键值小于搜索的值，到右子节点继续搜索
			} else if (node.key < key) {
				node.right = removeNode(node.right, key);
				// 当前节点键值等于搜索的值
			} else {
				// 当前节点为叶子节点
				if (node.left == null && node.right == null) {
					node = null;
					// 左子节点为空
				} else if (node.left == null) {
					node = node.right;
					// 右子节点为空
				} else if (node.right == null) {
					node = node.left;
					// 左右子节点都不为空
				} else {
					// 右子节点最小值
					let minNode = findMinNode(node.right);
					// 当前节点的键值赋值为右子节点的最小值
					node.key = minNode.key;
					// 右子节点删除最小值
					node.right = removeNode(node.right, minNode);
				}
				// 返回删除的节点
				result = node;
			}
			return node;
		}
		// 最小键
		function findMinNode(node) {
			// 节点不为空且左子节点不为空，则把左子节点赋值给当前节点
			while (node && node.left != null) {
				node = node.left;
			}
			return node || null;
		}
	};
	// debug
	this.printRoot = () => {
		console.log(root);
	}
}

export default BinarySearchTree;