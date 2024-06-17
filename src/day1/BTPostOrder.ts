function step(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) return path;
    step(curr.left, path);
    step(curr.right, path);
    path.push(curr.value);
    return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return step(head, path);
}
