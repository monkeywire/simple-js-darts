if(!Array.prototype.last) {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
}

if(!Array.prototype.prev) {
    Array.prototype.prev = function() {
        return this[this.length - 2];
    }
}
