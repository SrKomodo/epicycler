class Epicycle {
  public get size(): number {
    return this.radius + (this.child ? this.child.size : 0);
  }

  public get depth(): number {
    return 1 + (this.child ? this.child.depth : 0);
  }

  public period: number;
  public radius: number;
  public offset: number;
  public child?: Epicycle;

  constructor(period: number, radius: number, offset: number = 0, child?: Epicycle) {
    this.period = period;
    this.radius = radius;
    this.offset = offset;
    this.child = child;
  }
}

export default Epicycle;
