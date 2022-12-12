const chai = window.chai
const expect = chai.expect

describe('fishBash', () => {
	it('should log fish bash', () => {
		fishBash(20)
	})
})

describe('sortArray', () => {
	it('should sort ascending', () => {
		const array = [42, 12, 56, 76, 2, 7, 1]
		sortArray(array, 0, array.length - 1, 'asc')
		expect(array).to.deep.equal([1, 2, 7, 12, 42, 56, 76])
	})
	it('should sort descending', () => {
		const array = [42, 12, 56, 76, 2, 7, 1]
		sortArray(array, 0, array.length - 1, 'desc')
		expect(array).to.deep.equal([76, 56, 42, 12, 7, 2, 1])
	})
})

describe('isPalindromic', () => {
	it('should check if palindromic', () => {
		const str0 = 'aaccbbccaa'
		const str1 = 'madam im adam'
		const str2 = 'Step on no pets'
		const str3 = 'abcdefghij'

		expect(isPalindromic(str0)).to.be.equal(true)
		expect(isPalindromic(str1)).to.be.equal(true)
		expect(isPalindromic(str2)).to.be.equal(true)
		expect(isPalindromic(str3)).to.be.equal(false)
	})
})
