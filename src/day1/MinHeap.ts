export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }
    private heapifyUp(idx: number): void {
        if (idx === 0) return;
        const parent = this.parent(idx);
        if (this.data[idx] < this.data[parent]) {
            [this.data[idx], this.data[parent]] = [
                this.data[parent],
                this.data[idx],
            ];
            this.heapifyUp(parent);
        }
    }
    private heapifyDown(idx: number): void {
        const lIdx = this.left(idx);
        const rIdx = this.right(idx);
        if (idx >= this.length || lIdx >= this.length) {
            return;
        }
        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];
        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private left(idx: number): number {
        return 2 * idx + 1;
    }
    private right(idx: number): number {
        return 2 * idx + 2;
    }
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            throw new Error("Heap is empty");
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }
}
