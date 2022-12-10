function fishBash(n) {
	for (let i = 0; i < n; i++) {
		if (i % 15 === 0) {
			console.log('fish bash')
			continue
		}
		if (i % 5 === 0) {
			console.log('bash')
			continue
		}
		if (i % 3 === 0) {
			console.log('fish')
			continue
		}
		console.log(i)
	}
}

function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function partition(arr, left, right, order) {
	//pivot on end
	let pivot = arr[right]
	let i = left - 1

	while (left < right) {
		if (order === 'asc' && arr[left] < pivot) {
			i++
			swap(arr, i, left)
		}
		if (order === 'desc' && arr[left] > pivot) {
			i++
			swap(arr, i, left)
		}
		left++
	}
	//swap skipped or high value with pivot
	swap(arr, i + 1, right)
	return i + 1
}

function sortArray(arr, start, end, order) {
	if (order !== 'asc' && order !== 'desc') {
		console.error('order must be either asc or desc')
		return
	}

	if (start < end) {
		const p = partition(arr, start, end, order)
		sortArray(arr, start, p - 1, order)
		sortArray(arr, p + 1, end, order)
	}
}

const a = [12, 123, 412, 1, 124, 4]
sortArray(a, 0, a.length - 1, 'asc')
console.log(a)

function isPalindromic(text) {
	// remove white space from text & set to lowercase
	const str = text.replace(/ /g, '').toLowerCase()
	const length = str.length
	let palindromeFlag = true

	let leftIndex = 0
	let rightIndex = 0

	if (length % 2 === 0) {
		leftIndex = length / 2 - 1
		rightIndex = length / 2
	} else {
		leftIndex = Math.floor(length / 2) - 1
		rightIndex = Math.floor(length / 2) + 1
	}

	while (leftIndex >= 0) {
		if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
			palindromeFlag = false
			break
		} else {
			leftIndex--
			rightIndex++
		}
	}

	return palindromeFlag
}

console.log('madam im adam', isPalindromic('madam im adam'))
console.log('Step on no pets', isPalindromic('Step on no pets'))
console.log('aacbbcaaa', isPalindromic('aacbbcaa'))
