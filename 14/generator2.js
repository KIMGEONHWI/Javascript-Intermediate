function* fn() {
    let index = 0;
    while (true) {
        yield index++;
    }
}