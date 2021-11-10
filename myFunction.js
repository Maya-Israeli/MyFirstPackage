const _ = require('lodash');

function cloneAndFreeze(obj){
    let obj2 = _.cloneDeep(obj);
    Object.freeze(obj2);
    return obj2;
}
module.exports = {cloneAndFreeze};