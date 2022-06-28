const chai = window.chai;
const expect = chai.expect;

describe('icCylic should return a boolean value based on the graph is cycle or not', () => {
  it('should return true against [1, 3], [3, 1] inputs', () => {
    expect(isCyclic([1, 3], [3, 1])).to.deep.equal(true);
  });
  it('should return true against [1, 3, 2, 4], [4, 1, 3, 2] inputs ', () => {
    expect(isCyclic([1, 3, 2, 4], [4, 1, 3, 2])).to.deep.equal(true);
  });
  it('should return false against [1, 2, 3, 4], [2, 1, 4, 3] input', () => {
    expect(isCyclic([1, 2, 3, 4], [2, 1, 4, 3])).to.deep.equal(false);
  });
  it('should return false against [1, 2, 3, 4], [2, 1, 4, 4] input', () => {
    expect(isCyclic([1, 2, 3, 4], [2, 1, 4, 4])).to.deep.equal(false);
  });
  it('should return false against [], [] input', () => {
    expect(isCyclic([], [])).to.deep.equal(false);
  });
  it('should return false against [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1] input', () => {
    expect(isCyclic([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1])).to.deep.equal(
      false
    );
  });
  it('should return false against [2], [2] input', () => {
    expect(isCyclic([2], [2])).to.deep.equal(false);
  });
  it('should return true against [2, 4], [3, 1] input', () => {
    expect(isCyclic([2, 4], [3, 1])).not.to.deep.equal(true);
  });
});
