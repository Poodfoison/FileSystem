// GCF.js

const GCF = (a, b) => {
	if (b % a == 0){
		return b;
	}
	else{
		return (b, b%a);
	}
};
exports.GCF = GCF;
