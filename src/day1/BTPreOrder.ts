function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (curr === null) return path;
    //pre recursion
    path.push(curr.value);
    // post recursion
    walk(curr.left, path);
    walk(curr.right, path);
    // post recursion
    return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}
