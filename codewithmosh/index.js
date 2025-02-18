const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}

function s(...args) {
    return args.reduce((a, b) => {
        if (Array.isArray(b)) {
            b = b.reduce((c, d) => {
                return c+d
            })
        }
        return a+b
    });
}
console.log(s(1,2,[3, 45],4,[5,65,2]))