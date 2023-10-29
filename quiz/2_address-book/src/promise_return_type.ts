function fetchItems() {
    const items = ['a', 'b', 'c'];
    return items;
}
// --==>> 내부에서 설정한 변수를 리턴하는 형식 -> TS 타입추론 가능

function fetchData() {
    const items = ['a', 'b', 'c'];
    return new Promise((resolve) => {
        resolve(items);
    });
}
// --==> 리턴타입 = Promsie<unknown>

function fetchNewItems(): Promise<Array<string>> {
    const items = ['a', 'b', 'c'];
    return new Promise((resolve) => {
        resolve(items);
    });
}