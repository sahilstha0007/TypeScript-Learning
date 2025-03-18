var sumation = {
    a: 1,
    b: 2,
    sum: function () {
        return this.a + this.b;
    }
};
var addReport = function (add) {
    console.log(add.sum());
};
addReport(sumation);
