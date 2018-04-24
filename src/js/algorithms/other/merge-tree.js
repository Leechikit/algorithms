const t1 = {
    val: 1,
    left: {
        val: 3,
        left: {
            val: 5
        }
    },
    right: {
        val: 2
    }
};
const t2 = {
    val: 2,
    left: {
        val: 1,
        right: {
            val: 4
        }
    },
    right: {
        val: 3,
        right: {
            val: 7
        }
    }
};

var mergeTrees = function (t1 = {}, t2 = {}, rs = {}) {
    if (t1.val !== undefined && t2.val !== undefined) {
        rs.val = t1.val + t2.val;
    }
    else {
        rs.val = t1.val || t2.val;
    }

    const left1 = t1.left;
    const right1 = t1.right;
    const left2 = t2.left;
    const right2 = t2.right;

    if (left1 || left2) {
        mergeTrees(left1, left2, rs.left = {});
    }

    if (right1 || right2) {
        mergeTrees(right1, right2, rs.right = {});
    }

    return rs;
};

console.log(mergeTrees(t1, t2));
