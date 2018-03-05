class Epicycle {
  public get size(): number {
    return this.radius * 2 + (this.child ? this.child.size : 0);
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

  public draw(t: number, x: number, y: number, ctx: CanvasRenderingContext2D, pathCtx: CanvasRenderingContext2D) {
    const tx = this.radius * Math.cos(t * this.period + this.offset) + x;
    const ty = this.radius * Math.sin(t * this.period + this.offset) + y;

    ctx.moveTo(x + this.radius, y);
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);

    ctx.moveTo(x, y);
    ctx.lineTo(tx, ty);

    if (this.child) {
      this.child.draw(t, tx, ty, ctx, pathCtx);
    } else {
      pathCtx.lineTo(tx, ty);
    }
  }
}

export default Epicycle;
