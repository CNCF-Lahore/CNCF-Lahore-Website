module.exports = {
	extends: ['next/core-web-vitals', 'prettier'],
	// no unused imports, variables, etc
	rules: {
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-computed-key': 'error'
	}
}
