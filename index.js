class Formatter {
	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9 '-]/g, '');
	}

	static titleize(string) {
		return this.capitalize(string).split(" ").map((word) => {
			if ((/^(the|a|an|but|of|and|for|at|by|from)$/g).test(word)) {
				return word;
			} else {
				return this.capitalize(word);
			}
		}).join(" ");
	}
}